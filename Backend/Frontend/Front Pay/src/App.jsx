import Pay from "./pages/Pay";
import Success from "./pages/Success";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path = "/pay">
                    <Pay />
                </Route>
                <Route path = "/success">
                    <Success />
                </Route>
            </Switch>
        </Router>
    )
  };
  
  export default App;