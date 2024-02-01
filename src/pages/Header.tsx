import { Link as ScrollLink } from 'react-scroll'

import Logo from '@/assets/logo.svg'

function Header() {
  const menuList = [
    {
      id: 1,
      title: 'Início',
      target: 'home',
    },
    {
      id: 2,
      title: 'Sobre',
      target: 'about',
    },
    {
      id: 3,
      title: 'Serviço',
      target: 'services',
    },
    {
      id: 4,
      title: 'Contato',
      target: 'contact',
    },
  ]
  return (
    <header className="flex items-center justify-between md:px-14 lg:px-36 pb-10 pt-7">
      <div className="h-7 w-7">
        <img src={Logo} alt="logo" />
      </div>
      <div className="hidden md:flex gap-4">
        {menuList.map((item) => (
          <div>
            <h2 className="relative inline-block group cursor-pointer">
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-white transition-all duration-300" />
              <ScrollLink
                to={item.target}
                smooth
                duration={500}
                className="group-hover:text-white transition-all duration-300"
              >
                {item.title}
              </ScrollLink>
            </h2>
          </div>
        ))}
      </div>
    </header>
  )
}

export default Header
