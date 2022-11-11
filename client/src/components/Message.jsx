import React from "react";
import { MoonLoader } from "react-spinners";
import normalRobot from "../assets/robot.png";
import deadRobot from "../assets/robot-dead.png";
import sadRobot from "../assets/robot-sad.png";
import friendlyRobot from "../assets/friendly-robot.png";

export default function Message(props) {
  return (
    <div className="flex justify-center mt-24">
      <div className="flex-col ">
        {props.robot == "normal" ? (
          <>
            <img src={normalRobot} className="mx-auto" alt="" />
            <p className="text-3xl pb-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              {props.message}
            </p>
          </>
        ) : props.robot == "sad" ? (
          <>
            <img src={sadRobot} className="mx-auto" alt="" />
            <p className="text-3xl pb-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              {props.message}
            </p>
          </>
        ) : props.robot == "dead" ? (
          <>
            <img src={deadRobot} className="mx-auto" alt="" />
            <p className="text-3xl pb-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              {props.message}
            </p>
          </>
        ) : props.robot == "friend" ? (
          <>
            <img src={friendlyRobot} className="mx-auto" alt="" />
            <p className="text-3xl pb-5 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              {props.message}
            </p>
            <MoonLoader className="mx-auto" color="white" />
          </>
        ) : null}
      </div>
    </div>
  );
}
