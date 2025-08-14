'use client';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Button from "../components/Button";
/* Components */

/* Styles */
import "../styles/main.scss";
import "../styles/view.scss";
import "../styles/topbar.scss";
import "../styles/bottombar.scss";




function Topbar() {
    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => setNavOpen((open) => !open);
    const pathname = usePathname();
    useEffect(() => {
        setNavOpen(false);
    }, [pathname]);


    return (
        <header className="topbar">
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


type Action = { icon: string; label: string; onClick: () => void };
function BottomBar() {
    const pathname = usePathname();
    // Example: customize actions for each route
    let actions: Action[] = [];
    if (pathname === "/") {
        actions = [
            { icon: "plus", label: "New Proposal", onClick: () => alert("New Proposal") },
        ];
    } else if (pathname.startsWith("/proposals")) {
        actions = [
            { icon: "filter", label: "Filter", onClick: () => alert("Filter Proposals") },
            { icon: "sort", label: "Sort", onClick: () => alert("Sort Proposals") },
        ];
    } else if (pathname.startsWith("/vote")) {
        actions = [
            { icon: "check", label: "Submit Vote", onClick: () => alert("Submit Vote") },
        ];
    } else if (pathname.startsWith("/results")) {
        actions = [
            { icon: "download", label: "Export Results", onClick: () => alert("Export Results") },
        ];
    }
    return (
        <footer className="bottombar">
            {actions.map((action, i) => (
                <Button key={i} icon={action.icon} label={action.label} onClick={action.onClick} />
            ))}
        </footer>
    );
}

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
