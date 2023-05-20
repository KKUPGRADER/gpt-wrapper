import Header from "./header";
import Footer from "./footer";
import { MainWrapper, ContentWrapper, Hero } from "./wrapper";
import SideNav from "./sidenav";
import { IoLogoInstagram, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { RxDashboard } from "react-icons/rx";
import { TbTools,TbMessageDots } from "react-icons/tb";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

export { Header } from "./elements";

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
const userRoutes = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <RxDashboard />,
    },
    {
        title: "Tools",
        path: "/dashboard/tools",
        icon: <TbTools />,
    },

]
const routes = (userRole) => {
    if(userRole === "admin")
    return [
        {
            title: "Dashboard",
            path: "/dashboard/admin",
            icon: <MdOutlineAdminPanelSettings />,
        },
        {
            title: "Blog",
            path: "/dashboard/admin/blog",
            icon: <BsFillJournalBookmarkFill />,
        },
        {
            title: "Users",
            path: "/dashboard/admin/users",
            icon: <FiUsers />,
        },
        {
            title: "Messages",
            path: "/dashboard/admin/messages",
            icon: <TbMessageDots />,
            
        },
        {
            title: "Notifications",
            path: "/dashboard/admin/notifications",
            icon: <BiBell />,
        },
        ...userRoutes
    ].filter((value, index, self) => {
        return self.indexOf(value) === index;
      });
    else 
    { 
        // return unique from array 
        return [...userRoutes]
    }
}
export default function DashboardPage({ headerChildren, children, user }) {


    return (
        <>
            <SideNav routes={routes(user.role)}  user={user} />
            <MainWrapper id="main_wrapper" className="isSidenavOpen">
                <Header user={user} routes={routes(user.role)}>
                    {headerChildren ? headerChildren : null}
                </Header>
                <ContentWrapper>
                    {children}
                </ContentWrapper>
                <Footer socialMedia={SocialMedia} />

            </MainWrapper>
        </>
    )
}
export function AdminDashboard({ headerChildren, children, user }) {


    return (
        <>
            <SideNav routes={routes(user.role)} user={user} />
            <MainWrapper id="main_wrapper" className="isSidenavOpen">
                <Header user={user} routes={routes(user.role)}>
                    {headerChildren ? headerChildren : null}
                </Header>
                <ContentWrapper>
                    {children}
                </ContentWrapper>
                <Footer socialMedia={SocialMedia} />

            </MainWrapper>
        </>
    )
}
