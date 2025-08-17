type SectionTitleTypeProps = {
    title: string;
    badgeTitle: string;
    alignment:'left' | 'center' | 'right';
}

const SectionTitle = (props: SectionTitleTypeProps) => {
    const { title,badgeTitle,alignment } = props;
    return (
        <div style={{ textAlign: alignment }}>
            <span className={`block ${alignment === 'center' ? 'mx-auto' : ''} p-1 bg-primary-clr text-[0.76rem] w-max rounded-full py-1 px-2 text-white font-bold`}>{badgeTitle}</span>
            <h2 className="font-extrabold mt-2 text-2xl">{title}</h2>
        </div>
    )
}

export default SectionTitle;
