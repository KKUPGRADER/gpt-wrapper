import styled from "styled-components";

export const MainWrapper = styled.div`
width: 100%;
height: 100%;
padding-inline-start: var(--sidenav-width);
transition: all 0.3s ease-in-out;
padding-inline: 0;
// max-width: var(--max-width);
position: relative;
@media (min-width: var(--max-width)) {
    &.isSidenavOpen:has(~.isOpen){
        padding-left:var(--sidenav-width);
    }
}
`;
export const ContentWrapper = styled.div`
width: 100%;
height: 100%;
padding: 2rem 1rem;
margin-inline: auto;
`;
export const Hero = styled.div`
width: 100%;
height:auto;
padding: 2rem 1rem;
text-align: center;
margin-block: 1rem 5rem;

h1{
    font-weight: 600;
    margin-bottom:2rem;
}
h5{
    color:rgba(var(--text-rgb),0.7);
    margin-bottom:2rem;
}
`;

// export const PageWrapper = styled.div`
// width:100%;
// height:100%;
// position:relative;
// display:flex;
// align-items:stretch;
// `;