import { FiLogOut } from 'react-icons/fi'
import { Button } from '../Button'

// truncate tem 3 propriedades. 'overflow: hidden' não mostrar nada além do span; 'text-overflow: elipsis' serve para se o texto passar da div do span completar com 3 pontinhos ; 'white-space: nowrap' sempre vai ficar na mesma linha

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/MateusPieroni.png"
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Mateus Pieroni
        </span>
        <span className="tex-sm truncate text-zinc-500 dark:text-zinc-400">
          mateus.pieroni@hotmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <FiLogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
