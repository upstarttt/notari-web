import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import React from "react";

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

interface BlogPost {
  slug: string;
  title?: string;
  date?: string;
  image?: string;
  summary?: string;
}

function getPosts(): BlogPost[] {
  const files = fs.readdirSync(BLOG_DIR);
  return files.filter(f => f.endsWith('.mdx')).map(filename => {
    const filePath = path.join(BLOG_DIR, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return {
      slug: filename.replace(/\.mdx$/, ''),
      ...(data as Partial<BlogPost>),
    };
  }).sort((a, b) => new Date(b.date || '').getTime() - new Date(a.date || '').getTime());
}

export default function BlogPage() {
  const posts = getPosts();
  return (
    <main className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-extrabold mb-10 text-blue-700">Blog Notari</h1>
      <div className="space-y-8">
        {posts.map(post => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block group rounded-xl border border-gray-100 hover:shadow-lg transition overflow-hidden bg-white">
            {post.image && (
              <img src={post.image} alt={post.title || ''} className="w-full max-h-56 object-cover rounded-t-xl" />
            )}
            <div className="p-6">
              <h2 className="text-2xl font-bold text-blue-700 group-hover:underline mb-2">{post.title}</h2>
              <p className="text-gray-500 text-sm mb-2">{new Date(post.date || '').toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p className="text-gray-700 mb-2">{post.summary}</p>
              <span className="text-blue-600 font-semibold group-hover:underline">Leer artículo →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
} 