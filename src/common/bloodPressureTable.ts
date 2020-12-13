export const bloodPressureTable: bloodPressure[] = [
  {
    age: 1,
    MIN: {
      SYS: 75,
      DIA: 50,
    },
    NORMAL: {
      SYS: 90,
      DIA: 60,
    },
    MAX: {
      SYS: 110,
      DIA: 75,
    },
  },

  {
    age: 5,
    MIN: {
      SYS: 70,
      DIA: 85,
    },
    NORMAL: {
      SYS: 95,
      DIA: 65,
    },
    MAX: {
      SYS: 110,
      DIA: 79,
    },
  },

  {
    age: 13,
    MIN: {
      SYS: 90,
      DIA: 60,
    },
    NORMAL: {
      SYS: 105,
      DIA: 70,
    },
    MAX: {
      SYS: 115,
      DIA: 80,
    },
  },

  {
    age: 19,
    MIN: {
      SYS: 105,
      DIA: 73,
    },
    NORMAL: {
      SYS: 117,
      DIA: 77,
    },
    MAX: {
      SYS: 120,
      DIA: 81,
    },
  },

  {
    age: 24,
    MIN: {
      SYS: 107,
      DIA: 75,
    },
    NORMAL: {
      SYS: 120,
      DIA: 79,
    },
    MAX: {
      SYS: 132,
      DIA: 83,
    },
  },

  {
    age: 29,
    MIN: {
      SYS: 109,
      DIA: 76,
    },
    NORMAL: {
      SYS: 121,
      DIA: 80,
    },
    MAX: {
      SYS: 133,
      DIA: 84,
    },
  },

  {
    age: 34,
    MIN: {
      SYS: 110,
      DIA: 77,
    },
    NORMAL: {
      SYS: 122,
      DIA: 81,
    },
    MAX: {
      SYS: 134,
      DIA: 85,
    },
  },

  {
    age: 39,
    MIN: {
      SYS: 111,
      DIA: 78,
    },
    NORMAL: {
      SYS: 123,
      DIA: 82,
    },
    MAX: {
      SYS: 135,
      DIA: 86,
    },
  },

  {
    age: 44,
    MIN: {
      SYS: 112,
      DIA: 79,
    },
    NORMAL: {
      SYS: 125,
      DIA: 83,
    },
    MAX: {
      SYS: 137,
      DIA: 87,
    },
  },

  {
    age: 49,
    MIN: {
      SYS: 115,
      DIA: 80,
    },
    NORMAL: {
      SYS: 127,
      DIA: 84,
    },
    MAX: {
      SYS: 139,
      DIA: 88,
    },
  },

  {
    age: 54,
    MIN: {
      SYS: 116,
      DIA: 81,
    },
    NORMAL: {
      SYS: 129,
      DIA: 85,
    },
    MAX: {
      SYS: 142,
      DIA: 89,
    },
  },

  {
    age: 59,
    MIN: {
      SYS: 118,
      DIA: 82,
    },
    NORMAL: {
      SYS: 131,
      DIA: 86,
    },
    MAX: {
      SYS: 144,
      DIA: 90,
    },
  },

  {
    age: 64,
    MIN: {
      SYS: 121,
      DIA: 83,
    },
    NORMAL: {
      SYS: 134,
      DIA: 87,
    },
    MAX: {
      SYS: 147,
      DIA: 91,
    },
  },

  {
    age: 65,
    MIN: {
      SYS: 123,
      DIA: 85,
    },
    NORMAL: {
      SYS: 135,
      DIA: 88,
    },
    MAX: {
      SYS: 148,
      DIA: 94,
    },
  },
];

interface bloodPressure {
  age: number;
  MIN: {
    SYS: number;
    DIA: number;
  };
  NORMAL: {
    SYS: number;
    DIA: number;
  };
  MAX: {
    SYS: number;
    DIA: number;
  };
}
