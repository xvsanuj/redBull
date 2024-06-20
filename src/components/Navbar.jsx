import { RiMenu2Line } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineUser } from "react-icons/ai";
const Navbar = () => {
  return (
    <>
      <nav className="h-[10vh] border-b-[1px] border-zinc-700 w-full flex items-center justify-between px-20">
        <div className="flex items-center gap-6 text-xs">
          <RiMenu2Line className="text-xl" />
          <h1>TV</h1>
          <h1>EVENTS</h1>
          <h1>ATHLETES</h1>
        </div>
           <div className="logo">
          <img 
            src="https://www.redbull.com/v3/resources/images/client/header/redbullcom-logo_double-with-text.svg"
            alt=""
            className="h-6"
          />
        </div>
        <div className="flex items-center gap-10 text-xs">
          <div className="flex gap-6">
            <h1>PRODUCTS</h1>
            <h1>COMPANY</h1>
          </div>
          <div className="flex gap-4">
            <FaRegStar className="text-xl" />
            <CiSearch className="text-xl" />
            <AiOutlineUser className="text-xl" />
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;