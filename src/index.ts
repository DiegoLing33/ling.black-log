import LoggerSettings from "./LoggerSettings";
import Logger, {createLogger} from "./Logger";
import LType from "./LType";

export {
	Logger,
	LoggerSettings,
	createLogger,
	LType,
}
/*

	Example:

	LoggerSettings.filePath = 'test.log';

	Logger.group('Test');
	Logger.log('Test message');
	Logger.warning('Test message');
	Logger.error('Test message');
	Logger.success('Test message');
	Logger.object({'name': 1, value: 3});
	Logger.groupEnd();

*/