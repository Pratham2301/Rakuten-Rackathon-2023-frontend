import React from 'react'
import Cards from './Cards';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import '../App.css'

const DisplayCards = ({ imageLinks }) => {


    return (
        <div className="App">
            <div style={{ position: "relative", height: "90vh", width: "50vw" }}>
                <MainContainer>
                    <ChatContainer style={{ padding: "2rem" }}>
                        <MessageList
                            scrollBehavior="smooth"
                        >
                            <h2>Here are the images</h2>
                            {imageLinks.map((item, key) => {
                                return <Cards data={item} key={key} />
                            })}
                        </MessageList>
                    </ChatContainer>
                </MainContainer>
            </div>
        </div>
    )
}

export default DisplayCards
