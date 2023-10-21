import { Link } from "@remix-run/react";

const blogs = [
  {
    title: "Remix is cool 🥶",
    posterImage:
      "https://images.pexels.com/photos/1995842/pexels-photo-1995842.jpeg?auto=compress&cs=tinysrgb&w=600",
    excerpt:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius architecto deleniti neque maiores pariatur laudantium. Deleniti labore corrupti, assumenda vero tempore explicabo, voluptatem itaque quis ducimus quae facere hic nulla?",
  },
  {
    title: "Tech Trends of 2023",
    posterImage:
      "https://images.pexels.com/photos/16037279/pexels-photo-16037279/free-photo-of-a-laptop-computer-with-a-green-website-on-it.jpeg?auto=compress&cs=tinysrgb&w=600",
    excerpt:
      "Stay up to date with the latest technology trends in 2023. From AI to blockchain, find out what's shaping the future of tech.",
  },
  {
    title: "Hiking Adventures Around the World",
    posterImage:
      "https://images.pexels.com/photos/2132126/pexels-photo-2132126.jpeg?auto=compress&cs=tinysrgb&w=600",
    excerpt:
      "Embark on thrilling hiking journeys to the most picturesque and challenging trails worldwide. Get ready to conquer the great outdoors.",
  },
  {
    title: "Mastering Productivity: Tips and Tricks",
    posterImage:
      "https://images.pexels.com/photos/4065145/pexels-photo-4065145.jpeg?auto=compress&cs=tinysrgb&w=600",
    excerpt:
      "Boost your productivity with expert tips and tricks. Learn how to manage your time, stay organized, and accomplish more in less time.",
  },
  {
    title: "Art and Culture Highlights of 2023",
    posterImage:
      "https://images.pexels.com/photos/8887203/pexels-photo-8887203.jpeg?auto=compress&cs=tinysrgb&w=600",
    excerpt:
      "Immerse yourself in the vibrant world of art and culture. Explore upcoming exhibitions, festivals, and creative expressions for 2023.",
  },
];

export default function Blog() {
  return (
    <div className="p-2">
      <h1 className="py-4 px-2 text-xl text-neutral-600 font-mono">
        Explore our writing!
      </h1>

      <div className="grid grid-cols-2 gap-8">
        {blogs.map((blog, index) =>
          index === 0 ? (
            <div className="p-2 col-span-2" key={blog.title}>
              <Link
                to={`/blog/${blog.title}`}
                unstable_viewTransition
                style={{ viewTransitionName: "blog-hero" }}
              >
                <h1 className="text-3xl font-bold font-serif pb-4">
                  {blog.title}
                </h1>
                <img
                  className="w-full h-96 object-cover"
                  src={blog.posterImage}
                  alt={blog.title}
                />
                <p className="text-base text-neutral-300 pt-2 ">
                  {blog.excerpt}
                </p>
              </Link>
            </div>
          ) : (
            <div key={blog.title}>
              <Link to={`/blog/${blog.title}`}>
                <img
                  src={blog.posterImage}
                  alt={blog.title}
                  className="h-64 w-full object-cover"
                />
                <h1 className="text-xl font-bold font-serif pt-4 pb-2">
                  {blog.title}
                </h1>
                <p className="text-base text-neutral-300 pt-2 ">
                  {blog.excerpt}
                </p>
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}
