import React from 'react';

interface InputProps {
    icon?: string;
    placeholder?: string;
    type?: string;
}

export default function Input({ icon, placeholder, type }: InputProps) {
    return (
        <div className="input-container">
            {icon && <i className={`icon fa-solid fa-${icon}`}></i>}
            <input placeholder={placeholder} type={type} />
        </div>
    );
}
