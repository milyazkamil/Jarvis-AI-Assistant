import logo from '../assets/images/logo.png';
import logoWhite from '../assets/images/logo-white.png';
import logoText from '../assets/images/logo-text.png';
import logoTextWhite from '../assets/images/logo-text-white.png';
import SettingsIcon from './Svg/SettingsIcon';
import { useGlobalContext } from './Context';

const Header = () => {
  const { toggleSettings, isDark } = useGlobalContext();
  return (
    <header
      className="header"
      style={{
        borderBottom: isDark
          ? '1px solid rgba(0, 0, 0, 0.2)'
          : '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: isDark
          ? '0px 5px 20px 0 rgba(0, 0, 0, 0.1)'
          : '0px 5px 20px 0 rgba(255, 255, 255, 0.3)',
      }}
    >
      <div className="logo-container">
        <img
          className="logo"
          src={isDark ? logo : logoWhite}
          alt="logo"
        />
        <div>
          <img
            className="logo-text"
            src={isDark ? logoText : logoTextWhite}
            alt="logo text"
          />
          <span
            className="version"
            style={{ color: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)' }}
          >
            v.0.0.1 beta
          </span>
        </div>
      </div>
      <div className="settings-container">
        <button
          type="button"
          onClick={toggleSettings}
          className="settings"
          style={{ color: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)' }}
        >
          <SettingsIcon
            style={{ color: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)' }}
          />
          SETTINGS
        </button>
      </div>
    </header>
  )
}
export default Header;