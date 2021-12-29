import { createContext, useMemo, useReducer } from 'react'

export const EditorContext = createContext({})

const editorContextReducer = (state, action) => {
  switch (action.type) {
    case 'SET_STATE':
      return action.payload
    case 'SET_ACTIVE_FILE':
      return {
        ...state,
        activeFile: action.payload,
      }
    case 'SET_FILES':
      return {
        ...state,
        files: action.payload,
      }
    default:
      return state
  }
}

export default function EditorContextProvider({ children }) {
  const [state, dispatch] = useReducer(editorContextReducer, {})

  const [memoizedState, memoizedDispatch] = useMemo(
    () => [state, dispatch],
    [state, dispatch]
  )

  return (
    <EditorContext.Provider
      value={{
        state: memoizedState,
        dispatch: memoizedDispatch,
      }}
    >
      {children}
    </EditorContext.Provider>
  )
}
