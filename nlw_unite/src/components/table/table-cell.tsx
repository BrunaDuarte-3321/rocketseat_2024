import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface ITableCell extends ComponentProps<'td'> {}
export function TableCell({ ...props }: ITableCell) {
  return (
    <td
      {...props}
      style={{ width: 48 }}
      className={twMerge('py-3 px-4 text-sm text-zinc-300', props.className)}
    ></td>
  )
}
