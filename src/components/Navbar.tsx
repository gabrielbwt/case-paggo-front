"use client"

import { useState } from "react";
import MenuNavbar from "./MenuNavbar";
import { User } from "@/@types";
import Image from "next/image";


interface NavbarProps {
    user?: User;
}

export default function Navbar({ user }: NavbarProps) {

    const [showNavbarMenuOptions, setShowNavbarMenuOptions] = useState(false);


    return (
        <section>
            {showNavbarMenuOptions && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowNavbarMenuOptions(false)}
                ></div>
            )}
            <div></div>
            <header className="h-[3.5rem] flex-1 flex items-center justify-between lg:justify-end px-[1.5rem] bg-gray-900 text-white">
                <nav className="flex basis-full items-center w-full mx-auto">
                    <div className="w-full flex items-center justify-end">
                        <div className="flex flex-row items-center justify-end gap-1">
                            <div className="hs-dropdown [--placement:bottom-right] relative inline-flex">
                                <button onClick={() => setShowNavbarMenuOptions(true)} id="hs-dropdown-account" type="button" className="size-[38px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-full border border-transparent text-gray-800 focus:outline-none disabled:opacity-50 disabled:pointer-events-none " aria-haspopup="menu" aria-expanded="false" aria-label="Dropdown">
                                    <Image width={500} height={500} className="shrink-0 size-[34px] rounded-full" src={user?.image as string} alt="Avatar" />
                                </button>
                                <MenuNavbar showMenuOptions={showNavbarMenuOptions} user={user} />
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="h-[1px] bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 w-full" />
        </section>
    )
}


