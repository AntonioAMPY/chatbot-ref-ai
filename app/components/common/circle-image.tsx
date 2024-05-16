import Image, { StaticImageData } from "next/image"

interface CircleImageProps {
  src: string | StaticImageData;
  alt: string;
}

export function CircleImage({ src, alt }: CircleImageProps) {
  return (
    <div className="flex gap-x-2">
      <Image src={src} alt={alt} width={50} height={50} className="rounded-full" priority={true} />
    </div>
  );
}