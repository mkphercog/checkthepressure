import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserProfile } from "./UserProfile/UserProfile";
import { deleteProfile } from "./../../store/actions/profilesAction";
import { GlobalState } from "./../../common/interfaces";
import { Wrapper, ProfilesSelectorStyled } from "./ProfilesSelector.css";
import { Portal, PortalTarget } from "./../../common/Portal/Portal";
import { AddUser } from "./../Popups/AddUser/AddUser";

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
      deleteProfile={() => dispatch(deleteProfile(id))}
    />
  ));

  return (
    <Wrapper>
      <ProfilesSelectorStyled>
        {renderUsers}
        <i
          className="fas fa-user-plus"
          onClick={() => {
            setPopup(<AddUser closeAddUserPopup={setPortalOpen} />);
            setPortalOpen(true);
          }}
        ></i>
      </ProfilesSelectorStyled>
      {portalOpen ? <Portal target={PortalTarget.MODAL}>{popup}</Portal> : null}
    </Wrapper>
  );
};
