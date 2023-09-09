import { useState } from 'react'
import '../Fashion/Styles.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import DisplayCard from '../Fashion/DisplayCards';
import axios from 'axios';

import React from 'react'

export default function AdLanding() {
    const ques = [
        "Thank You!!!, Redirecting......",
    ]

    const [ans, setAns] = useState("")

    // const totalQues = ques.length;

    const [count, SetCount] = useState(0);

    const [messages, setMessages] = useState([
        {
            message: "Welcome to <b>Rakuten!!</b></br></br><b>I am Finoa your Advertising Expert</b></br> Tell us About your item?",
            sentTime: "just now",
            sender: "ChatGPT"
        }
    ]);


    const [isTyping, setIsTyping] = useState(false);

    const [imgageLinks, setImageLinks] = useState([
    ]);



    const callAPI = async (para) => {


        // const queArr = [
        //     "brand name",
        // ]

        // var obj = {}

        console.log("ans : ", ans)

        // for (var i = 0; i < 1; i++) {
        //     obj[queArr[i]] = ans[i];
        // }

        console.log(ans);
        console.log("para ", para);
        // console.log(obj);

        var final_prompt = `Create visually captivating, eyecatching, and impactful brand advertisements for a ${para} Brand Instagram campaign. The focus should be on our new ${para} Flavours, and the imagery should showcase ${para} hubs in a vintage setting. Use shades of different colours to infuse our brand identity into the visuals. The goal is to make viewers feel energized and eager to try our brand.`;

        console.log(final_prompt);

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

        console.log("msg ", message)

        const newMessage = {
            message,
            direction: 'outgoing',
            sender: "user"
        };

        const botMessage = {
            message: ques[0],
            sender: "ChatGPT"
        }

        // await SetCount(count + 1);


        const newMessages = [...messages, newMessage, botMessage];
        setMessages(newMessages);
        console.log("newMessages ", newMessages);
        
        
        const newAnswer = message;
        console.log("newAnswer ", newAnswer);
        setAns(newAnswer);
        
        setTimeout(() => {
            console.log("ans ", ans);
            callAPI(newAnswer);

            setIsTyping(false);
        }, 3000);


        // console.log(count, ques.length);

        
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

