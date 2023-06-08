"use client"
import { Inter } from 'next/font/google'

import 'bootstrap/dist/css/bootstrap.min.css'
 
import '../globals.css'
import '../main.css'

import AppHeader from '@/components/Template/AppHeader'
import AppMenu from '@/components/Template/AppMenu'

import React, { useEffect} from 'react';
 
const inter = Inter({ subsets: ['latin'] })
 
export const metadata = {
  title: process.env.APP_NAME,
  description: 'Generated by create next app',
}
 
export default function RootLayout({ children }) {
  useEffect(() => {
      typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, []);
  
  return (
    <html lang="en">
       <head>
        <link href="https://fonts.googleapis.com/css2?family=Sarabun:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </head>
      <body className="app sidebar-mini rtl">
          <AppHeader/>
          <AppMenu/>
          {children}
      </body>
    </html>
  )
}
 