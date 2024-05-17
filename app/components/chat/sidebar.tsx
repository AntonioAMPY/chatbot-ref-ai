import { CircleImage } from "../common/circle-image";
import { UserName } from "./username";
import WelcomeUser from "./welcome";

export function Sidebar() {
  return (
    <aside className="flex flex-col justify-center items-center bg-slate-950 py-10 px-10 h-full">
      <div className="flex flex-col justify-center items-center gap-y-8 flex-grow">
        <div className="flex flex-row gap-x-2 items-center">
          <CircleImage src={"/icons/robot-profile.svg"} alt={"ReflexBot"} />
          <h1 className="text-3xl font-bold text-white">ReflexBot</h1>
        </div>
        <WelcomeUser />
      </div>
      <UserName />
    </aside>
  );
}
