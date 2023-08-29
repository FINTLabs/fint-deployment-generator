import React from 'react';
import ToggleFieldGroup from './ToggleFieldGroup';
import PrometheusFields from './PrometheusFields';

const FeaturesForm = ({ form, setForm }) => {

    const handleToggle = (field) => {
        setForm({
            ...form,
            [field]: {
                ...form[field],
                active: !form[field].active,
            },
        });
    };

    return (
        <>
            <ToggleFieldGroup
                label="Prometheus"
                isActive={form.Prometheus.active}
                onToggle={() => handleToggle('Prometheus')}
            >
                <PrometheusFields form={form} setForm={setForm} />
            </ToggleFieldGroup>
        </>
    );
};

export default FeaturesForm;
