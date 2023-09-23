import React from 'react'
import Cards from './Cards';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import './Styles.css'

const DisplayCards = (props) => {

    console.log("display card called with ")
    console.log("display card called with ", props)


    return (
        <div className="App">
            <div style={{ position: "relative", height: "90vh", width: "50vw" }}>

                <>
                    <h2>Here are the images</h2>
                    {props.imageLinks.map((item, key) => {
                        return <Cards data={item} key={key} prmt={props.prompt} />
                    })}
                </>


                {/* <MainContainer>
                    <ChatContainer style={{ padding: "2rem" }}>
                        <MessageList
                            scrollBehavior="smooth"
                        >
                            <>
                                <h2>Here are the images</h2>
                                {props.imageLinks.map((item, key) => {
                                    return <Cards data={item} key={key} prmt={props.prompt} />
                                })}
                            </>
                        </MessageList>
                    </ChatContainer>
                </MainContainer> */}
            </div>
        </div>
    )
}

export default DisplayCards
