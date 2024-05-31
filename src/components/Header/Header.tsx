import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

import Logo from '@/assets/logo.svg'

export function Header() {
  const headerItems = [
    {
      id: 1,
      title: 'Sobre',
      target: 'about',
    },
    {
      id: 2,
      title: 'Serviço',
      target: 'service',
    },
    {
      id: 3,
      title: 'Contato',
      target: 'contact',
    },
  ]

  return (
    <header className="flex items-center justify-between py-7 px-28 lg:px-8 md:px-8 sm:px-8 xs:px-8 lg:pb-0">
      <img src={Logo} alt="logo" className="h-10 w-10" />
      <div className="flex gap-4">
        {headerItems.map((item) => (
          <motion.nav
            key={item.id}
            whileHover={{ scale: 1 }}
            className="relative group cursor-pointer"
          >
            <Link
              to={item.target}
              smooth
              duration={500}
              className="group text-light hover:text-yellowDark transition-all ease duration-300"
            >
              {item.title}
            </Link>
            <motion.span
              className="h-[1px] inline-block bg-yellowDark absolute left-0 -bottom-0.5 w-0 group-hover:w-full transition-[width] ease duration-300"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.nav>
        ))}
      </div>
    </header>
  )
}
