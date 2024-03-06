'use client'

import ReactFlow, { Background, Controls } from 'reactflow'
import 'reactflow/dist/style.css'
import { zinc } from 'tailwindcss/colors'

function Flow() {
  return (
    <main className='h-screen w-full'>
      <ReactFlow>
        <Background
          className='bg-zinc-900'
          gap={25}
          size={1.5}
          color={zinc[200]}
        />
        <Controls />
      </ReactFlow>
    </main>
  )
}

export default Flow
