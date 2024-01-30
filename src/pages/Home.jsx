/* HeroSections  */

import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className=" lg:h-[calc(100dvh-100px)] flex flex-col-reverse gap-[40px] lg:gap-0 items-center py-[50px] lg:py-0 justify-center lg:grid lg:grid-cols-2 px-[20px] lg:px-0">
            <div className="flex items-center justify-start lg:pl-[50px] 2xl:pl-[80px]">
                <div className="flex-col gap-[25px] items-center justify-center flex lg:block">
                    <p className="lg:text-start text-[26px] sm:text-[35px] xl:text-[40px] 2xl:text-[50px] max-w-[700px] lg:max-w-auto font-[700] text-center leading-[1.3] text-[#000000e3]">
                        Welcome to Chainsoft  <br className="lg:flex hidden" /> Your Gateway to Seamless <br className="lg:flex hidden" /> Blockchain implementation <br className="lg:flex hidden" /> and Integration!
                    </p>
                    <div className="w-[270px] sm:w-[327px] h-[3px] bg-[#216EFC] mt-[10px] lg:mt-[40px]">

                    </div>
                    <Link to={"/about"}>
                        <button style={{transition:".5s ease all"}} className="grade font-[400] rounded-full bg-[#216EFC] hover:text-[#216EFC] hover:bg-white py-[5px] sm:py-0 sm:h-[48px] w-[130px] sm:w-[190px] text-[white] flex items-center justify-center text-[20px] sm:text-[22px] mt-[10px] sm:mt-[40px]">Boshlash</button>
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-center w-full h-full">
                <img src="./hero.png" className="w-full 2xl:max-w-[600px] max-w-[400px] lg:max-w-[450px]" alt="" />
            </div>
        </div>
    )
}

export default Home
