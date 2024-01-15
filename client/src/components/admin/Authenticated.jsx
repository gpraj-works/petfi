import { useDispatch } from 'react-redux';
import { useGetAdmin } from '../../hooks/useAdmin';
import { Navigate, Outlet } from 'react-router-dom';
import { updateAdmin } from '../../toolkit/slices/utilsSlice';

const Authenticated = () => {
	const dispatch = useDispatch();
	const { data, isLoading, error } = useGetAdmin();

	if (isLoading) {
		return '';
	}

	if (!error?.response?.data?.status) {
		if (error?.response?.status === 401) {
			return <Navigate to='/admin' replace />;
		}
	}

	if (data.status) {
		dispatch(updateAdmin(data?.admin));
		return <Outlet />;
	}

	return <Navigate to='/admin' replace />;
};

export default Authenticated;
