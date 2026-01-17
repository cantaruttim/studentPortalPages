import { useState } from "react";

export default function FormLogin() {
    const [username, setUsername] = useState("");
    const [user_password, setUserpassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    return (
        <form className="grid gap-y-6">

            <fieldset className="grid">
                <label className="text-[#233059] font-semibold" htmlFor="username">Usuário</label>
                <input 
                    className="
                        px-2 
                        py-1 
                        text-[#233059]
                        border 
                        border-[#e8e9e9] 
                        focus:border-[#b1b2b2] 
                        hover:border-[#b1b2b2] 
                        outline-none 
                        shadow-md 
                        rounded-lg
                    " 
                    name="username" 
                    id="username" 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </fieldset>

            <fieldset className="grid">
                <label className="text-[#233059] font-semibold" htmlFor="user_password">Senha</label>

                <div className="relative flex items-center">
                    <input 
                        className="
                            w-full 
                            pl-2 
                            pr-6 
                            py-1 
                            text-[#233059]
                            border 
                            border-[#e8e9e9] 
                            focus:border-[#b1b2b2] 
                            hover:border-[#b1b2b2] 
                            outline-none 
                            shadow-md 
                            rounded-lg
                        " 
                        name="user_password" 
                        type={showPassword ? "text" : "password"} 
                        id="user_password"
                        value={user_password}
                        onChange={(e) => setUserpassword(e.target.value)}
                    />

                    <button
                        className="
                            cursor-pointer 
                            absolute 
                            right-2
                        "
                        type="button" 
                        onClick={() => setShowPassword((show) => !show)}
                    >
                        ---
                    </button>

                </div>

            </fieldset>
                <button className="
                    py-2 
                    bg-[#E5611C] 
                    text-white 
                    rounded-lg 

                    font-semibold
                    cursor-pointer
                    transition-colors
                    hover:text-[#233059]
                "
                >
                    Login
                </button>
        </form>
    );
}