import { Link } from "react-router-dom";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="p-4 fixed w-full z-20 bg-white/40 backdrop-blur-md">
      <div className="flex justify-between items-center max-w-md mx-auto">
        <span className="text-xl font-semibold">reachFence</span>
        <Link
          to="/add-contact"
          className="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Add Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
