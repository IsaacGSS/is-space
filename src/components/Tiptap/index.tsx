'use client'

// import './styles.scss'

import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Subscript from '@tiptap/extension-subscript'
import Superscript from '@tiptap/extension-superscript'
import Underline from '@tiptap/extension-underline'
import Text from '@tiptap/extension-text'

import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu
} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'

import {
  SuperscriptBubble,
  BoldBubble,
  ItalicBubble,
  StrikethroughBubble,
  SubscriptBubble,
  UnderlineBubble
} from './components/Bubble'
import {
  H1Floating,
  H2Floating,
  BulletListFloating,
  Lis2Floating
} from './components/Floating'

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

    content: '<h1> Isaac Gabriel S. Silva </h1>'
  })

  if (!editor) {
    return null
  }

  return (
    <>
      {editor && (
        <>
          <BubbleMenu
            editor={editor}
            tippyOptions={{ duration: 100 }}
            className='w-full translate-x-1/2 space flex gap-2 justify-end items-center text-white'
          >
            <UnderlineBubble
              title='underline'
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive('underline') ? 'is-active' : ''}
            />
            <BoldBubble
              title='bold'
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive('bold') ? 'is-active' : ''}
            />
            <ItalicBubble
              title='italic'
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive('italic') ? 'is-active' : ''}
            />

            <StrikethroughBubble
              title='strike'
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive('strike') ? 'is-active' : ''}
            />

            <SubscriptBubble
              title='subscript'
              onClick={() => editor.chain().focus().toggleSubscript().run()}
              className={editor.isActive('subscript') ? 'is-active' : ''}
            />
            <SuperscriptBubble
              title='superscript'
              onClick={() => editor.chain().focus().toggleSuperscript().run()}
              className={editor.isActive('superscript') ? 'is-active' : ''}
            />
          </BubbleMenu>

          <FloatingMenu
            editor={editor}
            tippyOptions={{ duration: 100 }}
            className='w-full flex gap-2 justify-end items-center text-white'
          >
            <H1Floating
              title='Heading 1'
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={
                editor.isActive('heading', { level: 1 }) ? 'is-active' : ''
              }
            />
            <H2Floating
              title='Heading 2'
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={
                editor.isActive('heading', { level: 2 }) ? 'is-active' : ''
              }
            />
            <BulletListFloating
              title='Bullet List'
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={editor.isActive('bulletList') ? 'is-active' : ''}
            />
          </FloatingMenu>
        </>
      )}
      <EditorContent
        editor={editor}
        className='h-full w-full outline-none pt-5 prose prose-zinc'
        onClick={() =>
          editor.getJSON().content?.map(e => {
            console.log(e)
          })
        }
        // onClick={() => console.log(editor.)}
      />
    </>
  )
}
