export const header = () => {
  return <HeaderItem destinationPage='about' setPage={() => {}}></HeaderItem>
}

type HeaderItemProps = {
  destinationPage: string
  setPage: React.Dispatch<React.SetStateAction<string>>
  className?: string
  children?: React.ReactNode
}

const HeaderItem = (props: HeaderItemProps) => {
  return (
    <button
      onClick={() => props.setPage(props.destinationPage)}
      className={props.className ?? ''}
    >
      {props.children ?? <></>}
    </button>
  )
}
