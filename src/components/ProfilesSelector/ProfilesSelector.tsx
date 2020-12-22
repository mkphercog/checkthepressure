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
import { ProfilesSelectorStyled, AddUserIcon } from "./ProfilesSelector.css";
import { PageWrapperWithImageInBG } from "../../styles/mixins/PageBackGround";
import { Legend } from "./../../styles/mixins/Fieldset";

export const ProfilesSelector: React.FC = () => {
  const [isOpenPortal, setIsOpenPortal] = useState(false);
  const [popup, setPopup] = useState<Object>({});
  const users = useSelector((state: IGlobalState) => state.profiles.users);
  const dispatch = useDispatch();

  const renderUsers = users.map(
    ({
      name,
      age,
      id,
      userBloodPressureBasedOnAge,
      nextAvailablePeriodicTestID,
      periodicPressureTests,
    }) => (
      <UserProfile
        key={id}
        id={id}
        name={name}
        age={age}
        userBloodPressureBasedOnAge={userBloodPressureBasedOnAge}
        deleteProfile={() => {
          setPopup(
            <WarningsYesNo
              message={`Usunąć użytkownika ${name}?`}
              setIsOpen={setIsOpenPortal}
              response={(res: boolean) => res && dispatch(deleteProfile(id))}
            />
          );
          setIsOpenPortal(true);
        }}
        selectUserID={(id: number) => dispatch(setSelectedUserID(id))}
        nextAvailablePeriodicTestID={nextAvailablePeriodicTestID}
        periodicPressureTests={periodicPressureTests}
      />
    )
  );

  return (
    <PageWrapperWithImageInBG>
      <img src={BackGround} alt="Blood Pressure" />
      <ProfilesSelectorStyled>
        <Legend>{renderUsers.length ? "Profile" : "Brak użytkowników"}</Legend>
        <ul>{renderUsers.length ? renderUsers : []}</ul>
        <AddUserIcon
          className="fas fa-user-plus"
          onClick={() => {
            setPopup(<AddUser setIsOpenAddUserPopup={setIsOpenPortal} />);
            setIsOpenPortal(true);
          }}
        ></AddUserIcon>
      </ProfilesSelectorStyled>
      {isOpenPortal ? (
        <Portal target={PortalTarget.MODAL}>{popup}</Portal>
      ) : null}
    </PageWrapperWithImageInBG>
  );
};
