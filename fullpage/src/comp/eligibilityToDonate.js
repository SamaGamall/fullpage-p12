import React, { useState, useEffect } from 'react';
import './eligibilityToDonate.css';

function FeedCard(props) {
  return (
    <div className="feed-card">
      <img src={props.image} alt="Feed Image" />
      <div className="feed-content">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

function EligibilityToDonate() {
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    // Fetch the feed data from the server
    fetch('/feeds')
      .then(response => response.json())
      .then(data => setFeeds(data))
      .catch(error => console.error('Failed to fetch feed data:', error));
  }, []);

  return (
    <div className="feeds-container">
      {feeds.map(feed => (
        <FeedCard
          key={feed.id}
          image={feed.image}
          title={feed.title}
          description={feed.description}
        />
      ))}
    </div>
  );
}

export default EligibilityToDonate;
