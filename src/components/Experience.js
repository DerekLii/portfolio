import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import logo1 from "../images/logo1.jpg";
import logo2 from "../images/logo2.jpg";
import logo3 from "../images/logo3.jpg";

const Experience = () => {
  const timelineItems = [
    {
      date: "May 2024 - Aug. 2024",
      title: "RBC Global Asset Management",
      job: "Data Engineer",
      location: "Toronto, ON (Hybrid)",
      content: "• Implemented automated web testing framework Playwright, improved testing speed by 5X\n\n• Worked on full-stack web development, improving features and bug fixes on our reporting website",
    },
    {
      date: "Sept. 2023 - April 2024",
      title: "Ford Motor Company",
      job: "Software Engineer",
      location: "Waterloo, ON (Remote)",
      content:
        "• Developed a full-stack web application using React and REST API principles for testing team to request specific vehicle event information based on user input. This tool dynamically builds a GCP query and the result is sent back into CSV format that can be downloaded by the tester to verify their events sent to the vehicle\n \n• Developed a full-stack web application to search and filter reports. This tool allows admin users to dynamically add or delete reports in the database. Admins can also update information related to a report, such as tags or descriptions. Users looking for relevant reports can filter and search reports by search box and dropdown menu",
    },
    {
      date: "May 2023 - Aug. 2023",
      title: "Ford Motor Company",
      job: "Data Engineer",
      location: "Waterloo, ON (Hybrid)",
      content:
        "• Worked on GCP migration by analyzing data quality during development/testing\n \n• Researched and implemented dbt into our workflow to improve ETL implementation speed by 2X\n \n• Automated daily email notifications to team members, such as how many vehicle events we are receiving each day compared to the daily average. Used SQL queries and Python",
    },
    {
      date: "May 2022 - Aug. 2022",
      title: "Employment and Social Development Canada",
      job: "Business Analyst",
      location: "Gatineau, QC (Remote)",
      content:
        "• Developed an interactive visual dashboard for data visualization using Python, Pandas, Jupyter, and Matplotlib to aid investigators by finding patterns and outliers in data.\n \n• Programmed a maintainable and convenient file searching system using OS module in Python and Pandas for 100+ folders updated and used frequently every year",
    },
  ];

  const icons = [
    <img src={logo3} alt="rbc" className="w-full rounded-full border border-black" />,
    <img src={logo2} alt="ford" className="w-full rounded-full border border-black" />,
    <img src={logo2} alt="ford" className="w-full rounded-full border border-black" />,
    <img src={logo1} alt="canada" className="w-full rounded-full border border-black" />,
  ];

  return (
    <div id="experience" className="bg-white max-w-screen-sm max-w-screen-lg mx-auto mb-2 px-4">
      <h1 className="text-xl font-normal text-black text-left mb-5">Experience</h1>
      <div className="mx-auto">
        <VerticalTimeline lineColor={"black"}>
          {timelineItems.map((item, index) => (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "black", border: "2px solid black", padding: "10px" }}
              contentArrowStyle={{ borderRight: "7px solid black" }}
              key={index}
              date={<div className={`mx-4 ${index % 2 === 0 ? "text-left" : "text-right"} px-2`}>{item.date}</div>}
              iconStyle={{ background: "black", color: "#3498db", border: "2px solid black" }}
              icon={icons[index]}
              position={index % 2 === 0 ? "left" : "right"}
            >
              <h2 className="text-left font-bold text-sm sm:text-base">{item.job}</h2>
              <h4 className="text-left text-sm sm:text-base">{item.title}</h4>
              <h4 className="text-left text-sm sm:text-base">{item.location}</h4>
              <h4 className="whitespace-pre-line text-left text-sm sm:text-base">{item.content}</h4>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
