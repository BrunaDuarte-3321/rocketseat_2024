import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface IIconButton extends ComponentProps<'button'> {
  transparent?: boolean
}
export function IconButton({ transparent, ...props }: IIconButton) {
  return (
    <button
      className={twMerge(
        'border-white/10 rounded-md p-1.5',
        transparent ? 'bg-black/20' : 'bg-white/10',
        props.disabled ? 'opacity-50' : null,
      )}
      {...props}
    />
  )
}

/* "" */
