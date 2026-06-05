const EmptyState = () => {
  return (
    <div className="bg-white rounded-xl border p-10 text-center">
      <h2 className="text-xl font-semibold">
        No internships found
      </h2>

      <p className="text-gray-500 mt-2">
        Try adjusting your filters
      </p>

    </div>
  );
};

export default EmptyState;