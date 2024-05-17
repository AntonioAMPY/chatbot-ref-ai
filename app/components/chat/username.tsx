import { CircleImage } from "../common/circle-image";

export function UserName() {
  return (
    <div className="flex flex-row gap-x-2 items-center text-white rounded-sm mt-auto">
      <CircleImage
        src={"/icons/cat-user-profile-white.svg"}
        alt={"User profile photo - welcome"}
      />
      <h6>Username</h6>
    </div>
  );
}
