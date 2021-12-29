import { useContext, useEffect, useState } from 'react'

import { liftContext } from '@lib/functional'
import { getFile, getFiles } from '@services/http/files'

import EditorContextProvider, { EditorContext } from '@contexts/EditorContext'
import Editor from '@components/Editor'
import FileSidebar from '@components/FileSidebar'

import styles from '@styles/File.module.scss'

export default liftContext(EditorContextProvider, ({ files, data }) => {
  /** @type { [import('@editorjs/editorjs').default, (state: any) => void] } */
  const [editor, setEditor] = useState(null)
  const { dispatch } = useContext(EditorContext)

  useEffect(() => {
    dispatch({
      type: 'SET_STATE',
      payload: {
        activeFile: 0,
        files,
      },
    })
  }, [files, dispatch])

  return (
    <main className={styles.mainContainer}>
      <FileSidebar />
      <div className={styles.editorContainer}>
        <h1>Editor</h1>
        <Editor data={data} editorSetter={setEditor} />
      </div>
    </main>
  )
})

export async function getServerSideProps() {
  const [data, files] = await Promise.all([getFile('1'), getFiles()])

  return {
    props: {
      data,
      files,
    },
  }
}
