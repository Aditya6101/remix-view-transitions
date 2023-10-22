import { Link, unstable_useViewTransitionState } from "@remix-run/react";
import { blogs } from "~/data";

export default function Blog() {
  return (
    <div className="p-2">
      <h1 className="py-4 px-2 text-xl text-neutral-600 font-mono">
        Explore our writing!
      </h1>
      <div className="grid grid-cols-2 gap-8">
        {blogs.map((blog, index) => (
          <BlogCard
            index={index}
            key={blog.title}
            posterImage={blog.posterImage}
            title={blog.title}
            excerpt={blog.excerpt}
            to={`/blog/${blog.title}`}
          />
        ))}
      </div>
    </div>
  );
}

type Props = {
  index: number;
  posterImage: string;
  title: string;
  excerpt: string;
  to: string;
};

export function BlogCard({ index, posterImage, title, excerpt, to }: Props) {
  const isTransitioning = unstable_useViewTransitionState(to);

  return index === 0 ? (
    <div className="p-2 col-span-2" key={title}>
      <Link
        to={to}
        style={{
          viewTransitionName: isTransitioning ? "blog-hero" : "",
        }}
        unstable_viewTransition
      >
        <h1 className="text-3xl font-bold font-serif pb-4">{title}</h1>
        <img
          className="w-full h-96 object-cover"
          src={posterImage}
          alt={title}
        />
        <p className="text-base text-neutral-300 pt-2 ">{excerpt}</p>
      </Link>
    </div>
  ) : (
    <div key={title}>
      <Link
        to={to}
        style={{
          viewTransitionName: isTransitioning ? "blog-hero" : "",
        }}
        unstable_viewTransition
      >
        <img
          src={posterImage}
          alt={title}
          className="h-64 w-full object-cover"
        />
        <h1 className="text-xl font-bold font-serif pt-4 pb-2">{title}</h1>
        <p className="text-base text-neutral-300 pt-2 ">{excerpt}</p>
      </Link>
    </div>
  );
}
