"use client";

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

    </>

  );
}