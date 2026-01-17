
import { useState } from "react";

export default function FormCreateStudent() {
    const [firstName, setFirstName] = useState("");
    const [familyName, setFamilyName] = useState("");
    const [email, setEmail] = useState("");
    const [birthDate, setBirthDate] = useState("");
    const [courseEnrolled, setCourseEnrolled] = useState("");

    return (
        <form className="grid gap-y-6" >

            <fieldset className="grid">
                <label className="text-[#233059] font-semibold" htmlFor="firstName">Primeiro Nome</label>
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
                    name="firstName" 
                    id="firstName" 
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </fieldset>

            <fieldset className="grid">
                <label className="text-[#233059] font-semibold" htmlFor="familyName">Sobrenome</label>
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
                    name="familyName" 
                    id="familyName" 
                    type="text"
                    value={familyName}
                    onChange={(e) => setFamilyName(e.target.value)}
                />
            </fieldset>

            <fieldset className="grid">
                <label className="text-[#233059] font-semibold" htmlFor="email">Email</label>
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
                    name="email" 
                    id="email" 
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </fieldset>

            <fieldset className="grid">
                <label className="text-[#233059] font-semibold" htmlFor="birthDate">Data de Aniversário</label>
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
                    name="birthDate" 
                    id="birthDate" 
                    type="text"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                />
            </fieldset>

            <fieldset className="grid">
                <label className="text-[#233059] font-semibold" htmlFor="courseEnrolled">Curso</label>
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
                    name="courseEnrolled" 
                    id="courseEnrolled" 
                    type="text"
                    value={courseEnrolled}
                    onChange={(e) => setCourseEnrolled(e.target.value)}
                />
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
                Cadastrar Aluno
            </button>
        </form>
    );
}