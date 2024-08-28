import React from "react";
import "./HomePage.css";
import TeamMembersSection from "../TeamMembers/TeamMembersSection.js";
import image from "../Images/image-0002.jpg";
import Services2 from "../Display-2/services-2.js";
// import Footer1 from "../Footer-1/Footer-1.js";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="secondary-menu-bar">
        <button
          className="secondary-menu-button"
          aria-label="Join Our Community"
        >
          Join Our Community
        </button>
        <button
          className="secondary-menu-button"
          aria-label="Subscribe Our Services"
        >
          Subscribe Our Services
        </button>
      </div>
      <div className="image-panel">
        <img src={image} alt="Display" className="display-image" />
      </div>
      <div className="central-message">Get it done, fast</div>
      <div className="box-1">
        <div className="box-2">
          <div className="box-3">
            Pro Infotech is an innovative AI-powered creative studio based in a
            bustling metropolis. With a team of talented professionals, they
            specialize in leveraging artificial intelligence to create
            captivating content for businesses across various industries. Their
            services include video production, graphic design, and personalized
            marketing campaigns. Pro Infotech, headquartered in a tech hub,
            focuses on providing secure open-source solutions for cybersecurity.
            Pro Infotech, headquartered in a tech hub, focuses on providing
            secure open-source solutions for cybersecurity. Their team of
            experts develops cutting-edge software to protect organizations from
            cyber threats. Their services include vulnerability assessments,
            threat detection, and secure code auditing.
          </div>
          <div className="box-2-inner">
            <div className="heading-panel">AI-Powered Creative Studio :</div>
          </div>
          <div className="box-2-inner">
            <div className="heading-panel">
              Open Source Cybersecurity Solutions :
            </div>
          </div>
          <div className="box-2-inner">
            <div className="heading-panel">
              Space Technology for Global Connectivity
            </div>
          </div>
        </div>
      </div>
      <div className="box-4">
        <div className="text-box-row">
          <div className="text-box">
            <div className="text-box-heading">Vision and Mission :</div>Vision:
            Pro Infotech envisions a world where technology empowers individuals
            and businesses alike. Their mission is to create innovative
            solutions that bridge gaps, enhance efficiency, and drive positive
            change. Pro Infotech’s vision centers around leveraging technology
            for societal betterment. They aim to be at the forefront of
            innovation, addressing real-world challenges through their services.
          </div>
          <div className="text-box">
            <div className="text-box-heading">Service Portfolio :</div>
            Comprehensive Solutions: Pro Infotech offers an extensive range of
            services, including software development, cloud computing, data
            analytics, cybersecurity, and digital marketing. Customization: They
            tailor solutions to meet specific client needs, whether it’s
            building robust applications, optimizing infrastructure, or
            enhancing user experiences.
          </div>
          <div className="text-box">
            <div className="text-box-heading">
              Agile Development Methodology :
            </div>
            Iterative Approach: Pro Infotech follows an agile methodology,
            emphasizing collaboration, flexibility, and continuous improvement.
            Scrum Teams: They organize cross-functional teams into sprints,
            ensuring rapid development cycles and responsiveness to changing
            requirements. Quality Assurance: Rigorous testing and code reviews
            are integral to their process, ensuring robust and reliable
            software.
          </div>
        </div>
        <div className="text-box-row">
          <div className="text-box">
            <div className="text-box-heading">Talent and Culture :</div>Diverse
            Workforce: Pro Infotech fosters an inclusive environment, valuing
            diversity in skills, backgrounds, and perspectives. Continuous
            Learning: They invest in employee growth through workshops,
            certifications, and knowledge-sharing sessions. Work-Life Balance:
            Pro Infotech promotes a healthy work-life balance, recognizing that
            motivated employees drive success.
          </div>
          <div className="text-box">
            <div className="text-box-heading">
              Ethical AI and Data Privacy :
            </div>
            AI Ethics: Pro Infotech integrates ethical considerations into their
            AI solutions. They prioritize transparency, fairness, and
            accountability. Data Protection: Rigorous data privacy measures
            safeguard user information. Compliance with regulations like GDPR
            and CCPA is a top priority. Responsible AI: Pro Infotech actively
            contributes to discussions on responsible AI usage and bias
            mitigation.
          </div>
          <div className="text-box">
            <div className="text-box-heading">Community Engagement :</div>Social
            Impact Initiatives: Pro Infotech believes in giving back. They
            participate in community service, support local nonprofits, and
            encourage employee volunteering. Tech Outreach: They organize
            workshops, hackathons, and tech talks to inspire the next generation
            of innovators. Open Source Contributions: Pro Infotech contributes
            to open-source projects.
          </div>
        </div>
      </div>
      <div className="explore-windows">Explore More About Our Services :</div>
      <div className="windows-features-description">
        Access AI from your fingertips with optimal performance at the ready.
        Embrace many features to secure and refine your digital life.
      </div>
      <button
        className="meet-our-team-button"
        onClick={() => window.open("http://example.com/our-team", "_blank")}
        rel="noopener noreferrer"
      >
        Meet Our Team
      </button>
      <TeamMembersSection />
      <Services2 />
      {/* <Footer1 /> */}
    </div>
  );
};

export default HomePage;
