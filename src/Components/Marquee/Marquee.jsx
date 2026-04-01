const Marquee = () => {
  const text = "Navratri Offer \u2022 Navratri Offer \u2022 Navratri Offer \u2022 Navratri Offer \u2022 Navratri Offer \u2022 ";

  return (
    <div className="marquee-container ">
      <div className="marquee-track">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Marquee;

