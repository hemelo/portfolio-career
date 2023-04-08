
type ArticleHeaderProps = {
    title: string;
    subtitle: string;
}

export default function ArticleHeader({title, subtitle}: ArticleHeaderProps ) {
    return (
        <div className='mb-14'>
            <h1 className='text-5xl font-bold text-primary mb-6'>
                {title}
            </h1>

            <h2 className='text-2xl font-semibold text-zinc-400'>
                {subtitle}
            </h2>
        </div>
    )
}