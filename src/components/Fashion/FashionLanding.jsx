import { useState } from 'react'
import './Styles.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import DisplayCard from './DisplayCards';
import axios from 'axios';

import React from 'react'

export default function FashionLanding() {
    const ques = [
        "What is the occasion for which you need an outfit (casual, formal, party, etc)? This will help gauge the overall tone.",
        "What is your <b>personal style</b> - classic, trendy, minimalist, etc? This will give a sense of your aesthetic.",
        "Do you have any <b>favorite colors or styles</b> that you prefer wearing? Knowing color and silhouette preferences helps narrow options.",
        "Do you have any <b>specifications for fabrics</b> like avoiding silk, preferring natural fabrics? Fabric choice makes a difference in comfort.",
        "Do you need any <b>specific type of outfit</b> like a suit, dress, coords? This indicates whether you need a specific ensemble.",
        "What is your <b>budget range</b> for this outfit? Budget helps manage cost expectations.",
        "Will you need <b>matching accessories</b>? This determines if complementary items need consideration.",
        "Do you prefer loose-fitting clothes, a tailored fit, or something in between?",
        "Are you comfortable with wearing patterns and prints? If so, are there any particular patterns you like?",
        " Are there any <b>celebrities, fashion icons,</b> or specific looks that inspire you?",
        "Thank You!!!, Redirecting......",
    ]

    const [ans, setAns] = useState([])

    // const totalQues = ques.length;

    const [count, SetCount] = useState(0);

    const [messages, setMessages] = useState([
        {
            message: "Welcome to <b>Rakuten!!</b></br></br><b>I am Finoa your Fashion Assistant</b></br>I wanted to know some basic data about you like your <b>name, age, skin complexion</b> for better suggestions.",
            sentTime: "just now",
            sender: "ChatGPT"
        }
    ]);


    const [isTyping, setIsTyping] = useState(false);

    const [imageLinks, setImageLinks] = useState([
    ]);

    // const [imgageLinks, setImageLinks] = useState([
    //   'https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png',
    //   'https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png',
    //   'https://github.githubassets.com/images/modules/profile/achievements/quickdraw-default.png',
    // ]);


    const callAPI = async () => {


        const queArr = [
            "basic data",
            "occasion",
            "style",
            "color preferences",
            "fabric choices",
            "outfit",
            "budget",
            "accessories",
            "cloth fitting",
            "want patterns ?",
            "have any fashion icons?"
        ]

        const obj = {}

        for (var i = 0; i < 11; i++) {
            obj[queArr[i]] = ans[i];
        }

        console.log(ans);
        console.log(obj);




        axios.post('http://localhost:8000/q1', {
            prompt: obj
        })
            .then(function (response) {
                console.log(response);
                console.log(response.data)
                console.log(imageLinks);
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

    if (imageLinks.length > 0) {
        return (
            <DisplayCard imageLinks={imageLinks} />
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

