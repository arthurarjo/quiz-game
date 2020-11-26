import { useEffect, useState } from "react";
import "./styles.css";

const Question = ({ answer, questions, background, sound }) => {
  const [audio] = useState(new Audio(sound));
  const [tried, setTry] = useState(false);

  const clickQuestion = (key) => {
    setTry(true);
  };

  const play = () => {
    audio.play();
  };

  useEffect(() => {
    audio.play();
  }, []);

  return (
    <div
      className="question-wrapper"
      style={{ backgroundImage: background ? `url(${background})` : "none" }}
    >
      <div className="question-answer" onClick={play}>
        {answer}
      </div>
      <div className="question-questions">
        {questions.map((question, key) => (
          <div
            key={key}
            className={`question-question ${question.right ? "green" : "red"} ${
              tried ? "tried" : ""
            }`}
            onClick={() => clickQuestion(key)}
          >
            {question.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
