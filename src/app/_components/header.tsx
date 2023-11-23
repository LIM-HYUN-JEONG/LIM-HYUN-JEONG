import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled as MuiStyled } from '@mui/material/styles';
import React from 'react';
import { MenuData } from '../assets/data/const';
import styled from 'styled-components';
import Image from 'next/image';
import GithubIcon from '../assets/images/githubIcon.png';

export default function Header() {
  return (
    <HeaderWrap>
      <MenuBox>
        {MenuData.map((menu) => {
          return (
            <MenuBtn key={menu.id} disableRipple sx={{ textTransform: 'none' }}>
              <a
                href={menu.path}
                style={{
                  color: menu.path === window.location.pathname ? 'black' : '#C4C4C4',
                }}
              >
                {menu.name}
              </a>
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
const HeaderWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #dbdbdb;
`;
const MenuBox = MuiStyled(Box)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 1rem',
  fontSize: '1rem',
  fontWeight: 700,
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
  [theme.breakpoints.up('md')]: {
    width: '65vw',
    textAlign: 'right',
  },
}));

const MenuBtn = MuiStyled(Button)({
  color: '#838383',
  fontSize: '16px',
  fontWeight: '700',
  margin: '0rem 1.5rem 0rem 1.5rem',
  padding: '0px 4px 0px 4px',
  ':hover': {
    color: '#0000',
    backgroundColor: '#4B89DC',
  },
});
const Github = styled.a``;
