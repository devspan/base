export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="relative flex h-10 w-10">
        <div className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></div>
        <div className="relative inline-flex rounded-full h-10 w-10 bg-primary"></div>
      </div>
    </div>
  )
} 