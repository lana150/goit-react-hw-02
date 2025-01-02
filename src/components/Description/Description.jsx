import s from "./Description.module.css";

const Description = () => {
  return (
    <>
      <h1 className={s.title}>Sip Happens Café</h1>
      <p className={s.text}>
        Please leave your feedback <span>about</span> our service
        <span>by</span> selecting one <span>of the</span> options <span>below</span>.
      </p>
    </>
  );
};

export default Description;
