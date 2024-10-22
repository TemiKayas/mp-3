import { Routes, Route, createBrowserRouter, RouterProvider} from "react-router-dom";
import { styled } from "styled-components";

import Home from './Components/Home.tsx'
import Nav from "./Components/Nav.tsx";
import Awards from "./Components/Awards.tsx";
import Education from "./Components/Education.tsx";
import Hackathons from "./Components/Hackathons.tsx";
import Projects from "./Components/Projects.tsx";
import Work from "./Components/Work.tsx";
import Header from "./Components/Header.tsx";
import Footer from "./Components/Footer.tsx";
import Credits from "./Components/Credits.tsx";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin:0 auto;
`;

const Container = styled.div`
    font-size: calc(3px + 2vw);
    display: flex;
    flex-direction: row;
    margin-top: 1%;
    margin-bottom: 1%;
    @media screen and (max-width: 750px){
            flex-direction: column;
        }
`;

function Root() {
    return (
        <Wrapper>
            <Header/>
            <Container>
                <Nav/>
                <Routes>
                    <Route path={`/`} element={<Home/>}/>
                    <Route path={'/awards'} element={<Awards/>}/>
                    <Route path={'/education'} element={<Education/>}/>
                    <Route path={'/hackathons'} element={<Hackathons/>}/>
                    <Route path={'/projects'} element={<Projects/>}/>
                    <Route path={'/work'} element={<Work/>}/>
                    <Route path={'/credits'} element={<Credits/>}/>
                </Routes>
            </Container>
            <Footer/>
        </Wrapper>

    );
}

const router = createBrowserRouter(
    [{path: "*", Component: Root}]
);

export default function App() {
    return (
        <>

            <RouterProvider router={router}/>

        </>
    );
}
