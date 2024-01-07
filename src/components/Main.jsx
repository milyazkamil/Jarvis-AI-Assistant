import ArcReactor from './ArcReactor';
import OtherInfo from './OtherInfo';
import MoonIcon from './Svg/MoonIcon';
import SunIcon from './Svg/SunIcon';
import ArrowIcon from './Svg/ArrowIcon';
import { voices, howToUse, commands } from '../data';
import { useGlobalContext } from './Context';

const Main = () => {
  const { isOpenSettings, setSelectedVoice, isDark, toggleDarkMode, accordion, accordionCommands, toggleAccordion, toggleAccordionCommands} = useGlobalContext();

  const handleNumber = (e) => {
    const selectedVoiceNum = e.target.value;
    setSelectedVoice(parseInt(selectedVoiceNum));
  };

  return (
    <section className="hero">
      <div
        className="settings-section"
        style={{
          top: isOpenSettings ? '-100%' : '0',
          backgroundColor: isDark ? '#FAFAFC' : '#0c0519',
          color: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)',
        }}
      >
        <div className="select-voice">
          <h3>Select Voice</h3>
          <select
            style={{
              backgroundColor: isDark
                ? 'rgb(255, 255, 255)'
                : 'rgb(0, 0, 0)',
              color: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)',
              borderColor: isDark
                ? 'rgba(0, 0, 0, 0.5)'
                : 'rgba(255, 255, 255, 0.5)',
            }}
            onChange={handleNumber}
          >
            {voices.map((num) => {
              return (
                <option value={num.id} key={num.id}>
                  {num.name}
                </option>
              )
            })}
          </select>
        </div>
        <div className="select-theme">
          <h3>Select Theme</h3>
          <div>
            <MoonIcon />
            <div onClick={toggleDarkMode}>
              <div
                className="circle"
                style={{ left: isDark ? '44px' : '5px' }}
              ></div>
            </div>
            <SunIcon />
          </div>
        </div>

        <div
          onClick={toggleAccordion}
          className="how-to-use accordion"
          style={{
            height: accordion ? '35px' : '250px',
            borderColor: isDark
              ? 'rgba(0, 0, 0, 0.5)'
              : 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <div className="info">
            <h4>How to use Jarvis?</h4>
            <ArrowIcon />
          </div>
          <ol>
            {howToUse.map((item) => {
              const { id, title, content } = item
              return (
                <li key={id}>
                  {title}
                  <ul>
                    <li>{content}</li>
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>

        <div
          onClick={toggleAccordionCommands}
          className="how-to-use accordion"
          style={{
            height: accordionCommands ? '35px' : '250px',
            borderColor: isDark
              ? 'rgba(0, 0, 0, 0.5)'
              : 'rgba(255, 255, 255, 0.5)',
          }}
        >
          <div className="info">
            <h4>Use These Short Commands</h4>
            <ArrowIcon />
          </div>
          <ol>
            {commands.map((item) => {
              const { id, title, content } = item
              return (
                <li key={id}>
                  {title}
                  <ul>
                    <li>{content}</li>
                  </ul>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
      <ArcReactor />
      <OtherInfo />
    </section>
  )
}
export default Main;