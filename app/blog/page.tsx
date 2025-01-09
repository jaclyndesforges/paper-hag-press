'use client';
import React, { useEffect, useState } from 'react';
import { fetchDatabase } from '../../utils/notion';
import { Newspaper } from 'lucide-react';

// Define the Post type
type Post = {
  properties: {
    Title?: {
      title: { text: { content: string } }[];
    };
    Content?: {
      rich_text: { text: { content: string } }[];
    };
    PublishedDate?: {
      date: { start: string };
    };
  };
};

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const databaseId = process.env.NEXT_PUBLIC_NOTION_DATABASE_ID as string;
      const data = await fetchDatabase(databaseId);
      setPosts(data);
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8 flex items-center gap-2">
        <Newspaper className="w-6 h-6" />
        Blog Posts
      </h1>
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <article key={index} className="border-b border-gray-300 pb-4 mb-4">
            <p className="text-sm text-gray-500 mb-2">
              {post.properties?.PublishedDate?.date?.start || "No Date"}
            </p>
            <h2 className="text-xl font-bold mb-2">
              {post.properties?.Title?.title[0]?.text?.content || "Untitled"}
            </h2>
            <p className="text-gray-700">
              {post.properties?.Content?.rich_text[0]?.text?.content || "No content available."}
            </p>
          </article>
        ))
      ) : (
        <p>No blog posts available at the moment.</p>
      )}
    </div>
  );
};

export default Blog;
