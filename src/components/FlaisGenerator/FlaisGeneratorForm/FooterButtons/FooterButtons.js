import DisplayFlaisApplication from "./Buttons/DisplayFlaisApplication";
import GenerateKustomization from "./Buttons/GenerateKustomization";

const FooterButtons = ({ formData }) => {
    return (
        <div className="pb-16">
            <div className="fixed bottom-0 left-0 right-0 h-16 flex items-center justify-center z-50 gap-2">
                <DisplayFlaisApplication formData={formData} />
                <GenerateKustomization />
            </div>
        </div>
    );
};

export default FooterButtons;
