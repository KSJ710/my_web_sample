type Props = {
  categories: JSX.Element
  posts: JSX.Element
}

export default function Adm(props: Props): JSX.Element {
  // const [selectedTag, setSelectedTag] = useState(null)

  return (
    <div className="mt-[-32px] p-4">
      {props.categories}
      {props.posts}
    </div>
  )
}
