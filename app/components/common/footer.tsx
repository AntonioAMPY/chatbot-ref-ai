import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="flex flex-row justify-center mt-auto items-center bg-gray-200 text-black py-2 w-full gap-x-2 "
      role="contentinfo"
    >
      <p className="font-semibold">Powered by</p>
      <Image
        width={100}
        height={13}
        src="/icons/reflex-ai-logo.svg"
        alt="reflex-robot-image"
      />
    </footer>
  );
}

export default Footer;
