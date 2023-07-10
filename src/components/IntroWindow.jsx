export const IntroWindow = (props) => {
  return (
    <div className={`intro-window ${props.class}`}>
      <span className="intro-span-num">{props.num}</span>
      <span className="intro-span-header">{props.header}</span>
      <img src={props.img} alt="" />
    </div>
  );
};
