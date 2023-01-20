import './App.css';
import AnimatedCursor from "react-animated-cursor"
import HomeUpdated from './Components/HomeUpdated';
import { Route, Routes } from 'react-router-dom';
import VanillaJS from './Components/Projects/VanillaJS';
import ReactProject from './Components/Projects/ReactProject';
import MernProjects from './Components/Projects/MernProjects';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeUpdated></HomeUpdated>} />
        <Route path="/home" element={<HomeUpdated></HomeUpdated>}>
          <Route path="/home/vanillajs" element={<VanillaJS></VanillaJS>} />
          <Route path="/home/reactproject" element={<ReactProject></ReactProject>} />
          <Route path="/home/mernprojects" element={<MernProjects></MernProjects>} />
        </Route>
      </Routes>

      {/* animated cursor  */}
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
    </>
  );
}

export default App;
