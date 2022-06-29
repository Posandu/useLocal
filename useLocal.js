const keyName = "__cache__";

const get = (key) => {
	const parsed = JSON.parse(localStorage.getItem(keyName)) || {};
	return parsed[key];
};

const set = (key, value) => {
	const parsed = JSON.parse(localStorage.getItem(keyName)) || {};
	parsed[key] = value;
	localStorage.setItem(keyName, JSON.stringify(parsed));
};

function useLocal(fn, ...args) {
	const key = `${fn.name}-${JSON.stringify(args)}`;

	try {
		const out = fn(...args);
		set(key, out);
		return out;
	} catch (e) {
		console.info("Using cached");

		const value = get(key);

		if (value) return value;
		else throw e;
	}
}

export default useLocal;