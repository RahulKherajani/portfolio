import Link from 'next/link';
import React from 'react';

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link href='/'>
        <a
          style={{
            display: 'flex',
            alignItems: 'center',
            color: 'white',
          }}
        >
          <span> &lt; RAHUL KHERAJANI /&gt;</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#tech'>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#experience'>
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#education'>
          <NavLink>Education</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
    </Div2>
  </Container>
);

export default Header;
