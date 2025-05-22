import React, { useState, useEffect, ComponentType } from "react"; // Added ComponentType
import { ArticleList, Contact, Hero, Resume } from "@/components"; // Updated path
import { ArticlePreview } from "../../types/articles"; // Path should remain as is

// Defined MdxModule interface
interface MdxModule {
  frontmatter: Record<string, unknown>;
  default: ComponentType; // Or specific component type if known
  [key: string]: unknown;
}

// Function to get the slug from a file path
function getSlugFromPath(path: string): string {
  const parts = path.split('/');
  const fileName = parts[parts.length - 1];
  return fileName.replace('.mdx', '');
}

async function fetchArticlePreviews(): Promise<ArticlePreview[]> {
  console.log("Fetching article previews...");
  // Use import.meta.glob to get all .mdx files.
  // The path is relative to the current file (src/pages/HomePage.tsx)
  const mdxModules = import.meta.glob('../../articles/*.mdx');
  const previews: ArticlePreview[] = [];

  for (const path in mdxModules) {
    try {
      const moduleLoader = mdxModules[path];
      // The module type might need to be asserted if frontmatter is not directly visible
      const module: MdxModule = await moduleLoader() as MdxModule; // Typed module

      if (module && module.frontmatter) {
        previews.push({
          ...(module.frontmatter as Omit<ArticlePreview, 'path'>), // Cast frontmatter to ensure type compatibility
          path: getSlugFromPath(path), // Extract slug from path
        });
      } else {
        console.warn(`Frontmatter not found in module: ${path}`);
      }
    } catch (error) {
      console.error(`Error loading or processing module ${path}:`, error);
    }
  }
  console.log("🚀 ~ fetchArticlePreviews ~ previews:", previews);
  return previews;
}

export default function HomePage() {
  const [articlePreviews, setArticlePreviews] = useState<ArticlePreview[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticlePreviews()
      .then(previews => {
        setArticlePreviews(previews);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching article previews:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading articles...</div>;
  }

  return (
    <>
      <Hero />
      <ArticleList articles={articlePreviews} />
      <Resume />
      <Contact />
    </>
  );
}
