import { BLUE, WHITE } from 'constants/colors';
import { createUseStyles } from 'react-jss';

export const useButtonStyles = createUseStyles({
  btnBlue: {
    color: WHITE,
    background: BLUE,
    borderColor: BLUE,
  },
});
