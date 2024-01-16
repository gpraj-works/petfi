export const newUrl = (name) => {
	return new URL(`./${name}`, import.meta.url).href;
};