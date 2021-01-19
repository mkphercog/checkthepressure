import styled from "styled-components";
import { Fieldset } from "styles/mixins/Fieldset";
import { COLORS, TRANSITION_TIME, CORNER_RADIUS } from "styles/variables";

export const FieldsetStyled = styled(Fieldset)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  margin: 20px 0;
  overflow: auto;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }

  div {
    margin: 30px 5px;
    padding: 10px 20px;
    background-color: ${COLORS.lightGray};
    border-radius: ${CORNER_RADIUS};

    p {
      font-size: 14px;
      text-align: center;

      @media (min-width: 768px) {
        font-size: 16px;
      }

      span {
        font-weight: bold;
        color: ${COLORS.blue};
      }

      a {
        font-weight: bold;
        text-decoration: none;
        color: ${COLORS.darkGreen};

        @media (min-width: 1024px) {
          transition: ${TRANSITION_TIME};

          :hover {
            color: ${COLORS.green};
          }
        }
      }
    }
  }
`;
