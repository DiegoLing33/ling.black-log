import dayjs from "dayjs";

export const LUtils = {

	/**
	 * Returns the time string
	 * @param time
	 */
	getTimeString(time: Date = new Date()) {
		return dayjs(time).format('dd.MM.YYYY HH:mm:ss');
	},

	/**
	 * Converts data to string
	 * @param data
	 */
	data(...data: any[]): string{
		return data.map(String).join(" ");
	},

	/**
	 * Returns JSON string
	 * @param object
	 */
	json(object: any): string{
		return JSON.stringify(object, null, 2);
	}
};