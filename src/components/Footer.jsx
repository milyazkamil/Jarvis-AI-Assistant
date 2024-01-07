import { useGlobalContext } from "./Context";
import GithubIcon from "./Svg/GithubIcon";

const Footer = () => {
  const { footerZIndex, isDark } = useGlobalContext();

  return (
    <footer className="footer" style={{ zIndex: footerZIndex }}>
      <p
        className="project-author"
        style={{ color: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)' }}
      >
        © 2023 Project Author: Milyaz KAMIL
      </p>
      <nav>
        <a
          style={{
            color: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)',
          }}
          className="github-repo-link"
          href="https://milyazkamil.github.io/Jarvis-AI-Assistant/"
          target="_blank"
        >
          <GithubIcon />
          GitHub Repository
        </a>
      </nav>
    </footer>
  )
}
export default Footer;