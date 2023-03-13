
export default function Dropdown({ heading, options, value, setValue }) {

    function addOption(option) {
        return (
            <option value={option} className={'text-[#464143]'}>{option}</option>
        );
    }

    return (
        <div className="flex justify-between mt-3">
            <div className="sm:w-[58%] self-center ">{heading}</div>

            <div className="sm:w-[39%]  ml-[25px]">
                <select value={value} onChange={(e) => { setValue(e.target.value) }} className={'h-[45px] w-full text-[#0161FF] bg-[#D1E3FF] bg-opacity-[0.39] border-2 border-solid border-[#9BB0D3] rounded-[100px] text-center font-semibold backdrop-blur-[30px] bg-blue'} >
                    {options.map(addOption)}
                </select>
            </div>
        </div>

    );
}