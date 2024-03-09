'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'

export const Tiptap = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        showOnlyCurrent: false,
        includeChildren: true,
        placeholder: 'Write something …'
      })
    ],
    editorProps: {
      attributes: {
        class: 'w-full h-full outline-none '
      }
    },

    content: ''
  })

  return (
    <>
      <EditorContent
        editor={editor}
        className='h-full w-full outline-none pt-5'
      />
    </>
  )
}
