import React, { useState } from 'react'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Quiz } from '../components/Quiz'
import { AuthorisedPage } from './AuthorisedPage'

export const  QuizPage = () => {

  return (
   <>
     <AuthorisedPage>
   <Header/>
   <Quiz/>
   <Footer/>
   </AuthorisedPage>

   </>
  )
}

