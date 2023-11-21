'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();

  return (
    <nav>
      <ul>
        <li>
          <Link className={`link ${pathname === '' ? 'active' : ''}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/about' ? 'active' : ''}`} href="/about">
            About
          </Link>
        </li>
        <li>
          <Link className={`link ${pathname === '/projects' ? 'active' : ''}`} href="/projects">
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}