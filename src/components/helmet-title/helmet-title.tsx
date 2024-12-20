import { Helmet } from 'react-helmet-async';

type HelmetTitleProps = {
  pageTitle: string;
}

function HelmetTitle({pageTitle}: HelmetTitleProps): JSX.Element {
  return(
    <Helmet>
      <title>6 cities. {pageTitle}</title>
    </Helmet>
  );
}

export default HelmetTitle;
