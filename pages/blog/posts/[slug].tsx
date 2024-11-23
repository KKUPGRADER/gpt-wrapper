import axios from 'axios';
import { Article, FloatingMenu, NavBar, PostPageHero, SideBar, Wrapper } from 'components/blog';
import Footer from "components/tool-page/footer";
import useSmoothScroll from 'hooks/useSmoothScroll';
import { registerView } from 'lib/analytics';
import dbConnect from 'lib/dbConnect';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BiCommentDetail, BiShareAlt } from 'react-icons/bi';
import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { getPostBySlug } from "src/utils/blog";
import { PUBLICPostViewType } from 'types/post';


// export async function getStaticPaths() {
//     try {
//         await dbConnect()
//         const { posts } = await getAllPublishedPostsForMapping();
        
//         const paths = posts.map((post: {
//             slug: string,
//             _id: string
//         }) => ({
//             params: {
//                 slug: post.slug,
//             },
//         }));

//         return {
//             paths,
//             fallback: true,
//         };
//     } catch (error) {
//         console.log("Error during path generation:", error);

//         return {
//             paths: [],
//             fallback: true,
//         };
//     }
// }

export async function getServerSideProps({ params }) {

    return {
      redirect: {
        permanent: false,
        destination: `https://nexonauts.com/blog/articles/${params.slug}?force_redirect=true`,
      },
    };



}

export default function Post(
  

  return null;
  
}
