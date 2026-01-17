import Link from "next/link";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="bg-[#E5611C] px-8">
        <div className="flex h-16 items-center gap-12">
          
          {/* LOGO */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-[#233059]">
              ADAI<span className="font-light italic text-white">College</span>
            </span>
          </div>

          {/* MENU */}
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
          </ul>

        </div>
      </nav>

      <main className="px-8 py-6">
        {children}
      </main>
    </>
  );
}
