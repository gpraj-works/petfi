import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Authenticated from './components/admin/Authenticated';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/admin' element={<Login />} />
				<Route element={<Authenticated />}>
					<Route path='/admin/dashboard' element={<Dashboard />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
