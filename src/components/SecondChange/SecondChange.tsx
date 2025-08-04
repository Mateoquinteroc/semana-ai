import AboutSection from "../AboutSection/AboutSection";
import EventCategories from "../EventCategories/EventCategories";
import LocationsSection from "../LocationsSection/LocationsSection";
import ParticipantsSection from "../ParticipantsSection/ParticipantsSection";
import ProgramacionSection from "../ProgramacionSection/ProgramacionSection";
import ThematicLinesSection from "../ThematicLinesSection/ThematicLinesSection";
export default function SecondChange() {
    return (
        <div >
            <EventCategories />
            <AboutSection />
            <ThematicLinesSection/>
            <ProgramacionSection />
            <ParticipantsSection />
            <LocationsSection />
        </div>
    );
}