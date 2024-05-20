import { Fragment } from "react";
import { CircleImage } from "../common/circle-image";

export function WelcomeUser() {
  return (
    <Fragment>
      <div className="flex flex-row gap-x-2 items-center">
        <CircleImage src={"/icons/robot-profile.svg"} alt={"ReflexBot"} />
        <h1 className="text-3xl font-bold text-white">ReflexBot</h1>
      </div>
      <p className="text-white max-w-80 text-balance text-center">
        Welcome! Let&apos;s talk about emotional intelligence. Ask me anything 🎊!
      </p>
    </Fragment>
  );
}

export default WelcomeUser;
