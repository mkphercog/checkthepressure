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
import { LegendStyled, PageWrapperWithImageInBG } from "../../styles/mixins";

export const ProfilesSelector: React.FC = () => {
  const [isPortalOpen, setIsPortalOpen] = useState(false);
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
              close={setIsPortalOpen}
              response={(res: boolean) => res && dispatch(deleteProfile(id))}
            />
          );
          setIsPortalOpen(true);
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
        <LegendStyled>
          {renderUsers.length ? "Profile" : "Brak użytkowników"}
        </LegendStyled>
        <ul>{renderUsers.length ? renderUsers : []}</ul>
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
    </PageWrapperWithImageInBG>
  );
};
