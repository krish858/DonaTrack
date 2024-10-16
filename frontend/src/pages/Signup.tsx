import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import toast from "react-hot-toast";
import axios from "axios";

export default function SignUpPage() {
  const navigate = useNavigate();
  const [username, SetUsername] = useState<string>("");
  const [firstname, SetFirstname] = useState<string>("");
  const [lastname, SetLastname] = useState<string>("");
  const [email, SetEmail] = useState<string>("");
  const [password, SetPassword] = useState<string>("");

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const data = {
      username: username,
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/signup",
        data
      );
      const msg = await response.data;
      if (msg.msg == "Invalid Inputs") {
        toast.error("Invalid Inputs");
      }
      if (msg.msg == "username exsists") {
        toast.error("Account with this username already exsists");
      }
      if (msg.msg == "email exsists") {
        toast.error("Account with this email already exsists");
      }
      if (msg.msg == "user created") {
        toast.success("User Created");
        await localStorage.setItem("token", msg.jwt);
        navigate("/dashboard");
      }
      if (msg.msg == "error") {
        toast.error("Some Error Occoured");
      }
    } catch (error) {
      toast.error("Some Error Occoured");
    }
  }

  return (
    <div className="w-full h-full bg-[#1e1e1e]">
      <div className="w-full h-full flex justify-center items-center">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden max-w-4xl w-full flex m-4">
          <div className="w-full lg:w-1/2 p-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Create your account
              </h2>
              <p className="text-gray-600 mb-8">
                Join us today and start your journey!
              </p>
            </div>
            <form onSubmit={onSubmit} className="space-y-4 lg:space-y-6">
              <div className="space-y-2">
                <TextField
                  label=" Username"
                  variant="standard"
                  required
                  className="w-full"
                  type="text"
                  value={username}
                  onChange={(e) => {
                    SetUsername(e.target.value);
                  }}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <TextField
                    label="firstname"
                    variant="standard"
                    required
                    className="w-full"
                    type="text"
                    value={firstname}
                    onChange={(e) => {
                      SetFirstname(e.target.value);
                    }}
                  />
                </div>
                <div className="space-y-2">
                  <TextField
                    label="lastname(optional)"
                    variant="standard"
                    className="w-full"
                    type="text"
                    value={lastname}
                    onChange={(e) => {
                      SetLastname(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className="space-y-2">
                <TextField
                  label="Email"
                  variant="standard"
                  required
                  className="w-full"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    SetEmail(e.target.value);
                  }}
                />
              </div>
              <div className="space-y-2">
                <TextField
                  label="Password"
                  variant="standard"
                  required
                  className="w-full"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    SetPassword(e.target.value);
                  }}
                />
              </div>
              <Button variant="contained" type="submit" className="w-full">
                Sign up
              </Button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <span
                className="font-medium text-primary hover:text-primary-dark cursor-pointer"
                onClick={() => {
                  navigate("/signin");
                }}
              >
                Sign in
              </span>
            </p>
          </div>
          <div
            className="hidden lg:block w-1/2 bg-cover bg-center"
            style={{
              backgroundImage: "url('/placeholder.svg?height=800&width=600')",
            }}
          >
            <div className="h-full flex flex-col justify-end p-12 bg-gradient-to-t from-black/60 to-transparent text-white">
              <h1 className="text-4xl font-bold mb-4">
                Welcome to our community
              </h1>
              <p className="text-xl">
                Start your amazing journey with us today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
