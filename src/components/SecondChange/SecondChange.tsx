import AboutSection from "../AboutSection/AboutSection";
import EventCategories from "../EventCategories/EventCategories";
import LiveEmbed from "../LiveEmbed/LiveEmbed";
import LocationsSection from "../LocationsSection/LocationsSection";
import ParticipantsSection from "../ParticipantsSection/ParticipantsSection";
import ProgramacionSection from "../ProgramacionSection/ProgramacionSection";
import RegistroForm from "../RegistroForm/RegistroForm";
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
            <RegistroForm />
            <LiveEmbed 
            channelId="UCJtTIceoWSvf7jeHYihvhcA" 
            title="En directo desde nuestro canal"
            channelUrl="https://www.youtube.com/@CentroDeCienciaFJC"
            />
        </div>
    );
}