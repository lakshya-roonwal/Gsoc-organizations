const CardSkeleton = () => (
  <div className="p-4 bg-white rounded-lg shadow-md animate-pulse">
    <div className="h-20 bg-gray-300 rounded-md mb-4"></div>
    <div className="h-4 bg-gray-300 rounded-md w-1/4 mx-auto mb-4"></div>
    <div className="h-8 bg-gray-300 rounded-md w-1/2 mb-2"></div>
    <div className="h-4 bg-gray-300 rounded-md w-1/4 mb-4"></div>
    <div className="flex flex-wrap gap-2 mb-4">
      {Array(4).fill("").map((_, idx) => (
        <div key={idx} className="h-4 bg-gray-300 rounded-full w-20"></div>
      ))}
    </div>
    <div className="h-6 bg-gray-300 rounded-md w-24"></div>
  </div>
);

const SkeletonLoadingComponent = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="px-4 py-8 bg-[#0079ff]">
        <div className="max-w-6xl mx-auto">
          <div className="h-12 bg-gray-300 rounded-md w-1/3 mb-4 animate-pulse"></div>
        </div>
      </header>
      <main className="px-4 py-10 animate-pulse">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 mb-6">
            {Array(13).fill("").map((_, idx) => (
              <div key={idx} className="h-8 bg-gray-300 rounded-full w-24"></div>
            ))}
          </div>
          <div className="mb-6">
            <div className="h-10 w-1/4 bg-gray-200 rounded-md w-full mb-4"></div>
            <div className='gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
            <div className="h-10 bg-gray-300 rounded-md w-full mb-4"></div>
            <div className="h-10 bg-gray-300 rounded-md w-full mb-4"></div>
            <div className="h-10 bg-gray-300 rounded-md w-full mb-4"></div>

            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Array(8).fill("").map((_, idx) => (
              <CardSkeleton key={idx} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default SkeletonLoadingComponent;
