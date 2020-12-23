import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteProfile,
  setSelectedUserID,
} from "./../../store/actions/profilesAction";
import { UserProfile } from "./UserProfile/UserProfile";
import { AddUser } from "./../Popups/AddUser/AddUser";
import { WarningsYesNo } from "./../Popups/Warnings/Warnings";
import { Portal, PortalTarget } from "./../../common/Portal/Portal";
import { IGlobalState } from "./../../common/interfaces";
import BackGround from "./../../images/BG.jpg";
import { ProfilesSelectorStyled } from "./ProfilesSelector.css";
import { PageWrapperWithImageInBG } from "../../styles/mixins/PageBackGround";
import { Legend } from "./../../styles/mixins/Fieldset";
import { SharedAddButton } from "../SharedAddButton/SharedAddButton";

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

  const legendTitle = renderUsers.length ? "Profile" : "Brak użytkowników";

  return (
    <PageWrapperWithImageInBG>
      <img src={BackGround} alt="Blood Pressure" />
      <ProfilesSelectorStyled>
        <Legend>{legendTitle}</Legend>
        <ul>{renderUsers}</ul>
        <SharedAddButton
          addFunction={handleAddNewProfile}
          hoverDescription={"Dodaj nowy profil"}
        />
      </ProfilesSelectorStyled>
      {isOpenPortal ? (
        <Portal target={PortalTarget.MODAL}>{popup}</Portal>
      ) : null}
    </PageWrapperWithImageInBG>
  );
};
