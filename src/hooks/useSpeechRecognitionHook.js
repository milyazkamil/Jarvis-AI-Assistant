import { useState, useEffect } from 'react';
import { useGlobalContext } from '../components/Context';

let recognition = null
if ('webkitSpeechRecognition' in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = true;
  recognition.lang = 'en-US';
}

const useSpeechRecognition = () => {
  const [textFromUser, setTextFromUser] = useState('');
  const [gptText, setGptText] = useState('');
  const [isListening, setIsListening] = useState(false);
  const { selectedVoice, setSelectedVoice, toggleDarkMode, setIsDark } =
    useGlobalContext();

  useEffect(() => {
    if (!recognition) return;

    recognition.onresult = function (event) {
      setTextFromUser(event.results[0][0].transcript);
      recognition.stop();
      setIsListening(false);
    }
  }, []);

  useEffect(() => {
    const speech = new SpeechSynthesisUtterance();
    speech.volume = 1;
    speech.rate = 0.9;
    speech.pitch = 1;
    speech.voice = window.speechSynthesis.getVoices()[selectedVoice];

    if (textFromUser.includes('hi') || textFromUser.includes('hello')) {
      speech.text = "Hi Milyaz! I'm here and ready to help.";
    }

    if (textFromUser.includes('dark mode')) {
      setIsDark(false);
      speech.text = 'Dark mode activated, sir! Anything else?';;
    }

    if (textFromUser.includes('white mode')) {
      setIsDark(true);
      speech.text = 'White mode activated, sir! Anything else?';
    }
    
    if (textFromUser.includes('switch mode')) {
      toggleDarkMode();
      speech.text = 'Execute, sir! Mode changed, Anything else?';
    }

    if (
      textFromUser.includes('hey Jarvis') ||
      textFromUser.includes('hi Jarvis') ||
      textFromUser.includes('Jarvis')
    ) {
      speech.text = "Yes sir! I'm here and ready to help you";
    }

    if (textFromUser.includes('change the voice')) {
      speech.voice = window.speechSynthesis.getVoices()[4];
      setSelectedVoice(4);
      console.log(selectedVoice);
      speech.text = 'Voice is changed sir! Do you want something else ?';
    }

    if (textFromUser.includes('can you introduce yourself')) {
      speech.text =
        "Of course! I am Jarvis AI Assistant, your intelligent companion. The developer behind this powerful application is Milyaz. Powered by OpenAI, Jarvis brings you a cutting-edge experience in virtual assistance. With Jarvis, you have the flexibility to personalize your interaction – change voices, switch modes, and ask about anything you need. I'm so excited to talk with you and assist in making your daily tasks seamless and efficient.";
    }

    if (textFromUser.includes('open LinkedIn')) {
      window.open('https://www.linkedin.com/in/milyazkamil');
      speech.text = 'LinkedIn is opening sir!';
    }

    if (textFromUser.includes('open Instagram')) {
      window.open('https://www.instagram.com/milyazkamil');
      speech.text = 'Instagram is opening sir!';
    }
    window.speechSynthesis.speak(speech);
  }, [textFromUser]);

  const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
  async function fetchData() {
    if (
      textFromUser &&
      textFromUser !== 'hi' &&
      textFromUser !== 'hello' &&
      textFromUser !== 'dark mode' &&
      textFromUser !== 'white mode' &&
      textFromUser !== 'switch mode' &&
      textFromUser !== 'Jarvis' &&
      textFromUser !== 'hi Jarvis' &&
      textFromUser !== 'hey Jarvis' &&
      textFromUser !== 'open LinkedIn' &&
      textFromUser !== 'open Instagram' &&
      textFromUser !== 'can you introduce yourself' &&
      textFromUser !== 'change the voice'
    ) {
      try {
        const response = await fetch(
          'https://api.openai.com/v1/chat/completions',
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              model: 'gpt-3.5-turbo',
              messages: [
                {
                  role: 'user',
                  content: `${textFromUser}`,
                },
              ],
            }),
          }
        )
        const data = await response.json();
        setGptText(data.choices[0].message.content);
      } catch (error) {
        console.log(error);
      }
    }
  }

  useEffect(() => {
    fetchData();
  }, [isListening]);

  useEffect(() => {
    const speech = new SpeechSynthesisUtterance();
    speech.text = gptText;
    speech.volume = 1;
    speech.rate = 0.9;
    speech.pitch = 1;
    speech.voice = window.speechSynthesis.getVoices()[selectedVoice];
    window.speechSynthesis.speak(speech);
  }, [gptText]);

  const startListening = () => {
    setTextFromUser('');
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  return {
    isListening,
    startListening,
    stopListening,
  }
}
export default useSpeechRecognition;