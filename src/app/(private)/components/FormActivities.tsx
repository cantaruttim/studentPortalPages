"use client";

import { useState } from "react";

export default function FormActivities() {

    const [registrationNumber, setRegistrationNumber] = useState("");
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [moduleName, setModuleName] = useState("");
    const [teacherName, setTeacherName] = useState("");
    const [firstQuestion, setFirstQuestion] = useState("");
    const [secondQuestion, setSecondQuestion] = useState("");

    /*
         String id;
         String registrationNumber;
         String fullName;
         String email;

         String moduleId;
         String teacherId;

         String firstQuestion;
         String secondQuestion;

         LocalDateTime createdAt;
    */

    return (

        <form className="grid gap-y-6" >

            <fieldset className="grid">
                <label className="
                    text-[#233059] 
                    font-semibold" 
                    htmlFor="registrationNumber"
                >
                    Matrícula
                </label>
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
                    name="registrationNumber" 
                    id="registrationNumber" 
                    type="text"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                />
            </fieldset>


            <fieldset className="grid">
                <label className="
                    text-[#233059] 
                    font-semibold" 
                    htmlFor="fullName"
                >
                    Aluno
                </label>
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
                    name="fullName" 
                    id="fullName" 
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            </fieldset>

            <fieldset className="grid">
                <label className="
                    text-[#233059] 
                    font-semibold" 
                    htmlFor="email"
                >
                    Email
                </label>
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
                <label className="
                    text-[#233059] 
                    font-semibold" 
                    htmlFor="moduleName"
                >
                    Módulo
                </label>
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
                    name="moduleName" 
                    id="moduleName" 
                    type="text"
                    value={moduleName}
                    onChange={(e) => setModuleName(e.target.value)}
                />
            </fieldset>

            <fieldset className="grid">
                <label className="
                    text-[#233059] 
                    font-semibold" 
                    htmlFor="teacherName"
                >
                    Professor
                </label>
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
                    name="teacherName" 
                    id="teacherName" 
                    type="text"
                    value={teacherName}
                    onChange={(e) => setTeacherName(e.target.value)}
                />
            </fieldset>

            <fieldset className="grid">
                <label className="
                    text-[#233059] 
                    font-semibold" 
                    htmlFor="firstQuestion"
                >
                    Questão Um
                </label>
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
                    name="firstQuestion" 
                    id="firstQuestion" 
                    type="text"
                    value={firstQuestion}
                    onChange={(e) => setFirstQuestion(e.target.value)}
                />
            </fieldset>

            <fieldset className="grid">
                <label className="
                    text-[#233059] 
                    font-semibold" 
                    htmlFor="secondQuestion"
                >
                    Questão Dois
                </label>
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
                    name="secondQuestion" 
                    id="secondQuestion" 
                    type="text"
                    value={secondQuestion}
                    onChange={(e) => setSecondQuestion(e.target.value)}
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
                Enviar
            </button>
        </form>
    );
}