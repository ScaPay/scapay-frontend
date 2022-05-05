import {
	BrowserRouter as Router,
	Routes,
	Route,
	useNavigate,
} from "react-router-dom";

import HomePage from './Pages/home-page'

function App() {
  return (
	
		<>
		  <div className="bg-secondary4">
	  	<Router>
				<Routes>
					<Route path='/' element={<HomePage />} />
				</Routes>
			</Router>
	  
	  </div>
		</>
	);
}

export default App;
