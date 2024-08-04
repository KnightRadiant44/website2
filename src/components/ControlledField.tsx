import type { Control, FieldPath, FieldValues } from "react-hook-form";
import { useController } from "react-hook-form";
import type { FieldProps } from "./Field";
import Field from "./Field";

interface ControlledFieldProps<TFieldValues extends FieldValues>
    extends Omit<FieldProps, "value" | "onChange" | "error"> {
    control: Control<TFieldValues>;
    name: FieldPath<TFieldValues>;
}

/** `Field` controlled by react hook form */
const ControlledField = <TFieldValues extends FieldValues = FieldValues>({
    control,
    name,
    ...props
}: ControlledFieldProps<TFieldValues>) => {
    const { field, fieldState } = useController({ control, name });

    return (
        <Field
            value={field.value}
            onChange={field.onChange}
            error={fieldState.error?.message}
            {...props}
        />
    );
};

export default ControlledField;
