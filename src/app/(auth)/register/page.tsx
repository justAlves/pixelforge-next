"use client";

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { RegisterData, registerSchema } from '@/schemas/register';
import axios from 'axios';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';


export default function Register() {
  const { register, handleSubmit, formState: { errors} } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  })

  const { push } = useRouter()
  
    const onSubmit = async (data: RegisterData) => {
      
      try {
        await axios.post('/api/register', data)
        toast.success('Conta criada com sucesso!')
        push('/login')
      } catch (error) {       
        toast.error('Tenha certeza que você não possui uma conta já criada')
      }
    }
  
  return (
    <div
    className="flex flex-col items-center pt-32 w-full h-screen bg-background/90"
  >
    <h1
      className="text-4xl font-bold font-orbitron"
    >
      Novo por aqui?
    </h1>
    <p
      className="text-lg font-inter mt-4"
    >
      Crie sua conta para começar a vender e compartilhar seus jogos
    </p>
    <form
      className="flex flex-col items-center w-72 mt-8 gap-8"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        type="text"
        placeholder="Digite seu usuário"
        label='Usuário'
        error={errors.username?.message}
        {...register('username')}
      />
      <Input
        type="text"
        placeholder="Digite seu e-mail"
        label='E-mail'
        error={errors.email?.message}
        {...register('email')}
      />
      <Input
        type="password"
        placeholder="Digite sua senha"
        label='Senha'
        error={errors.password?.message || errors.root?.message}
        {...register('password')}
        password
      />
      <Input
        type="password"
        placeholder="Confirme sua senha"
        label='Confirme sua senha'
        error={errors.confirmPassword?.message || errors.root?.message}
        {...register('confirmPassword')}
        password
      />
      <Button
        type='submit'
        size='lg'
      >
        Criar Conta
      </Button>
      <span className='text-xs font-inter text-center text-primary/50'>
        Ao clicar em Criar Conta, você concorda com nossos <Link className='text-app_primary' href={'/terms'}>Termos de Serviço</Link> e <Link className='text-app_primary' href={'/privacy'}>Política de Privacidade</Link>
      </span>
      <Button
        variant="link"
        type='button'
        asChild
      >
        <Link
          href={'/login'}
        >
          Já tem uma conta? <span className='text-app_primary'>Faça o login</span>
        </Link>
      </Button>
    </form>
  </div>
  )
}
