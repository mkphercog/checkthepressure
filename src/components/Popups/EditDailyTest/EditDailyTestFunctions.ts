import { TimeOfDayStates, MAX_SYS_DIA_PULSE_VALUE } from "common/constants";
import { IUser } from "common/interfaces";

export const getDailyTimeOfDayTestValues = (
  users: IUser[],
  userID: number,
  periodicID: number,
  dailyID: number,
  timeOfDay: TimeOfDayStates
) => {
  let testValues: {
    timeOfDay: TimeOfDayStates;
    omitted: boolean;
    SYS: number;
    DIA: number;
    PULSE: number;
  } = {
    timeOfDay: TimeOfDayStates.MORNING,
    omitted: false,
    SYS: 0,
    DIA: 0,
    PULSE: 0,
  };

  users.forEach((user) => {
    if (user.id === userID) {
      user.periodicPressureTests.forEach((periodicTest) => {
        if (periodicTest.id === periodicID) {
          periodicTest.list.forEach((test) => {
            if (test.id === dailyID && test.morning.timeOfDay === timeOfDay) {
              testValues = test.morning;
            } else if (
              test.id === dailyID &&
              test.evening.timeOfDay === timeOfDay
            ) {
              testValues = test.evening;
            }
          });
        }
      });
    }
  });

  const { SYS, DIA, PULSE } = testValues;
  const sysValue = SYS !== 0 ? SYS.toString() : "";
  const diaValue = DIA !== 0 ? DIA.toString() : "";
  const pulseValue = PULSE !== 0 ? PULSE.toString() : "";

  return {
    currentSys: sysValue,
    currentDia: diaValue,
    currentPulse: pulseValue,
  };
};

export enum ValidateStateTypes {
  notEnough = "notEnough",
  tooMuch = "tooMuch",
  badSign = "badSign",
  correct = "correct",
}

export const validateValues = (
  sys: string,
  dia: string,
  pulse: string
): IValidateValues => {
  if (Number(sys) < 0 || Number(dia) < 0 || Number(pulse) < 0) {
    return {
      state: ValidateStateTypes.notEnough,
      message: "Conajmniej jedno pole zawiera ujemną wartość.",
    };
  } else if (
    Number(sys) > MAX_SYS_DIA_PULSE_VALUE ||
    Number(dia) > MAX_SYS_DIA_PULSE_VALUE ||
    Number(pulse) > MAX_SYS_DIA_PULSE_VALUE
  ) {
    return {
      state: ValidateStateTypes.tooMuch,
      message: `Conajmniej jedno pole zawiera zbyt dużą wartość. (max ${MAX_SYS_DIA_PULSE_VALUE})`,
    };
  } else if (
    /\D/gi.test(sys) ||
    /\D/gi.test(dia) ||
    /\D/gi.test(pulse) ||
    sys === "" ||
    dia === "" ||
    pulse === ""
  ) {
    return {
      state: ValidateStateTypes.badSign,
      message: "Conajmniej jedno pole ma nieprawidłową wartość.",
    };
  }
  return {
    state: ValidateStateTypes.correct,
    message: "",
  };
};

interface IValidateValues {
  state: ValidateStateTypes;
  message: string;
}
