import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

import { Header, Logo, Nav, MenuIcon, BackArrowIcon } from "./Navigation.css";

export const Navigation: React.FC = () => {
  const [menuVisibility, setMenuVisibility] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const history = useHistory();

  document.body.onresize = () => setWindowWidth(window.innerWidth);

  useEffect(() => {
    if (windowWidth >= 640) {
      setMenuVisibility(false);
    }
  }, [windowWidth]);

  return (
    <Header>
      {menuVisibility ? null : (
        <Logo
          onClick={() => {
            if (history.location.pathname !== "/") history.push("/");
          }}
        >
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
