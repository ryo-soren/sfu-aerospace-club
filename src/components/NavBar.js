import { useState } from "react"
import { IoMdReturnRight } from "react-icons/io";

const NavBar = () => {
    const [isClicked, setIsClicked] = useState(false)
    const navItems = ["Mission Statement", "Our Team", "Opportunities", "Contact Us"]

    return(
        <div className="fixed w-full z-10">
            <div 
            className="fixed top-0 left-0 right-0 flex justify-between items-center w-full h-max px-[2rem] z-0 bg-[#615eea] text-slate-300 text-xs lg:text-[2.5rem]"
            >
                <div className="my-[1rem] lg:my-[2rem]">
                    Logo
                </div>

                <div className={"flex flex-col justify-around w-[2rem] h-[2rem]"}
                onClick={() => setIsClicked(true)}
                >

                    <div className="w-full h-[.125rem] bg-slate-300 rounded-full"></div>
                    <div className="w-full h-[.125rem] bg-slate-300 rounded-full"></div>
                    <div className="w-full h-[.125rem] bg-slate-300 rounded-full"></div>
                </div>
            </div>
            {
                isClicked ? (
                    <div className="fixed top-0 right-0 bottom-0 flex justify-end w-full h-full"
                    >
                        <div className="w-1/2 lg:w-3/4" onClick={() => setIsClicked(false)}></div>
                        <div className="flex flex-col justify-around items-center place-content-center w-1/2 rounded-l bg-blue-100 text-slate-500 text-center text-xs lg:w-1/4 lg:text-[1.5rem]">
                            {
                                navItems.map((element, index) => {
                                    return(
                                        <div key={index} onClick={() => console.log(`Clicked ${element}`)} >{element}</div>
                                    )
                                })
                            }
                            <div className="flex place-content-center" onClick={() => setIsClicked(false)}><IoMdReturnRight/></div>
                        </div>
                    </div>
                ) : (
                    ""
                )
            }
        </div>

    )
}

export default NavBar