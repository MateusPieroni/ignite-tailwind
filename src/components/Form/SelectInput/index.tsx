'use client'

import * as Select from '@radix-ui/react-select'
import { ReactNode } from 'react'
import { BsChevronDown } from 'react-icons/bs'

// O Select.Portal é usado para coisas que vão abrir em cima da tela, é usado para renderizar algo em outro lugar como no 'body'

export interface SelectProps extends Select.SelectProps {
  children: ReactNode
  placeholder: string
}

export function SelectInput({ children, placeholder, ...props }: SelectProps) {
  return (
    <Select.Root {...props}>
      <Select.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100 data-[placeholder]:text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:focus-within:border-violet-500 dark:focus-within:ring-violet-500/20 dark:data-[placeholder]:text-zinc-500/20">
        <Select.Value placeholder={placeholder} className="text-black" />
        <Select.Icon>
          <BsChevronDown className="h-5 w-5 text-zinc-500" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          side="bottom" /* o side é para aonde o select vai abrir */
          position="popper"
          className="z-10 w-[--radix-select-trigger-width] animate-slideDownAndFade overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm dark:border-zinc-700 dark:bg-zinc-800"
          sideOffset={8} // Ele faz com que o select abra com um espaçamento de 8px
        >
          <Select.Viewport>{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
