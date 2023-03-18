import { useMediaQuery } from 'react-responsive';

const useBrakePoints = () => {
  const isDesktop = useMediaQuery({ query: '(max-width: 1200px)' });
  const isTablet = useMediaQuery({ query: '(max-width: 992px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return {
    isDesktop,
    isTablet,
    isMobile,
  };
};

export default useBrakePoints;
