import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import PostsList from "@/components/PostList";

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Mini Blog</h1>
        <Suspense fallback={<PostsListSkeleton />}>
          <PostsList />
        </Suspense>
      </div>
    </div>
  );
}

function PostsListSkeleton() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="border rounded-lg p-6">
          <Skeleton className="h-6 w-3/4 mb-3" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-2/3" />
        </div>
      ))}
    </div>
  );
}
