import s from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positivePercentage }) => {
  const { good, neutral, bad } = feedback;
  return (
    <div className={s.divFeedback}>
      <p>Good: {good} </p>
      <p>Neutral: {neutral} </p>
      <p>Bad: {bad} </p>
      <p>Total: {totalFeedback} </p>
      <p>Positive Feedback: {positivePercentage}% </p>
    </div>
  );
};

export default Feedback;