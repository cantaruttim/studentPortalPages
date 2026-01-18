
import Link from "next/link";
import FormActivities from "../components/FormActivities";
import Image from "next/image"

// criar uma tabela sistêmica para as imagens
// renderizar de acordo com o módulo e curso
export default function Activities() {
  return (

    <>

    <div>
      <p>
        Página de envio das <strong>atividades</strong>
      </p>
    </div>

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

         <Image
          src="/logo.png"
          alt="ADAI College"
          width={120}
          height={150}
        />
        
        <FormActivities />
        
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