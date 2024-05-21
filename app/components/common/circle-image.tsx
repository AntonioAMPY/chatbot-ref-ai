import Image, { StaticImageData } from "next/image"
interface CircleImageProps {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
}

export function CircleImage({ src, alt, width = 50, height= 50 }: CircleImageProps) {
  return (
    <div className="flex gap-x-2">
      <Image src={src} alt={alt} width={width} height={height} className="rounded-full" priority={true} />
    </div>
  );
}