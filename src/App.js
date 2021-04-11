import './App.css';
import Main from './componends/Main';
import SignUp from './componends/SignUp';
import Diary from './componends/Diary';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './Database/Auth'



function App() {
  return (
    <AuthProvider>
    <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/diary" component={Diary} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
