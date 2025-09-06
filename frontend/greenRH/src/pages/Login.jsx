import React from "react";
import Layout from "../components/Layout";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen h-14 bg-gradient-to-br from-emerald-200 from-0% via-emerald-700 via-50% to-green-700 to-100%">
      <form
        action=""
        className="flex flex-col justify-center  gap-4 mt-4 px-7 py-4 sm:w-[22rem] sm:h-[24rem] rounded-2xl  shadow-lg bg-white/40 backdrop-blur-xs"
      >
        <div>
          <h1 className="text-3xl font-semibold ">Faça seu login</h1>
          <p>Preencha seus dados</p>
        </div>

        <div className="flex flex-col gap-1">
          <p className="font-semibold">Email</p>
          <input
            type="email"
            placeholder="Digite seu email"
            className="border p-2 text-[12px] w-full h-10 rounded-md outline-none"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Senha</p>
          <input
            type="password"
            placeholder="Digite sua senha"
            className="border p-2 text-[12px] w-full h-10 rounded-md outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 text-black p-2 rounded-md hover:bg-green-600 transition-colors duration-200 cursor-pointer border-1 border-black"
        >
          Entrar
        </button>
        <div className="flex justify-center">
          <p className="text-1xl">
            Não possui uma conta?{" "}
            <a
              href="/register"
              className="font-bold  text-1xl text-green-950 hover:underline"
            >
              Registre-se
            </a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
