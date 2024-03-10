'use client'

import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import Underline from '@tiptap/extension-underline'
import Text from '@tiptap/extension-text'

import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import {
  Bold,
  Italic,
  Strikethrough,
  SubscriptIcon,
  SuperscriptIcon,
  UnderlineIcon
} from 'lucide-react'

export const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Subscript,
      StarterKit,
      Superscript,
      Underline,
      Placeholder.configure({
        showOnlyCurrent: false,
        includeChildren: true,
        placeholder: 'Write something …'
      })
    ],
    editorProps: {
      attributes: {
        class: 'w-full h-full outline-none'
      }
    },

    content: ''
  })

  if (!editor) {
    return null
  }

  return (
    <>
      {editor && (
        <BubbleMenu
          editor={editor}
          tippyOptions={{ duration: 100 }}
          className='w-full translate-x-1/2 space flex gap-2 justify-end items-center text-white'
        >
          <button
            title='underline'
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? 'is-active' : ''}
          >
            <UnderlineIcon className='size-7 p-1 border-2 border-zinc-500 bg-zinc-950 rounded shadow-md shadow-zinc-950/20' />
          </button>
          <button
            title='bold'
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active' : ''}
          >
            <Bold className='size-7 p-1 border-2 border-zinc-500 bg-zinc-950 rounded shadow-md shadow-zinc-950/20' />
          </button>
          <button
            title='italic'
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
          >
            <Italic className='size-7 p-1 border-2 border-zinc-500 bg-zinc-950 rounded shadow-md shadow-zinc-950/20' />
          </button>

          <button
            title='strike'
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'is-active' : ''}
          >
            <Strikethrough className='size-7 p-1 border-2 border-zinc-500 bg-zinc-950 rounded shadow-md shadow-zinc-950/20' />
          </button>
          <button
            title='subscript'
            onClick={() => editor.chain().focus().toggleSubscript().run()}
            className={editor.isActive('subscript') ? 'is-active' : ''}
          >
            <SubscriptIcon className='size-7 p-1 border-2 border-zinc-500 bg-zinc-950 rounded shadow-md shadow-zinc-950/20' />
          </button>
          <button
            title='superscript'
            onClick={() => editor.chain().focus().toggleSuperscript().run()}
            className={editor.isActive('superscript') ? 'is-active' : ''}
          >
            <SuperscriptIcon className='size-7 p-1 border-2 border-zinc-500 bg-zinc-950 rounded shadow-md shadow-zinc-950/20' />
          </button>

          {/*
            Em Testes
          <button
            onClick={() => editor.chain().focus().toggleHighlight().run()}
            className={editor.isActive('highlight') ? 'is-active' : ''}
          >
            <HighlighterIcon className='size-7 p-1 border-2 border-zinc-500 bg-zinc-950 rounded shadow-md shadow-zinc-950/20' />
          </button> */}
        </BubbleMenu>
      )}
      <EditorContent
        editor={editor}
        className='h-full w-full outline-none pt-5'
      />
    </>
  )
}
