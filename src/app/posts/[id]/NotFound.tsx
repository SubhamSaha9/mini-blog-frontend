import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The post you're looking for doesn't exist or has been removed.
        </p>
        <Link href="/">
          <Button
            variant="outline"
            className="bg-white text-black cursor-pointer dark:text-white dark:opacity-85 dark:hover:opacity-100"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Posts
          </Button>
        </Link>
      </div>
    </div>
  );
}
