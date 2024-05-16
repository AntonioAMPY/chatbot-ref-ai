import WelcomeUser from "./welcome";

export function Sidebar() {
  return (
    <aside className="flex flex-col justify-center items-center gap-y-5 bg-black py-10 px-10 h-full">
      <h1 className="text-3xl font-bold text-white">ReflexBot</h1>
      <WelcomeUser />
    </aside>
  );
}
