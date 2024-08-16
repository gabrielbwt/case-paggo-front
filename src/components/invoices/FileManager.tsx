"use client"

import { useState } from "react";
import FileInput from "./FileInput";
import { ExtractInformation, User } from "@/@types";
import ExtractionCard from "./ExtractionCard";
import ExtractionCardSkeleton from "../skeletons/ExtractionCardSkeleton";
import ProgressBar from "../feedbacks/ProgressBar";
import ErrorMessage from "../feedbacks/ErrorMessage";
import SuccessMessage from "../feedbacks/SuccessMessage";

interface FileManagerProps{
    user: User
}

export default function FileManager({user}: FileManagerProps) {

    const [file, setFile] = useState<File | null>(null);
    const [extractInformation, setExtractInformation] = useState({} as ExtractInformation);
    const [isLoading, setIsLoading] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const hasExtractInformation = Object.keys(extractInformation).length > 0;

    async function handleSendFileAndExtractText() {

        if (!file) {
            return;
        }
        setIsLoading(true);
        setShowErrorMessage(false);
    
        const formData = new FormData();
        formData.append("file", file);
        formData.append("name", user?.name ?? '');

        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

        fetch(`${backendUrl}/upload/image`, {
            method: "POST",
            body: formData,
        })
        .then((response) => response.json())
        .then((data) => {
            setExtractInformation(data);
            setShowSuccessMessage(true);
        })
        .catch((error) => {
            console.error('Error:', error);
            setShowErrorMessage(true);
        })
        .finally(() => {
            setIsLoading(false);
        });
    }

    return (
        <div className={`max-w-[50rem] min-h-screen h-auto flex ${hasExtractInformation ? 'mt-[10rem]' : 'items-center'} justify-center flex-col gap-[1rem] pb-[3rem]`}>
            
            {(!hasExtractInformation && !isLoading) && <div className="mb-16">
                Escolha uma nota fiscal para extrair as informações.
            </div>}
            <FileInput isLoading={isLoading} setFile={setFile} handleSendFileAndExtractText={handleSendFileAndExtractText} />
            {showSuccessMessage ? <SuccessMessage /> : null}
            {showErrorMessage ? <ErrorMessage /> : null}
            {isLoading ? <ProgressBar isLoading={isLoading}/> : null}
            {isLoading ? <ExtractionCardSkeleton /> : null}
            {(hasExtractInformation && !isLoading) ? (
                <ExtractionCard
                    imageUrl={extractInformation.imageUrl}
                    title={extractInformation.response.title}
                    extra_informations={extractInformation.response.extra_informations ?? ''}
                    content={extractInformation.response.content}
                />
            ) : null}
        </div>
    )
}

