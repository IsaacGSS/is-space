import Link from 'next/link'
import { ComponentProps, ReactNode } from 'react'

export interface Buttons extends ComponentProps<'button'> {
  children: ReactNode
}

export const ButtonAdd = (props: Buttons) => {
  return (
    <button
      className=' size-10 bg-indigo-600 text-center text-white fixed bottom-10 right-5 inline-flex justify-center items-center rounded-full hover:bg-indigo-700 transition-colors duration-300 delay-75 shadow-2xl shadow-black/20'
      {...props}
    ></button>
  )
}

export interface ButtonLinks extends Buttons {
  href: string
}

export const ButtonLink = ({ children, href }: ButtonLinks) => {
  return (
    <Link href={href}>
      <button className='h-fit w-fit'>{children} </button>
    </Link>
  )
}
