import ToolsList from "src/pages/Tools/ToolsList";
import React from 'react';
import ToolPage from "components/tool-page";
import { useSession } from "next-auth/react";
import PageMetaData from "components/PageMetaData";

import Head from "next/head";



export async function getStaticPaths() {
    // Return a list of possible value for toolName
    const paths = ToolsList.map(({ path }) => {
        return {
            params: {
                toolName: path.split("/").pop()
            }
        };
    });
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {

    const componentPath: string = ToolsList.find(({ path }) => path.split("/").pop() === params.toolName).path;


    return { props: { slug: componentPath } }
}



export default function Tool({ slug }): JSX.Element {
    const { data: session } = useSession();

    const ToolComponent = ToolsList.find(({ path }) => path === slug);

    return (
        <>
            <Head>
                <link
                    rel="canonical"
                    href={process.env.WEBSITE_URL || 'https://kkupgrader.eu.org' + slug}
                    key="canonical"
                />
            </Head>
            <ToolPage headerChildren={null} session={session || null} metadata={{
                title: ToolComponent.title,
                description: ToolComponent.description
            }}>
                {ToolComponent.Component}

            </ToolPage>
            <PageMetaData PageTitle={ToolComponent.title} PageDescription={ToolComponent.description} SiteName={''} PageUrl={''} PreviewImage={''} PageType={''} PageLocale={''} />
        </>
    )
}
