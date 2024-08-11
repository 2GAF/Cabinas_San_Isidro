import React, { useState } from 'react';
import user1 from "../assets/users/user1.jpg";
import user2 from "../assets/users/user2.jpg";
import user3 from "../assets/users/user3.jpg";
import user4 from "../assets/users/user4.jpg";
import user5 from "../assets/users/user5.jpg";
import user6 from "../assets/users/user6.jpg";

export function CarruselUsers() {
    const comments = [
        {
            user: 'Vilma Elizondo Valerin',
            date: '31/05/2021',
            comment: 'para mi muy lindo todo y seguro  o sea lo mejor que hay tenenemis con mi familia 21 años de estar viniendo y no me arrepiento',
            img: user1
        },
        {
            user: 'Dương Thái Mien',
            date: '04/08/2021',
            comment: 'Muy satisfecho y muy complacido con el lugar aparte de ser muy bonito.. Super recomendados',
            img: user2
        },
        {
            user: 'Arellis Garita Picado',
            date: '30/05/2021',
            comment: 'muy bonito todo muy amables espero volver a venir pronto',
            img: user3
        },
        {
            user: 'Seylin Mariana Brenes Peñaranda',
            date: '15/02/2021',
            comment: 'en todo en setiembre del año pasado fuimos y fue mi primera vez y me encantó demaciado seguro cerca de todo la playa cerca las piscinas cerca de las cabinas bueno yo me vine contenta y quiero volver air por eso deseo saber si tienes promociones',
            img: user4
        },
        {
            user: 'Silvia Araya',
            date: '10/01/2021',
            comment: 'Un lugar hermoso, limpio y seguro excelente atención y muy cerca de San José, esperamos poder volver muy pronto  con la familia completa.',
            img: user5
        },
        {
            user: 'Elvira Hernández Bonilla',
            date: '25/12/2021',
            comment: 'Amo éste lugar, había venido hace algunos años y hoy nuevamente aquí disfrutando de éste hermoso lugar. Super recomendado, tienes las dos opciones, playa y piscinas, un lindo ambiente familiar donde puedes disfrutar tranquilamente.',
            img: user6
        }
    ];

    const [currectUser, setCurrectUser] = useState(0);

    function addUser() {
        setCurrectUser((prevUser) => (prevUser + 1) % comments.length);
    }

    function sustractUser() {
        setCurrectUser((prevUser) => (prevUser - 1 + comments.length) % comments.length);
    }

    return (
        <>
        <div className="md:border-[3.5px] border-[1.5px] border-blue-1 rounded-[2.938rem] flex items-center relative min-h-[22rem] sm:min-h-72 md:min-h-96 justify-between px-5 md:px-0 mt-5">
            <button className="hidden md:block" onClick={sustractUser}>
                <svg className="w-32 h-32 text-gray-800 dark:text-blue-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m15 19-7-7 7-7" />
                </svg>
            </button>
            <div className="max-w-[40rem]">
                <div className="flex items-center gap-2 mb-3">
                    <img className="rounded-full max-w-24" src={comments[currectUser].img} alt="" />
                    <div>
                        <h4 className="text-[clamp(18px,_1.5vw,_1.875rem)] text-black">{comments[currectUser].user}</h4>
                        <p className='font-outfit text-gray-1'>{comments[currectUser].date}</p>
                    </div>
                </div>
                <p className='font-outfit text-[clamp(16px,_1.7vw,_22.66px)] text-gray-1'>{comments[currectUser].comment}</p>
            </div>
            <button className="hidden md:block" onClick={addUser}>
                <svg className="w-32 h-32 text-gray-800 dark:text-blue-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m9 5 7 7-7 7" />
                </svg>
            </button>
        </div>
            <div className='flex md:hidden justify-center items-center gap-10 mt-5'>
            <button onClick={sustractUser}>
                <svg className="w-12 h-12 text-gray-800 dark:text-blue-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m15 19-7-7 7-7" />
                </svg>
            </button>
            <button onClick={addUser}>
                <svg className="w-12 h-12 text-gray-800 dark:text-blue-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m9 5 7 7-7 7" />
                </svg>
            </button>
            </div>
            
        </>
    );
}