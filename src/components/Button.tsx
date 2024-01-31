type Props = {
  name: string
  style: string
}

export function Button({ name, style }: Props) {
  return <button className={style}>{name}</button>
}
