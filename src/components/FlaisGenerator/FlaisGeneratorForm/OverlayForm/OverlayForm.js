import OrganizationSelect from "./OrganizationSelect";
import React from "react";
import EnvironmentSelect from "./EnvironmentSelect";

const OverlayForm = () => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-center my-4 mx-2">Overlays</h1>
            <EnvironmentSelect />
            <OrganizationSelect />
        </div>
    );
}

export default OverlayForm;