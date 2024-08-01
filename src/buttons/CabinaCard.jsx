import fanBlue from "../assets/fanBlack.svg";
import tvBlue from "../assets/tvBlack.svg";
import fanWhite from "../assets/fanWhite.svg";
import tvWhite from "../assets/tvWhite.svg";

export function CabinaCard({ setter, text, isActive }) {
    const cardStyle = isActive && text === isActive ? 'bg-blue-1 text-white' : '';
    const btnStyle = isActive && text === isActive ? 'bg-white text-blue-1' : 'text-white';

    return (
        <div className={`ring-2 ring-blue-1 rounded-xl font-outfit text-[2.119rem] p-[1.313rem] py-[1.313rem] flex flex-col gap-y-[0.656rem] ${cardStyle}`}>
            <h1>{text}</h1>
            <div className="flex gap-x-[1.875rem] w-full justify-center ">
                <img src={isActive && text === isActive ? fanWhite : fanBlue} alt="" />
                <img src={isActive && text === isActive ? tvWhite : tvBlue} alt="" />
            </div>
            <button onClick={() => setter(text)} className={`bg-blue-1 rounded-xl py-[0.626rem] hidden justify-center text-ovo text-base lg:flex ${btnStyle}`}>Explorar</button>
        </div>
    )
}