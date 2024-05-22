export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center overflow-hidden pb-2">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
      <p className="ml-2 text-gray-500">Loading messages...</p>
    </div>
  );
}
