import { useWindowSize } from '../../hooks/use-window-size/use-window-size';

import Container from '../container/container';
import Logo from '../logo/logo';
import BottomNavigation from '../bottom-navigation/bottom-navigation';
import { BREAKPOINTS } from '../../constants';

import './footer.scss';

const Footer = () => {
  const { width } = useWindowSize();

  return (
    <footer className="footer">
      <Container className="footer__wrapper">
        <div className="footer__address">
          <Logo className="footer__logo" />
          {width < BREAKPOINTS.Desktop && <BottomNavigation className="footer__navigation" />}
          <p className="footer__text footer__text--copyright">
            150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка России №1050 Ⓒ Лига
            Банк, 2019
          </p>
        </div>
        {width >= BREAKPOINTS.Desktop && <BottomNavigation className="footer__navigation" />}

        <div className="footer__contacts">
          <div className="footer__phone">
            <svg
              className="footer__phone-icon"
              width="10"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.837 0H1.163C.523 0 0 .486 0 1.08V14.92C0 15.514.523 16 1.163 16h7.674c.64 0 1.163-.486 1.163-1.08V1.08C10 .487 9.477 0 8.837 0zM3.772.779h2.456c.077 0 .14.058.14.131 0 .072-.063.13-.14.13H3.772c-.077 0-.14-.058-.14-.13 0-.073.063-.131.14-.131zM5 15.459c-.321 0-.581-.241-.581-.54 0-.3.26-.54.581-.54.321 0 .581.24.581.54 0 .299-.26.54-.581.54zM9.19 14H.81V1.714h8.38V14z"
                fill="#1F1E25"
              />
            </svg>
            <div>
              <div className="footer__phone-number">*0904</div>
              <p className="footer__text footer__text--phone">
                Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
              </p>
            </div>
          </div>
          <div className="footer__phone">
            <svg
              className="footer__phone-icon"
              width="16"
              height="16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 11.928v3.143a.888.888 0 01-.828.887c-.388.027-.705.041-.95.041C6.366 16 0 9.632 0 1.778c0-.246.013-.563.04-.951A.889.889 0 01.929 0H4.07a.444.444 0 01.443.4c.02.204.039.367.056.49a12.356 12.356 0 001.074 3.557c.085.178.03.39-.13.504L3.594 6.32a11.596 11.596 0 006.084 6.084l1.368-1.915a.41.41 0 01.51-.132c1.124.534 2.323.895 3.555 1.07.124.018.286.038.489.058a.444.444 0 01.399.442z"
                fill="#1F1E25"
              />
            </svg>
            <div>
              <div className="footer__phone-number">8 800 111 22 33</div>
              <div className="footer__text footer__text--phone">
                Бесплатный для всех городов России
              </div>
            </div>
          </div>
          <ul className="footer__socials-list">
            <li className="footer__socials-item">
              <a className="footer__socials-link" href="/">
                <span className="visually-hidden">Facebook</span>
                <svg width="9" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9.2h2.143L9 6H6V4.4c0-.824 0-1.6 1.714-1.6H9V.112A25.85 25.85 0 006.551 0c-2.327 0-3.98 1.326-3.98 3.76V6H0v3.2h2.571V16H6V9.2z" />
                </svg>
              </a>
            </li>
            <li className="footer__socials-item">
              <a className="footer__socials-link" href="/">
                <span className="visually-hidden">Instagram</span>
                <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0c2.174 0 2.445.008 3.298.048.852.04 1.432.174 1.942.372a3.9 3.9 0 011.418.922c.406.4.721.884.922 1.418.198.51.332 1.09.372 1.942C15.99 5.555 16 5.826 16 8s-.008 2.445-.048 3.298c-.04.852-.174 1.432-.372 1.942a3.907 3.907 0 01-.922 1.418c-.4.406-.884.721-1.418.922-.51.198-1.09.332-1.942.372C10.445 15.99 10.174 16 8 16s-2.445-.008-3.298-.048c-.852-.04-1.432-.174-1.942-.372a3.911 3.911 0 01-1.418-.922A3.923 3.923 0 01.42 13.24c-.198-.51-.332-1.09-.372-1.942C.01 10.445 0 10.174 0 8s.008-2.445.048-3.298C.088 3.85.222 3.27.42 2.76c.2-.534.515-1.018.922-1.418.4-.407.884-.721 1.418-.922C3.27.222 3.85.088 4.702.048 5.555.01 5.826 0 8 0zm0 4a4 4 0 100 8 4 4 0 000-8zm5.2-.2a1 1 0 10-2 0 1 1 0 002 0zM8 5.6a2.4 2.4 0 110 4.8 2.4 2.4 0 010-4.8z" />
                </svg>
              </a>
            </li>
            <li className="footer__socials-item">
              <a className="footer__socials-link" href="/">
                <span className="visually-hidden">Twitter</span>
                <svg width="16" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 1.543c-.6.265-1.236.44-1.886.516A3.292 3.292 0 0015.558.244a6.564 6.564 0 01-2.085.796A3.283 3.283 0 007.88 4.032 9.325 9.325 0 011.114.604a3.28 3.28 0 001.016 4.38 3.273 3.273 0 01-1.487-.41v.04a3.281 3.281 0 002.633 3.218c-.484.13-.99.15-1.483.056a3.283 3.283 0 003.066 2.279A6.59 6.59 0 010 11.525 9.29 9.29 0 005.031 13c6.039 0 9.341-4.999 9.341-9.334 0-.141-.004-.284-.01-.424A6.667 6.667 0 0016 1.544z" />
                </svg>
              </a>
            </li>
            <li className="footer__socials-item">
              <a className="footer__socials-link" href="/">
                <span className="visually-hidden">YouTube</span>
                <svg width="16" height="13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.634 2.03C16 3.478 16 6.5 16 6.5s0 3.023-.366 4.47c-.203.8-.797 1.43-1.55 1.643C12.717 13 8 13 8 13s-4.714 0-6.084-.387c-.756-.216-1.35-.845-1.55-1.643C0 9.523 0 6.5 0 6.5s0-3.022.366-4.47c.203-.8.797-1.43 1.55-1.643C3.286 0 8 0 8 0s4.717 0 6.084.387c.756.216 1.35.845 1.55 1.643zM6.4 9.344L11.2 6.5 6.4 3.656v5.688z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
