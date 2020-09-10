import {request} from './request.js'

export function HomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}
