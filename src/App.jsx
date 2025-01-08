import Navbar from './components/navbar'
import Timer from './components/timer'
import TimerForm from './components/timerForm'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";


function App() {

  return (
    <Theme 
    accentColor='gold' 
    appearance='dark'
    panelBackground='transparent'
    radius="large"
    >
      <Navbar />
      <Timer />
      {/* <TimerForm /> */}
    </Theme>
  );
}

export default App
