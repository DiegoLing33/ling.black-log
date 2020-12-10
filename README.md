# @log.black

## Установка

```
yarn add log.black
```

## Использование

```js
import {Logger} from "log.black";

Logger.log('Test message');
Logger.warning('Test message');
Logger.error('Test message');
Logger.success('Test message');
Logger.object({name: 'Kri', value: 3});

Logger.group('Test group');
Logger.error('0%');
Logger.success('100%');
Logger.groupEnd();
```

### Начать запись в файл

```js
import {LoggerSettings, Logger} from "log.black";

LoggerSettings.filePath = 'test.log';

Logger.log('Test message');
```

### Создать свой логгер

```js
import {createLogger, LType} from "log.black";

// Аргементы:
//  1. имя
//  2. цветовая ассоциация: LType.info, LType.warning, 
//  LType.danger, LType.success, LType.secondary, LType.none
const logger = createLogger('Server', LType.info);
```