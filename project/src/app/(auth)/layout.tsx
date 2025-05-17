import Link from "next/link"
const navLinks = [
    {name: 'Register', href: '/register'},
    {name: 'Login', href: '/login'},
    {name: 'ForgotPassword', href: '/forgot-password'}
]

export default function AuthLayout({ children } : {
    children : React.ReactNode
}) {
    return(
        <body>
            {navLinks.map((item) => {return(
                <Link href={item.href}>{item.name}</Link>
            )})}
            {children}
        </body>
    )
}