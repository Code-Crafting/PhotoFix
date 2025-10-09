function Button({ text, customStyle, icon: Icon, iconStyle, fn }) {
  return (
    <div
      className={`${customStyle} flex items-center justify-center gap-2 rounded-full shadow-header hover:cursor-pointer`}
      onClick={fn}
    >
      {Icon && <Icon className={iconStyle} />}
      {text}
    </div>
  );
}

export default Button;
