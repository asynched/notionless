import { useContext } from 'react'

import { DocumentIcon } from '@heroicons/react/outline'
import { EditorContext, EditorContextActions } from '@contexts/EditorContext'
import styles from './styles.module.scss'

export default function FileList() {
  const { state, dispatch } = useContext(EditorContext)

  return (
    <ul className={styles.fileList}>
      {state.files?.map((file, index) => (
        <li
          key={file}
          className={index === state.activeFile ? styles.active : ''}
          onClick={() =>
            dispatch({
              type: EditorContextActions.SET_ACTIVE_FILE,
              payload: index,
            })
          }
        >
          <DocumentIcon />
          {file}
        </li>
      ))}
    </ul>
  )
}
