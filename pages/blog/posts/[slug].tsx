import axios from 'axios';
import { useEffect,useState } from 'react';
import { NavBar, PostPageHero, Article, Wrapper, SideBar ,FloatingMenu} from 'components/blog';
import { registerView } from 'lib/analytics';
import { NextSeo } from 'next-seo';
import Link from 'next/link';
import Head from 'next/head';
import useSmoothScroll from 'hooks/useSmoothScroll';
import { Post } from 'types/post';
import { BiShareAlt } from 'react-icons/bi';
import { BiCommentDetail } from 'react-icons/bi';
import Footer from "components/tool-page/footer";
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";

const SocialMedia = [
    {
        name: "Github",
        icon: <IoLogoGithub />,
        url: "https://github.com/kkupgrader",
    },
    {
        name: "Instagram",
        icon: <IoLogoInstagram />,
        url: "https://www.instagram.com/kanakkholwal/",
    },
    {
        name: "LinkedIn",
        icon: <IoLogoLinkedin />,
        url: "https://www.linkedin.com/in/kanak-kholwal/",
    },
    {
        name: "Twitter",
        icon: <IoLogoTwitter />,
        url: "https://twitter.com/KanakKholwal",
    },
]
export async function getStaticPaths() {
    try {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/posts/all`);
        const paths = data.posts?.map((post: Post) => ({
            params: {
                slug: post.slug,
            },
        }));

        return {
            paths,
            fallback: true,
        };
    } catch (error) {
        console.log("Error during path generation:", error);

        return {
            paths: [],
            fallback: true,
        };
    }
}

export async function getStaticProps({ params }) {
    try {
        const { data } = await axios.post(`${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/posts/${params.slug ?? ""}`);

        const post: Post = data.post;
        if (!(post?.title && post?.description && post?.image && post?.content && post?.slug)) {
            return {
                notFound: true,
            };
        }

        return {
            props: {
                post,
            },
            revalidate: 60,
        };
    } catch (error) {
        console.log("Error during page generation using slug:", error);
        return {
            notFound: true,
            props: {
                post: null,
              },
            revalidate: 60,
        };
    }
}

export default function Post(
    { post }
        : {
            post: Post
        }
) {
    useSmoothScroll();
    const  [isClapped, setIsClapped] = useState(false);
    const [claps, setClaps] = useState(post?.claps ?? 0);
    const clapThePost = async () => {
        try {
            setClaps(claps => (Number(claps) + 1));
            await axios.post(`/api/posts/${post?._id}/clap`);
            setIsClapped(true);
            const clappedPosts = JSON.parse(localStorage.getItem('clappedPosts') ?? '[]');
            !clappedPosts.includes(post?._id) && clappedPosts.push(post?._id);
            localStorage.setItem('clappedPosts', JSON.stringify(clappedPosts));
            setClaps(post?.claps ? Number(post.claps) + 1 : 0);
            console.log("Clapped")
        } catch (error) {
            console.log("Error during clapping the post:", error);
            setClaps(post?.claps ?? 0);
        }
    }

    useEffect(() => {
        registerView({ title: post?.title, type: 'article', slug: `/blog/posts/${post?.slug}` ,postId: post?._id});
    
        const clappedPosts = JSON.parse(localStorage.getItem('clappedPosts') ?? '[]');
        if (clappedPosts.includes(post?._id)) {
            setIsClapped(true);
            console.log("Already clapped")
        }
        
    }, []);
    
    if(!post) return null;
    return (
        <div className='Blog'>
            <NextSeo
                title={post?.title}
                description={post?.description}
                canonical={`${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/posts/${post?.slug}`}
                openGraph={{
                    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/blog/posts/${post?.slug}`,
                    title: post?.title,
                    description: post?.description,
                    images: [
                        {
                            url: post?.image,
                            width: 800,
                            height: 600,
                            alt: post?.title,
                            type: 'image/png',
                        },
                        {
                            url: post?.image,
                            width: 900,
                            height: 800,
                            alt: post?.title,
                            type: 'image/png',
                        },
                    ],
                    siteName: process.env.NEXT_PUBLIC_WEBSITE_NAME,
                }}
                twitter={{
                    handle: '@kanakkholwal',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />
            <Head>
                {/* keyword */}
                <meta name="keywords" content={post?.labels?.join(",")} />
            </Head>
            <NavBar />
            <PostPageHero title={post?.title} description={post?.description} />
            <Wrapper>
                <Article post={post} />
                <SideBar />
            </Wrapper>
            <FloatingMenu>
                    <button className="ActionButton" onClick={() =>{
                        if (!isClapped) {
                            clapThePost();
                        }
                        else
                            console.log("Already clapped")
                    }}>
                        <svg fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 297.221 297.221" xmlSpace="preserve">
		<g>
			<path d="M283.762,32.835c2.705-1.913,3.346-5.658,1.432-8.363c-1.914-2.705-5.657-3.347-8.363-1.432l-14.984,10.602
		c-2.705,1.913-3.346,5.658-1.432,8.363c1.169,1.652,3.022,2.535,4.902,2.535c1.198,0,2.408-0.358,3.461-1.104L283.762,32.835z" />
			<path d="M244.064,29.387c0.695,0.262,1.409,0.386,2.11,0.386c2.428,0,4.713-1.484,5.617-3.891l6.46-17.182
		c1.166-3.101-0.403-6.561-3.505-7.727c-3.101-1.167-6.562,0.404-7.728,3.505l-6.46,17.182
		C239.393,24.761,240.962,28.221,244.064,29.387z" />
			<path d="M291.223,55.611c-0.041,0-0.082,0-0.124,0l-18.351,0.154c-3.313,0.067-5.944,2.605-5.877,5.918
		c0.066,3.271,2.739,5.928,5.997,5.928c0.041,0,0.082,0,0.124,0l18.351-0.313c3.313-0.068,5.944-2.732,5.877-6.045
		C297.154,57.982,294.481,55.611,291.223,55.611z" />
			<path d="M254.2,147.154c-3.073-2.433-6.711-4.089-10.557-4.867c0.254-0.46,0.491-0.928,0.715-1.403l2.408-2.408
		c9.274-9.275,10.248-23.874,2.264-33.961c-3.769-4.761-9.001-7.925-14.812-9.106c0.415-0.764,0.783-1.545,1.117-2.338
		c6.316-9.149,6.213-21.445-0.782-30.283c-3.77-4.764-9.004-7.938-14.818-9.117c4.8-8.826,4.187-19.826-2.225-27.925
		c-4.848-6.125-12.109-9.639-19.923-9.639c-6.257,0-12.16,2.236-16.792,6.33c-0.701-3.979-2.363-7.822-5.012-11.169
		c-4.849-6.125-12.11-9.638-19.924-9.639l0,0c-6.79,0-13.164,2.635-17.947,7.418l-60.84,60.84l-0.232-8.12
		c-0.107-13.83-11.392-25.049-25.247-25.049c-13.604,0-24.729,10.815-25.229,24.298l-12.146,88.306l-9.983,11.604
		c-5.983,6.957-5.582,17.481,0.915,23.962L19.987,199.7c-4.574,6.881-3.773,16.266,2.206,22.23l69.667,69.557
		c3.329,3.321,7.748,5.148,12.446,5.148c3.857,0,7.668-1.295,10.729-3.645l14.544-11.168c13.991-3.305,29.416-10.813,45.874-22.33
		c14.371-10.058,29.962-23.46,46.337-39.836l34.631-34.631c5.107-5.107,7.795-12.188,7.375-19.427
		C263.376,158.371,259.879,151.649,254.2,147.154z M188.124,32.009c2.603-2.602,6.032-3.903,9.462-3.903
		c3.915,0,7.831,1.695,10.515,5.086c4.256,5.377,3.51,13.18-1.339,18.028l-6.177,6.176c-0.952,0.635-1.879,1.314-2.747,2.083
		c-0.701-3.98-2.364-7.823-5.013-11.169c-3.257-4.114-7.604-7.043-12.475-8.527L188.124,32.009z M146.397,17.532
		c2.602-2.602,6.032-3.903,9.462-3.903c3.916,0.001,7.831,1.696,10.515,5.087c4.256,5.377,3.51,13.179-1.339,18.027l-70.919,70.186
		l-0.233-8.119c-0.061-7.825-3.7-14.812-9.356-19.405L146.397,17.532z M13.624,176.391c-2.082-2.078-2.209-5.41-0.291-7.64
		l12.281-14.277c0.006-0.007,0.011-0.017,0.012-0.026l12.72-92.483c0-7.286,5.961-13.247,13.247-13.247
		c7.286,0,13.248,5.961,13.248,13.247L65.186,74c-11.988,1.646-21.322,11.733-21.78,24.057l-12.145,88.307l-3.533,4.108
		L13.624,176.391z M247.935,176.539l-34.63,34.631c-29.577,29.577-60.494,53.318-87.653,59.237
		c-0.825,0.181-1.601,0.528-2.271,1.043l-15.655,12.022c-1.014,0.779-2.219,1.162-3.419,1.162c-1.443,0-2.88-0.555-3.968-1.641
		l-69.671-69.56c-2.083-2.077-2.21-5.409-0.291-7.64l12.28-14.276c0.007-0.008,0.011-0.017,0.013-0.026l12.719-92.483
		c0-7.286,5.962-13.248,13.248-13.248c7.286,0,13.247,5.962,13.247,13.248l0.626,21.824c0.104,3.626,3.087,5.987,6.191,5.987
		c1.514,0,3.058-0.563,4.309-1.813l70.431-70.431c2.603-2.603,6.031-3.903,9.462-3.903c3.915,0,7.831,1.695,10.515,5.086
		c4.256,5.377,3.509,13.18-1.34,18.028l-48.518,48.518c-2.519,2.52-2.519,6.603,0,9.121l0,0c1.275,1.275,2.946,1.913,4.617,1.913
		s3.343-0.638,4.617-1.913l62.374-62.373c2.602-2.603,6.031-3.903,9.462-3.903c3.915,0.001,7.831,1.696,10.515,5.087
		c4.256,5.376,3.509,13.179-1.34,18.027l-62.081,62.081c-2.553,2.554-2.553,6.692,0,9.246c1.258,1.258,2.906,1.887,4.556,1.887
		c1.648,0,3.297-0.629,4.555-1.887l48.811-48.81c2.603-2.603,6.032-3.903,9.462-3.903c3.915,0,7.831,1.695,10.515,5.087
		c4.256,5.376,3.509,13.179-1.34,18.027l-48.349,48.35c-2.612,2.611-2.612,6.847,0,9.458l0.078,0.079
		c1.207,1.207,2.789,1.81,4.37,1.81c1.582,0,3.164-0.603,4.37-1.81l29.974-29.974c2.701-2.701,6.317-4.129,9.921-4.129
		c2.867,0,5.726,0.904,8.107,2.789C253.114,161.598,253.508,170.967,247.935,176.539z" />
		</g>
	                    </svg>
                        <span className="clap-count">{claps.toString()}</span>
                    </button>
                    <Link href="#share_wrapper" className="ActionButton">
                        <BiShareAlt/>
                        <span>Share</span>
                    </Link>
                    <Link href="#comments"  className="ActionButton">
                        <BiCommentDetail/>
                        <span>Comments</span>
                    </Link>
            </FloatingMenu>
            <Footer socialMedia={SocialMedia} style={{
                "--theme-rgb":"var(--blog-theme-rgb)",
            }}/>

        </div>
    );
}
