import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Calculator.module.css";
import Calculator from "@/components/Calculator";

const inter = Inter({ subsets: ["latin"] });

export default function CalculatorPage() {
  return (
    <>
      <Head>
        <title>Calculadora</title>
        <meta property="org:title" content="Calculadora Online" />
        <meta
          name="description"
          content="Calculadora simples e prática para você realizar todas as operações matemáticas básicas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Rafaella Denlavor" />
        <meta name="keywords" content="calculator, calculadora, calculadora online, projeto de calculadora, calculadora com react" />
        <meta name="robots" content="index, follow" />
        <meta name="revised" content="20/06/2023" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <Calculator />
      </main>
    </>
  );
}
