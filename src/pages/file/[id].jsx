import { useEffect, useState } from 'react'

import { getFile } from '@services/http/files'

import Editor from '@components/Editor'
import Logger from '@utils/logger'

export default function Home({ data }) {
  /** @type { [import('@editorjs/editorjs').default, (state: any) => void] } */
  const [editor, setEditor] = useState(null)

  const handleSave = async () => {
    const data = await editor.save()
    Logger.info(data)
  }

  useEffect(() => {
    console.log(editor)
  }, [editor])

  return (
    <main>
      <h1>Editor</h1>
      <button onClick={handleSave}>Save</button>
      <Editor data={data} editorSetter={setEditor} />
    </main>
  )
}

export async function getServerSideProps() {
  const data = await getFile('1')

  return {
    props: {
      data,
    },
  }
}
