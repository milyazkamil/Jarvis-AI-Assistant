import { useGlobalContext } from "./Context";

const OtherInfo = () => {
  const numberOfCircles = 4;
  const initialIValue = 0;

  // Create an array of values for --i
  const iValuesOfCircles = Array.from(
    { length: numberOfCircles },
    (_, index) => initialIValue + index
  );
  const stopSpeaking = () => {
    window.speechSynthesis.cancel();
  };
  const {isDark} = useGlobalContext();
  return (
    <section className="other-info">
      <div>
        <div className="single-info">
          <div
            className="pulse red"
            style={{ backgroundColor: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 83, 83)' }}
          >
            {iValuesOfCircles.map((i, index) => (
              <span key={index} style={{ '--i': i }}></span>
            ))}
          </div>
          <div
            className="text-info"
            style={{ color: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 83, 83)' }}
          >
            <span className="red-text">Microphone</span>
            <span className="red-text small-text">Ready</span>
          </div>
        </div>
        <div className="single-info">
          <div
            className="pulse green"
            style={{
              backgroundColor: isDark ? 'rgb(0, 0, 0)' : 'rgb(104, 255, 104)',
            }}
          >
            {iValuesOfCircles.map((i, index) => (
              <span key={index} style={{ '--i': i }}></span>
            ))}
          </div>
          <div
            className="text-info"
            style={{ color: isDark ? 'rgb(0, 0, 0)' : 'rgb(104, 255, 104)' }}
          >
            <span className="green-text">OpenAI API</span>
            <span className="green-text small-text">Connected</span>
          </div>
        </div>
      </div>
      <button
        onClick={stopSpeaking}
        type="button"
        style={{
          color: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)',
          borderColor: isDark ? 'rgb(0, 0, 0)' : 'rgb(255, 255, 255)',
        }}
      >
        Stop the Speech
      </button>
    </section>
  )
}
export default OtherInfo;