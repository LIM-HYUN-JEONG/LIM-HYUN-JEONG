'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 80px;
  background-color: white;
  margin: 0 auto;
`;

const NavigationContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.div`
  color: #6d6d6d;
  cursor: pointer;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export default function Header() {
  const pathname = usePathname();

  return (
    <HeaderContainer>
      <NavigationContainer>
        <Link className={`link ${pathname === '' ? 'active' : ''}`} href="/">
          <NavItem>Home</NavItem>
        </Link>
        <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">
          <NavItem>About</NavItem>
        </Link>
        <Link className={`link ${pathname === '/projects' ? 'active' : ''}`} href="/projects">
          <NavItem>Projects</NavItem>
        </Link>
      </NavigationContainer>
    </HeaderContainer>
  );
}
