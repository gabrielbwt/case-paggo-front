"use client"

import Button from "../Button";

interface FileInputProps {
    isLoading: boolean;
    setFile: (file: File | null) => void;
    handleSendFileAndExtractText: () => void;
}

export default function FileInput({ isLoading, setFile, handleSendFileAndExtractText }: FileInputProps) {

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files ? event.target.files[0] : null;
        setFile(file);
    }

    return (
        <div className="flex items-start justify-center w-[40rem] flex-col gap-4">
            <div className="max-w-sm">
                <form>
                    <label className="block">
                        <input onChange={handleFileChange} type="file" className="file:inline-block file:rounded file:border
                         file:border-blue-600 file:bg-blue-600 file:px-6 file:py-3 file:text-sm
                          file:font-medium file:text-white file:focus:outline-none
                           file:focus:ring  cursor-pointer file:cursor-pointer text-xs file:hover:opacity-90 
                           file:transition-opacity file:duration-200"/>
                    </label>
                </form>
            </div>
            <Button isLoading={isLoading} onClickFunction={handleSendFileAndExtractText} text="Extrair informações" />
        </div>
    )
}

