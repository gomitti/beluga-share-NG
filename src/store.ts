import { DELAY_DEFAULT_MSEC } from './conf'

interface IUser{
    name : string
    hash? : string
    lastModified : Date
}

// ユーザ、最新リクエスト時刻
let reqMap : { [key: string]: IUser } = {}
function clearHash () {
  reqMap = {}
}
/** 登録時間を更新 */
function updateHash (name:string, time:Date) {
  if (!(name in reqMap)) {
    // 要新規登録
    const newOne : IUser =
        {
          name: name,
          hash: '',
          lastModified: time
        }
    reqMap[name] = newOne
    return
  }
  if (_isAppendable(name, time)) {
    reqMap[name].lastModified = time
  }
}

/** 更新可能ならtrue */
function _isAppendable (_:string, time:Date, baseTime?:Date) {
  const _baseTime = baseTime === undefined ? new Date() : baseTime!
  const dt = time.getTime() - _baseTime.getTime()
  return dt > DELAY_DEFAULT_MSEC
}

export { updateHash, clearHash }
