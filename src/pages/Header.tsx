import Logo from '@/assets/logo.svg'

function Header() {
  const menuList = [
    {
      id: 1,
      title: 'Início',
    },
    {
      id: 2,
      title: 'Sobre',
    },
    {
      id: 3,
      title: 'Serviço',
    },
    {
      id: 4,
      title: 'Contato',
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
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-primary-purple transition-all duration-300" />
              {item.title}
            </h2>
          </div>
        ))}
      </div>
    </header>
  )
}

export default Header
