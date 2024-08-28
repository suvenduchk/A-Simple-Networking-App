import React from "react";
import "./Services.css";
import serviceImage1 from "../Images/Services-image-1.png";
import serviceImage2 from "../Images/Services-image-2.jpeg";
import serviceImage3 from "../Images/Services-image-3.jpg";
import serviceImage4 from "../Images/Services-image-4.jpg";
import serviceImage5 from "../Images/Services-image-5.jpg";
import serviceImage6 from "../Images/Services-image-6.jpg";
import serviceImage7 from "../Images/Services-image-7.png";
import serviceImage8 from "../Images/Services-image-8.jpg";

const Services = () => {
  return (
    <div className="services-container">
      <div className="service">
        <div className="service-image">
          {/* <img src="https://via.placeholder.com/150" alt="Service 1" /> */}
          <img src={serviceImage1} alt="Service 1" />
        </div>
        <h2>Custom Software Development</h2>
        <p>
          Tailored Solutions: Pro Infotech collaborates closely with businesses
          to understand their unique requirements. They design, develop, and
          deploy custom software applications, addressing specific pain points.
        </p>
        <p>
          Web and Mobile Apps: Whether it’s a responsive website, a mobile app,
          or a cross-platform solution, Pro Infotech ensures seamless user
          experiences.
        </p>
        <p>
          Maintenance and Support: They provide ongoing maintenance, updates,
          and technical support to keep software running smoothly
        </p>
      </div>
      <div className="service">
        <div className="service-image">
          {/* <img src="https://via.placeholder.com/150" alt="Service 2" /> */}
          <img src={serviceImage2} alt="Service 2" />
        </div>
        <h2>Cloud Infrastructure Management</h2>
        <p>
          Cloud Migration: Pro Infotech assists businesses in migrating to cloud
          platforms (e.g., AWS, Azure, Google Cloud). They optimize
          infrastructure for scalability, security, and cost-effectiveness
        </p>
        <p>
          Serverless Architecture: Leveraging serverless computing, Pro Infotech
          builds efficient, event-driven applications
        </p>
        <p>
          Monitoring and Optimization: They monitor cloud resources, manage
          auto-scaling, and fine-tune performance.
        </p>
      </div>
      <div className="service">
        <div className="service-image">
          {/* <img src="https://via.placeholder.com/150" alt="Service 3" /> */}
          <img src={serviceImage3} alt="Service 3" />
        </div>
        <h2>Data Analytics and Business Intelligence</h2>
        <p>
          Data Warehousing: Pro Infotech sets up data warehouses (e.g.,
          Snowflake, BigQuery) for efficient data storage and retrieval.
        </p>
        <p>
          Data Pipelines: They create ETL (Extract, Transform, Load) pipelines,
          integrating data from various sources.
        </p>
        <p>
          Visualization Tools: Pro Infotech designs interactive dashboards
          (using tools like Tableau or Power BI) for data-driven
          decision-making.
        </p>
      </div>
      <div className="service">
        <div className="service-image">
          {/* <img src="https://via.placeholder.com/150" alt="Service 4" /> */}
          <img src={serviceImage4} alt="Service 4" />
        </div>
        <h2>Cybersecurity and Compliance</h2>
        <p>
          Vulnerability Assessments: Pro Infotech identifies security gaps,
          performs penetration testing, and recommends fixes.
        </p>
        <p>
          Security Policies: They help businesses establish robust security
          policies, ensuring compliance with industry standards (e.g., ISO
          27001, NIST).
        </p>
        <p>
          Incident Response: Pro Infotech assists in handling security
          incidents, minimizing damage and recovery time.
        </p>
      </div>
      <div className="service">
        <div className="service-image">
          {/* <img src="https://via.placeholder.com/150" alt="Service 5" /> */}
          <img src={serviceImage5} alt="Service 5" />
        </div>
        <h2>AI and Machine Learning Solutions</h2>
        <p>
          Predictive Models: Pro Infotech develops machine learning models for
          forecasting, recommendation engines, and fraud detection.
        </p>
        <p>
          Natural Language Processing (NLP): They build chatbots, sentiment
          analysis tools, and language translation systems.
        </p>
        <p>
          Image Recognition: Pro Infotech creates solutions for image
          classification, object detection, and facial recognition.
        </p>
      </div>
      <div className="service">
        <div className="service-image">
          {/* <img src="https://via.placeholder.com/150" alt="Service 6" /> */}
          <img src={serviceImage6} alt="Service 6" />
        </div>
        <h2>Digital Marketing and SEO</h2>
        <p>
          Content Strategy: Pro Infotech devises content marketing plans,
          optimizing SEO (Search Engine Optimization) for visibility.
        </p>
        <p>
          Social Media Campaigns: They manage social media profiles, create
          engaging content, and analyze campaign performance.
        </p>
        <p>
          Email Marketing: Pro Infotech designs personalized email campaigns,
          nurturing leads and retaining customers.
        </p>
      </div>
      <div className="service">
        <div className="service-image">
          {/* <img src="https://via.placeholder.com/150" alt="Service 7" /> */}
          <img src={serviceImage7} alt="Service 7" />
        </div>
        <h2>User Experience (UX) Design</h2>
        <p>
          User Research: Pro Infotech conducts usability studies, interviews,
          and surveys to understand user needs.
        </p>
        <p>
          Wireframing and Prototyping: They create intuitive interfaces,
          emphasizing user flow and accessibility.
        </p>
        <p>
          Usability Testing: Pro Infotech validates designs through user
          testing, iterating based on feedback.
        </p>
      </div>
      <div className="service">
        <div className="service-image">
          {/* <img src="https://via.placeholder.com/150" alt="Service 8" /> */}
          <img src={serviceImage8} alt="Service 8" />
        </div>
        <h2>Training and Workshops</h2>
        <p>
          Technology Training: Pro Infotech offers workshops on emerging
          technologies (e.g., blockchain, quantum computing) for businesses and
          individuals.
        </p>
        <p>
          Agile Practices: They conduct training sessions on agile
          methodologies, Scrum, and Kanban.
        </p>
        <p>
          Continuous Learning Culture: Pro Infotech promotes knowledge sharing,
          fostering a culture of growth and innovation.
        </p>
      </div>
    </div>
  );
};

export default Services;
