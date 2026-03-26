import { Control, Controller, FieldValues, Path } from "react-hook-form";
import styles from "../styles/Forms.module.css";
import { TextInput } from "@mantine/core";

export type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
};

export const Input = <T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
}: Props<T>) => {
  return (
    <div className={styles.field}>
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <TextInput
            {...field}
            label={label}
            placeholder={placeholder}
            error={
              fieldState.error ? String(fieldState.error.message) : undefined
            }
          />
        )}
      />
    </div>
  );
};
