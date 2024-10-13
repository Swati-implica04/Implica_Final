import React, { useState } from 'react'
import styled from 'styled-components'
import { MdSearch, MdMenu, MdChevronRight, MdChevronLeft, MdClose, MdAdd, MdRemove } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import Log from "../assets/images/Implica_full_dark_transparent_png.png"

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
  top: 60px;
  left: ${props => props.isOpen ? '0' : '100%'};
  width: 100%;
  height: calc(100% - 60px);
  background-color: #000;
  transition: left 0.3s ease-in-out;
  z-index: 999;
  overflow-y: auto;
`

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const MenuItem = styled.li`
  border-bottom: 1px solid #333;
`

const MenuLink = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  color: #fff;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
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

const SubMenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  background-color: #111;
`

const SubMenuItem = styled.li`
  border-top: 1px solid #333;
`

export default function Component() {
  type MenuType = 'main' | 'about' | 'industries' | 'services' | 'career' | 'insights';
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentMenu, setCurrentMenu] = useState<MenuType>('main');
  const [menuStack, setMenuStack] = useState<MenuType[]>(['main']);
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const menus: Record<MenuType, { title: string; submenu?: MenuType; link?: string; expandable?: { title: string; link: string }[] }[]> = {
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
      { title: 'Our organisation', link: "/organization" },
      { title: 'Overview', link: "/overview" },
      { title: 'Our Leadership', link: '/leadership' },
      { title: 'Purpose, Mission and Values', link: "/mission" },
      { title: 'Global Alliances', link: "/alliances" },
      { title: 'News Room', link: "/news" },
      { 
        title: 'Values', 
        expandable: [
          { title: 'Corporate Social Responsibility', link: "/corporateSocial" },
          { title: 'Corporate Sustainability', link:"/sustainability"},
          { title: 'Diversity, Equality & Inclusion', link: "/diversity" },
        ]
      },
      { 
        title: 'IGC Way', 
        expandable: [
          { title: 'Implica Capital', link: "/capital" },
          { title: 'Implica Ventures', link: "/ventures" },
          { title: 'Implica A.I.', link: "/implica-ai" },
          { title: 'Implica Consulting', link: "/implica-consulting" },
        ]
      },
    ],
    industries: [
      { title: 'E-commerce', link: "/industry-detail" },
      { title: 'Manufacturing', link: "/industry-detail"},
      { title: 'Automotive', link:"/industry-detail" },
      { title: 'Real Estate', link: "/industry-detail" },
      { title: 'Transportation and Logistics', link: "/industry-detail"},
      { title: 'Agriculture', link: "/industry-detail" },
      { title: 'Insurance', link: "/industry-detail" },
      { title: 'Banking', link: "/industry-detail" },
      { title: 'Private Equity', link: "/industry-detail" },
      { title: 'Metals and Minerals', link: "/industry-detail" },
      { title: 'Environmental Services', link: "/industry-detail" },
      { title: 'Marine and Shipping', link:"/industry-detail" },
      {title: 'View all', link: '/industry'},
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
    setCurrentMenu(submenu);
    setMenuStack([...menuStack, submenu]);
  }

  const goBack = () => {
    if (menuStack.length > 1) {
      const newStack = [...menuStack];
      newStack.pop();
      setMenuStack(newStack);
      setCurrentMenu(newStack[newStack.length - 1]);
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
    setCurrentMenu('main');
    setMenuStack(['main']);
    setExpandedItems([]);
  }

  const handleLinkClick = (link: string) => {
    // console.log(`Navigating to: ${link}`);
    navigate(link);
    closeMenu();
  }

  const toggleExpand = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) ? prev.filter(item => item !== title) : [...prev, title]
    );
  }

  return (
    <AppContainer>
      <Header>
        <Link to="/">
          <img src={Log} alt="Company Logo" className="responsive-logo" style={{width:'270px'}}/>
        </Link>
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
                <MenuLink onClick={() => navigateTo(item.submenu!)}>
                  {item.title}
                  <MdChevronRight size={24} />
                </MenuLink>
              ) : item.expandable ? (
                <>
                  <MenuLink onClick={() => toggleExpand(item.title)}>
                    {item.title}
                    {expandedItems.includes(item.title) ? <MdRemove size={24} /> : <MdAdd size={24} />}
                  </MenuLink>
                  {expandedItems.includes(item.title) && (
                    <SubMenuList>
                      {item.expandable.map((subItem, subIndex) => (
                        <SubMenuItem key={subIndex}>
                          <MenuLink onClick={() => handleLinkClick(subItem.link)}>
                            {subItem.title}
                          </MenuLink>
                        </SubMenuItem>
                      ))}
                    </SubMenuList>
                  )}
                </>
              ) : (
                <MenuLink onClick={() => handleLinkClick(item.link!)}>
                  {item.title}
                </MenuLink>
              )}
            </MenuItem>
          ))}
        </MenuList>
      </MenuContainer>
    </AppContainer>
  );
}
