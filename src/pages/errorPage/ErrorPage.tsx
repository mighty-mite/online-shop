import { Link } from 'react-router-dom';
import './ErrorPage.scss';

function ErrorPage() {
  return (
    <section className="container">
      <h2 className="error__heading">Oops! Page not found</h2>
      <Link className="error__link" to="/">
        Go back to the main page
      </Link>
    </section>
  );
}

export default ErrorPage;
