'use client'

import { useState } from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Folder, FolderOpen } from 'lucide-react'
import Link from 'next/link'

interface typeSubFiles {
  title: string
}

export const SubFiles = ({ title }: typeSubFiles) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Collapsible.Root
        open={open}
        onOpenChange={setOpen}
        className='px-2.5 pt-3 '
      >
        <Collapsible.Trigger asChild>
          <div className='flex justify-between items-center text-center cursor-pointer select-none'>
            <span className='font-bold text-sm inline-flex gap-1'>
              {open ? (
                <FolderOpen className='size-4' />
              ) : (
                <Folder className='size-4' />
              )}
              {title}
            </span>
          </div>
        </Collapsible.Trigger>

        <Collapsible.Content>
          <div className='flex flex-col gap-5 px-2.5 ml-2 mt-1 mb-5 border-l border-black'>
            <div className='flex items-center justify-start text-center translate-y-[11px]'>
              <div className='h-2.5 w-[1.5px] bg-black rotate-90 -translate-x-1.5' />
              <Link href={'/'} className='text-sm'>
                <div className='inline-flex gap-1 items-center'>
                  <div className='size-1.5 rounded-full bg-sky-500 shadow-md shadow-sky-700 -translate-y-[2px]' />

                  <span>all projects</span>
                </div>
              </Link>
            </div>
            <div className='flex items-center justify-start text-center translate-y-[11px]'>
              <div className='h-2.5 w-[1.5px] bg-black rotate-90 -translate-x-1.5' />
              <Link href={'/'} className='text-sm'>
                <div className='inline-flex gap-1 items-center'>
                  <div className='size-1.5 rounded-full bg-sky-500 shadow-md shadow-sky-700 -translate-y-[2px]' />

                  <span>all projects</span>
                </div>
              </Link>
            </div>
          </div>
        </Collapsible.Content>
      </Collapsible.Root>
    </>
  )
}
