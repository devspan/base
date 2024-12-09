import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="space-y-8">
      {/* Hero Section Skeleton */}
      <div className="container px-4 py-12">
        <div className="space-y-4 max-w-3xl mx-auto text-center">
          <Skeleton className="h-12 w-3/4 mx-auto" /> {/* Title */}
          <Skeleton className="h-4 w-2/3 mx-auto" /> {/* Subtitle */}
          <div className="flex justify-center gap-4 pt-4">
            <Skeleton className="h-10 w-32" /> {/* Button */}
            <Skeleton className="h-10 w-32" /> {/* Button */}
          </div>
        </div>
      </div>

      {/* Features Section Skeleton */}
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-3">
              <Skeleton className="h-10 w-10 rounded-full" /> {/* Icon */}
              <Skeleton className="h-6 w-3/4" /> {/* Title */}
              <Skeleton className="h-4 w-full" /> {/* Description */}
              <Skeleton className="h-4 w-5/6" />
            </div>
          ))}
        </div>
      </div>

      {/* Tokenomics Section Skeleton */}
      <div className="container px-4">
        <div className="space-y-4">
          <Skeleton className="h-8 w-48 mx-auto" /> {/* Section title */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Skeleton className="h-[300px] rounded-xl" /> {/* Chart */}
            <div className="space-y-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex items-center gap-4">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-4 w-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 