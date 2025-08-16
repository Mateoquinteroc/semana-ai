import AboutSection from "../AboutSection/AboutSection";
import EventCategories from "../EventCategories/EventCategories";
import LiveEmbed from "../LiveEmbed/LiveEmbed";
import LocationsSection from "../LocationsSection/LocationsSection";
import ParticipantsSection from "../ParticipantsSection/ParticipantsSection";
import ProgramacionSection from "../ProgramacionSection/ProgramacionSection";
import RegistroForm from "../RegistroForm/RegistroForm";
import ThematicLinesSection from "../ThematicLinesSection/ThematicLinesSection";
import VideoCanvas from "../VideoCanvas/VideoCanvas";
export default function SecondChange() {
    return (
        <div >
            <EventCategories />
            <AboutSection />
            <ThematicLinesSection/>
            <ProgramacionSection />
            <ParticipantsSection />
            <LocationsSection />
            <RegistroForm />
            <VideoCanvas 
                title="Nuestras transmisiones"
                videoUrls={[
                    "https://www.youtube.com/watch?v=-XyAVga2jYU",
                    "https://www.youtube.com/watch?v=_jzb6kFzkgU",
                    "https://www.youtube.com/watch?v=qe5sSBVSi9o&t",
                    "https://www.youtube.com/watch?v=0C4HoWUN7H8",
                    "https://www.youtube.com/watch?v=zWtPL2hkFew&t"
                    ]}
            />
        </div>
    );
}