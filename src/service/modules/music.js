import { httpMusic } from '../request'

export function getHotMusicApi(id) {
  return httpMusic.get({
    url: `/playlist/track/all?id=${id}&limit=10&offset=0` //热歌榜-前10首
  })
}
