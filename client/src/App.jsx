import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import Authenticated from './components/admin/Authenticated';
import ManagePets from './pages/admin/ManagePets';

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/admin' element={<Login />} />
				<Route path='/admin' element={<Authenticated />}>
					<Route path='dashboard' element={<Dashboard />} />
					<Route path='manage-pets' element={<ManagePets />} />
				</Route>
			</Routes>
		</>
	);
};

export default App;
