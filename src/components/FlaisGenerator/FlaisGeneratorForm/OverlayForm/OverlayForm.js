import OrganizationSelect from "./OrganizationSelect";
import React from "react";
import EnvironmentSelect from "./EnvironmentSelect";

const OverlayForm = ({ selectedEnvs, setSelectedEnvs, selectedOrgs, setSelectedOrgs }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold text-center my-4 mx-2">Overlays</h1>
            <EnvironmentSelect selectedEnvironments={selectedEnvs} setSelectedEnvironments={setSelectedEnvs} />
            <OrganizationSelect selectedOrgs={selectedOrgs} setSelectedOrgs={setSelectedOrgs}/>
        </div>
    );
}

export default OverlayForm;