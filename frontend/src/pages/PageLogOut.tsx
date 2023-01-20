import { useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { Context } from '../index';

export const PageLogOut: React.FC = () => {
  const { authStore } = useContext(Context);

  useEffect(() => {
    authStore.logout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <Navigate to="/login/" />;
};
