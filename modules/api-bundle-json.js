// This script is referenced by here: https://gist.github.com/incolorsnet/9ec798cf0a89732db665f9a29590f3b8

import axios from 'axios'
import fse from 'fs-extra'
import ps from 'xml2js'

export default function apiBuildJson() {
  const api = axios.create()
  const distJosonFile = './static/_nuxt/api/index.json'
  const arr = []

  const getThumbnails = (data) => {
    const thumbnails = data.match(/https(.|\s)*?(jpg|png|gif|jpeg)/gi)
    return thumbnails !== null && thumbnails !== undefined
      ? Object.values(thumbnails)
      : false
  }
  return axios.all([api.get('https://note.com/ukarisalon/rss')]).then(
    axios.spread((ukari) => {
      const xml = ukari.data
      const json = {
        items: []
      }
      ps.parseString(xml, (message, xmlres) => {
        json.items = xmlres.rss.channel[0].item
      })
      json.items.forEach((data) => {
        const thumb = getThumbnails(data.description[0])
        Object.assign(data, { thumb })
      })

      arr.push(json)

      fse.outputFile(distJosonFile, JSON.stringify(arr))
    })
  )
}
