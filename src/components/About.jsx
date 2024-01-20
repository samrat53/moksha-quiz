import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { Icon1, Icon2, Icon3, Icon4, Data } from "../assets/Icons";

const About = () => {
  return (
    <>
      <div className="justify-center flex-1 max-w-6xl lg:py-6 md:px-6 mx-[10rem]">
        <h2 className="topic-class uppecase text-center my-9">
          Quiz Prize Pool
        </h2>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={<Data text="Winning Team" />}
            iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            icon={<Icon1 />}
          >
            {/* <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p>
              <ol className="mb-10">
                <li className="my-1 prize-text-details">
                  &#8226; Compound Microscope for each participant of the team.
                </li>
                <li className="my-1 prize-text-details">
                  &#8226; Winners Trophy for the School.
                </li>
                <li className="my-1 prize-text-details">
                  &#8226; Prestigious Badge of Best School in Biology Education.
                </li>
                <li className="my-1 prize-text-details">
                  &#8226; 90% scholarship in Biology training for IBB and NSEB.
                </li>
                <li className="my-1 prize-text-details">
                  &#8226; Cash Prize of Rs. 6000
                </li>
              </ol>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={<Data text="Runner's Up Team" />}
            iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            icon={<Icon2 />}
          >
            {/* <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p>
              <ol className="mb-10">
                <li className="my-1 prize-text-details">
                  &#8226; Cash Prize of Rs. 3000
                </li>
                <li className="my-1 prize-text-details">
                  &#8226; Runner's Up Trophy
                </li>
                <li className="my-1 prize-text-details">
                  &#8226; Badge of 2nd Best School Award
                </li>
                <li className="my-1 prize-text-details">
                  &#8226; 50% scholarship in Biology training for IBB and NSEB
                </li>
              </ol>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={<Data text="Second Runner's Up Team" />}
            iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            icon={<Icon3 />}
          >
            {/* <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p>
              <ol className="mb-10">
                <li className="my-1 prize-text-details">
                  &#8226; Cash Prize of Rs. 2000
                </li>
                <li className="my-1 prize-text-details">
                  &#8226; 2nd Runner's Up Trophy
                </li>
                <li className="my-1 prize-text-details">
                  &#8226; Badge of 3rd Best School Award
                </li>
                <li className="my-1 prize-text-details">
                  &#8226; 25% scholarship in Biology training for IBB and NSEB
                </li>
              </ol>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={<Data text="Yes! There's more" />}
            iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
            icon={<Icon4 />}
          >
            {/* <h3 className="vertical-timeline-element-title">
              Creative Director
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4> */}
            <p>
              <ol className="mb-10">
                <li className="my-4">
                  &#8226; List of Top 10 Schools will be published.
                </li>
                <li className="my-4">
                  &#8226; Certificate of excellence for the participants of top
                  5 teams and Schools.
                </li>
                <li className="my-4">
                  &#8226; Certificate of Achievement for the participants of the
                  next 10 teams and Schools.
                </li>
                <li className="my-4">
                  &#8226; Certificate of Participation for the participants of
                  all teams and Schools.
                </li>
              </ol>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default About;
