import React, { useState } from 'react';
import {ArrowDownShort} from "react-bootstrap-icons"

const AccordionItem = ({ title, content, isOpen, onClick }) => (
  <div className={`border-b-2 border-gray-200 ${isOpen? " p-2 border-2 btn-pink bg-pink-200 text-black":""}`}>
    <button
    
      className={`w-full text-left p-4 focus:outline-none ${isOpen?"btn-outlined-pink ":""}`}
      onClick={onClick}
    >
      <div className="flex justify-between items-center">
        <span > {title}</span>
        <span>{!isOpen ? <ArrowDownShort/> : '+'}</span>
      </div>
    </button>
    {isOpen && <div className="p-4">{content}</div>}
  </div>
);

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: 'What is Tailwind CSS?',
      content: 'Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.',
    },
    {
      title: 'How do I use Tailwind CSS with React?',
      content: 'You can use Tailwind CSS with React by installing it via npm and configuring it in your project.',
    },
    {
      title: 'Why use Tailwind CSS?',
      content: 'Tailwind CSS allows for quick and easy styling with utility classes, making it highly customizable and efficient.',
    },
  ];

  return (
    <div className="max-w-md mx-auto mt-10">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;