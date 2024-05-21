"use client";

import { CircleImage } from "../common/circle-image";

interface ProfileImageMessageProps {
  profileImage: string;
  altText: string;
}

export function ProfileImageMessage({
  profileImage,
  altText,
}: ProfileImageMessageProps) {
  return (
    <div className="flex-shrink-0" role="img" aria-label={altText}>
      <CircleImage width={40} height={40} src={profileImage} alt={altText} />
    </div>
  );
}

export default ProfileImageMessage;
