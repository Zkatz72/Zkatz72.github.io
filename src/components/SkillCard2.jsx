

function SkillCard(props){




    return (
        <>
        <div className="mt-4 bg-gray-100 shadow border border-gray-200 dark:bg-neutral-800 dark:border-neutral-700 rounded-xl flex justify-center items-center w-fit h-8 max-w-6xl px-2.5 gap-1.5 ">
            
            <img src={`icons/${props.icon}.svg`} alt="React logo" className=" w-6  h-6 opacity-100 transition-transform dark:invert duration-300 hover:scale-110" />
            
            <span className="dark:text-neutral-200 font-inter opacity-100 text-gray-800 flex-nowrap text-xs">{props.skill}</span>
        </div>
        
        </>

    )


}

export default SkillCard;