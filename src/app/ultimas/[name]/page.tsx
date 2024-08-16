import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import ExtractionCard from "@/components/invoices/ExtractionCard";

interface LastExtractionProps {
    message: string;
    data: [
        {
            id: string;
            user_id: string;
            title: string;
            content: string;
            additional_info: string
            created_at: string;
        }
    ]
}

export default async function Ultimas({ params }: { params: { name: string } }) {
    const session = await getServerSession();

    if (!session?.user?.name) {
        redirect("/");
    }

    if (session.user.name !== params.name) {
        redirect(`/ultimas/${session.user.name}`);
    }

    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

    const response = await fetch(`${backendUrl}/${params.name}`, {
        method: "GET",
    });

    
    if (!response.ok) {
        console.error("Failed to fetch data");
        
    }

    const data: LastExtractionProps = await response.json();
    const lastExtractions = data?.data?.sort((a, b) => {
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    });

    return (
        <main className="bg-gray-900 text-white min-h-screen h-auto">
            <Navbar user={session.user} />
            <div className="w-full flex items-center justify-center mt-[0rem]">
                <div className="max-w-[50rem] flex items-center justify-start flex-col gap-[1rem] pb-[3rem]">
                    {lastExtractions?.map((item: any, index: number) => {
                        return (
                            <ExtractionCard key={index} imageUrl={item.image_url} title={item.title} content={item.content} extra_informations={item.additional_info} />
                        );
                    })}
                </div>
            </div>
        </main>
    );
}
