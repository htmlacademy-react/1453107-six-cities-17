import { Navigate } from 'react-router-dom';

import { AppRouteType } from '../../types';

type PrivateRouteProps = {
  isNeedNavigate: boolean;
  navigateTo: AppRouteType;
  children: JSX.Element;
}

function PrivateRoute({isNeedNavigate, navigateTo, children}: PrivateRouteProps): JSX.Element {
  return(
    isNeedNavigate
      ? <Navigate to={navigateTo} />
      : children
  );
}

export default PrivateRoute;
