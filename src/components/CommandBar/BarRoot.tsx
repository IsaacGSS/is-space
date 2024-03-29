'use client'

import {
  Files,
  LayoutGrid,
  List,
  LogOut,
  Map,
  ScrollText,
  Settings2,
  Sparkles,
  Workflow
} from 'lucide-react'
import { useState } from 'react'
import { PageScheme } from './PageScheme'
import { ButtonLink } from '../Common/Buttons'

export const BarRoot = () => {
  const [openFiles, setOpenFiles] = useState(true)

  return (
    <>
      <header className='h-screen min-w-10 max-w-10 bg-zinc-950  left-0 z-10 justify-between text-zinc-300 fixed'>
        <div className='h-fit flex flex-col gap-5 items-center py-10'>
          {/* <div className='flex gap-1'>
            <div className='size-1.5 bg-zinc-100 rounded-full' />
            <div className='size-1.5 bg-zinc-100/40 rounded-full' />
            <div className='size-1.5 bg-zinc-100/40 rounded-full' />
          </div> */}
          <Sparkles className='md:size-6 size-5' />
        </div>

        <div className='flex flex-col justify-start items-center gap-5 pt-5 '>
          <ButtonLink href='/list'>
            <List className='md:size-6 size-5 ' />
          </ButtonLink>
          {/* <ButtonLink href='/notion'>
            <ScrollText className='md:size-6 size-5 ' />
          </ButtonLink> */}
          <Files
            className='md:size-6 size-5 cursor-pointer'
            onClick={() => {
              setOpenFiles(!openFiles)
            }}
          />
          {/* <LayoutGrid className='md:size-6 size-5 ' /> */}
          {/* <ButtonLink href='/flow'>
            <Workflow className='md:size-6 size-5 ' />
          </ButtonLink> */}
          {/* configuracao */}
          {/* <ButtonLink href='/settings'>
            <Settings2 className='md:size-6 size-5 ' />
          </ButtonLink> */}
        </div>

        <LogOut className='md:size-6 size-5 absolute bottom-5 inset-x-1/2 -translate-x-1/2' />
      </header>

      <PageScheme modalisClous={openFiles} />
    </>
  )
}
