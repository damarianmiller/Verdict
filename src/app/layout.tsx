'use client';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "../styles/main.scss";

import Button from "../components/Button";


function Topbar() {
    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => setNavOpen((open) => !open);
    const pathname = usePathname();
    useEffect(() => {
        setNavOpen(false);
    }, [pathname]);
    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [navOpen]);


    return (
        <header className="topbar" style={navOpen ? { bottom: 0 } : {}}>
            <header>
                <Button icon="bars" onClick={toggleNav} />
                <section>
                    <img></img>
                    <h1>Verdict</h1>
                </section>
                <Button icon="user-circle" />
            </header>
            <main>
                <nav className={"nav fullpage" + (navOpen ? " open" : "")}>
                    <Button icon="home" label="Home" link="/" />
                    <Button icon="paper-plane" label="Proposals" link="proposals" />
                    <Button icon="check-to-slot" label="Vote" link="vote" />
                    <Button icon="chart-bar" label="Results" link="results" />
                    <Button icon="gear" label="Settings" link="settings" />
                </nav>
            </main>
        </header>
    );
}

const BottomBar = () => {
    return (
        <footer className="bottombar">

        </footer>
    );
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <head>
                <title>Verdict App</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <script src="https://kit.fontawesome.com/0563d23eda.js" crossOrigin="anonymous"></script>
            </head>
            <body>
                <Topbar />
                <main className="view">
                    {children}
                </main>
                <BottomBar />
            </body>
        </html>
    );
}
