import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import NavigationBar from "../components/NavigationBar.tsx";

export default function Layout(){
    return (
        <>
            <NavigationBar />
            <Container>

                <Outlet />
            </Container>
        </>
    )
}