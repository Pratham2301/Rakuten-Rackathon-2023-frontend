import { useState } from 'react'
import '../Fashion/Styles.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import DisplayCard from '../Fashion/DisplayCards';
import axios from 'axios';

import React from 'react'

export default function MerchLanding() {
    const ques = [
        "Do you have any <b>preferences</b> regarding the style of artwork? (Realistic, abstract, minimalist, etc.)",
        "Are there any <b>particular design elements or symbols</b> you'd like to include in the T-shirt designs?",
        "Thank You!!!, Redirecting......",
    ]

    const [ans, setAns] = useState([])

    // const totalQues = ques.length;

    const [count, SetCount] = useState(0);

    const [messages, setMessages] = useState([
        {
            message: "Welcome to <b>Rakuten!!</b></br></br><b>I am Finoa your POD Assistant</b></br>What is the <b>overall theme or concept</b> you envision for these T-shirt designs? <br/>Options <br/>1. beauty and tranquility of nature<br/>2. classic video games<br/>3. shapes colors and patterns<br/>4. typography <br/>5.animal kingdom<br/>",
            sentTime: "just now",
            sender: "ChatGPT"
        }
    ]);


    const [isTyping, setIsTyping] = useState(false);

    const [imgageLinks, setImageLinks] = useState([
    ]);

    // const [imgageLinks, setImageLinks] = useState([
    //   'https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png',
    //   'https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png',
    //   'https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png',
    // ]);


    const callAPI = async () => {
        const optn = {
            "1": "Create a collection of T-shirt designs that capture the beauty and tranquility of nature. Incorporate elements like lush forests, serene lakes, or majestic mountains into your designs. The goal is to evoke a sense of peace and connection with the natural world.",
            "2": "Generate image of T-shirt with graphics that pay homage to classic video games from the '80s and '90s. Think pixel art, iconic characters, and nostalgic gaming references. The aim is to bring back the golden era of gaming.",
            "3": "Produce abstract and avant-garde T-shirt with designs that play with shapes, colors, and patterns. These designs should be open to interpretation and ignite viewers' imagination.",
            "4": "Design minimalist T-shirts with powerful and thought-provoking typography. Use elegant fonts and short, impactful phrases or quotes to convey messages of inspiration, motivation, or introspection",
            "5": "Create a series of T-shirt with designs inspired by the diverse animal kingdom. From majestic lions to playful dolphins, highlight the beauty and uniqueness of different species. These designs should appeal to animal lovers."
        }

        const queArr = [
            "theme",
            "preferences",
            "design elements",
        ]
        var obj = {};
        for (var i = 0; i < 1; i++) {
            if(i === 0)
                obj[queArr[i]] = optn[ans[i]];
            else
                obj[queArr[i]] = ans[i];
        }

        var final_prompt = obj[queArr[0]] + "with prefrence as" + ans[1] + "with design elements like" + ans[2];

        

        console.log(obj);


        axios.post('http://localhost:8000/q2', {
            prompt: final_prompt
        })
            .then(function (response) {
                console.log(response);
                console.log(response.data)
                setImageLinks(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });


    };

    const handleSend = async (message) => {
        setIsTyping(true);

        const newMessage = {
            message,
            direction: 'outgoing',
            sender: "user"
        };

        const botMessage = {
            message: ques[count],
            sender: "ChatGPT"
        }

        await SetCount(count + 1);


        const newMessages = [...messages, newMessage, botMessage];
        setMessages(newMessages);


        const newAnswer = [...ans, message];
        setAns(newAnswer);


        // console.log(count, ques.length);

        if (count >= ques.length - 1) {
            callAPI();
        }

        setIsTyping(false);
    };

    if (imgageLinks.length > 0) {
        return (
            <DisplayCard imageLinks={imgageLinks} />
        )
    }
    else {
        return (
            <div className="App">
                <div style={{ position: "relative", height: "90vh", width: "50vw" }}>
                    <MainContainer>
                        <ChatContainer style={{ padding: "2rem" }}>
                            <MessageList
                                scrollBehavior="smooth"
                                typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
                            >
                                {messages.map((message, i) => {
                                    // console.log(message)
                                    return <Message key={i} model={message} />
                                })}
                            </MessageList>
                            <MessageInput placeholder="Type message here" onSend={handleSend} />
                        </ChatContainer>
                    </MainContainer>
                </div>
            </div>
        );
    }
}

