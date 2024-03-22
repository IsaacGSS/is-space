'use client'

import { Clock, Plus } from 'lucide-react'
import { useEffect } from 'react'

export default function Home() {
  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section className='w-full min-h-screen max-h-full bg-zinc-950 p-5 text-white'>
      <form
        action=''
        className='mx-10 flex gap-2.5'
        onSubmit={event => submitForm(event)}
      >
        <input
          type='text'
          placeholder='mercadoria...'
          name=''
          id=''
          className='text-zinc-950 rounded-md focus:outline-none bg-zinc-200 w-96 placeholder:text-zinc-950/50 placeholder:pl-1 p-1 px-2'
        />
        <button type='submit'>
          <Plus className='text-blue-500' />
        </button>
      </form>

      {Array.from({ length: 3 }).map((value, index) => (
        <ul
          key={index}
          className=' space-y-5 rounded-md m-5 px-3 border-l-4 border-emerald-500 max-w-[1200px]'
        >
          <li className='grid grid-cols-4 grid-rows-1 text-lg font-bold'>
            <span> Mercadoria </span>
            <span> Status </span>
            <span> Descricao </span>
            <span>
              {' '}
              <Clock />{' '}
            </span>
          </li>
          {Array.from({ length: 5 }).map((value, index) => (
            <li
              key={index}
              className='p-2 grid grid-cols-4 grid-rows-1 text-sm '
            >
              <span> {index}</span>
              <div className='p-1 px-2 rounded bg-emerald-500 w-fit font-bold'>
                Finalit
              </div>
              <p>mercadoria nao setada</p> <span> 10/03/24 14:04:23 </span>
            </li>
          ))}
        </ul>
      ))}
    </section>
  )
}
