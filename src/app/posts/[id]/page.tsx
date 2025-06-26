"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import NotFound from "./NotFound";
import { useParams } from "next/navigation";

export default function PostPage() {
  const { id } = useParams();
  const { posts } = useSelector((state: RootState) => state.posts);
  const post = posts.filter((post) => post._id === id);

  if (post.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/">
          <Button
            variant="outline"
            className="mb-6 bg-white text-black cursor-pointer dark:text-white dark:opacity-85 dark:hover:opacity-100"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Posts
          </Button>
        </Link>

        <Card>
          <CardHeader>
            <CardTitle className="text-3xl">{post[0].title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">{post[0].body}</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
