import {
  Bold,
  Italic,
  Strikethrough,
  Subscript,
  Superscript,
  Underline
} from 'lucide-react'
import { ComponentProps } from 'react'

export interface Bubbles extends ComponentProps<'button'> {}

const UnderlineBubble = (props: Bubbles) => {
  return (
    <button {...props}>
      <Underline className='size-7 p-1 border-2 border-zinc-500 bg-zinc-950 rounded shadow-md shadow-zinc-950/20' />
    </button>
  )
}

const BoldBubble = (props: Bubbles) => {
  return (
    <button {...props}>
      <Bold className='size-7 p-1 border-2 border-zinc-500 bg-zinc-950 rounded shadow-md shadow-zinc-950/20' />
    </button>
  )
}

const ItalicBubble = (props: Bubbles) => {
  return (
    <button {...props}>
      <Italic className='size-7 p-1 border-2 border-zinc-500 bg-zinc-950 rounded shadow-md shadow-zinc-950/20' />
    </button>
  )
}

const StrikethroughBubble = (props: Bubbles) => {
  return (
    <button {...props}>
      <Strikethrough className='size-7 p-1 border-2 border-zinc-500 bg-zinc-950 rounded shadow-md shadow-zinc-950/20' />
    </button>
  )
}

const SubscriptBubble = (props: Bubbles) => {
  return (
    <button {...props}>
      <Subscript className='size-7 p-1 border-2 border-zinc-500 bg-zinc-950 rounded shadow-md shadow-zinc-950/20' />
    </button>
  )
}

const SuperscriptBubble = (props: Bubbles) => {
  return (
    <button {...props}>
      <Superscript className='size-7 p-1 border-2 border-zinc-500 bg-zinc-950 rounded shadow-md shadow-zinc-950/20' />
    </button>
  )
}

export {
  UnderlineBubble,
  BoldBubble,
  ItalicBubble,
  StrikethroughBubble,
  SubscriptBubble,
  SuperscriptBubble
}
