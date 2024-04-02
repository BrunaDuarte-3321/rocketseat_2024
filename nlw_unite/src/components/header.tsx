import nlwUniteIcon from '../assets/logo.svg'
import { NavLink } from './nav-link'
export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUniteIcon} alt="" />
      <nav className="flex items-center gap-5">
        <NavLink text="Eventos" />
        <NavLink text="Participantes" />
      </nav>
    </div>
  )
}
