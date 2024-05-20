export function timeStampFormat(timestamp: number) {
  return new Date(timestamp).toLocaleString([], {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}

export function minutesAgo(timestamp: number) {
  const currentTime = new Date().getTime();
  const serverTime = new Date(timestamp).getTime();
  const timeDifference = currentTime - serverTime;
  const minutes = Math.floor(timeDifference / (1000 * 60));
  return `${minutes}`;
}