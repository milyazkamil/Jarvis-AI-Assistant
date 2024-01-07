import { useGlobalContext } from "./Context";
import useSpeechRecognition from "../hooks/useSpeechRecognitionHook";

const ArcReactor = () => {
  const { isDark } = useGlobalContext();
  const { startListening } = useSpeechRecognition();

  const numberOfThinLines = 40;
  const numberOfThickLines = 8;
  const initialIValue = 0;

  // Create an array of values for --i
  const iValuesOfThinLines = Array.from(
    { length: numberOfThinLines },
    (_, index) => initialIValue + index
  );

  const iValuesOfThickLines = Array.from(
    { length: numberOfThickLines },
    (_, index) => initialIValue + index
  );

  return (
    <section className="arc-reactor">
      <div className={`circle1 ${isDark ? 'dark-mode' : ''}`}></div>
      <div className={`circle2 ${isDark ? 'dark-mode' : ''}`}></div>
      <div className={`circle3 ${isDark ? 'dark-mode' : ''}`}></div>
      <div className="thin-lines">
        {iValuesOfThinLines.map((i, index) => (
          <div
            key={index}
            className="thin-line"
            style={{
              '--i': i,
              backgroundColor: isDark ? 'rgb(0, 0, 0)' : 'rgb(0, 255, 255)',
              boxShadow: isDark
                ? '0 0 100px 5px rgb(0, 0, 0)'
                : '0 0 100px 5px rgb(0, 255, 255)',
            }}
          ></div>
        ))}
      </div>
      <div
        className="thick-lines"
        style={{ borderColor: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)' }}
      >
        {iValuesOfThickLines.map((i, index) => (
          <div
            key={index}
            className="thick-line"
            style={{
              '--i': i,
              backgroundColor: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
            }}
          ></div>
        ))}
      </div>
      <div
        className="circle4"
        style={{
          backgroundColor: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)',
          boxShadow: isDark
            ? '0 0 50px 5px rgb(0, 0, 0)'
            : '0 0 50px 5px rgb(255, 255, 255)',
        }}
      ></div>
      <div
        style={{
          cursor: 'pointer',
          borderColor: isDark ? 'rgb(255, 255, 255)' : 'rgb(0, 0, 0)',
          boxShadow: isDark
            ? '0 0 100px 5px rgb(0, 0, 0)'
            : '0 0 100px 5px rgb(255, 255, 255)',
        }}
        onClick={startListening}
        className="circle5"
      ></div>
    </section>
  )
}
export default ArcReactor;