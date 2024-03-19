import { OPENAI_API_KEY_ENDPOINT } from "./environment";

export const getOpenaiApiKey = async () => {
    try {
        const response = await fetch(OPENAI_API_KEY_ENDPOINT);
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const result = await response.json();
        
        return result.openaiApiKey;
    } catch (error) {
        console.error('Error fetching OpenAI API key:', error);
        throw error;
    }
};
