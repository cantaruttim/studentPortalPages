"use client";

import FormLogin from "../components/FormLogin";

export default function Login() {
  return (

    <>
      <div className="fixed top-0 left-0 p-6 z-50">
        <span className="text-xl font-bold text-[#233059]">ADAI<span className="font-light italic text-white">College</span>
        </span>
      </div>

      <div className="grid gap-y-4 px-8 py-12 min-w-100 bg-[#fdfcfc] rounded-3xl shadow-xl">

        <FormLogin />

      </div>
    </>
  );
}
