import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function Navbar() {
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    toast.success("Sucessfully Logged Out");
    navigate("/");
  }

  return (
    <div className="navbar bg-black shadow-md shadow-blue-400">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Campaings</a>
            </li>
            <li>
              <a>History</a>
            </li>
            <li>
              <a>profile</a>
            </li>
          </ul>
        </div>
        <h1 className="btn btn-ghost text-xl font-extrabold text-blue-600">
          DonaTrack
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-slate-300">
          <li>
            <a className="hover:text-white">Dashboard</a>
          </li>
          <li>
            <a className="hover:text-white">Campaings</a>
          </li>
          <li>
            <a className="hover:text-white">History</a>
          </li>
          <li>
            <a className="hover:text-white">Profile</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <h1 className="btn font-bold text-blue-600" onClick={logout}>
          Logout
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
