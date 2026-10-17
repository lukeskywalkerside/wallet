import React from 'react'
import type { JSX } from 'react/jsx-runtime'

// Component

        function SocialLink({
            icon,
            href
        }: {
            icon: React.ReactNode;
            href?: string;
        }) {
            return (
                <a href={href} rel={"noopener noreferrer"} target={"_blank"}>
                    {icon}
                </a>
            );
        }
    

export default SocialLink
