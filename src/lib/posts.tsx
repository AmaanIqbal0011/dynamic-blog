import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Url } from 'next/dist/shared/lib/router/router';

// Define the type for post data
export interface Post {
  slug: string;
  title: string;
  date: string;
  content: string;
  description: string;
  author: string;
  image: string;
}

// Define the posts directory
const postsDir = path.join(process.cwd(), 'src/posts');

// Function to get all posts
export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDir);

  return fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '');
    const filePath = path.join(postsDir, fileName);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Ensure the necessary properties are included
    const post: Post = {
      slug,
      title: data.title,
      date: data.date,
      content,
      description: data.description || '', // default to empty string if missing
      author: data.author || '', // default to empty string if missing
      image: data.image || '', // default to empty string if missing (or change if image is not a string)
    };

    return post;
  });
}
