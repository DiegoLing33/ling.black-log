import LType, {LInfoChar, LTypeFunc} from "./LType";
import {LUtils} from "./LUtils";
import LoggerSettings from "./LoggerSettings";
import * as fs from "fs";

export default class LObject {

	protected name: string;
	protected nameColor: LTypeFunc;

	public constructor(name: string, nameColor: LTypeFunc = LType.info) {
		this.name = name;
		this.nameColor = nameColor;
	}

	protected __core(color: LTypeFunc, s: string, ...data: any) {
		const rawTime = LUtils.getTimeString();
		const time = LType.secondary(`[ ${rawTime} ]`);
		const name = this.nameColor(`[ ${this.name} ]`);
		const text = color(...data);

		const str = `${time} [ ${LInfoChar(s)} ] ${name}: ${text}`;

		if(LoggerSettings.filePath){
			const txt = str.replace(
				/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');
			fs.appendFileSync(LoggerSettings.filePath, txt + "\n");
		}

		return str;
	}

	/**
	 * Starts the group
	 * @param name
	 * @param color
	 */
	public group(name: string, color: LTypeFunc = LType.secondary){
		console.group(color(`╔═════════════════ [ ${name} ]:`))
	}

	/**
	 * Ends the group
	 */
	public groupEnd(color: LTypeFunc = LType.secondary){
		console.groupEnd()
		console.log(color(`╚═════════════════ [ / ]`))
	}

	/**
	 * Logs the message
	 * @param data
	 */
	public log(...data: any[]): void {
		console.log(this.__core(LType.none, '@', ...data));
	}

	/**
	 * Logs the warning message
	 * @param data
	 */
	public warning(...data: any[]): void {
		console.log(this.__core(LType.warning, '!', ...data));
	}


	/**
	 * Logs the secondary message
	 * @param data
	 */
	public secondary(...data: any[]): void {
		console.log(this.__core(LType.secondary, '~', ...data));
	}

	/**
	 * Logs the error message
	 * @param data
	 */
	public error(...data: any[]): void {
		console.log(this.__core(LType.danger, 'N', ...data));
	}

	/**
	 * Logs the success message
	 * @param data
	 */
	public success(...data: any[]): void {
		console.log(this.__core(LType.success, 'Y', ...data));
	}

	/**
	 * Logs the object as json
	 * @param object
	 */
	public object(object: any): void {
		this.group(object.constructor.name, LType.info);
		console.log(LUtils.json(object));
		this.groupEnd(LType.info);
	}

}