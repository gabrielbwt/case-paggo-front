"use client"

import { signIn } from "next-auth/react"
import Image from "next/image"

export default function LoginButton() {
    return (
        <button className="w-full rounded border border-blue-600 bg-blue-600 px-12 
        py-3 text-sm font-mediumtext-white hover:opacity-90 transition-opacity duration-200 focus:outline-none 
        focus:ring active:text-opacity-75 sm:w-auto flex items-center justify-center gap-2" onClick={() => signIn("github", { callbackUrl: "/paginateste" })}>
            <Image alt='Github logo' src='https://img.icons8.com/m_rounded/200/FFFFFF/github.png' height={500} width={500} style={{width: '25px'}}/> 
            Login com Github</button>
    )
}