import React from "react"
import reactIcon from "../assets/react.svg"
import axios from 'axios'
import { useEffect } from "react"
import Story from "./Story"

export default function Main() {
  const [titles, setTitles] = React.useState([]);
  const [stories, setStories] = React.useState([]);

  // Fetch titles

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
        {stories.map((story, index) => (
          <div className="story" key={index}>
            <h2 className="story-title">{story.title}</h2>
            <p>{story.content}</p>
          </div>
        ))}
      </div>

    </main>

  )
}