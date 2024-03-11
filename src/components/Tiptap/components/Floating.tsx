import { Heading1, Heading2, List, ListCollapse } from 'lucide-react'
import { ComponentProps } from 'react'

export interface Floating extends ComponentProps<'button'> {}

const H1Floating = (props: Floating) => {
  return (
    <button {...props}>
      <Heading1 className='size-7 p-1 border-2 border-zinc-500 bg-zinc-950 rounded shadow-md shadow-zinc-950/20' />
    </button>
  )
}

const H2Floating = (props: Floating) => {
  return (
    <button {...props}>
      <Heading2 className='size-7 p-1 border-2 border-zinc-500 bg-zinc-950 rounded shadow-md shadow-zinc-950/20' />
    </button>
  )
}

const BulletListFloating = (props: Floating) => {
  return (
    <button {...props}>
      <List className='size-7 p-1 border-2 border-zinc-500 bg-zinc-950 rounded shadow-md shadow-zinc-950/20' />
    </button>
  )
}

const Lis2Floating = (props: Floating) => {
  return (
    <button {...props}>
      <ListCollapse className='size-7 p-1 border-2 border-zinc-500 bg-zinc-950 rounded shadow-md shadow-zinc-950/20' />
    </button>
  )
}

// const Floating = (props: Floating) => {
//   return (
//     <button {...props}>
//       <Subscript className='size-7 p-1 border-2 border-zinc-500 bg-zinc-950 rounded shadow-md shadow-zinc-950/20' />
//     </button>
//   )
// }

// const Floating = (props: Floating) => {
//   return (
//     <button {...props}>
//       <Superscript className='size-7 p-1 border-2 border-zinc-500 bg-zinc-950 rounded shadow-md shadow-zinc-950/20' />
//     </button>
//   )
// }

export {
  H1Floating,
  H2Floating,
  BulletListFloating,
  Lis2Floating
  // StrikethroughBubble,
  // SubscriptBubble,
  // SuperscriptBubble
}
