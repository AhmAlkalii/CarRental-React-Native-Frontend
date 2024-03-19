import { OPENAI_API_KEY_ENDPOINT, OPENAI_API_URL } from "./environment";

const isValidJson = (text) => {
    try {
        JSON.parse(text);
        return true;
    } catch (error) {
        return false;
    }
};

export const generateAIDialog = async (userInput) => {
    try {
        const openaiApiKeyResponse = await fetch(OPENAI_API_KEY_ENDPOINT);
        const openaiApiKeyResult = await openaiApiKeyResponse.json();
        const openaiApiKey = openaiApiKeyResult.openaiApiKey;

        // Make request to OpenAI API
        const response = await fetch(OPENAI_API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${openaiApiKey}`,
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: userInput }],
                max_tokens: 2000,
                stream: true,
            }),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseBody = await response.text();

        // Split the response into chunks based on the 'data:' separator
        const chunks = responseBody.split('\ndata: ');

        let aiResponse = '';

        chunks.forEach(chunk => {
            if (chunk.trim() !== '' && isValidJson(chunk.trim())) {
                try {
                    const parsedChunk = JSON.parse(chunk.trim());

                    if (parsedChunk.choices && parsedChunk.choices.length > 0) {
                        const { delta } = parsedChunk.choices[0];
                        const { content } = delta;

                        if (content) {
                            aiResponse += content + ' ';
                        }
                    }
                } catch (error) {
                    console.error('Error parsing JSON:', error);
                }
            }
        });

        return aiResponse.trim();
    } catch (error) {
        console.error('Error generating AI response:', error);
        throw error;
    }
};
