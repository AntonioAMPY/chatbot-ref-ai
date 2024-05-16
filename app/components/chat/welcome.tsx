import { Fragment } from "react";
import { CircleImage } from "../common/circle-image";

export function WelcomeUser() {
  return (
    <Fragment>
      <p className="text-white">Welcome to the chat room</p>
      <div className="flex flex-row gap-x-2 items-center text-white rounded-sm px-2">
        <CircleImage
          src={"/icons/cat-user-profile-white.svg"}
          alt={"User profile photo - welcome"}
        />
        <h6>Nombre usuario</h6>
      </div>
    </Fragment>
  );
}

export default WelcomeUser;
