import { useEffect } from 'react'
import makeEditorRenderer from '../../lib/editor'

export default function Editor({ editorSetter, data }) {
  useEffect(() => {
    const renderEditor = makeEditorRenderer(editorSetter)
    renderEditor(data)
  }, [editorSetter, data])

  return <div id="editorjs"></div>
}
