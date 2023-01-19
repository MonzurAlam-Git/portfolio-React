
import './App.css';
import AnimatedCursor from "react-animated-cursor"
import HomeUpdated from './Components/HomeUpdated';

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={18}
        outerSize={50}
        color='36, 113, 163'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      {/* <Home></Home> */}
      <HomeUpdated></HomeUpdated>

    </>
  );
}

export default App;
