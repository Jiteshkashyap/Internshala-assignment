const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="flex gap-2">
        <div className="w-4 h-4 bg-[#00A5EC] rounded-full animate-bounce"></div>
        <div
          className="w-4 h-4 bg-[#00A5EC] rounded-full animate-bounce"
          style={{ animationDelay: "0.15s" }}
        ></div>
        <div
          className="w-4 h-4 bg-[#00A5EC] rounded-full animate-bounce"
          style={{ animationDelay: "0.3s" }}
        ></div>
      </div>

      <p className="mt-4 text-gray-500 text-sm">
        Loading internships...
      </p>
    </div>
  );
};

export default Loader;