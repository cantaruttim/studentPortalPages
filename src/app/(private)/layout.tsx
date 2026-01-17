import Link from "next/link";

export default function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className="bg-[#E5611C] px-8">
        <ul className="flex h-16 items-center gap-8 text-white text-sm font-medium
            [&_a]:cursor-pointer
            [&_a:hover]:text-[#233059]
            [&_a:hover]:font-bold">
          <li><Link href="/activities">Atividades</Link></li>
          <li><Link href="/modules">Módulos</Link></li>
          <li><Link href="/teachers">Professores</Link></li>
          <li><Link href="/grades">Boletim</Link></li>
        </ul>
      </nav>

      <main className="px-8 py-6">
        {children}
      </main>
    </>
  );
}
