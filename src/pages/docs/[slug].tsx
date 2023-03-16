import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';

import path from 'node:path';
import fs from 'node:fs';

import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

import matter from 'gray-matter';

import { DocsTemplate } from 'templates';
import { Metadata } from 'types';

const DOCS_DIR = path.join(process.cwd(), 'contents', 'docs');

type DocsProps = {
  source: MDXRemoteSerializeResult;
  metadata: Metadata;
};

const Docs = ({ metadata, ...rest }: DocsProps) => {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>

      <DocsTemplate {...rest} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = fs.readdirSync(DOCS_DIR);

  const paths = slugs.map(slug => ({
    params: { slug: slug.replace(/\.md$/, '') },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<DocsProps> = async ({ params }) => {
  try {
    const { slug } = params;

    const filePath = path.join(DOCS_DIR, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');

    const { content, data } = matter(fileContent);
    const source = await serialize(content);

    return {
      props: {
        source,
        metadata: data as Metadata,
      },
    };
  } catch (err) {
    return {
      props: {} as DocsProps,
    };
  }
};

export default Docs;
