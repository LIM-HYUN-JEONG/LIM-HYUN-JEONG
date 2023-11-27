'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { styled as MuiStyled } from '@mui/material/styles';
import { MenuData } from '../assets/data/const';
import GithubIcon from '../assets/images/githubIcon.png';
import { Menu, MenuItem, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

export default function MobileHeader() {
  const pathname = usePathname();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderWrap>
      <HamburgerBtn onClick={handleClick}>
        <MenuIcon style={{ fontSize: '2.2rem', color: 'white' }} />
      </HamburgerBtn>

      <MenuBox
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        id="mobileMenu"
      >
        {MenuData.map((menu) => {
          return (
            <MenuBtn
              key={menu.id}
              disableRipple
              sx={{ textTransform: 'none' }}
              onClick={handleClose}
              style={{
                backgroundColor: menu.path === pathname ? 'black' : '',
              }}
            >
              <Link
                href={menu.path}
                style={{
                  color: menu.path === pathname ? 'white' : '#C4C4C4',
                }}
              >
                {menu.name}
              </Link>
            </MenuBtn>
          );
        })}
        <Github href="https://github.com/LIM-HYUN-JEONG" target="_blank" rel="noreferrer">
          <Image src={GithubIcon} alt="githubIcon" className="githubIcon" width={40} height={40} priority />
        </Github>
      </MenuBox>
    </HeaderWrap>
  );
}

const HeaderWrap = MuiStyled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  height: '70px',
  borderBottom: '1px solid #dbdbdb',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));
const HamburgerBtn = MuiStyled(Button)({
  width: '100vw',
  display: 'flex',
  justifyContent: 'flex-start',
  paddingLeft: '20px',
});
const MenuBox = MuiStyled(Menu)({
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 1rem',
  fontSize: '1rem',
  fontWeight: 700,
});

const MenuBtn = MuiStyled(MenuItem)({
  color: '#838383',
  fontSize: '16px',
  fontWeight: '700',
  margin: '0rem 1rem',
  textAlign: 'center',
  alignItems: 'center',
  ':hover': {
    color: '#0000',
    backgroundColor: 'black', //호버했을때 색상
  },
});
const Github = styled.a`
  display: flex;
  justify-content: center;
`;
