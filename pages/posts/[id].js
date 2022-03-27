import Head from 'next/head';
import Date from '../../components/date';
import Layout from '../../components/layout';
import { getMDXComponent } from "mdx-bundler/client";
import { useMemo, useState, useEffect } from "react";
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';


export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);

  return {
    props: {
      ...postData
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false
  }
}

export default function Post({ code, frontmatter }) {
  const PostContent = useMemo(() => getMDXComponent(code), [code]);

  return (
    <Layout>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>

      <article className={`${utilStyles.columnContainerLeft} ${utilStyles.containerLg}`}>
        <h1 className={utilStyles.headingXl}>{frontmatter.title}</h1>

        <div className={utilStyles.lightText}>
          <Date dateString={frontmatter.date} />
        </div>

        <div>
          <PostContent id='post-content' />
        </div>
      </article>
    </Layout>
  )
}