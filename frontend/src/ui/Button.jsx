function Button({
  text,
  customStyle,
  radius = "rounded-full",
  icon: Icon,
  iconStyle,
  fn,
}) {
  return (
    <div
      className={`${customStyle} flex items-center justify-center gap-2 ${radius} shadow-header cursor-pointer 885px:text-sm text-lg`}
      onClick={fn}
    >
      {Icon && <Icon className={iconStyle} />}
      {text && text}
    </div>
  );
}

export default Button;
