import DisplayFlaisApplication from "./Buttons/DisplayFlaisApplication";

const FooterButtons = ({ formData }) => {
    return (
        <div className="pb-16">
            <div className="fixed bottom-0 left-0 right-0 h-16 flex items-center justify-center z-50">
                <DisplayFlaisApplication formData={formData} />
            </div>
        </div>
    );
};

export default FooterButtons;
