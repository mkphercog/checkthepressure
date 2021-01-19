import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteProfile, setSelectedUserID } from "store/actions/profilesAction";
import { Portal, PortalTarget } from "common/Portal/Portal";
import { IGlobalState } from "common/interfaces";
import { SharedAddButton } from "components/shared/SharedAddButton/SharedAddButton";
import { SharedPageWrapper } from "components/shared/SharedPageWrapper/SharedPageWrapper";
import { WarningsYesNo } from "components/Popups/Warnings/Warnings";
import { AddUser } from "components/Popups/AddUser/AddUser";

import { UserProfile } from "./UserProfile/UserProfile";
import { Legend } from "styles/mixins/Fieldset";
import { ProfilesSelectorStyled } from "./ProfilesSelector.css";

export const ProfilesSelector: React.FC = () => {
  const [isOpenPortal, setIsOpenPortal] = useState(false);
  const [popup, setPopup] = useState<Object>({});
  const users = useSelector((state: IGlobalState) => state.profiles.users);
  const dispatch = useDispatch();

  const handleDeleteProfile = (id: number, name: string) => {
    setPopup(
      <WarningsYesNo
        message={`Usunąć użytkownika ${name}?`}
        setIsOpen={setIsOpenPortal}
        response={(res: boolean) => res && dispatch(deleteProfile(id))}
      />
    );
    setIsOpenPortal(true);
  };

  const handleAddNewProfile = () => {
    setPopup(<AddUser setIsOpenAddUserPopup={setIsOpenPortal} />);
    setIsOpenPortal(true);
  };

  const handleSelectUserID = (id: number) => dispatch(setSelectedUserID(id));

  const renderUsers =
    users.map(({ id, name, age }) => (
      <UserProfile
        key={id}
        id={id}
        name={name}
        age={age}
        deleteProfile={handleDeleteProfile}
        selectUserID={handleSelectUserID}
      />
    )) || [];

  const legendTitle = renderUsers.length
    ? "Użytkownicy"
    : "Dodaj pierwszego użytkownika";

  return (
    <SharedPageWrapper>
      <ProfilesSelectorStyled>
        <Legend>{legendTitle}</Legend>
        <ul>{renderUsers}</ul>
        <SharedAddButton
          onClick={handleAddNewProfile}
          hoverDescription={"Dodaj nowego użytkownika"}
        />
      </ProfilesSelectorStyled>
      {isOpenPortal ? (
        <Portal target={PortalTarget.MODAL}>{popup}</Portal>
      ) : null}
    </SharedPageWrapper>
  );
};
