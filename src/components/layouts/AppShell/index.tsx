import React from "react"
import { useRouter } from "next/router";
import { Poppins } from "next/font/google";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import('../Navbar'))

type AppShellProps = {
    children: React.ReactNode;
}
const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const poppins = Poppins({
    subsets: ['latin'],
    weight: '400'
})

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    const { pathname } = useRouter();
    return (
        <div className={poppins.className}>
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
            {/* <Footer/> */}
        </div>
    )
}
export default AppShell