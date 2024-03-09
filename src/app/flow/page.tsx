'use client'

import Flow from '@/components/Flow/Flow'
import { CmdContext } from '@/components/CmdContext/index'

export default function Home() {
  return (
    <>
      <CmdContext>
        <Flow />
      </CmdContext>
    </>
  )
}
