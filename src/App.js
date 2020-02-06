import React from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import MainPage from './MainPage';
import Food from './Food';
import Accommodation from './Accommodation';
import Charity from './Charity';
import About from './About';
import Contact from './Contact';
import Feedback from './Feedback';
import ScrollToTop from './ScrollToTop'
 
class App extends React.Component {
    render(){
        return(
            <Router>
                <ScrollToTop>
                    <div>
                        <Route exact path="/" component={MainPage} />
                        <Route path="/Food" component={Food} />
                        <Route path="/Accommodation" component={Accommodation} />
                        <Route path="/Charity" component={Charity} />
                        <Route path="/About" component={About} />
                        <Route path="/Contact" component={Contact} />
                        <Route path="/Feedback" component={Feedback} />
                    </div>
                </ScrollToTop>
            </Router>
            )
        }
    }

export default App;