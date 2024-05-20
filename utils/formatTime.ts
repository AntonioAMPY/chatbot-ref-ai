export function timeStampFormat(timestamp: number) {
  return new Date(timestamp).toLocaleString([], {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
}
