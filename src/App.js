import React from "react";
import "./style.css";
import { ReactVideo } from "reactjs-media";

export default function App() {
  return (
    <div>
            <ReactVideo
                src="https://res.cloudinary.com/dyzeuqi75/video/upload/v1633444263/yt5s.com-PHILOSOPHY_-_Political__Why_Vote_esdw3n.mp4"
                poster="https://www.example.com/poster.png"
                primaryColor="red"
                // other props
            />
        </div>
  );
}
