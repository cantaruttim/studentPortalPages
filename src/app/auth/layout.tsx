export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main 
        className="
          min-h-screen 
          flex 
          items-center 
          justify-center 
          bg-gradient-to-r from-[#E5611C] to-[#233059]
        "
    >
        {children}
    </main>

  );
}
