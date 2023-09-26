import React from 'react';
import FlaisGeneratorForm from "./flaisGeneratorForm/FlaisGeneratorForm";

const FlaisGenerator = () => {
    return (
        <div className="h-screen">
            <h1 className="text-4xl font-bold text-center my-4 mx-2">Flais Generator</h1>
            <FlaisGeneratorForm />
        </div>
    )
}


export default FlaisGenerator;