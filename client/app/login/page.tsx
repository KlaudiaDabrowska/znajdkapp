"use client";

import Link from "next/link";
import styles from "./login.module.css";
import { nunito } from "../theme";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/Forms/Input";
import { PasswordInput } from "@/components/Forms/PasswordInput";

const schema = z.object({
  email: z.email("Nieprawidłowy email"),
  password: z.string().min(8, "Hasło musi mieć co najmniej 8 znaków"),
});

type FormState = z.infer<typeof schema>;

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormState>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormState) {
    try {
      await new Promise((r) => setTimeout(r, 800));
      alert("Rejestracja przebiegła pomyślnie (placeholder)");
    } catch (err) {
      console.error(err);
      alert("Wystąpił błąd podczas rejestracji");
    }
  }

  return (
    <div className={`${styles.page} ${nunito.variable}`}>
      <div className={styles.wrapper}>
        <div className={styles.formCard}>
          <h2 className={styles.title}>Zaloguj się</h2>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input
              control={control}
              label="Email"
              placeholder="example@domain.com"
              name="email"
            />

            <PasswordInput
              control={control}
              label="Hasło"
              placeholder="Twoje hasło"
              name="password"
            />

            <button
              className={styles.submit}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Trwa wysyłanie..." : "Zaloguj się"}
            </button>
          </form>

          <p className={styles.mutedLink}>
            Nie masz konta? <Link href="/register">Zarejestruj się</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
