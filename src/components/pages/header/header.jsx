import React, { useState, useEffect } from 'react';
import logo from './../../../imagens/logo/logo2.png';
import { EMPRESA, PADDING } from '../../../utils/constants';

// menu
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Hamburger from 'hamburger-react'
import Carrinho from '../../molecules/carrinho';
import NestedList from './list';
import MenuWithDropdown from './menuWithDropper';
import Login from '../../molecules/login';
import api from '../../../services/api';

const Header = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false)
  const [tipoMenu, setTipoMenu] = useState(1);
  const [fixedHeader, setFixedHeader] = useState(false);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Função assíncrona dentro do useEffect
    const fetchCategories = async () => {
      try {
        const response = await api.get("/categorias");
        setCategories(response.data); // Armazena os dados no estado
      } catch (error) {
        setError(error.response?.data?.message || error.message);
      }
    };

    fetchCategories(); // Chama a função para buscar os dados
  }, []);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const scrollToAnchor = (href) => {
    if (href === '') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleMenuItemClick = (event, href) => {
    scrollToAnchor(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setFixedHeader(true);
      } else {
        setFixedHeader(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  }, []);

  useEffect(() => {
    const changeMenu = () => {
      if (window.innerWidth >= 800) {
        setTipoMenu(1);
      } else {
        setTipoMenu(2);
      }
    }

    changeMenu();
    window.addEventListener('resize', changeMenu)

    return () => {
      window.removeEventListener('resize', changeMenu);
    }
  })

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  useEffect(() => {
    if (open == false) {
      setMenu(false);
    }
  }, [open])

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" /* onClick={toggleDrawer(false)} */>
      <List>
        <NestedList categories={categories} />
        {/* {options.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <a onClick={(e) => handleMenuItemClick(e, text.href)}>
                <ListItemText primary={text.descr} />
              </a>
            </ListItemButton>
          </ListItem>
        ))} */}
      </List>
    </Box>
  );

  return (
    <>
      <div className={`h-[30px] ${fixedHeader ? 'block' : 'hidden'}`} />
      <header className={`${fixedHeader && 'fixed top-0 left-0 w-full z-50 bg-white shadow-[0px_8px_12px_-2px_rgba(0,0,0,0.1)]'} py-[5px] transition-all duration-500 ease-in-out`}>
        <div className={`${PADDING} pt-[10px] flex items-center justify-between gap-[20px]`}>
          <>
            {tipoMenu == 2 ?
              <>
                <div>
                  <Button onClick={toggleDrawer(true)}>
                    <Hamburger toggled={menu} toggle={setMenu} />
                  </Button>
                  <Drawer open={open} onClose={toggleDrawer(false)}>
                    {DrawerList}
                  </Drawer>
                </div>
                <img src={logo} onClick={(e) => handleMenuItemClick(e, '')} alt={EMPRESA} className='h-[40px] hover:cursor-pointer' />
                <Carrinho fixed={fixedHeader} />
              </>
              :
              <>
                <img src={logo} onClick={(e) => handleMenuItemClick(e, '')} alt={EMPRESA} className='h-[40px] hover:cursor-pointer' />
                <div className='flex gap-[20px] lg:gap-[50px] text-center aligm-center'>
                  <MenuWithDropdown categories={categories} fixed={fixedHeader} />
                </div>
                <div className='flex items-center gap-[50px]'>
                  <Carrinho />
                  <Login />
                </div>
              </>
            }
          </>
        </div>
      </header>
    </>
  )
}

export default Header;