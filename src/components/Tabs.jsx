import styled from "styled-components";
import { useState } from "react";


const TabHeader = styled.div`
    position:relative;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    scroll-snap-type: x mandatory;
    overflow-x: auto;
    scroll-behavior: smooth;
    &::-webkit-scrollbar {
        display: none;
    }
    background-color: var(--card-bg);
    padding:0.75rem 0.5rem;
    border-radius:0.5rem;
`;
const TabToggle = styled.button`
display:inline-flex;
align-items:center;
justify-content:center;
gap:0.5rem;
user-select: none;
border: 0;
margin: 0.25rem;
flex: 1 0 auto;
transition: all .3s cubic-bezier(.075,.82,.165,1);
font-weight: 600;
letter-spacing:0.0625rem;
padding:var(--btn-padding-y,0.5rem) var(--btn-padding-x,1.25rem);
line-height:var(--btn-line-height,1.75);
color:rgba(var(--theme-rgb),0.9);
background:rgba(var(--theme-rgb),0.1);
text-align: center;
cursor: pointer;
border-radius: 0.375rem;
max-width: max-content;

  ${props =>
        props.active &&
        `color:rgba(var(--theme-rgb),1);
        background:rgba(var(--theme-rgb),0.3);
    `
    }
`;
const TabBody = styled.div`
display:block;
padding:0.75rem 1rem;
margin:0.75rem auto;
`;
const TabContent = styled.div`
${({ open }) => open ?
        `display:block;`
        :
        `display:none`

    }
`;

export default function Tabs({ TabList }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            {TabList?.length > 0 ?
                <>
                    <TabHeader>
                        {TabList.map(({ title }, index) => {
                            return (
                                <TabToggle key={index}
                                    onClick={
                                        () => {
                                            setSelectedIndex(index);
                                        }
                                    }
                                    active={selectedIndex === index ? true : false}>
                                    {title}
                                </TabToggle>
                            )
                        })}
                    </TabHeader>
                    <TabBody>
                        {TabList.map(({ content }, index) => {
                            return (
                                <TabContent key={index}
                                    open={selectedIndex === index ? true : false}
                                >
                                    {content}
                                </TabContent>
                            )
                        })}
                    </TabBody>
                </>
                : null}
        </>
    )
}