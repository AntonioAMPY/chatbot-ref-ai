import { Fragment } from "react";
import { CircleImage } from "../common/circle-image";

export function WelcomeUser() {
  return (
    <Fragment>
      <div className="flex flex-row gap-x-2 items-center">
        <CircleImage src={"/icons/robot-profile.svg"} alt={"ReflexBot"} />
        <h1 className="text-3xl font-bold text-white">ReflexBot</h1>
      </div>
      <p className="text-white max-w-64">
        Make new connections and share experiences. ✨
      </p>
    </Fragment>
  );
}

export default WelcomeUser;
