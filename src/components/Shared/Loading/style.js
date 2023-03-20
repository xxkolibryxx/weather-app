import { WHITE } from 'constants/colors'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  wrapper: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999,
    backgroundColor: WHITE,
  },
})
export default useStyles
