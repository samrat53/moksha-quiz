import React from "react";

const Faq = () => {
  const faqData = [
    {
      question: "Prestigious Title at Stake - 'The Best School of Tripura':",
      answer: [
        "The quizzing event is not just a competition; it's a quest for excellence. The winning school will be bestowed with the esteemed title of 'The Best School of Tripura in the field of Biology Education,' adding a layer of significance to the intellectual pursuit.",
      ],
    },
    {
      question: "Diverse Team Composition Emphasizing Inclusivity:",
      answer: [
        "a. Teams will consist of six students each, ensuring representation from classes 7 to 12.",
        "b. Recognizing logistical constraints, if all specified classes aren't available, a minimum of four classes should be represented in a team, promoting flexibility and inclusivity.",
      ],
    },
    {
      question: "Ample Participation Encouraged:",
      answer: [
        "To enrich the competitive landscape, each school is encouraged to field a minimum of five teams, fostering a spirit of healthy competition among institutions.",
      ],
    },
    {
      question: "Equitable Evaluation with Percentage Conversion:",
      answer: [
        "To address potential disparities in the number of participating teams from different schools, raw scores will be converted to percentages, ensuring a fair assessment across the board.",
      ],
    },
    {
      question: "Individual Team Recognition:",
      answer: [
        "Teams will be evaluated individually, allowing for nuanced acknowledgment of each team's efforts and accomplishments, fostering a sense of achievement among participants.",
      ],
    },
    {
      question: "Strategic Round-wise Cut-off Percentages:",
      answer: [
        "a. Each round will feature a minimum cut-off percentage, adding a strategic element to the competition.",
        "b. In cases where teams achieve a perfect score, the top-performing teams will progress to subsequent rounds, injecting an element of competition even within the highest-scoring teams.",
      ],
    },
    {
      question: "Excellence Rewarded - Prizes for the Pinnacle Performers:",
      answer: [
        "The team with the highest cumulative score will not only earn bragging rights but will also be rewarded with prizes, celebrating and encouraging excellence in biological knowledge.",
      ],
    },
    {
      question: "Special Provisions for Schools Without Classes 11 and 12:",
      answer: [
        "a. Acknowledging variations in school structures, schools without classes 11 and 12 will be given special consideration.",
        "b. These schools can nominate two additional students from any other class, ensuring that every institution, regardless of its grade structure, has an equal opportunity to participate.",
      ],
    },
  ];

  const FaqItem = ({ question, answer }) => {
    return (
      <div className="question-box py-5 mx-[3em] text-xl ">
        <div className="collapse bg-white collapse-arrow ">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title font-medium text-xl">
            {`${question}`}
          </div>
          <div className="collapse-content faq-border pt-2 text-[1rem]" >
            {answer.map((item) => (
              <p>{item}</p>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <h1 className="px-[5rem] py-[3.5rem] flex flex-col items-center topic-class text-center text-[3rem]">
        Rules for the Inter School Biology Quizzing Event <br />
        <span>“Bio-Chase 1.0”</span>
      </h1>
      {faqData.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}

      <div className="question-box py-5 mx-[3em] text-xl">
        <div className="collapse collapse-open ">
          <div className="collapse-content">
            <h3 className="text-white text-center">
              The event is not just a competition; it's a celebration of
              knowledge and a testament to the diversity of learning
              environments across schools in Tripura.
              <br/>
              <br/>
              <span className="text-2xl font-bold">All the Best!!!</span>
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
