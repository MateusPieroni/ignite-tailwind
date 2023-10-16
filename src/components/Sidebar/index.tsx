'use client'

import { Logo } from './Logo'
import {
  FiHome,
  FiCheckSquare,
  FiFlag,
  FiUsers,
  FiSearch,
} from 'react-icons/fi'

import { NavItem } from './NavItem'

import { RiBarChartLine } from 'react-icons/ri'
import { HiOutlineSquare3Stack3D } from 'react-icons/hi2'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Collapsible from '@radix-ui/react-collapsible'
import { InputControl, InputPrefix, InputRoot } from '../Input'
import { Button } from '../Button'
import { AiOutlineMenu } from 'react-icons/ai'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 data-[state=open]:h-screen dark:border-zinc-800  dark:bg-zinc-900 lg:right-auto  lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0 lg:data-[state=closed]:h-screen">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <AiOutlineMenu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <InputRoot>
          <InputPrefix>
            <FiSearch className="h-5 w-5 text-zinc-500" />
          </InputPrefix>
          <InputControl placeholder="Search" />
        </InputRoot>

        <nav className="space-y-0.5">
          <NavItem icon={FiHome} title="Home" />
          <NavItem icon={RiBarChartLine} title="Dashboard" />
          <NavItem icon={HiOutlineSquare3Stack3D} title="Projects" />
          <NavItem icon={FiCheckSquare} title="Tasks" />
          <NavItem icon={FiFlag} title="Reporting" />
          <NavItem icon={FiUsers} title="Users" />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

        <Profile />
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
