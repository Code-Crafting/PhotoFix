function Button({ text, customStyle }) {
  return (
    <div
      className={`${customStyle} grid place-items-center rounded-full shadow-header hover:cursor-pointer`}
    >
      {text}
    </div>
  );
}

export default Button;
