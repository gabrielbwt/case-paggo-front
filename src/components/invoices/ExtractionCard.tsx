"use client"

import Image from 'next/image'

interface ExtractionCardProps {
    imageUrl: string;
    title: string;
    content: string;
    extra_informations: string;

}

export default function ExtractionCard({ imageUrl, title, content, extra_informations }: ExtractionCardProps) {

    const hasExtraInformations = extra_informations.length > 0;

    return (
        <section className='w-[40rem] max-md:w-[83.33%] border-solid border-[1px] rounded-sm border-[#545454] mt-[4rem]'>
            <div className='border-t-[1px] border-solid border-[#545454] pt-[0.5rem] pl-[1rem]'>
                <div>
                    <div className='font-medium text-[#fff]'>
                        Titulo:
                    </div>
                    <div className='font-light ml-[1rem] sm:text-[0.95rem] max-sm:text-[0.8rem] mt-[0.5rem] mb-[1rem] pr-[1rem]'>
                        {title}
                    </div>
                </div>
            </div>
            <div>
                <Image priority alt='' src={imageUrl} width={500} height={500} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div className='border-t-[1px] border-solid border-[#545454] pt-[0.5rem] pl-[1rem]'>
                <div>
                    <div className='font-medium text-[#fff]'>
                        Conteúdo:
                    </div>
                    <div className='font-light ml-[1rem] sm:text-[0.95rem] max-sm:text-[0.8rem] mt-[0.5rem] mb-[1rem] pr-[1rem]'>
                    <div
                        dangerouslySetInnerHTML={{__html: content}}
                        />
                    </div>
                </div>
            </div>
            {hasExtraInformations && <div className='border-t-[1px] border-solid border-[#545454] pt-[0.5rem] pl-[1rem]'>
                <div>
                    <div className='font-medium text-[#fff]'>
                        Informações Adicionais:
                    </div>
                    <div className='font-light ml-[1rem] sm:text-[0.95rem] max-sm:text-[0.8rem] mt-[0.5rem] mb-[1rem] pr-[1rem]'>
                    <div
                        dangerouslySetInnerHTML={{__html: extra_informations}}
                        />
                    </div>
                </div>
            </div>}
        </section>
    )
}