"use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { LoginData, loginSchema } from '@/schemas/login';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import axios from 'axios';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import userStore from '@/stores/user.store';

export default function Login() {
  const { push } = useRouter()
  const { setUser } = userStore()
  const { register, handleSubmit, formState: { errors} } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginData) => {
    try {
      const response = await axios.post('/api/auth', {
        emailOrUsername: data.email,
        password: data.password
      })

      toast.success('Login efetuado com sucesso!')
      setUser(response.data.user)
      localStorage.setItem('token', response.data.token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
      push('/app/feed')
    } catch (error) {
      toast.error('Usuário ou senha incorretos')
    }
  }

  return (
    <div
      className="flex flex-col items-center pt-32 w-full h-screen bg-background/90"
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
          asChild
        >
          <Link
            href={'/register'}
          >
            Não tem uma conta? <span className="text-app_primary">Crie uma agora!</span>
          </Link>
        </Button>
      </form>
    </div>
  )
}
