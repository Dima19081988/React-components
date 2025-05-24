
import Calendar from './calendar'
import './calendar.css'

function App() {
  const now = new Date(2025, 4, 24);

  return(
    <div className='App'>
      <Calendar date={now} />
    </div>
  );
}
export default App;
