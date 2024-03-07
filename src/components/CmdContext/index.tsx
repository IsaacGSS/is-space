'use client'

import * as ContextMenu from '@radix-ui/react-context-menu'
import { SquareStack } from 'lucide-react'
import { ReactNode } from 'react'

interface cmd {
  children: ReactNode
}

export function CmdContext({ children }: cmd) {
  return (
    <ContextMenu.Root>
      <ContextMenu.Trigger className='w-full h-full'>
        {children}
      </ContextMenu.Trigger>

      <ContextMenu.Portal>
        <ContextMenu.Content className='w-48 h-fit rounded-md bg-zinc-100 text-zinc-950 border border-zinc-950 p-1'>
          <ContextMenu.Item
            className='outline-none leading-none w-full h-fit px-1 py-2 inline-flex justify-around items-center text-center hover:bg-indigo-500 hover:text-white rounded'
            onClick={() => {
              console.log('a')
            }}
          >
            <span className='font-roboto-mono text-sm'>Square</span>
            {/* <div className=''> */}
            <SquareStack className='size-5' />
            {/* </div> */}
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu.Portal>
    </ContextMenu.Root>
  )
}
