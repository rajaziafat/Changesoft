import { Link } from "react-router-dom"

const Header = () => {
    return (
        <header className="flex w-full bg-[#D3E3FB]/35 h-[80px] sm:h-[100px] items-center justify-between pl-[10px] sm:pl-[20px] md:pl-[76px] pr-[10px] sm:pr-[20px] md:pr-[47px]">
            {/* Left  */}
            <Link to={"/"}>
                <p className="text-[18px] sm:text-[22px] md:text-[22px] font-[700]">CHAINSOFT</p>
            </Link>
            {/* Right */}
            <div className="flex items-center justify-center gap-[10px] sm:gap-[15px] md:gap-[34px] font-[400]">
                <button  style={{transition:".5s ease all"}} className="md:pt-[7.2px] pt-[5px] pb-[7px] md:pb-[9.2px]  leading-[1] text-[14px] md:text-[16px] w-[80px] sm:w-[100px] md:w-[118px] bg-[white] hover:bg-[#4770EA] hover:text-[white] border-[2px] border-[#4770EA] rounded-[16px] center text-[#4972EB]">Login</button>
                <button  style={{transition:".5s ease all"}} className="md:pt-[7.2px] pt-[5px] pb-[7px] md:pb-[9.2px]  leading-[1] text-[14px] md:text-[16px] w-[80px] sm:w-[100px] md:w-[118px] text-[white] hover:text-[#4770EA] hover:bg-white bg-[#4770EA] border-[2px] border-[#4770EA] rounded-[16px] center">Sign up</button>
            </div>
        </header>
    )
}

export default Header
