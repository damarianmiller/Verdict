'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ButtonProps {
    className?: string;

    icon?: string;
    label?: string;
    link?: string;
    onClick?: () => void;
}

export default function Button({ className, icon, label, link, onClick }: ButtonProps) {
    const pathname = usePathname();
    const isActive = link && (pathname === "/" + link || pathname === link);

    if (link) {
        return (
            <Link href={link} className={"button " + (isActive ? "active " : " ") + (className ? className : "")} onClick={onClick}>
                {icon && <i className={"icon fa-solid fa-" + icon}></i>}
                {label && <label>{label}</label>}
            </Link>
        );
    }
    return (
        <button className={"button " + className} onClick={onClick}>
            {icon && <i className={"icon fa-solid fa-" + icon}></i>}
            {label && <label>{label}</label>}
        </button>
    );
}