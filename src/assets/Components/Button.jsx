function Button({ text, customStyle, icon: Icon, iconStyle }) {
  return (
    <div
      className={`${customStyle} flex items-center justify-center gap-2 rounded-full shadow-header hover:cursor-pointer`}
    >
      {Icon && <Icon className={iconStyle} />}
      {text}
    </div>
  );
}

export default Button;
