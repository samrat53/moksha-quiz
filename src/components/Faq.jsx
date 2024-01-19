import React from "react";

const Faq = () => {
  const faqData = [
    {
      question: "How can I join the 'Introduction to Web Development' session?",
      answer:
        "Simply attend the session at the specified time. No prior registration is required.",
    },
    {
      question: "Is the '21 Days Challenge' suitable for beginners?",
      answer:
        "Absolutely! The challenge is designed for both beginners and experienced coders to enhance their web development skills.",
    },
    {
      question:
        "Can I use platforms other than Replit or Codepen for the 21 Days Challenge?",
      answer:
        "No, submissions from other platforms won't be accepted. Stick to Replit, Codepen, or local coding with Google Drive uploads.",
    },
    {
      question: "Is collaboration allowed during the 21 Days Challenge?",
      answer:
        "Collaboration is encouraged, but sharing solutions publicly during the task period is strictly prohibited.",
    },
    {
      question: "What happens if I miss a day in the 21 Days Challenge?",
      answer:
        "Try to complete each task daily, but if you miss a day, catch up on the following day. Late submissions, however, might not be accepted, and any points won’t be provided for late submission.",
    },
    {
      question:
        "Can I share my solutions on GitHub during the 21 Days Challenge?",
      answer:
        "Yes, but only after the specified task period has ended. Respect the challenge rules.",
    },
  ];

  const FaqItem = ({ question, answer }) => {
    return (
      <div className="question-box px-[3rem] py-5 mx-[7rem] text-xl">
        {/* <div className="chat chat-start ">
          <div className="chat-bubble chat-bubble-primary">
          {`Q. ${question}`}
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-bubble chat-bubble-accent mt-6">{`Ans. ${answer}`}</div>
        </div> */}
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-xl font-medium">
          {`Q. ${question}`}
          </div>
          <div className="collapse-content">
            <p>{`Ans. ${answer}`}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <h1 className="pl-[5rem] pb-[3.5rem] underline flex flex-col items-center topic-class text-white">
        Frequently Asked Questions:
      </h1>
      {faqData.map((item, index) => (
        <FaqItem key={index} question={item.question} answer={item.answer} />
      ))}
    </>
  );
};

export default Faq;
