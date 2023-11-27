'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { styled as MuiStyled } from '@mui/material/styles';
import { MenuData } from '../assets/data/const';
import GithubIcon from '../assets/images/githubIcon.png';

export default function Header() {
  const pathname = usePathname();

  return (
    <HeaderWrap>
      <MenuBox>
        {MenuData.map((menu) => {
          return (
            <MenuBtn
              key={menu.id}
              disableRipple
              sx={{ textTransform: 'none' }}
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
  padding: '0px 6px 0px 6px',
  ':hover': {
    color: '#0000',
    backgroundColor: 'black', //호버했을때 색상
  },
});
const Github = styled.a``;
