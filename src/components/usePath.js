import { useLocation } from 'react-router-dom';

function usePath() {
  const location = useLocation();

  const path = location.pathname.split('/');

  path.shift();

  return path;
}

export default usePath;
