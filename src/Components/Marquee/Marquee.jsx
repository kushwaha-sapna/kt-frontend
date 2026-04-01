const Marquee = () => {
  const text = "hi i am vinay • hi i am vinay • hi i am vinay • hi i am vinay • hi i am vinay • ";

  return (
    <div className="marquee-container ">
      <div className="marquee-track">
        <span className="mt-4">{text}</span>
      </div>
    </div>
  );
};

export default Marquee;

