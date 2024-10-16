import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import toast from "react-hot-toast";
import axios from "axios";

function Signin() {
  const navigate = useNavigate();
  const [email, SetEmail] = useState<string>("");
  const [password, SetPassword] = useState<string>("");

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/signin",
        data
      );
      const msg = await response.data;
      if (msg.msg == "Invalid Inputs") {
        toast.error("Invalid Inputs");
      }
      if (msg.msg == "wrong credentials or no such user exsists") {
        toast.error("wrong credentials or no such user exsists");
      }
      if (msg.msg == "logged in") {
        toast.success("signed in");
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
            <div className="text-center lg:text-left">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Welcome back
              </h2>
              <p className="text-gray-600 mb-8">
                Sign in to your account to continue
              </p>
            </div>
            <form className="space-y-6" onSubmit={onSubmit}>
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
              <div className="flex items-center justify-between"></div>
              <Button variant="contained" className="w-full" type="submit">
                Sign in
              </Button>
            </form>
            <p className="mt-6 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <span
                className="font-medium text-primary hover:text-primary-dark cursor-pointer"
                onClick={() => {
                  navigate("/signup");
                }}
              >
                Sign up
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
              <h1 className="text-4xl font-bold mb-4">Welcome back</h1>
              <p className="text-xl">We're glad to see you again!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
