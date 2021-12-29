import { useEffect, useState } from 'react'
import { DocumentIcon } from '@heroicons/react/outline'

import Logger from '@utils/logger'
import { getFile, getFiles } from '@services/http/files'

import Editor from '@components/Editor'
import styles from '@styles/File.module.scss'

export default function Home({ files, data }) {
  /** @type { [import('@editorjs/editorjs').default, (state: any) => void] } */
  const [editor, setEditor] = useState(null)
  const [activeFile, setActiveFile] = useState(0)

  useEffect(() => {
    Logger.info(editor)
  }, [editor])

  return (
    <main className={styles.mainContainer}>
      <div className={styles.fileSidebar}>
        <div className={styles.searchContainer}>
          <input type="text" placeholder="Search" />
        </div>
        <ul>
          {files.map((file, index) => (
            <li
              key={file}
              className={index === activeFile ? styles.active : ''}
              onClick={() => setActiveFile(index)}
            >
              <DocumentIcon />
              {file}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.editorContainer}>
        <h1>Editor</h1>
        <Editor data={data} editorSetter={setEditor} />
      </div>
    </main>
  )
}

export async function getServerSideProps() {
  const [data, files] = await Promise.all([getFile('1'), getFiles()])

  return {
    props: {
      data,
      files,
    },
  }
}
