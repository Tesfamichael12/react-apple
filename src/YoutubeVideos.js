import React, { useEffect, useState } from "react";

const API_KEY = "AIzaSyAjrDR0dJDxBjio28KLyk5mmHba2ugRMd4"; // Replace with your API key
const CHANNEL_ID = "UCE_M8A5yxnLfW0KghEeajjw"; // Apple’s official channel ID
const MAX_RESULTS = 20; // Fetch more to randomize

function getRandomVideos(videos, count) {
  const shuffled = videos.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const YouTubeVideos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=${MAX_RESULTS}`
    )
      .then((res) => res.json())
      .then((data) => {
        const videoItems = data.items.filter((item) => item.id.videoId);
        setVideos(getRandomVideos(videoItems, 9));
      });
  }, []);

  return (
    <div className="youtube-videos">
      <h2>Apple YouTube Videos</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {videos.map((video) => (
          <div key={video.id.videoId}>
            <iframe
              width="300"
              height="170"
              src={`https://www.youtube.com/embed/${video.id.videoId}`}
              title={video.snippet.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <p>{video.snippet.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideos;
