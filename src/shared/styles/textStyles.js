import { createUseStyles } from 'react-jss';

export const useTextStyles = createUseStyles({
  justify: {
    textAlign: 'justify',
  },
  lineClamp: {
    lineClamp: ({ textLimit }) => textLimit,
    '-webkit-line-clamp': ({ textLimit }) => textLimit,
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    overflow: 'hidden',
    '-webkit-box-orient': 'vertical',
  },
});
