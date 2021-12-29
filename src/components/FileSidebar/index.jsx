import FileList from '@components/FileList'
import styles from './styles.module.scss'

export default function FileSidebar({ files, activeFile, setActiveFile }) {
  return (
    <div className={styles.fileSidebar}>
      <div className={styles.searchContainer}>
        <input type="text" placeholder="Search" />
      </div>
      <FileList
        files={files}
        activeFile={activeFile}
        setActiveFile={setActiveFile}
      />
    </div>
  )
}
