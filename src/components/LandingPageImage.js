import SpaceImage from "../images/space_image.png"

const LandingPageImage = () => {
    return(
        <div className="h-max mt-6 relative z-0">
            <img className="rounded-b object-contain w-full" src={SpaceImage} alt="space_image.png"/>
            <div className="absolute right-1/2 left-1/2 bottom-1/3 top-1/2 flex flex-col justify-around place-content-center items-center text-white text-[2rem] lg:text-[5rem]">
                <h1>CREATING</h1>
                <h1>MULTIDISCIPLINARY</h1>
                <h1>SPACE</h1>
            </div>
        </div>
    )
}

export default LandingPageImage