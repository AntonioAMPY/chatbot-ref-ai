import Link from "next/link";
import { CircleImage } from "./circle-image";

export function Footer() {
  return (
    <footer
      className="flex flex-row justify-center mt-auto items-center bg-gray-800 text-white py-2 w-full"
      role="contentinfo"
    >
      Powered by
      <CircleImage src="/icons/robot-profile.svg" alt="reflex-robot-image" />
      <div>
        <Link
          href="https://github.com/AntonioAMPY"
          target="_blank"
          rel="noopener noreferrer"
        >
          AntonioAMPY
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
