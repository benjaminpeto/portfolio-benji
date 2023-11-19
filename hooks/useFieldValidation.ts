import { useState, useMemo } from "react";

export type FieldConfig = {
    regex?: RegExp;
    // eslint-disable-next-line no-unused-vars
    validator: (value: string) => boolean;
};

export const useFieldValidation = (initialValue: string, config: FieldConfig) => {
    const [value, setValue] = useState<string>(initialValue);

    const validate = useMemo(() => (value: string) => config.validator(value), [config]);

    const isInvalid = useMemo(() => {
        if (value === "") return false;
        return !validate(value);
    }, [value, validate]);

    return { value, setValue, isInvalid };
};
