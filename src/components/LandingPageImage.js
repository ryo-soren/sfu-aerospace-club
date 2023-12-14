import SpaceImage from "../images/space_image.png"

const LandingPageImage = () => {
    return(
        <div className="w-full h-[800px] lg:h-[1000px] bg-left lg:bg-center bg-cover bg-no-repeat bg-fixed flex place-content-center" style={{backgroundImage: `url(${SpaceImage})`}}>
            <div className="flex flex-col place-content-center items-center text-white text-[2rem] lg:text-[5rem]">
                <h1>CREATING</h1>
                <h1>MULTIDISCIPLINARY</h1>
                <h1>SPACE</h1>
            </div>
        </div>
    )
}

export default LandingPageImage