import "./style.scss";

const index = ({id, title, text}) => {
    return (
        <>
            <div className='p-[48px] bg-[#F4F6FC]'>
                <div className='mask-group w-[40px] h-[40px] flex items-center justify-center font-bold text-[20px] text-white mb-[20px]'>
                    {id}
                </div>
                <p className='font-medium text-[24px] mb-3'>{title}</p>
                <p className='opacity-[0.7]'>{text}</p>
            </div>
        </>
    );
};

export default index;