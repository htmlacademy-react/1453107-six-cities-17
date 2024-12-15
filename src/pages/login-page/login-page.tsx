import Header from '../../components/header/header';
import LocationsItem from '../../components/locations-item/locations-item';
import LoginForm from '../../components/login-form/login-form';

import { LocationType } from '../../types';

type LoginPageProps = {
  selectedLocation: LocationType;
}

function LoginPage({selectedLocation}: LoginPageProps): JSX.Element {

  return(
    <div className="page page--gray page--login">

      <Header isLoginPage />

      <main className="page__main page__main--login">
        <div className="page__login-container container">

          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <LoginForm />
          </section>

          <section className="locations locations--login locations--current">
            <LocationsItem locationName={selectedLocation}/>
          </section>

        </div>
      </main>
    </div>
  );
}

export default LoginPage;
