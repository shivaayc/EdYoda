import './App.css';
import Card from './Card';
import SubscriptionPlan from './SuscriptionPlan';
import Navbar from './components/Navbar';


function App() {

  return (
    <>
   
      <Navbar />
      <div id="bg">
      <div>
      <div className="container" style={{ display: 'flex' }}>
      <div style={{ flex: 3 }}>
        <Card />
      </div>
      <div style={{ flex: 3 }}>
        <SubscriptionPlan />
      </div>
      </div>
    </div>
    </div>
    </>
  );
}

export default App;
