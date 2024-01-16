import axios from 'axios';

const baseURL = `https://petfiserver.vercel.app/api/`;

export const server = axios.create({ baseURL, withCredentials: true });

export const fetcher = async (url) => {
	//prettier-ignore
	return await axios.get(baseURL + url, { withCredentials: true }).then((res) => res.data);
};

const cloudBaseUrl = `https://api.cloudinary.com/v1_1/my-cloud-env/image/upload`;

export const fileUpload = async (uploadFile) => {
	const formData = new FormData();
	formData.append('file', uploadFile);
	formData.append('upload_preset', 'petfi_photos');

	try {
		const response = await axios.post(cloudBaseUrl, formData);
		console.log(response);
		return response?.data?.secure_url;
	} catch (error) {
		console.log(error?.response?.data?.error);
		return false;
	}
};
