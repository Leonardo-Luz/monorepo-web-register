import React from "react"

type NavbarLinkProps = {
    children: React.ReactNode
}

export const NavbarLink = ( {children }: NavbarLinkProps) =>
{
    return (
        <a>{children}</a>
    )
}