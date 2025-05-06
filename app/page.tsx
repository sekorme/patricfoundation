import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import ImageSlider from "@/components/ImageSlider";
import {LayoutGridDemo} from "@/components/LayoutGridDemo";
import ProjectSlider from "@/components/ProjectSlider";
import Testimonials from "@/components/Testimonials";
import GetInvolved from "@/components/GetInvolved";
import RecentCampaigns from "@/components/RecentCampaigns";
import AnimatedFooter from "@/components/AnimatedFooter";
import OngoingCampaigns from "@/components/OngoingCampaigns";


export default function Home(){
    return (
        <div className={"w-full"}>
             <Hero/>
            <AboutUs/>
            <ProjectSlider/>
            <Testimonials/>
            <GetInvolved/>
            <OngoingCampaigns/>
            <RecentCampaigns/>
            <AnimatedFooter/>
        </div>
    )
}