import OpportunitiesSnapshot from './opportunitiesComponents/OpportunitiesSnapshot';

const MissionStatement = () => {
    return(
        <div className="my-5">
            <h1 className="font-bold">LET'S BUILD SOMETHING TOGETHER.</h1>
            <div className="flex flex-col py-5 gap-y-8 border-y">
                <h1>
                    SFU Aerospace is a place for space enthusiasts and entrepreneurs to get involved with the rapidly expanding global space industry. Join us to truly make a positive impact on the community and develop highly sought after skills through an unparalleled immersion of experiential learning. We are more than just a student club, we are a support network of like-minded individuals who create entrepreneurial opportunities in Aerospace.                
                </h1>
                <h1>
                    We are seeking members of all backgrounds. If you are an SFU student with any particular skill you are trying to grow or want to gain new skills and experience, we want to hear from you! We seek not members who are masters of their trade (as no undergraduate student is), but those who desire to become masterful.
                </h1>
                <span className="text-xs text-[#615eea]">Click on the role's title for more info</span>
            </div>
            <OpportunitiesSnapshot/>
        </div>
    )
}

export default MissionStatement