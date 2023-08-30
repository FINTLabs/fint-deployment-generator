import React from 'react';
import ToggleFieldGroup from './ToggleFieldGroup';
import PrometheusFields from './PrometheusFields';
import OnePasswordFields from "./OnePasswordFields";
import DatabaseFields from "./DatabaseFields";
import UrlFields from "./UrlFields";
import KafkaFields from "./KafkaFields";
import {Stack} from "@mui/material";

const FeaturesForm = ({form, setForm, handleChange}) => {

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
            <Stack spacing={2}>
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
                    <UrlFields form={form} handleChange={handleChange}/>
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
