import Image from "next/image"

export function RobotImage() {
  return (
    <div className="flex gap-x-2">
      <Image src="/assets/robot-profile.webp" alt="reflex-robot-image" width={50} height={50} className="rounded-full" priority={true} />
    </div>
  );
}