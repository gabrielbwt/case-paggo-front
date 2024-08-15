import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import FileManager from "@/components/invoices/FileManager";


export default async function Home() {

    const session = await getServerSession();    
    
    if (!session?.user?.name) {
        redirect("/");
    }

    return (
        <main className="bg-gray-900 text-white min-h-screen h-auto">
            <Navbar user={session.user} />
            <div className="w-full flex items-center justify-center mt-[-3.5rem]">
                <FileManager user={session.user}/>
            </div>
        </main>
    );
}
