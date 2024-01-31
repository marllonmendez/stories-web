type Props = {
  label: string
  placeHolder: string
}

export function Input({ label, placeHolder }: Props) {
  return (
    <div>
      <p className="text-second-gray font-bold">{label}</p>
      <input
        placeholder={placeHolder}
        className="rounded-md text-second-gray font-light h-9"
      />
    </div>
  )
}
