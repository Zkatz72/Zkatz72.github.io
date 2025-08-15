

function SkillCard(props){




    return (
        <>
        <div className="mt-4   bg-emerald-400/50 shadow dark:bg-gradient-to-b dark:from-emerald-800/80  dark:to-sky-950/80 rounded-xl flex justify-center items-center w-fit h-8 max-w-6xl p-2 gap-1 ">
            
            <img src={`icons/${props.icon}.svg`} alt="React logo" className=" w-6  h-6 opacity-100 dark:invert transition-transform duration-300 hover:scale-110" />
            
            <span className="dark:text-neutral-200 font-inter opacity-100 text-gray-800 flex-nowrap text-xs">{props.skill}</span>
        </div>
        
        </>

    )


}

export default SkillCard;