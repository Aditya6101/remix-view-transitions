import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="py-4 px-2">
      <h1 className="text-3xl font-bold pb-4">Welcome to Remix</h1>
      <Link to="/blog" className="font-mono text-neutral-400 underline">
        Go to Blogs
      </Link>
    </div>
  );
}
