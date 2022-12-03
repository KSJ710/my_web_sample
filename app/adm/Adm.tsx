type Propse = {
  categories: Promise<JSX.Element>
  posts: Promise<JSX.Element>
}

export default function Adm(props: any): JSX.Element {
  // const [selectedTag, setSelectedTag] = useState(null)

  return (
    <div className="mt-[-32px] p-4">
      {props.categories}
      {props.posts}
    </div>
  )
}
