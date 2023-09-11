import DisplayFlaisApplication from "./Buttons/DisplayFlaisApplication";
import GenerateKustomization from "./Buttons/GenerateKustomization";

const FooterButtons = ({ formData, yaml, setYaml, environments, organizations }) => {
    return (
        <div className="pb-16">
            <div className="fixed bottom-0 left-0 right-0 h-16 flex items-center justify-center z-50 gap-2">
                <DisplayFlaisApplication formData={formData} />
                <GenerateKustomization yaml={yaml} environments={environments} organizations={organizations} />
            </div>
        </div>
    );
};

export default FooterButtons;
