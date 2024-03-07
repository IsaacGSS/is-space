import { EdgeProps, getSmoothStepPath } from 'reactflow'

export const DefaultEdge = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  data,
  markerEnd
}: EdgeProps) => {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition
  })

  return (
    <path
      id={id}
      style={style}
      className='nodrag nopan react-flow__edge-path stroke-[1.5] stroke-neutral-100'
      d={edgePath}
      markerEnd={markerEnd}
    />
  )
}
