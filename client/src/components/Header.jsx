import React from "react"
import skull from "../assets/skull.png"
import axios from 'axios'
import magnifier from "../assets/magnifier.png"
import { useEffect } from "react"

export default function Header() {
  const [array, setArray] = React.useState([])
  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8000/api")
    setArray(response.data.stuff)
    console.log(response.data.stuff)
  }

  React.useEffect(() => {
    fetchAPI()
  }, [])
  return (
    <header>
      <img src={skull} />
      <h1>Spooky Stories</h1>
      {/* {array.map((item, index) => (
        < p key={index}> {item}</p>
      ))} */}
      <form role="search" className="form">
        <div class="search-box">
          <label for="search-input" class="visually-hidden"></label>
          <input type="text" placeholder="Search..." className="search-input" />
          <img src={magnifier} alt="" className="magnifier" />
        </div>
      </form>
    </header >
  )
}