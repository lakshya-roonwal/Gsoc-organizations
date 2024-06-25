const LoadingSkeleton = () => {
  return (
    <div className="min-h-screen">
      {/* Header Section With Org. Name */}
      <main className="px-4 py-20 bg-[#0079ff]">
        <div className="max-w-6xl mx-auto">
          <div className="h-20 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="mt-4 h-4 w-1/3 bg-gray-300 rounded-md animate-pulse"></div>
        </div>
      </main>
      {/* Mid Section With Org Details */}
      <section className="bg-white text-black rounded-t-3xl pt-10 pb-20 px-4">
        <div className="max-w-6xl mx-auto flex justify-between gap-10 flex-col sm:flex-row animate-pulse">
          <div className="flex flex-col gap-8">
            <div>
              <div className="h-6 bg-gray-300 rounded-md w-32"></div>
              <div className="flex flex-wrap gap-2 mt-2">
                {Array(4)
                  .fill("")
                  .map((_, idx) => (
                    <div
                      key={idx}
                      className="h-6 bg-gray-300 rounded-md w-24"
                    ></div>
                  ))}
              </div>
            </div>
            <div>
              <div className="h-6 bg-gray-300 rounded-md w-32"></div>
              <div className="flex flex-wrap gap-2 mt-2">
                {Array(4)
                  .fill("")
                  .map((_, idx) => (
                    <div
                      key={idx}
                      className="h-6 bg-gray-300 rounded-md w-24"
                    ></div>
                  ))}
              </div>
            </div>
            <div>
              <div className="h-6 bg-gray-300 rounded-md w-48"></div>
            </div>
          </div>

          <div>
            {/* Socials */}
            <div className="flex flex-col w-full gap-4 p-4 px-8 rounded-md shadow-md bg-white min-w-[20rem]">
              {Array(3)
                .fill("")
                .map((_, idx) => (
                    <div className='flex gap-2' key={idx}>
                        <div className="h-6 w-6 bg-gray-300 rounded-full w-full"></div>
                        <div className="h-6 bg-gray-300 rounded-md w-full"></div>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoadingSkeleton;
