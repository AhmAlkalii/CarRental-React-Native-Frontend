import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, TextInput, TouchableOpacity, Text, Keyboard, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { supportStyles } from '../components/styles/globalStyles';
import { getOpenaiApiKey } from '../Servicefiles/keychecker';
import { generateAIDialog } from '../Servicefiles/OpenAIService';

const Message = ({ text, isUser }) => {
    return (
        <View style={isUser ? supportStyles.userMessage : supportStyles.aiMessage}>
            <Text style={supportStyles.messageText}>{text}</Text>
        </View>
    );
};

const CustomerSupport = () => {
    const [inputText, setInputText] = useState('');
    const [chatHistory, setChatHistory] = useState([]);
    const [openaiApiKey, setOpenaiApiKey] = useState('');

    useEffect(() => {
        const fetchOpenaiApiKey = async () => {
            try {
                const apiKey = await getOpenaiApiKey();
                setOpenaiApiKey(apiKey);
            } catch (error) {
                console.error('Error fetching OpenAI API key:', error);
            }
        };

        fetchOpenaiApiKey();
    }, []);

    const handleSend = async () => {
      if (inputText.trim() !== '') {
          try {
              const aiResponse = await generateAIDialog(inputText, openaiApiKey);
              setChatHistory(prevHistory => [
                  ...prevHistory,
                  { text: inputText, isUser: true },
                  { text: aiResponse, isUser: false },
              ]);
              setInputText('');
              Keyboard.dismiss();
          } catch (error) {
              console.error('Error sending message to AI:', error);
          }
      }
  };


  return (
    <SafeAreaView style={supportStyles.safecontainer2}>
      <ScrollView
        contentContainerStyle={supportStyles.chatContainer}
        ref={(ref) => {
          // Scroll to the end of the ScrollView when a new message is added
          ref?.scrollToEnd({ animated: true });
        }}
      >
        {chatHistory.map((message, index) => (
          <Message key={index} text={message.text} isUser={message.isUser} />
        ))}
      </ScrollView>
      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={supportStyles.inputContainer}
        keyboardVerticalOffset={20}
      >
        <View style={supportStyles.textcont}>
          <TextInput
            style={supportStyles.inputField}
            placeholder="Type your problem..."
            value={inputText}
            onChangeText={(text) => setInputText(text)}
            multiline
          />
        </View>
        <TouchableOpacity style={supportStyles.sendButton} onPress={handleSend}>
          <Text style={supportStyles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default CustomerSupport;
