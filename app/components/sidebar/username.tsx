"use client";
import Image from "next/image";
import { CircleImage } from "../common/circle-image";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { ChatContext } from "@/app/chat/page";
interface UserNameProps {
  userName: string;
}

export function UserName({ userName }: UserNameProps) {
  const router = useRouter();
  const cookies = useCookies();

  const { isOpenMenu } = useContext(ChatContext);

  const deleteUserCookies = () => {
    cookies.remove("userId");
    cookies.remove("userName");
    router.push("/");
  };

  return (
    <div
      className={`flex ${
        isOpenMenu ? "flex-row" : "flex-col gap-y-5 relative"
      } gap-x-2 items-center text-white rounded-sm mt-auto capitalize w-full justify-between`}
      role="contentinfo"
    >
      <div className="flex items-center gap-x-2">
        <CircleImage
          src={"/icons/cat-user-profile-white.svg"}
          alt={"User profile photo - welcome"}
        />
        <h3
          className={`font-bold ${isOpenMenu ? "block" : "hidden"}`}
          id="userName"
        >
          {userName}
        </h3>
      </div>
      <button
        className={`flex ${
          isOpenMenu
            ? "items-center"
            : "w-full justify-center relative left-[3px]"
        } items-center gap-x-2 hover:border-white hover:rounded-sm hover:font-bold`}
        onClick={() => deleteUserCookies()}
        type="button"
        aria-labelledby="logoutButton"
      >
        <Image
          src="/icons/logout.svg"
          width={isOpenMenu ? 28 : 40}
          height={isOpenMenu ? 28 : 40}
          alt="logout"
        />
        <h2 className={`${isOpenMenu ? "block" : "hidden"}`} id="logoutButton">
          Logout
        </h2>
      </button>
    </div>
  );
}
