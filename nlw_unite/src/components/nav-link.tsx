import { ComponentProps } from 'react'

interface INavLink extends ComponentProps<'a'> {
  text: string
}
export function NavLink({ text, ...props }: INavLink) {
  return (
    <a {...props} className="font-medium text-sm text-zinc-300">
      {text}
    </a>
  )
}
