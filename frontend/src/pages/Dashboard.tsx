import Navbar from "../components/Navbar";
import Main from "../components/Dashboard";

function Dashboard() {
  return (
    <div className="w-full h-full bg-black">
      <div>
        <Navbar />
      </div>
      <div>
        <Main />
      </div>
    </div>
  );
}

export default Dashboard;
