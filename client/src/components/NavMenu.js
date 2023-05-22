import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { MdClose, MdMenu } from 'react-icons/md';

const NavStyles = styled.nav`
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 0;
  background-color: var(--muddyRiver);
  color: var(--ecruPrincess);
  ul {
    font-family: 'Lora, serif';
    font-weight: 700;
    max-width: 1200px;
    margin: 0 auto;
    width: 90%;
    text-align: center;
    li {
      color: var(--ecruPrincess);
      margin: 0 4px;
      display: inline-block;
      border-radius: 8px;
      transition: 0.3s ease background-color;
      &:hover {
        background-color: var(--mossyRock);
        color: var(--taupeToad);
      }
    }
    a {
      display: inline-block;
      font-family: 'Lora, serif';
      font-weight: 700;
      padding: 1rem 2rem;
      font-size: 2rem;
      outline: none;
    }
    .active {
      border-radius: 8px;
      background-color: var(--mossyRock);
      color: var(--blush);
    }
  }
  .mobile-menu-icon {
    position: absolute;
    right: 1rem;
    top: 1rem;
    width: 3rem;
    cursor: pointer;
    display: none;
    outline: none;
    * {
      pointer-events: none;
    }
  }
  .navItems .closeNavIcon {
    display: none;
  }
  @media only screen and (max-width: 768px) {
    padding: 0;
    .hide-item {
      transform: translateY(calc(-100% - var(--top)));
    }
    .mobile-menu-icon {
      display: block;
    }
    .navItems {
      --top: 1.2rem;
      transition: 0.3s ease transform;
      background-color: var(--ecruPrincess);
      padding: 0.2rem 0.2rem 2rem 0rem;
      width: 70%;
      max-width: 300px;
      border-radius: 8px;
      border: 2px solid var(--muddyRiver);
      position: absolute;
      right: 1.2rem;
      top: var(--top);
      .closeNavIcon {
        display: block;
        width: 3rem;
        margin: 0 0 0 auto;
        cursor: pointer;
        * {
          pointer-events: none;
        }
      }
      li {
        display: block;
        
      }
    }
  }
`;

export default function NavMenu() {
  const [showNav, setShowNav] = useState(false);
  return (
    <NavStyles>
      <div
        className="mobile-menu-icon"
        onClick={() => setShowNav(!showNav)}
        role="button"
        onKeyDown={() => setShowNav(!showNav)}
        tabIndex={0}
      >
        <MdMenu />
      </div>

      <ul className={!showNav ? 'navItems hide-item' : 'navItems'}>
        <div
          className="closeNavIcon"
          onClick={() => setShowNav(!showNav)}
          role="button"
          onKeyDown={() => setShowNav(!showNav)}
          tabIndex={0}
        >
          <MdClose />
        </div>
        <li>
          <NavLink
            to="/"
            exact
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            onClick={() => setShowNav(!showNav)}
            role="button"
            onKeyDown={() => setShowNav(!showNav)}
            tabIndex={0}
          >
            Cart
          </NavLink>
        </li>
        {/* SearchBook link */}
      </ul>
    </NavStyles>
  );
}
