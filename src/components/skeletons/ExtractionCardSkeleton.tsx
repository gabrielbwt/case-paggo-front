import ImageSkeleton from '../skeletons/ImageSkeleton';
import TextSkeleton from '../skeletons/TextSkeleton';
import ParagraphSkeleton from './ParagraphSkeleton';

export default function ExtractionCardSkeleton() {
    ;

    return (
        <section className='w-[40rem] max-md:w-[83.33%] border-solid border-[1px] rounded-sm border-[#545454] mt-[4rem]'>
            <div className='border-t-[1px] border-solid border-[#545454] pt-[0.5rem] pl-[1rem]'>
                <div>
                    <div className='font-medium text-[#fff] mt-4'>
                        <TextSkeleton />
                    </div>
                    <div className='font-light ml-[1rem] sm:text-[0.95rem] max-sm:text-[0.8rem] mt-[0.5rem] mb-[1rem] pr-[1rem]'>
                        <TextSkeleton width='w-[95%]' />
                    </div>
                </div>
            </div>
            <div>
                <ImageSkeleton />
            </div>
            <div className='border-t-[1px] border-solid border-[#545454] pt-4 pl-4'>
                <div>
                    <div className='font-medium text-[#fff]'>
                        <TextSkeleton width='w-60' />
                    </div>
                    <div className='font-light ml-[1rem] sm:text-[0.95rem] max-sm:text-[0.8rem] mt-[0.5rem] mb-[1rem] pr-[1rem]'>
                        <ParagraphSkeleton />
                    </div>
                </div>
            </div>
            <div className='border-t-[1px] border-solid border-[#545454] pt-4 pl-[1rem]'>
                <div>
                    <div className='font-medium text-[#fff]'>
                        <TextSkeleton width='w-60' />
                    </div>
                    <div className='font-light ml-[1rem] sm:text-[0.95rem] max-sm:text-[0.8rem] mt-[0.5rem] mb-[1rem] pr-[1rem]'>
                        <ParagraphSkeleton />
                    </div>
                </div>
            </div>
        </section>
    )
}