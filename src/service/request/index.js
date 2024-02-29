import { BASE_URL, Music_URL, TIMEOUT } from './config'
import Http from './request'

const http = new Http(BASE_URL, TIMEOUT)
const httpMusic = new Http(Music_URL, TIMEOUT)

export { http, httpMusic }
