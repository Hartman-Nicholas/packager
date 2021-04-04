export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__link">
        <a href="mailto:packager@example.com.com">packager@example.com</a>
      </div>

      <ul className="footer__media-list">
        <li className="footer__media-list__item">
          <a className="footer__media-list__link" href="/">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li className="footer__media-list__item">
          <a className="footer__media-list__link" href="/">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className="footer__media-list__item">
          <a className="footer__media-list__link" href="/">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="footer__media-list__item">
          <a className="footer__media-list__link" href="/">
            <i className="fas fa-shipping-fast"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};
