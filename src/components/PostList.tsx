"use client";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fetchAdminPosts } from "@/services/api";
import { useEffect } from "react";
import { AppDispatch, RootState } from "@/store";
import { useDispatch, useSelector } from "react-redux";

export default function PostsList() {
  const dispatch = useDispatch<AppDispatch>();
  const { posts } = useSelector((state: RootState) => state.posts);
  console.log(posts);

  const fetchPosts = async () => {
    try {
      await fetchAdminPosts(dispatch);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (posts?.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">
          No posts available at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts?.length > 0 &&
        posts?.map((post) => (
          <Link key={post._id} href={`/posts/${post._id}`}>
            <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground line-clamp-3">
                  {post.body.substring(0, 100)}...
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
    </div>
  );
}
