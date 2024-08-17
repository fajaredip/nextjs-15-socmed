import { PostData } from "@/lib/types";
import Link from "next/link";
import UserAvatar from "../UserAvatar";
import { formatRelativeDate } from "@/lib/utils";

interface PostProps {
  post: PostData;
}

export default function Post({ post }: PostProps) {
  return (
    <article className="my-5 space-y-3 rounded-2xl bg-muted p-5 shadow-sm">
      <div className="flex flex-wrap gap-4">
        <Link href={`/users/${post.user?.avatarUrl}`}>
          <UserAvatar avatarUrl={post.user?.avatarUrl} />
        </Link>
        <div>
          <Link
            href={`/users/${post.user?.avatarUrl}`}
            className="block font-medium hover:underline"
          >
            {post.user?.displayName}
          </Link>
          <Link
            href={`post/${post.id}`}
            className="block text-sm text-muted-foreground hover:underline"
          >
            {formatRelativeDate(post.createdAt)}
          </Link>
        </div>
      </div>
      <div className="whitespace-pre-line break-words">{post.content}</div>
    </article>
  );
}
