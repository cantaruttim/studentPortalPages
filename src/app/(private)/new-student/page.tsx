"use client";

import Link from "next/link";
import FormCreateStudent from "../components/FormCreateStudent";

export default function NewStudent() {
  return (

    <>
      <p>
        Página de cadastro dos <strong>novos alunos</strong>
      </p>


      <br />

      <div className="
          grid 
          gap-y-4 
          px-8 
          py-12 
          min-w-100 
          bg-[#fdfcfc] rounded-3xl shadow-xl
        ">
          <h2 
            className="font-bold text-[#233059]">
              Formulário de Cadastro
          </h2>

          <FormCreateStudent />
      
      </div>

      <br />

      <footer className="mt-auto mb-auto bg-white text-center text-sm text-gray-600 py-1">
          © Copyright ADAI College. — Todos os direitos reservados. Desenvolvido por{" "}
          <Link
            href="https://www.linkedin.com/in/matheusalmeidacantarutti/"
            target="_blank"
            className="
              font-semibold
              cursor-pointer
              transition-colors
              hover:text-[#233059]
            "
          >
            Matheus Cantarutti
          </Link>
          .
        </footer>

    </>

  );
}