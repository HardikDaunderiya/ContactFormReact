
const Navigation = () => {
  return (
    <>
      <nav className="border-slate-800 shadow-md " >
        <div className="flex justify-between items-center">
          <div className="mx-4 cursor-pointer">
            <img src="/public/Images/Logo.svg"  />
          </div>
          <ul className="mx-4 flex items-center cursor-pointer">
            <li className="mx-3 font-bold cursor-pointer">HOME</li>
            <li className="mx-3 font-bold cursor-pointer">ABOUT</li>
            <li className="mx-3 font-bold cursor-pointer">CONTACT</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
