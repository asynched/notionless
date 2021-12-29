export default function makeEditorRenderer(stateSetter) {
  return async (data) => {
    const { default: EditorJS } = await import('@editorjs/editorjs')
    const { default: Header } = await import('@editorjs/header')
    const { default: Table } = await import('@editorjs/table')

    const editor = new EditorJS({
      holderId: 'editorjs',
      data: data,
      tools: {
        header: {
          class: Header,
          inlineToolbar: ['link'],
        },
        table: {
          class: Table,
          inlineToolbar: ['link'],
        },
      },
    })

    stateSetter(editor)
  }
}
