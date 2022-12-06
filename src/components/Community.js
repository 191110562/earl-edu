import React from "react";
import Navigation from "./Navigation";

export default function CommunityCard({ link, image, title, description }) {
  return (
    <div>
      <Navigation />
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
    </div>
  );
}
