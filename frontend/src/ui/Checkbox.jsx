function Checkbox({ title, icon, setterFnc }) {
  return (
    <div className="flex gap-2 items-center">
      <div
        className="w-4 aspect-square bg-primary-dark rounded-sm grid place-items-center cursor-pointer"
        onClick={() => setterFnc((prev) => !prev)}
      >
        {icon}
      </div>
      <p
        onClick={() => setterFnc((prev) => !prev)}
        className="text-textPrimary cursor-pointer"
      >
        {title}
      </p>
    </div>
  );
}

export default Checkbox;
