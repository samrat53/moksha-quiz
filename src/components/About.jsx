import React from "react";

const About = () => {
  return (
    <>
      <div className="justify-center flex-1 max-w-6xl lg:py-6 md:px-6 mx-[10rem]">
        <div className="flex flex-wrap items-center ">
          <div className="w-full mb-10 lg:w-1/2 lg:mb-0 px-4 ">
            <div className="lg:max-w-md">
              <span className="topic-class text-teal-500 uppercase">
                Quiz Prize Pool:
              </span>
              {/* <p className="mb-10 text-gray-600 dark:text-gray-400"> */}
              <ul className="mb-10 text-white font-bold text-lg">
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
              </ul>

              {/* </p> */}
            </div>
          </div>
          <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
            <div className="flex mb-4">
              <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-teal-500 rounded dark:bg-teal-500 dark:text-gray-100 text-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-trophy-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
                </svg>
                {/* <img src="../../public/icons/icon1.png"/> */}
              </span>
              <div>
                <h2 className="mb-4 text-[2rem] font-bold leading-tight  text-white">
                  Winning Team
                </h2>
                <ol className="mb-10">
                  <li className="my-1 text-[#0F0F0F]">
                    &#8226; Compound Microscope for each participant of the
                    team.
                  </li>
                  <li className="my-1 text-[#0F0F0F]">
                    &#8226; Winners Trophy for the School.
                  </li>
                  <li className="my-1 text-[#0F0F0F]">
                    &#8226; Prestigious Badge of Best School in Biology
                    Education.
                  </li>
                  <li className="my-1 text-[#0F0F0F]">
                    &#8226; 90% scholarship in Biology training for IBB and
                    NSEB.
                  </li>
                  <li className="my-1 text-[#0F0F0F]">
                    &#8226; Cash Prize of Rs. 6000
                  </li>
                </ol>
              </div>
            </div>
            <div className="flex mb-4">
              <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-teal-500 rounded dark:bg-teal-500 dark:text-gray-100 text-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  class="bi bi-award-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                </svg>
              </span>
              <div>
                <h2 className="mb-4 text-[2rem] font-bold leading-tight text-white">
                  Runner’s Up Team
                </h2>
                <ol className="mb-10">
                  <li className="my-1 text-[#0F0F0F]">
                    &#8226; Cash Prize of Rs. 3000
                  </li>
                  <li className="my-1 text-[#0F0F0F]">
                    &#8226; Runner's Up Trophy
                  </li>
                  <li className="my-1 text-[#0F0F0F]">
                    &#8226; Badge of 2nd Best School Award
                  </li>
                  <li className="my-1 text-[#0F0F0F]">
                    &#8226; 50% scholarship in Biology training for IBB and NSEB
                  </li>
                </ol>
              </div>
            </div>
            <div className="flex mb-4">
              <span className="flex items-center justify-center flex-shrink-0 w-12 h-12 mr-6 bg-teal-500 rounded dark:bg-teal-500 dark:text-gray-100 text-gray-50">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="currentColor"
                  class="bi bi-fire"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                </svg>
              </span>
              <div>
                <h2 className="mb-4 text-[2rem] font-bold leading-tight text-white">
                  Second Runner’s Up Team
                </h2>
                <ol className="mb-10">
                  <li className="my-1 text-[#0F0F0F]">
                    &#8226; Cash Prize of Rs. 2000
                  </li>
                  <li className="my-1 text-[#0F0F0F]">
                    &#8226; 2nd Runner's Up Trophy
                  </li>
                  <li className="my-1 text-[#0F0F0F]">
                    &#8226; Badge of 3rd Best School Award
                  </li>
                  <li className="my-1 text-[#0F0F0F]">
                    &#8226; 25% scholarship in Biology training for IBB and NSEB
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
