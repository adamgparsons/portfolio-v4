import React, { useState, useEffect, ComponentType } from 'react';
import { useParams } from 'react-router-dom';
import { MarkdownStyles, PostDate } from '@/components/Markdown'; // Updated path

// Defined MdxModule and updated ArticleSource interfaces
interface MdxModule {
  frontmatter: Record<string, unknown>; // Use unknown instead of any
  default: ComponentType;
  [key: string]: unknown;
}

interface ArticleSource {
  frontmatter: Record<string, unknown>; // Use unknown instead of any
  Content: ComponentType; // Changed from ComponentType<any>
}

async function fetchArticleData(slug: string): Promise<ArticleSource | null> {
  console.log(`Fetching article data for slug: ${slug}...`);
  if (!slug) return null;

  try {
    // Dynamically import the MDX file
    // The path is relative to the current file (src/pages/ArticlePage.tsx)
    const module: MdxModule = await import(`../../articles/${slug}.mdx`);

    if (module && module.frontmatter && module.default) {
      return {
        frontmatter: module.frontmatter,
        Content: module.default,
      };
    } else {
      console.warn(`Required exports (frontmatter, default) not found in module for slug: ${slug}`);
      return null;
    }
  } catch (error) {
    console.error(`Error loading MDX module for slug ${slug}:`, error);
    // This could be a 404 if the file doesn't exist, or a build error if MDX is malformed.
    return null;
  }
}

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const [articleSource, setArticleSource] = useState<ArticleSource | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      setLoading(true);
      fetchArticleData(slug)
        .then(source => {
          setArticleSource(source);
          setLoading(false);
        })
        .catch(error => {
          console.error("Error fetching article data:", error);
          setLoading(false);
        });
    } else {
      // Handle case where slug is undefined (though React Router should ensure it's there)
      setLoading(false);
      setArticleSource(null);
    }
  }, [slug]);

  if (loading) {
    return <div>Loading article...</div>;
  }

  if (!articleSource || !articleSource.Content) {
    return <div>Article not found or could not be loaded.</div>;
  }

  const { frontmatter, Content } = articleSource;

  return (
    <div>
      {/* Head component replacement will be handled later (e.g., with react-helmet-async) */}
      <MarkdownStyles>
        {frontmatter.date && <PostDate>{frontmatter.date}</PostDate>}
        <h1>{frontmatter.title || 'Untitled Article'}</h1>
        <Content /> {/* Render the MDX content here */}
      </MarkdownStyles>
    </div>
  );
}
