import axios from "axios"
import { BASE_URL, TIMEOUT } from "./config"

// axios封装
class Http {
    constructor(baseURL, timeout=10000) {
        this.instance = axios.create({
            baseURL,
            timeout
        })

        this.instance.interceptors.request.use(config => {
            return config
          }, err => {
            return Promise.reject(err)
          })

          this.instance.interceptors.response.use(res => {
            return res
          }, err => {
            return Promise.reject(err)
          })

        }

        request(config) {
            return new Promise((resolve, reject) => {
                this.instance.request(config).then(res => {
                    resolve(res.data)
                }).catch(err => {
                    reject(err)
                })
            })
        }
    
        get(config) {
            return this.request({ ...config, method: "get" })
        }
}


export default new Http(BASE_URL, TIMEOUT)