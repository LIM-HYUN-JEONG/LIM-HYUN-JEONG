import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled as MuiStyled } from '@mui/material/styles';
import React from 'react';
import { MenuData } from '../assets/data/const';
import styled from 'styled-components';

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
const Github = styled.a`
  color: 'red';
  //hover : 마우스를 대면 효과가 생긴다.
  &:hover {
    color: '#4B89DC';
  }
`;

export default function Header() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        height: '70px',
        borderBottom: '1px solid #DBDBDB',
      }}
    >
      <MenuBox>
        {MenuData.map((menu) => {
          return (
            <MenuBtn key={menu.id} disableRipple sx={{ textTransform: 'none' }}>
              <a
                href={menu.path}
                style={{
                  color: menu.path === 'home' ? 'black' : '#C4C4C4',
                }}
              >
                {menu.name}
              </a>
            </MenuBtn>
          );
        })}
        <Github href="https://github.com/LIM-HYUN-JEONG" target="_blank" rel="noreferrer">
          <i className="fab fa-github" style={{ fontSize: '1.5rem' }} />
        </Github>
      </MenuBox>
    </div>
  );
}
