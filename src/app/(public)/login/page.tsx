export default function Login() {
  return (
    <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow">
      <h1 className="mb-4 text-xl font-semibold">Login</h1>

      <input
        className="mb-3 w-full rounded border p-2"
        placeholder="Usuário"
      />

      <input
        className="mb-4 w-full rounded border p-2"
        type="password"
        placeholder="Senha"
      />

      <button className="w-full rounded bg-[#E5611C] py-2 text-white">
        Entrar
      </button>
    </div>
  );
}
