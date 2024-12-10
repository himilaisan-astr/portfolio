import Link from 'next/link';
import React from 'react'
import utilStyles from '@/styles/Utils.module.css'
import { sections } from '@/pages';

type NavbarProps = any;

const Navbar = (props: NavbarProps) =>  {
  return( 
      <div>
          <ul>
            <Link href={`/`} className={utilStyles.link}>Home </Link>
            <Link href={`#${sections[0]}`} className={utilStyles.link}>| Skills </Link>
            <Link href={`#${sections[3]}`} className={utilStyles.link}>| Projects </Link>
            <Link href={`#${sections[2]}`} className={utilStyles.link}>|| Exp. </Link>
            <Link href={`#${sections[4]}`} className={utilStyles.link}>|| Extras</Link>
          </ul>
      </div>
  )
}


export default Navbar;