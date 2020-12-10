import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserProfile } from "./UserProfile/UserProfile";
import { deleteProfile } from "./../../store/actions/profilesAction";
import { GlobalState } from "./../../common/interfaces";
import { Portal, PortalTarget } from "./../../common/Portal/Portal";
import { AddUser } from "./../Popups/AddUser/AddUser";
import {
  Wrapper,
  ProfilesSelectorStyled,
  AddUserIcon,
  UsersWrapper,
} from "./ProfilesSelector.css";
import { WarningsYesNo } from "../Popups/Warnings/Warnings";

export const ProfilesSelector: React.FC = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state: GlobalState) => state.profiles);
  const { users } = profiles;
  const [portalOpen, setPortalOpen] = useState(false);
  const [popup, setPopup] = useState(Object);

  const renderUsers = users.map(({ name, age, id }) => (
    <UserProfile
      key={id}
      id={id}
      name={name}
      age={age}
      deleteProfile={() => {
        setPopup(
          <WarningsYesNo
            message={`Usunąć użytkownika ${name}?`}
            close={setPortalOpen}
            response={(res: boolean) => !res || dispatch(deleteProfile(id))}
          />
        );
        setPortalOpen(true);
      }}
    />
  ));

  return (
    <Wrapper>
      <ProfilesSelectorStyled>
        <UsersWrapper>
          {renderUsers.length ? renderUsers : "Brak użytkowników"}
        </UsersWrapper>
        <AddUserIcon
          className="fas fa-user-plus"
          onClick={() => {
            setPopup(<AddUser closeAddUserPopup={setPortalOpen} />);
            setPortalOpen(true);
          }}
        ></AddUserIcon>
      </ProfilesSelectorStyled>
      {portalOpen ? <Portal target={PortalTarget.MODAL}>{popup}</Portal> : null}
    </Wrapper>
  );
};
