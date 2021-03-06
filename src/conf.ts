const PORT = process.env.PORT || 5000

/** [protocol]://[user]:[pwd]@[host]:[port] */
const MONGO_PROTOCOL = process.env.MONGO_PROTOCOL || 'mongodb+srv'
const MONGO_USER = process.env.MONGO_USER || 'not_set_user'
const MONGO_PWD = process.env.MONGO_PWD || 'not_set_pwd'
const MONGO_HOST = process.env.MONGO_HOST || 'not_set_host'


const FIXED_SRC_PATH = __dirname + '/dist'
const DELAY_DEFAULT_MSEC = 2000

export { PORT, MONGO_PROTOCOL, MONGO_USER, MONGO_PWD, MONGO_HOST, FIXED_SRC_PATH, DELAY_DEFAULT_MSEC }
