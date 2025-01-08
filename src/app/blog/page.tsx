



// const Blog = () => {

//     const posts = getAllPosts();
//     return (
//         <div className="container mx-auto p-4">
//             <h1 className="text-3xl font-bold mb-6">Blog</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {posts.map((blog) => (
//                     <div key={blog.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
//                         <Image src={blog.image} alt={blog.title} width={500} height={300} className="w-full h-64 object-cover" />
//                         <div className="p-4">
//                             <h2 className="text-xl font-semibold">{blog.title}</h2>
//                             <p className="text-gray-600">{blog.description}</p>
//                             <p className="text-gray-500 text-sm">By {blog.author} on {new Date(blog.date).toLocaleDateString()}</p>
//                             <a href={`/blogpost/${blog.slug}`} className="text-blue-500 hover:underline">Read more</a>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default Blog;

// app/page.js
import { getAllPosts } from '@/lib/posts';

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-6">Amaan Posts</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {posts.map((post) => (
        <div key={post.slug} className="border-2 border-gray-200 shadow-md rounded-lg shadow-md overflow-hidden">
         
          <div className="h-64">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </div>
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="mb-4">{post.description}</p>
            <p className=" text-sm">By {post.author} on {new Date(post.date).toLocaleDateString()}</p>
            <a href={`/posts/${post.slug}`} className="text-blue-500 hover:underline mt-2 inline-block">Read more</a>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
}