const fetch = require('node-fetch');

module.exports = async (api_url, options) => {
	try {
		const res = await fetch(api_url, options);
		return res.json();
	} catch (error) {
		return {}
	}
};
