'use client'

import {
  Files,
  LayoutGrid,
  LogOut,
  Map,
  Settings2,
  Sparkles
} from 'lucide-react'
import { useState } from 'react'
import { PageScheme } from './PageScheme'

export const BarRoot = () => {
  const [openFiles, setOpenFiles] = useState(false)

  return (
    <>
      <header className='h-screen min-w-14 max-w-14 bg-zinc-950 relative left-0 z-10 justify-between text-zinc-300'>
        <div className='h-fit flex flex-col gap-5 items-center py-10'>
          <div className='flex gap-1'>
            <div className='size-1.5 bg-zinc-100 rounded-full' />
            <div className='size-1.5 bg-zinc-100/40 rounded-full' />
            <div className='size-1.5 bg-zinc-100/40 rounded-full' />
          </div>
          <Sparkles className='size-6' />
        </div>

        <div className='flex flex-col justify-start items-center gap-5 pt-5 '>
          <Files
            className='size-6 cursor-pointer'
            onClick={() => {
              setOpenFiles(!openFiles)
            }}
          />
          <LayoutGrid className='size-6 ' />
          <Map className='size-6 ' />

          {/* configuracao */}
          <Settings2 className='size-6 ' />
        </div>
        {/* <div className=' flex flex-col justify-end items-center gap-5 pb-5 relative bottom-5'> */}
        <LogOut className='size-6 absolute bottom-5 inset-x-4' />
        {/* </div> */}
      </header>

      <PageScheme modalisClous={openFiles} />
    </>
  )
}
