import React, { useState } from 'react'
import styled from 'styled-components'
import { MdSearch, MdMenu, MdChevronRight, MdChevronLeft, MdClose } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
  background-color: #000;
  color: #fff;
  width: 100%;
  position: relative;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid #333;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #000;
  z-index: 1000;
`

const Logo = styled.h1`
  color: #ff00ff;
  font-size: 1.5rem;
  margin: 0;
`

const IconButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 52px;
`

const MenuContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 52px;
  left: ${props => props.isOpen ? '0' : '100%'};
  width: 100%;
  height: calc(100% - 52px);
  background-color: #000;
  transition: left 0.3s ease-in-out;
  z-index: 999;
  overflow-y: auto;
`

const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  border-bottom: 1px solid #333;
  height: 52px;
`

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const MenuItem = styled.li`
  border-bottom: 1px solid #333;
`

const MenuLink = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: #fff;
  text-decoration: none;
`

const BackButton = styled.button`
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
  text-align: left;
`

export default function Component() {
  type MenuType = 'main' | 'about' | 'industries' | 'services' | 'career' | 'insights';
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentMenu, setCurrentMenu] = useState<MenuType>('main')
  const [menuStack, setMenuStack] = useState<MenuType[]>(['main'])

  const menus: Record<MenuType, { title: string; submenu?: MenuType; link?: string }[]> = {
    main: [
      { title: 'About us', submenu: 'about' },
      { title: 'Industries', submenu: 'industries' },
      { title: 'Services', submenu: 'services' },
      { title: 'Career', submenu: 'career' },
      { title: 'Insights', submenu: 'insights' },
      { title: 'Products', link: '/products' },
      { title: 'Contact us', link: '/contact' },
    ],
    about: [
    //   { title: 'Our organization', link: "/overview" },
      { title: 'Overview', link:  "/overview"  },
      { title: 'Our Leadership', link: '/leadership' },
      { title: 'Purpose, Mission and Values', link: "/mission" },
      { title: 'News Room', link: "/News" },
      { title: 'Global Alliances', link:"/alliances" },
    
    ],
    industries: [
      { title: 'E-commerce', link: '/industries/e-commerce' },
      { title: 'Manufacturing', link: '/industries/manufacturing' },
      { title: 'Automotive', link: '/industries/automotive' },
      { title: 'Real Estate', link: '/industries/real-estate' },
      { title: 'Transportation and Logistics', link: '/industries/transportation' },
      { title: 'Agriculture', link: '/industries/agriculture' },
      { title: 'Insurance', link: '/industries/insurance' },
      { title: 'Banking', link: '/industries/banking' },
      { title: 'Private Equity', link: '/industries/private-equity' },
      { title: 'Metals and Minerals', link: '/industries/metals-minerals' },
      { title: 'Environmental Services', link: '/industries/environmental' },
      { title: 'Marine and Shipping', link: '/industries/marine-shipping' },
    ],
    services: [
      { title: 'Implica Digital', link: "/implica-digital" },
      { title: 'Implica A.I.', link: "/implica-ai" },
      { title: 'Implica Consulting', link: "/implica-consulting" },
    ],
    career: [
      { title: 'Career Programs', link: '/career/programs' },
      { title: 'Global Internship Program (GIP)', link: '/career/internship' },
      { title: 'Global Expansion Division (GED)', link: '/career/expansion' },
      { title: 'Graduate Hiring Program (GHP)', link: '/career/graduate' },
      { title: 'Human Resource', link: '/career/hr' },
    ],
    insights: [
      { title: 'KSC Perspectives', link: '/insights/perspectives' },
      { title: 'Implica Features', link: '/insights/features' },
      { title: 'News', link: '/insights/news' },
      { title: 'Blogs', link: '/insights/blogs' },
    ],
  }

  const navigateTo = (submenu: MenuType) => {
    setCurrentMenu(submenu)
    setMenuStack([...menuStack, submenu])
  }

  const goBack = () => {
    if (menuStack.length > 1) {
      const newStack = [...menuStack]
      newStack.pop()
      setMenuStack(newStack)
      setCurrentMenu(newStack[newStack.length - 1])
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    setCurrentMenu('main')
    setMenuStack(['main'])
  }

  const handleLinkClick = (link: string) => {
    console.log(`Navigating to: ${link}`)
    navigate(link)
    closeMenu()
  }

  return (
    <AppContainer>
      <Header>
        <Logo>implica</Logo>
        <div style={{display:'flex'}}>
          <IconButton>
            <MdSearch size={24} />
          </IconButton>
          <IconButton onClick={toggleMenu}>
            <MdMenu size={24} />
          </IconButton>
        </div>
      </Header>
      <MenuContainer isOpen={isMenuOpen}>
        {currentMenu !== 'main' && (
          <BackButton onClick={goBack}>
            <MdChevronLeft size={24} />
            Back
          </BackButton>
        )}
        <MenuList>
          {menus[currentMenu].map((item, index) => (
            <MenuItem key={index}>
              {item.submenu ? (
                <MenuLink  onClick={() => navigateTo(item.submenu!)}>
                  {item.title}
                  <MdChevronRight size={24} />
                </MenuLink>
              ) : (
                <MenuLink href="#" onClick={() => handleLinkClick(item.link!)}>
                  {item.title}
                </MenuLink>
              )}
            </MenuItem>
          ))}
        </MenuList>
      </MenuContainer>
    </AppContainer>
  )
}