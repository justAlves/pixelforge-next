"use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { LoginData, loginSchema } from '@/schemas/login';
import { zodResolver } from '@hookform/resolvers/zod';

export default function Login() {
  const { register, handleSubmit, formState: { errors} } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginData) => {
    console.log(data)
  }

  return (
    <div
      className="flex flex-col items-center justify-center w-full h-[95vh] bg-background/90"
    >
      <h1
        className="text-4xl font-bold font-orbitron"
      >
        Bem-vindo de volta!
      </h1>
      <p
        className="text-lg font-inter mt-4"
      >
        Entre com sua conta para continuar
      </p>
      <form
        className="flex flex-col items-center w-72 mt-8 gap-8"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          type="text"
          placeholder="Digite seu e-mail ou usuário"
          label='E-mail ou Usuário'
          error={errors.email?.message}
          {...register('email')}
        />
        <Input
          type="password"
          placeholder="Digite sua senha"
          label='Senha'
          error={errors.password?.message}
          {...register('password')}
          password
        />
        <div
          className="flex justify-end w-full"
        >
          <Button
            variant="link"
            type='button'
          >
            Esqueceu sua senha?
          </Button>
        </div>
        <Button
          type='submit'
          size='lg'
        >
          Entrar
        </Button>
        <Button
          variant="link"
          type='button'
        >
          Não tem uma conta? Cadastre-se agora mesmo!
        </Button>
      </form>
    </div>
  )
}
