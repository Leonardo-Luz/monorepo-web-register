import React from "react"

type NavbarLinkProps = {
    children: React.ReactNode,
    link: string
}

export const NavbarLink = ( {children , link }: NavbarLinkProps) =>
{
    return (
        <a href={link}>{children}</a>
    )
}