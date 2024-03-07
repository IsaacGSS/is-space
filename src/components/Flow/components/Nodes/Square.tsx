import { NodeProps, Handle, Position } from 'reactflow'

export const Square = (props: NodeProps) => {
  return (
    <div className='bg-gradient-to-bl from-rose-700 to-pink-600 rounded-md w-[200px] h-[200px]'>
      <Handle
        id='Bottom'
        className='-mb-1 size-3 bg-zinc-950 '
        type='source'
        position={Position.Bottom}
      />
      <Handle
        id='Left'
        className='-ml-1 size-3 bg-zinc-950'
        type='source'
        position={Position.Left}
      />
      <Handle
        id='Right'
        className='-mr-1 size-3 bg-zinc-950'
        type='source'
        position={Position.Right}
      />
      <Handle
        id='Top'
        className='-mt-1 size-3 bg-zinc-950'
        type='source'
        position={Position.Top}
      />
    </div>
  )
}
