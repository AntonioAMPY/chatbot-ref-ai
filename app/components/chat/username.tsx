"use client";
import { CircleImage } from "../common/circle-image";

interface UserNameProps {
  userName: string;
}

export function UserName({ userName }: UserNameProps) {
  return (
    <div className="flex flex-row gap-x-2 items-center text-white rounded-sm mt-auto capitalize">
      <CircleImage
        src={"/icons/cat-user-profile-white.svg"}
        alt={"User profile photo - welcome"}
      />
      <h3>{userName}</h3>
    </div>
  );
}
