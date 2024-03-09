'use client'

import ReactFlow, {
  Background,
  Controls,
  BackgroundVariant,
  Node,
  ConnectionMode,
  useEdgesState,
  Connection,
  addEdge,
  useNodesState,
  ConnectionLineType,
  MiniMap
} from 'reactflow'

import 'reactflow/dist/style.css'
import { black, indigo, orange, zinc } from 'tailwindcss/colors'
import { Square } from './components/Nodes/Square'
import { useCallback } from 'react'
import { DefaultEdge } from './components/Edges/DefaultEdge'

import * as ContextMenu from '@radix-ui/react-context-menu'
import { SquareStack, Plus } from 'lucide-react'
import { ButtonAdd } from '@/Common/Buttons'

const dark = true

const NODE_TYPES = {
  square: Square
}

const EDGE_TYPES = {
  default: DefaultEdge
}

const INITIAL_NODES = [] satisfies Node[]

function Flow() {
  const [edges, setEdges, onEdgesChange] = useEdgesState([])
  const [nodes, setNodes, onNodeChange] = useNodesState(INITIAL_NODES)

  const onConnect = useCallback((connection: Connection) => {
    return setEdges(edges => addEdge(connection, edges))
  }, [])

  function addSquareNode() {
    setNodes(nodes => [
      ...nodes,
      {
        id: crypto.randomUUID(),
        type: 'square',
        position: {
          x: 200,
          y: 600
        },
        data: {}
      }
    ])
  }

  return (
    <main className='h-screen w-full'>
      <ContextMenu.Root>
        <ContextMenu.Trigger>
          <ReactFlow
            nodeTypes={NODE_TYPES}
            edgeTypes={EDGE_TYPES}
            defaultEdgeOptions={{
              type: 'default'
            }}
            nodes={nodes}
            edges={edges}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodesChange={onNodeChange}
            connectionLineType={ConnectionLineType.SmoothStep}
            connectionMode={ConnectionMode.Loose}
          >
            <Background
              className={dark ? 'bg-zinc-900' : 'bg-neutral-100'}
              gap={78}
              size={12}
              color={dark ? indigo[500] : zinc[950]}
              variant={BackgroundVariant.Cross}
            />
            <Controls className='top-0' />
            {/* <MiniMap /> */}
          </ReactFlow>
        </ContextMenu.Trigger>

        <ContextMenu.Portal>
          <ContextMenu.Content className='w-40 h-fit rounded-md bg-zinc-100 text-zinc-950 border border-zinc-950 p-1'>
            <ContextMenu.Item
              className='outline-none leading-none w-full h-fit p-1 inline-flex justify-around items-center text-center  hover:bg-indigo-500 hover:text-white rounded'
              onClick={() => addSquareNode()}
            >
              <span className='font-roboto-mono text-xs'>Square</span>
              {/* <div className=''> */}
              <SquareStack className='size-4' />
              {/* </div> */}
            </ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Portal>
      </ContextMenu.Root>
      <ButtonAdd onClick={() => addSquareNode()}>
        <Plus />
      </ButtonAdd>
    </main>
  )
}

export default Flow
