function GradientCon({ conDetail }) {
  return (
    <div
      className={`absolute bg-radial ${conDetail.gradient} ${conDetail.position} ${conDetail.width} rounded-full blur-3xl`}
    ></div>
  );
}

export default GradientCon;
