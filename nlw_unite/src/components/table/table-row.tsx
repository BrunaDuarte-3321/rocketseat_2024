import { ComponentProps } from 'react'

interface ITableRow extends ComponentProps<'tr'> {}
export function TableRow({ ...props }: ITableRow) {
  return (
    <tr {...props} style={{ width: 48 }} className="border-b border-white/10" />
  )
}
