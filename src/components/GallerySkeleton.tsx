export default function GallerySkeleton() {
  const skeletonItems = Array.from({ length: 8 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {skeletonItems.map((_, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md p-3">
          <div className="w-full h-48 bg-gray-200 rounded animate-pulse"></div>
          <div className="mt-3 space-y-2">
            <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
            <div className="w-1/2 h-4 bg-gray-200 rounded animate-pulse"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
