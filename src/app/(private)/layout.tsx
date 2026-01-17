import Link from "next/link";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    <html lang="pt-BR">

      <body className="min-h-screen flex flex-col antialiased">
        
        <nav className="bg-[#E5611C] px-8">
          <div className="flex h-16 items-center gap-12">
            
            <div className="flex items-center">
              <span className="text-xl font-bold text-[#233059]">
                ADAI<span className="font-light italic text-white">College</span>
              </span>
            </div>

            <ul
              className="
                flex items-center gap-8
                text-sm font-medium text-white

                [&_a]:cursor-pointer
                [&_a]:font-semibold
                [&_a:hover]:text-[#233059]
                [&_a:hover]:font-bold
              "
            >
              <li><Link href="/activities">Atividades</Link></li>
              <li><Link href="/modules">Módulos</Link></li>
              <li><Link href="/teachers">Professores</Link></li>
              <li><Link href="/grades">Boletim</Link></li>
              <li><Link href="/new-student">Novo Aluno</Link></li>
            </ul>

          </div>
        </nav>

        <main className="flex-1 px-8 py-6">
          {children}
        </main>

        <footer className="mt-auto bg-white text-center text-sm text-gray-600 py-[100vh]">
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
      </body>
    </html>

  );
}
