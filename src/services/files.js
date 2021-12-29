export const getFile = async (fileId) => {
  const response = await fetch(`http://localhost:3000/api/file/${fileId}`)
  const data = await response.json()
  return data
}
