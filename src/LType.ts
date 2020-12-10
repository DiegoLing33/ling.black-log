import chalk from "chalk";
import {LUtils} from "./LUtils";

export type LTypeFunc = (...data: any[]) => string;

const LType = {

	danger: (...data: any[]) => chalk.red(LUtils.data(...data)),
	success: (...data: any[]) => chalk.green(LUtils.data(...data)),
	warning: (...data: any[]) => chalk.yellow(LUtils.data(...data)),
	secondary: (...data: any[]) => chalk.gray(LUtils.data(...data)),
	info: (...data: any[]) => chalk.cyan(LUtils.data(...data)),
	reset: (...data: any[]) => chalk.reset(LUtils.data(...data)),
	white: (...data: any[]) => chalk.white(LUtils.data(...data)),
	none: (...data: any[]) => LUtils.data(...data),

};

export function LInfoChar(c: string): string{
	switch (c){
		default:
		case '!': return LType.warning('!');
		case 'N': return LType.danger('N');
		case 'Y': return LType.success('Y');
		case '~': return LType.secondary('~');
		case '@': return LType.info('@');
	}
}

export default LType;