

function SkillCard(props){




    return (
        <>
        <div className="mt-4 bg-green-400/80 shadow dark:bg-emerald-400  rounded-2xl flex justify-center items-center w-fit h-8 max-w-6xl p-2">
            <span className="dark:text-neutral-900 opacity-100 text-gray-800 flex-nowrap text-xs">{props.skill}</span>
        </div>
        
        </>

    )


}

export default SkillCard;