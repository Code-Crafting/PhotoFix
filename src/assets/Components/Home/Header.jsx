function Header() {
  return (
    <div className="fixed w-full z-[9999]">
      <div className="con mt-6 grid place-items-center">
        <div className="bg-secondary-dark text-textPrimary px-4 py-2 rounded-full w-3xl flex items-center justify-betweens shadow-header ">
          <h1 className="text-xl font-medium">PhotoFix</h1>
        </div>
      </div>
    </div>
  );
}
export default Header;
