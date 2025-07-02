import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';

export async function generateStaticParams() {
  const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');
  const files = fs.readdirSync(BLOG_DIR);
  return files.filter(f => f.endsWith('.mdx')).map(filename => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

export default async function BlogPostPage({ params }) {
  const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');
  const filePath = path.join(BLOG_DIR, `${params.slug}.mdx`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(fileContent);

  // Verifica si la imagen existe en el sistema de archivos
  let imageUrl = data.image;
  if (imageUrl) {
    const publicPath = path.join(process.cwd(), 'public', imageUrl.startsWith('/') ? imageUrl.slice(1) : imageUrl);
    if (!fs.existsSync(publicPath)) {
      imageUrl = '/blog/placeholder.png';
    }
  } else {
    imageUrl = '/blog/placeholder.png';
  }

  return (
    <main className="max-w-2xl mx-auto py-16 px-4">
      <Link href="/blog" className="text-blue-600 hover:underline mb-6 inline-block">← Volver al blog</Link>
      <img src={imageUrl} alt={data.title || 'Imagen no disponible'} className="w-full h-64 object-cover rounded-xl mb-6" />
      <h1 className="text-4xl font-extrabold text-blue-700 mb-2">{data.title}</h1>
      <p className="text-gray-500 text-sm mb-8">{new Date(data.date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      <article className="prose prose-blue max-w-none">
        <MDXRemote source={content} />
      </article>
    </main>
  );
} 