"use client";
import Image from "next/image";
import { CircleImage } from "../common/circle-image";
import { useCookies } from "next-client-cookies";
import { useRouter } from "next/navigation";
interface UserNameProps {
  userName: string;
}

export function UserName({ userName }: UserNameProps) {
  const router = useRouter();
  const cookies = useCookies();

  const deleteUserCookies = () => {
    cookies.remove("userId");
    cookies.remove("userName");
    router.push("/");
  };

  return (
    <div className="flex flex-row gap-x-2 items-center text-white rounded-sm mt-auto capitalize w-full justify-between">
      <div className="flex items-center gap-x-2">
        <CircleImage
          src={"/icons/cat-user-profile-white.svg"}
          alt={"User profile photo - welcome"}
        />
        <h3 className="font-bold">{userName}</h3>
      </div>
      <button
        className="flex items-center gap-x-2 hover:border-white hover:border-2 hover:rounded-sm p-1 hover:font-bold"
        onClick={() => deleteUserCookies()}
      >
        <Image src="/icons/logout.svg" width={28} height={28} alt="logout" />
        <h2>Logout</h2>
      </button>
    </div>
  );
}
