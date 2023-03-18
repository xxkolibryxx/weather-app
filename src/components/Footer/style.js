import { DARK_GREEN, LIGHT_GREEN } from 'constants/colors'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  wrapper: {
    background: DARK_GREEN,
  },
  textColor: {
    color: LIGHT_GREEN,
  },
})
export default useStyles
