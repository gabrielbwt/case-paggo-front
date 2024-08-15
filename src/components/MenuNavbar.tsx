"use client"

import { User } from "@/@types";

interface MenuNavbarProps {
    showMenuOptions: boolean;
    user?: User;
}

import { signOut } from "next-auth/react";

export default function MenuNavbar({ user, showMenuOptions }: MenuNavbarProps) {

    return (
        <div className={`absolute top-10 end-0 z-50 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg ${showMenuOptions ? 'block' : 'hidden'}`}>
            <div className="py-3 px-5 bg-gray-100 rounded-t-lg">
                <p className="text-sm text-gray-500 ">Conectado como:</p>
                <p className="text-sm font-medium text-gray-800 ">{user?.name}</p>
            </div>
            <div className="p-1.5 space-y-0.5">
                <a className="flex items-center gap-x-3.5 py-2 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 " href="/paginateste">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="24px" fill="#000"><path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/></svg>
                    Pagina Inicial
                </a>
                <a className="flex items-center gap-x-3.5 py-2 px-2 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 " href={`/ultimas/${user?.name}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="22" fill="#000"><path d="M480-144q-70 0-131.13-26.6-61.14-26.6-106.4-71.87-45.27-45.26-71.87-106.4Q144-410 144-480t26.6-131.13q26.6-61.14 71.87-106.4 45.26-45.27 106.4-71.87Q410-816 480-816q81 0 149.5 35T744-686v-130h72v240H576v-72h107q-35.91-44.8-88.45-70.4Q542-744 480-744q-109 0-186.5 77.5T216-480q0 109 77.5 186.5T480-216q109 0 186.5-77.5T744-480h72q0 140-98 238t-238 98Zm100-200L444-480v-192h72v162l115 115-51 51Z" /></svg>
                    Últimas Notas Fiscais
                </a>
                <button onClick={() => signOut()} className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 -960 960 960" width="20" fill="#000"><path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" /></svg>
                    Logout
                </button>
            </div>
        </div>
    )
}


