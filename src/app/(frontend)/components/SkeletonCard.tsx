const SkeletonCard = () => {
  return (
    <div className="flex flex-col items-center min-w-[200px] max-w-[220px] text-center sm:min-w-[150px] sm:max-w-[180px] md:min-w-[180px] md:max-w-[200px] animate-pulse">
      <div className="text-[54px] font-extrabold text-gray-200 bg-gray-200 rounded w-16 h-10" />
      <div className="relative w-[96px] h-[96px] my-3 rounded-t-full rounded-b-md bg-gray-300 shadow-md flex items-center justify-center" />
      <div className="h-4 w-3/4 bg-gray-300 rounded mt-2" />
      <div className="h-3 w-full bg-gray-200 rounded mt-2" />
    </div>
  )
}
export default SkeletonCard
