import { Link, useParams } from "react-router-dom";
import Button from "../Button";
import Question from "../Question";
import Video from "../Video";
const steps = require("../../steps.json");

const Step = () => {
  let { step: stepId } = useParams();

  const step = steps[+stepId - 1];

  const renderStep = () => {
    switch (step.type) {
      case "Video":
        return <Video src={step.link} />;

      case "Question":
        return <Question {...step} />;

      default:
        break;
    }
  };
  return (
    <>
      {+stepId === steps.length && (
        <Link to="/step/1">
          <Button>Começar de novo</Button>
        </Link>
      )}
      {+stepId !== steps.length && (
        <Link to={`/step/${+stepId + 1}`}>
          <Button>Avançar</Button>
        </Link>
      )}
      {renderStep()}
    </>
  );
};

export default Step;
