import { PostModel } from "../api";

export function PostList({ posts }: { posts: PostModel[] }) {
  if (!posts) return <p>No posts found</p>;
  return (
    <>
      {posts.map((post) => (
        <article key={post.id} className="py-1">
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <small>
                <b>
                  <a href={`#author-${post.id}`}>{post.author?.userName}</a>
                </b>{" "}
                <small>on</small> {new Date(post.publishedAt).toLocaleString()!}
              </small>
              <p>{post.content}</p>
              <div className="card-actions justify-end">
                <a href={`#post-${post.id}`} className="btn btn-primary">
                  Read
                </a>
              </div>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
