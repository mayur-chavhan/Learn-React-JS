import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((e, i) => (
        <AccordionItems number={`0${i + 1}`} title={e.title} text={e.text} />
      ))}
    </div>
  );
}

function AccordionItems({ title, number, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpen() {
    setIsOpen(() => !isOpen);
  }
  return (
    <div className={`item ${isOpen ? "open" : {}}`}>
      <p className="number">{number}</p>
      <p className="text" onClick={handleOpen}>
        {title}
      </p>
      <p className="icon" onClick={handleOpen}>
        {isOpen ? "➖" : "➕"}
      </p>
      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
}
