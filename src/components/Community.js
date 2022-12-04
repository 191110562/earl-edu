import React from "react";

export default function CommunityCard({ link, image, title, description }) {
  return (
    <div className="card">
      <a target="_blank" rel="noopener noreferrer" href={link}>
        <img src={image} alt="logolinks" />
        <article>
          <span id="judul">{title}</span>
          <br />
          <br />
          {description}
        </article>
      </a>
    </div>
  );
}
