import { Button, Input, Logo } from "../components";

export default function Login() {
  return (
    <div className="w-full h-full p-3 flex flex-col items-center">
      <div className="m-auto min-w-[300px] max-w-[600px] w-full flex justify-center p-8 rounded-xl bg-slate-800">
        <div className="min-w-[260px] max-w-[360px] w-full flex flex-col justify-center gap-4">
          <div className="flex justify-center items-center gap-2">
            <Logo />
            <h1><span className="text-indigo-400">Blueberry</span> Curd</h1>
          </div>
          <div className="flex flex-col text-center">
            <h3>Entrar</h3>
            <p className="text-xs font-light">Informe seu usuário e senha para acessar a sua conta</p>
          </div>
          <Input />
          <Button>Entrar</Button>
        </div>
      </div>
    </div>
  );
}