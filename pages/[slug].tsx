import fs from "fs";
import path from "path";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Head from "next/head";
import React from "react";
import { MarkdownStyles, PostDate } from "../src/components/Markdown";

export default function PostPage({
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>{source.frontmatter.title as string}</title>
      </Head>
      <MarkdownStyles>
        <PostDate>{source.frontmatter.date as string}</PostDate>
        <MDXRemote {...source} />
      </MarkdownStyles>
    </div>
  );
}
export async function getStaticPaths() {
  const articlesDirectory = path.join(process.cwd(), "articles");
  const filenames = fs.readdirSync(articlesDirectory);

  const paths = filenames
    .filter((filename) => filename.endsWith(".mdx"))
    .map((filename) => ({
      params: {
        slug: filename.replace(/\.mdx$/, ""),
      },
    }));

  return { paths, fallback: false };
}

export async function getStaticProps(
  ctx: GetStaticPropsContext<{
    slug: string;
  }>
) {
  const { slug } = ctx.params!;

  // retrieve the MDX blog post file associated
  // with the specified slug parameter
  const postFile = fs.readFileSync(`articles/${slug}.mdx`);

  // read the MDX serialized content along with the frontmatter
  // from the .mdx blog post file
  const mdxSource = await serialize(postFile, { parseFrontmatter: true });
  return {
    props: {
      source: mdxSource,
    },
    // enable ISR
    revalidate: 60,
  };
}
