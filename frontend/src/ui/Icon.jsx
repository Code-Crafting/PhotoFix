function Icon({ icon: Icon }) {
  return (
    <div className="w-[50px] aspect-square grid place-items-center rounded-xl icon-gradient">
      <Icon className=" text-2xl" />
    </div>
  );
}

export default Icon;
