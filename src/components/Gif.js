import React from "react";

export default function Gif({ title, url, id }) {
  return (
    <div className="gifElement">
      <a href={`#${id}`}>{title}</a>
      <img src={url} alt={title} />
    </div>
  );
}
