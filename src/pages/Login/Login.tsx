import { Button } from "@/components/ui/button";
import React from "react";
import logo from "@/assets/react.svg";

export const Login: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-start">
      <div className="relative w-3/5 h-full items-center bg-gray-400 p-6">
        <div className="h-full flex flex-col justify-center items-center">
          <img src={logo} alt="" className="w-[500px]" />
          <img src={logo} alt="" className="w-[500px]" />
        </div>
      </div>
      <div className="w-2/5 h-full">
        <div className="flex flex-col p-20 gap-8 h-full justify-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-4xl font-semibold">Login</h1>
          </div>
          {/* <LoginForm /> */}
          <div className="my-5 flex items-center w-full">
            <div className="flex-grow border-t border-black me-2"></div>
            <Button variant={"link"}>Forgot Password?</Button>
            <div className="flex-grow border-t border-black ml-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
