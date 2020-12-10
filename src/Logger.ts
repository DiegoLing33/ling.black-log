import LObject from "./LObject";
import LType, {LTypeFunc} from "./LType";

const Logger = new LObject('Main');

/**
 * Creates the logger
 * @param name
 * @param color
 */
export function createLogger(name: string, color: LTypeFunc = LType.none) {
	return new LObject(name, color);
}

/**
 * Default logger
 */
export default Logger;