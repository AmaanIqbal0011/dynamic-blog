import Hero from "@/components/hero";
import Showcase from "@/components/showcase";
import Testimonial from "@/components/testimonial";
import Feedback from "@/components/feedback";
import Image from "next/image";

export default function Homepage() {
  return (
    <>
      <Hero />
      <Testimonial />
      <Showcase />
      <Feedback />
    </>
  );
}








// const Blog = () => {

//   const posts = getAllPosts();
//   return (
//     <div className="container mx-auto p-4">
//         <h1 className="text-3xl font-bold mb-6">Blog</h1>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {posts.map((blog) => (
//                 <div key={blog.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
//                     <Image src={blog.image} alt={blog.title} width={500} height={300} className="w-full h-64 object-cover" />
//                     <div className="p-4">
//                         <h2 className="text-xl font-semibold">{blog.title}</h2>
//                         <p className="text-gray-600">{blog.description}</p>
//                         <p className="text-gray-500 text-sm">By {blog.author} on {new Date(blog.date).toLocaleDateString()}</p>
//                         <a href={`/blogpost/${blog.slug}`} className="text-blue-500 hover:underline">Read more</a>
//                     </div>
//                 </div>
//             ))}
//     </div>
//         </div>
    
    
//   );
// };

// export default Blog;
  
  
  





















  

  

  




  

  




  













