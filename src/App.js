import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
} from "react-router-dom";

import HomePage from './Pages/home-page'
import SignIn from "./Pages/sign-in";
import SignUp from "./Pages/sign-up";
import CompletePayment from "./Pages/complete-payment";

function App() {
  return (
	
		<>
		  <div className="bg-secondary4">
	  	<Router>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/auth' element={<SignIn />} />
					<Route path='/sign-up' element={<SignUp />} />
					<Route path='/complete-payment' element={<CompletePayment />} />
				</Routes>
			</Router>
	  
	  </div>
		</>
	);
}

export default App;
