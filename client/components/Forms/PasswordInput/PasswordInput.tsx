import { PasswordInput as MantinePasswordInput } from "@mantine/core";
import { Controller } from "react-hook-form";

import styles from "../styles/Forms.module.css";

import type { Control, FieldValues, Path } from "react-hook-form";

export type Props<T extends FieldValues> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
};

export const PasswordInput = <T extends FieldValues>({
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
          <MantinePasswordInput
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
