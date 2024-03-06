'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronDown, ChevronRight, Plus } from 'lucide-react'
import { useState } from 'react'
import { SubFiles } from './SubFiles'

interface openModal {
  modalisClous?: boolean
}

export const PageScheme = ({ modalisClous }: openModal) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='flex flex-col gap-10 h-screen w-56 relative z-0 bg-indigo-50 drop-shadow-2xl border-r border-zinc-950/10 overflow-hidden'>
      <div className='w-full inline-flex justify-between items-center text-center px-2.5 pt-5'>
        <h3 className='font-semibold text-xl'>Projects</h3>
        <div className='bg-zinc-950 text-white h-fit w-fit rounded-full'>
          <Plus className='size-4 m-1' />
        </div>
      </div>

      <div>
        <Collapsible.Root open={open} onOpenChange={setOpen} className='px-5 '>
          <Collapsible.Trigger asChild>
            <div className='flex justify-between items-center text-center cursor-pointer'>
              <span className='font-roboto-mono text-sm inline-flex gap-1 items-center  '>
                <div className='size-2 rounded-full bg-emerald-500 shadow-md shadow-emerald-700' />
                Times
              </span>
              <button>
                {open ? (
                  <ChevronDown className='size-5' />
                ) : (
                  <ChevronRight className='size-5' />
                )}
              </button>
            </div>
          </Collapsible.Trigger>

          <Collapsible.Content>
            {Array.from({ length: 2 }).map((value, index) => {
              return <SubFiles key={index} title='faturamento' />
            })}
          </Collapsible.Content>
        </Collapsible.Root>
      </div>
    </div>
  )
}
