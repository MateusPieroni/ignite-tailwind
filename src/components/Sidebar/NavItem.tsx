import { BsChevronDown } from 'react-icons/bs'
import { ElementType } from 'react'

export interface NavItemProps {
  title: string
  icon: ElementType // quando for passar um ícone como propriedade
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  // transformar o ícone como componente (letra maíscula) para passar a estilização
  return (
    <a
      href=""
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 dark:hover:bg-zinc-800" // group é para acontecer alguma coisa com os filhos quando acontece algo com o pai
    >
      <Icon className="h-5 w-5 text-zinc-500 group-hover:text-violet-500" />
      <span className="dark:text-zinc100 font-medium text-zinc-700 group-hover:text-violet-500 dark:group-hover:text-violet-300">
        {title}
      </span>
      <BsChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300 dark:text-zinc-600" />
    </a>
  )
}
