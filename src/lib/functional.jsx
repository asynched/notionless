export const liftContext = (Context, Target) => {
  const lifted = (props) => {
    return (
      <Context>
        <Target {...props} />
      </Context>
    )
  }

  return lifted
}
