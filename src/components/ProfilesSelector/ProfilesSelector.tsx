import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProfile } from "./../../store/actions/profilesAction";

import { UserProfile } from "./UserProfile/UserProfile";
import { AddUser } from "./../Popups/AddUser/AddUser";
import { WarningsYesNo } from "./../Popups/Warnings/Warnings";
import { Portal, PortalTarget } from "./../../common/Portal/Portal";

import { GlobalState } from "./../../common/interfaces";
import {
  Wrapper,
  ProfilesSelectorStyled,
  AddUserIcon,
  UsersWrapper,
} from "./ProfilesSelector.css";

export const ProfilesSelector: React.FC = () => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
  const [popup, setPopup] = useState<Object>({});
  const users = useSelector((state: GlobalState) => state.profiles.users);
  const dispatch = useDispatch();

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
            close={setIsPortalOpen}
            response={(res: boolean) => res && dispatch(deleteProfile(id))}
          />
        );
        setIsPortalOpen(true);
      }}
    />
  ));

  return (
    <Wrapper>
      <ProfilesSelectorStyled>
        <UsersWrapper>
          {renderUsers.length ? renderUsers : "Brak użytkowników."}
        </UsersWrapper>
        <AddUserIcon
          className="fas fa-user-plus"
          onClick={() => {
            setPopup(<AddUser closeAddUserPopup={setIsPortalOpen} />);
            setIsPortalOpen(true);
          }}
        ></AddUserIcon>
      </ProfilesSelectorStyled>
      {isPortalOpen ? (
        <Portal target={PortalTarget.MODAL}>{popup}</Portal>
      ) : null}
    </Wrapper>
  );
};
