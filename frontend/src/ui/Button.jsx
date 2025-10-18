function Button({ text, customStyle, icon: Icon, iconStyle, fn }) {
  return (
    <div
      className={`${customStyle} flex items-center justify-center gap-2 rounded-full shadow-header cursor-pointer 885px:text-sm text-lg`}
      onClick={fn}
    >
      {Icon && <Icon className={iconStyle} />}
      {text && text}
    </div>
  );
}

export default Button;
