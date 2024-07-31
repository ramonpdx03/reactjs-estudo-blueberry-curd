import React from 'react';
import { Button, Checkbox, Input, Logo } from "../../components";
import LayoutLogin from "./components/LayoutLogin";

export default function CriarConta(): React.ReactElement {
  return (
    <LayoutLogin btnBack={'/login'}>
      <Logo withText={true} />
      <div className="flex flex-col text-center">
        <h3>Criar conta</h3>
        <p className="text-xs font-light">Preencha todas as informações</p>
      </div>
      <Input label="Usuário" placeholder="Login de usuário" />
      <Input label="Senha" type="password" isPassword={true} placeholder="*****" />
      <Input label="Nome completo" />
      <Input label="Email" placeholder="seu@email.com" />
      <div className="flex justify-between gap-4">
        <Input label="CPF" className="w-full" mask="###.###.###-##" placeholder="___.___.___-__" />
        <div className="flex items-center pt-6">
          <Checkbox className="whitespace-nowrap">Não sou brasileiro</Checkbox>
        </div>
      </div>
      <div className="flex justify-between gap-4">
        <Input label="Data de nascimento" className="w-full" mask="##/##/####" placeholder="__/__/____" />
        <Input label="Telefone" className="w-full" mask="(##) #####-####" placeholder="(__) ____-____" />
      </div>
      <div className="flex justify-between gap-4">
        <Button type="secondary" className="w-full" onClick={() => document.getElementById('btn-back')?.click()}>Cancelar</Button>
        <Button type="primary" className="w-full">Criar conta</Button>
      </div>
    </LayoutLogin>
  );
}