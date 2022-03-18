import Log from 'log4js'

// logサイズ
const max: number = 10000

// log4jsコンフィグ
Log.configure({
  appenders: {
    info: {
      type: 'dateFile',
      filename: 'logs/info.log',
      pattern: 'yyyy-MM-dd.log',
      encoding: 'utf-8',
      maxLogSize: max,
    },
    error: {
      type: 'dateFile',
      filename: 'logs/error.log',
      pattern: 'yyyy-MM-dd.log',
      encoding: 'utf-8',
      maxLogSize: max,
    },
  },

  categories: {
    default: { appenders: ['info'], level: 'info' },
    info: { appenders: ['info'], level: 'info' },
    error: { appenders: ['error'], level: 'error' },
  },
})

/**
 *  エラーログ処理
 *  @param {*} content ログコンテンツ
 */

const logError = (content: string): void => {
  const log = Log.getLogger('error')
  log.error(content)
}

/**
 *  一般的なログ処理
 *  @param {*} content ログコンテンツ
 */

const logInfo = (content: string): void => {
  const log = Log.getLogger('info')
  log.info(content)
}

export { logError, logInfo }
