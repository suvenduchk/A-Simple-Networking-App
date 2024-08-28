import React from "react";
import "./services-2.css";
import forBusinessesImage1 from "../Images/For Businesses Image 1.jpeg";
import forBusinessesImage2 from "../Images/For Businesses Image 2.png";
import forBusinessesImage3 from "../Images/For Businesses Image 3.jpg";
import forBusinessesImage4 from "../Images/For Businesses Image 4.jpeg";

const Services2 = () => {
  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="services-2">
      <div className="box-5">
        <p className="business-text">For business</p>
      </div>
      <div className="box-7">
        {(() => {
          const boxes = [];
          const headings = [
            "Tailored Solutions for Business Challenges",
            "Cloud and Infrastructure Services:",
            "Data Analytics and Insights",
            "Digital Marketing and Customer Engagement",
          ];
          const texts = [
            "Pro Infotech engages in thorough consultations with other businesses. They listen to their pain points, goals, and operational challenges.",
            "Scalable Cloud Solutions: Pro Infotech assists businesses in migrating to the cloud. They design scalable architectures, manage cloud infrastructure, and optimize costs.",
            "Data-Driven Decision-Making: Pro Infotech helps businesses extract value from their data. They build robust data pipelines, perform ETL (Extract, Transform, Load), and create data warehouses.",
            "Omnichannel Strategies: Pro Infotech assists businesses in reaching their target audiences across channels—social media, email, web, and mobile.",
          ];
          const images = [
            forBusinessesImage1,
            forBusinessesImage2,
            forBusinessesImage3,
            forBusinessesImage4,
          ];

          for (let i = 0; i < 4; i++) {
            boxes.push(
              <div className="box-7-inner" key={i}>
                <div className="box-7-image">
                  <img src={images[i]} alt={`Image ${i + 1}`} />
                </div>
                <div className="box-7-heading">{headings[i]}</div>
                <div className="box-7-text">{texts[i]}</div>
                <button
                  className="box-7-button"
                  onClick={() => handleButtonClick("https://example.com")}
                >
                  Know More
                </button>
              </div>
            );
          }
          return boxes;
        })()}
      </div>
    </div>
  );
};

export default Services2;
