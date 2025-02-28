import { React, useState } from 'react'
import diceIcon from "../assets/icon-dice.svg";
import desktopDivider from "../assets/pattern-divider-desktop.svg";
import mobileDivider from "../assets/pattern-divider-mobile.svg";

const AdviceGeneratorMain = () => {

  const AdviceFetch = async() => {
    const promise = await fetch('https://api.adviceslip.com/advice');
    const data = await promise.json();
    return data;
  }

  const [adviceNumber, setAdviceNumber] = useState(207);
  const [advice, setAdvice] = useState("Always seek out advice or opinions when making a decision.")

  const GetAdvice = async() => {
    const response = await AdviceFetch();
    setAdviceNumber(response.slip.id);
    setAdvice(response.slip.advice);
    console.log(response.slip.id);
    console.log(response.slip.advice);
  }

  return (
    <div className='bg-gray-800 absolute top-0 left-0 w-screen h-screen'>

      <div className='bg-gray-700 md:w-[27rem] mobile:w-[20rem] mobile-xs:w-[20rem] h-fit place-self-center rounded-xl mt-36 shadow-[0_0_4rem] shadow-gray-900'>
        <p className='text-green-400 text-center text-sm pt-5'>Advice #{ adviceNumber }</p>
        <p className='text-white text-center text-3xl mobile-xs:text-xl pt-5'>"{ advice }"</p>

        <img src={ desktopDivider } className='hidden lg:block pt-10 pb-5 w-96 place-self-center' alt="divider for button" />
        <img src={ mobileDivider } className='block lg:hidden pt-10 pb-5 mobile-xs:pb-1  w-96 place-self-center' alt="divider for button" />
          
        <div className="relative bg-green-400 rounded-full w-[3.5rem] h-[3.5rem] p-4 bottom-[-1.75rem] flex justify-self-center  hover:shadow-[0_0_1.5rem] hover:shadow-green-400 hover:cursor-pointer" onClick={ GetAdvice }>
          <img src={ diceIcon } alt="dice icon" />
        </div>
      </div>

    </div>
  )
}

export default AdviceGeneratorMain
// 