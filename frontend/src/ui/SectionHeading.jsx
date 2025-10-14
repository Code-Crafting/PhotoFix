function SectionHeading({ title, subtitle, span }) {
  return (
    <div className="grid place-items-center w-1/2 mx-auto">
      <h1 className="text-5xl font-bold text-textPrimary">
        {title} <span className="text-gradient">{span}</span>
      </h1>
      <p className="text-center text-textPrimary/50 mt-2 ">{subtitle}</p>
    </div>
  );
}
export default SectionHeading;
