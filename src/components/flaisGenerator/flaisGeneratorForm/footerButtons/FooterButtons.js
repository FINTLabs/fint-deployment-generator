import FlaisApplicationButton from "./buttons/DisplayFlaisApplication";
import GenerateKustomizeButton from "./buttons/GenerateKustomization";

const FooterButtons = ({ formData, yaml, setYaml, environments, organizations }) => {
    return (
        <div className="pb-16">
            <div className="fixed bottom-0 left-0 right-0 h-16 flex items-center justify-center z-50 gap-2">
                <FlaisApplicationButton formData={formData} yaml={yaml} setYaml={setYaml} />
                <GenerateKustomizeButton yaml={yaml} formData={formData} environments={environments} organizations={organizations} />
            </div>
        </div>
    );
};

export default FooterButtons;
