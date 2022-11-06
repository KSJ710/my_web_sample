export default function Adm(props: any): JSX.Element {
  // const [selectedTag, setSelectedTag] = useState(null)

  return (
    <div className="mt-[-32px]">
      {props.categories}
      {props.posts}
    </div>
  )
}
