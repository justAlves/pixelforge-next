"use client";

import React, { useEffect } from 'react'
import { getCookie, hasCookie } from 'cookies-next'
import { useRouter } from 'next/navigation';
import userStore from '@/stores/user.store';
import axios from 'axios';
import api from '@/lib/api';

export default function IsAuth() {
  const { push } = useRouter()
  const { user, setUser } = userStore()

  const verifyAuth = async () => {
    // verify if user is authenticated
    const hasToken = await hasCookie('token')

    if (!hasToken) {
      return false
    }

    const token = await getCookie('token')

    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    return true
  }

  const getUser = async () => {
    if(user){
      return
    }

    try {
      const response = await api.get('/api/me')
      setUser(response.data)
    } catch (error) {
      push('/login')
    }
  }

  useEffect(() => {
    if (!verifyAuth()) {
      push('/login')
    }else {
      getUser()
    }
  }, [])

  return null
}
