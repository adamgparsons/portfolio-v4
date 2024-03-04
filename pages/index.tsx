import { ArticleList, Contact, Hero, Resume } from "../src/components";
import { InferGetStaticPropsType } from "next";
import React from "react";
import { ArticlePreview } from "../types/articles";
import path from "path";
import fs from "fs";
import { serialize } from "next-mdx-remote/serialize";

export default function Index({
  articlePreviews,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Hero />
      <ArticleList articles={articlePreviews} />
      <Resume />
      <Contact />
    </>
  );
}

export async function getStaticProps() {
  // get all MDX files
  const postFilePaths = fs
    .readdirSync("articles")
    .filter((postFilePath: string) => {
      return path.extname(postFilePath).toLowerCase() === ".mdx";
    });

  const articlePreviews: ArticlePreview[] = [];

  // read the frontmatter for each file
  for (const postFilePath of postFilePaths) {
    const articleFile = fs.readFileSync(`articles/${postFilePath}`, "utf8");

    // serialize the MDX content to a React-compatible format
    // and parse the frontmatter
    const serializedPost = await serialize(articleFile, {
      parseFrontmatter: true,
    });

    articlePreviews.push({
      ...serializedPost.frontmatter,
      path: postFilePath.replace(".mdx", ""),
    } as ArticlePreview);
    console.log("🚀 ~ getStaticProps ~ articlePreviews:", articlePreviews);
  }

  return {
    props: {
      articlePreviews: articlePreviews,
      pageTitle: "Adam Parsons - Frontend Developer",
    },
    revalidate: 60,
  };
}
