"use client";

import Image from "next/image";
import Link from "next/link";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Input } from "@/components/Forms/Input";
import { PasswordInput } from "@/components/Forms/PasswordInput";

import hero from "../../public/hero.png";
import { nunito } from "../theme";
import styles from "./register.module.css";

const schema = z.object({
  email: z.email("Nieprawidłowy email"),
  phone: z
    .string()
    .min(1, "Podaj numer telefonu")
    .regex(/^[0-9\s+-]{6,15}$/, "Podaj poprawny numer telefonu"),
  firstName: z.string().min(1, "Podaj imię"),
  city: z.string().min(1, "Podaj miejscowość"),
  password: z.string().min(8, "Hasło musi mieć co najmniej 8 znaków"),
});

type FormState = z.infer<typeof schema>;

export default function Register() {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormState>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormState) {
    try {
      await new Promise((r) => setTimeout(r, 800));
      alert("Rejestracja przebiegła pomyślnie");
      console.log(data);
    } catch {
      alert("Wystąpił błąd podczas rejestracji");
    }
  }

  return (
    <div className={`${styles.page} ${nunito.variable}`}>
      <div className={styles.left}>
        <div className={styles.formCard}>
          <h2 className={styles.title}>Utwórz konto</h2>
          <p className={styles.subtitle}>Wypełnij formularz, aby założyć konto.</p>

          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <Input<FormState>
              control={control}
              label="Email"
              placeholder="example@domain.com"
              name="email"
            />
            <Input<FormState>
              control={control}
              label="Numer telefonu"
              placeholder="+48 123 456 789"
              name="phone"
            />
            <Input<FormState> control={control} label="Imię" placeholder="Jan" name="firstName" />
            <Input<FormState>
              control={control}
              label="Miejscowość"
              placeholder="Warszawa"
              name="city"
            />
            <PasswordInput<FormState>
              control={control}
              label="Hasło"
              placeholder="Twoje hasło"
              name="password"
            />
            <button className={styles.submit} type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Trwa wysyłanie..." : "Zarejestruj się"}
            </button>
          </form>

          <p className={styles.mutedLink}>
            Masz już konto? <Link href="/login">Zaloguj się</Link>
          </p>
        </div>
      </div>

      <div className={styles.right}>
        <Image src={hero} alt="heroImage" className={styles.image} />
      </div>
    </div>
  );
}
