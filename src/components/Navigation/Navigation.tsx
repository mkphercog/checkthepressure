import React, { useEffect, useState } from "react";
import { Header, Logo, Nav, MenuIcon, BackArrowIcon } from "./Navigation.css";
import { NavLink } from "react-router-dom";

export const Navigation: React.FC = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  document.body.onresize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    if (windowWidth >= 640) {
      setMenuVisibility(false);
    }
  }, [windowWidth]);

  return (
    <Header windowWidth={windowWidth}>
      {menuVisibility ? null : (
        <Logo>
          Badaj <span>ciśnienie</span>
        </Logo>
      )}
      {menuVisibility || windowWidth >= 640 ? (
        <>
          <Nav>
            <li>
              <NavLink to="/" exact>
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink to="/measurements">Pomiary</NavLink>
            </li>
            <li>
              <NavLink to="/advices">Porady</NavLink>
            </li>
            <li>
              <NavLink to="/info">Info</NavLink>
            </li>
          </Nav>
          <BackArrowIcon
            className="fas fa-long-arrow-alt-left back"
            onClick={() => setMenuVisibility(false)}
          ></BackArrowIcon>
        </>
      ) : (
        <MenuIcon
          className="fas fa-ellipsis-v menu"
          onClick={() => setMenuVisibility(true)}
        ></MenuIcon>
      )}
    </Header>
  );
};
