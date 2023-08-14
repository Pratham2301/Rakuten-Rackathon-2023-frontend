import React from 'react'
import Cards from './Cards';

const DisplayCards = ({imageLinks}) => {


    return (
        <div className='allcards' style={{display: "flex", direction:"column"}}>
            <h2>Here are the images</h2>

            {imageLinks.map((item, key) => {
                return <Cards data={item} key={key}/>
            })}

        </div>
    )
}

export default DisplayCards
