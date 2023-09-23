import React from 'react'
import axios from 'axios'
import { Button } from '@mui/material'
import DisplayCard from './DisplayCards';

const Cards = (props) => {
  const handleClick = () => {
    console.log("clickeed..")
    axios.post(
      'http://localhost:8000/q3',
      {
        "link": props.data,
        "prompt": props.prmt
      }
    ).then((response) => {
      console.log(response)
      var imageLinks = []
      imageLinks = [...imageLinks, response.data.data.output]
      console.log("image arr : ", imageLinks);

      return (
        <DisplayCard imageLinks={imageLinks} />
      )

      // <DisplayCard imageLinks={imageLinks} />

      console.log("not  called")
    }
    ).catch((err) => {
      console.log(err)
    }

    )
  }

  return (
    <div>

      {/* <h1>Image....{data}</h1> */}
      <Button onClick={() => { handleClick() }}>
        <img src={props.data} alt="image1" />
      </Button>

    </div>
  )
}

export default Cards

