/* HeroSections  */

import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div className=" lg:h-[calc(100dvh-100px)] flex flex-col-reverse gap-[40px] lg:gap-0 items-center py-[50px] lg:py-0 justify-center lg:grid lg:grid-cols-2 px-[20px] lg:px-0">
            <div className="flex items-center justify-start lg:pl-[40px]">
                <div className="flex-col gap-[25px] items-center justify-center flex lg:block">
                    <p className="lg:text-start text-center">
                        Welcome to Chainsoft – Your Gateway to Seamless Blockchain implementation and Integration!
                    </p>
                    <div className="w-[227px] h-[3px] bg-[#216EFC] lg:mt-[23px]">

                    </div>
                    <Link to={"/about"}>
                        <button className="grade bg-gradient-to-r from-[#FFFFFF] rounded-full to-[#216EFC] py-[5px] sm:py-0 sm:h-[48px] w-[130px] sm:w-[190px] text-[white] flex items-center justify-center text-[20px] sm:text-[26px] lg:mt-[140px]">Boshlash</button>
                    </Link>
                </div>
            </div>
            <div className="flex items-center justify-center w-full h-full">
                <img src="./hero.png" className="w-full 2xl:max-w-[700px] max-w-[400px] lg:max-w-[560px]" alt="" />
            </div>
        </div>
    )
}

export default Home
