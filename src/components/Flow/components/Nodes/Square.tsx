import { NodeProps, Handle, Position, NodeResizer } from 'reactflow'

export const Square = ({ selected }: NodeProps) => {
  return (
    <div className='bg-gradient-to-bl from-rose-700 to-pink-600 rounded-md w-full h-full min-w-[150px] min-h-[150px]'>
      <NodeResizer
        minHeight={150}
        minWidth={150}
        isVisible={selected}
        lineClassName=' border-sky-400'
        handleClassName='h-3 w-3 bg-white border-2 rounded border-sky-400'
      />

      {/*
      ?? test !
      
      <Handle
        id='Bottom'
        className={
          selected
            ? '-mb-1 size-3 bg-zinc-950 '
            : '-mb-1 size-3 bg-zinc-950 invisible'
        }
        type='source'
        position={Position.Bottom}
      /> */}

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
