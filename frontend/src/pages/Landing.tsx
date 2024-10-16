import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-full bg-black">
      <div className="h-full w-full flex justify-center items-center">
        <div className="flex flex-col items-center justify-between h-[350px] lg:h-[370px] space-y-6 ">
          <div>
            <h1 className="text-blue-500 text-4xl lg:text-5xl py-1 font-extrabold text-center">
              Donatrack
            </h1>
            <br />
            <br />
            <h1 className="text-blue-500 text-4xl lg:text-5xl py-1 font-semibold text-center">
              Change Lives,{" "}
              <span className="text-slate-400"> Track Impact</span>
            </h1>

            <h1 className="text-white lg:text-xl text-center">
              See the Impact of Your Generosity.
            </h1>
          </div>
          <div className="flex flex-col w-full items-center mt-10">
            <button
              type="button"
              onClick={() => {
                navigate("/signup");
              }}
              className="text-white font-semibold bg-blue-600 p-3 rounded-md"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
