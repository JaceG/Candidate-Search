import React from "react";
import "./style.css";

interface CandidateCardProps {
    avatarUrl: string;
    name: string | null;
    username: string;
    location: string | null;
    email: string | null;
    company: string | null;
    bio: string | null;
    twitter_username: string | null;
    blog: string | null;
    onPlusClick: () => void;
    onMinusClick: () => void;
  }

  const CandidateCard: React.FC<CandidateCardProps> = ({
    avatarUrl,
    name,
    username,
    location,
    email,
    company,
    bio,
    twitter_username,
    blog,
    onPlusClick,
    onMinusClick,
  }) => {
  return (
    <div className="card-image-container">
    
    <img src={avatarUrl} alt={`${username}'s avatar`} className="avatar" />
    <div className="card-container">
      <div className="card-content">
        <h2>
          <span className="name">{name}</span>
        </h2>
        <h3>
        <span className="username"><a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">{username}</a></span>
        </h3>
        <p><strong>Location:</strong> {location}</p>
        <p>
          <strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a>
        </p>
        <p><strong>Company:</strong> {company}</p>
        <p><strong>X:</strong> <a href={`https://x.com/${twitter_username}`} target="_blank" rel="noopener noreferrer">{twitter_username}</a></p>
        <p><strong>Website:</strong> <a href={`${blog}`}>{blog}</a></p>
        <p><strong>Bio:</strong> {bio}</p>
      </div>
    </div>
    <div className="card-actions">
        <button 
        onClick={onMinusClick}
        className="btn btn-danger"><svg width="35px" height="35px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="btn-svg">
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
</svg>
</button>
        <button 
              onClick={onPlusClick}
        className="btn btn-success"><svg 
        width="35px" height="35px"
        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="btn-svg">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>
</button>
      </div>
    </div>
  );
};

export default CandidateCard;
