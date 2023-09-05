import React from 'react';
import ToggleFieldGroup from './ToggleFieldGroup';
import PrometheusFields from './Fields/PrometheusFields';
import OnePasswordFields from "./Fields/OnePasswordFields";
import DatabaseFields from "./Fields/DatabaseFields";
import UrlFields from "./Fields/UrlFields";
import KafkaFields from "./Fields/KafkaFields";
import {Stack} from "@mui/material";
import IngressFields from "./Fields/IngressFields";

const FeaturesForm = ({form, setForm}) => {

    const handleChange = (field, property) => (event, newValue = null) => {
        const value = Array.isArray(newValue) ? newValue : (event ? event.target.value : newValue);
        setForm({
            ...form,
            [field]: {
                ...form[field],
                [property]: value,
            },
        });
    };

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
            <Stack spacing={2} className="m-4">
                <ToggleFieldGroup
                    label="prometheus"
                    isActive={form.prometheus.active}
                    onToggle={() => handleToggle('prometheus')}
                >
                    <PrometheusFields form={form} handleChange={handleChange}/>
                </ToggleFieldGroup>
                <ToggleFieldGroup
                    label="onePassword"
                    isActive={form.onePassword.active}
                    onToggle={() => handleToggle('onePassword')}
                >
                    <OnePasswordFields form={form} handleChange={handleChange}/>
                </ToggleFieldGroup>
                <ToggleFieldGroup
                    label="database"
                    isActive={form.database.active}
                    onToggle={() => handleToggle('database')}
                >
                    <DatabaseFields form={form} handleChange={handleChange}/>
                </ToggleFieldGroup>
                <ToggleFieldGroup
                    label="url"
                    isActive={form.url.active}
                    onToggle={() => handleToggle('url')}
                >
                    <UrlFields form={form} handleChange={handleChange}/>
                </ToggleFieldGroup>
                <ToggleFieldGroup
                    label="ingress"
                    isActive={form.ingress.active}
                    onToggle={() => handleToggle('ingress')}
                >
                    <IngressFields form={form} handleChange={handleChange}/>
                </ToggleFieldGroup>

                <ToggleFieldGroup
                    label="kafka"
                    isActive={form.kafka.active}
                    onToggle={() => handleToggle('kafka')}
                >
                    <KafkaFields form={form} handleChange={handleChange}/>
                </ToggleFieldGroup>
            </Stack>
        </>
    );
};

export default FeaturesForm;
