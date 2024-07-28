import { Button, Input, Link, Logo } from "../../components";
import LayoutLogin from "./components/LayoutLogin";

export default function Login() {
  return (
    <LayoutLogin>
      <Logo withText={true} />
      <div className="flex flex-col text-center">
        <h3>Entrar</h3>
        <p className="text-xs font-light">Informe seu usuário e senha para acessar a sua conta</p>
      </div>
      <Input label="Usuário" placeholder="Login de usuário" />
      <Input label="Senha" type="password" isPassword={true} placeholder="*****" />
      <Button>Entrar</Button>
      <div className="flex justify-between">
        <Link to="/criar-conta" className="text-xs">Criar conta</Link>
        <Link to="/esqueci-minha-conta" className="text-xs">Esqueci minha conta</Link>
      </div>
    </LayoutLogin>
  );
}