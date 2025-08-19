import React from "react"
import reactIcon from "../assets/react.svg"
import axios from 'axios'
import { useEffect } from "react"
import Story from "./Story"

export default function Main() {
  const [titles, setTitles] = React.useState([]);
  const [stories, setStories] = React.useState([]);

  // Fetch titles
  useEffect(() => {
    fetch("http://localhost:8000/api/titles")
      .then((res) => res.json())
      .then((data) => setTitles(data))
      .catch((err) => console.error("Error fetching titles:", err));
  }, []);

  // Fetch stories
  useEffect(() => {
    fetch("http://localhost:8000/api/stories")
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.error("Error fetching stories:", err));
  }, []);
  return (

    <main>
      <div className="story-container">
        <div className="story">
          <h2 className="story-title">{titles[0]}</h2>
          <p>{stories[0]}
          </p> </div>
        <div className="story">
          <h2 className="story-title">{titles[1]}</h2>
          <p>
            {stories[1]}
          </p>
        </div>
      </div>

    </main>

  )
}