import React from "react";
import "./Footer-1.css";

const Footer1 = () => {
  const links = [
    {
      heading: "Column 1",
      links: ["Link-1a", "Link-1b", "Link-1c"],
    },
    {
      heading: "Column 2",
      links: ["Link-2a", "Link-2b", "Link-2c"],
    },
    {
      heading: "Column 3",
      links: ["Link-3a", "Link-3b", "Link-3c"],
    },
  ];

  return (
    <div className="box-8">
      {links.map((column, index) => (
        <div className="column" key={index}>
          <div className="column-heading">{column.heading}</div>
          {column.links.map((link, linkIndex) => (
            <a
              key={linkIndex}
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="column-link"
            >
              {link}
            </a>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Footer1;
