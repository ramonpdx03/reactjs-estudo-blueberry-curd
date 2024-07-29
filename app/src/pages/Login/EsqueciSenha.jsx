import { Button, Input, Logo } from "../../components";
import LayoutLogin from "./components/LayoutLogin";

export default function EsqueciSenha() {
  return (
    <LayoutLogin btnBack={'/login'}>
      <Logo withText={true} />
      <div className="flex flex-col text-center">
        <h3>Informe seu usuário</h3>
        <p className="text-xs font-light">Um link será enviado para o email cadastrado</p>
      </div>
      <Input label="Usuário" placeholder="Login de usuário" />
      <div className="flex justify-between gap-4">
        <Button type="secondary" className="w-full" onClick={() => document.getElementById('btn-back').click()}>Cancelar</Button>
        <Button type="primary" className="w-full">Enviar solicitação</Button>
      </div>
    </LayoutLogin>
  );
}