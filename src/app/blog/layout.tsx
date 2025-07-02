export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center">
      <div
        className="w-full max-w-4xl bg-white shadow-lg rounded-xl mt-10 mb-10 p-6 prose prose-headings:text-blue-700 prose-h1:text-blue-700 prose-h2:text-blue-700 prose-h3:text-blue-700"
        style={{ color: '#171717' }}
      >
        {children}
      </div>
    </div>
  );
} 