interface TextSkeletonProps {
    width?: string;
}

export default function TextSkeleton({ width }: TextSkeletonProps) {

    const widthClass = width ? width : 'w-24';

    return (
        <div className={`h-4 rounded-full bg-gray-700 ${widthClass} mb-4`}></div>
    )
}