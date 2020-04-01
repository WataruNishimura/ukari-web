// This script is referenced by here: https://gist.github.com/incolorsnet/9ec798cf0a89732db665f9a29590f3b8

import axios from 'axios'
import fse from 'fs-extra'
import ps from 'xml2js'

const rss = ['https://note.com/ukarisalon/rss']

export default function apiBuildJson() {
  const distJosonFile = './static/_nuxt/api/index.json'
  const arr = []

  const getThumbnails = (data) => {
    const thumbnails = data.match(/https(.|\s)*?(jpg|png|gif|jpeg)/gi)
    return thumbnails !== null && thumbnails !== undefined
      ? Object.values(thumbnails)
      : false
  }
  return axios.all(rss.map((link) => axios.get(link))).then(
    axios.spread((...responses) => {
      const json = {
        items: []
      }
      responses.forEach((response, index) => {
        const xml = response.data
        ps.parseString(xml, (message, xmlres) => {
          json.items.push(xmlres.rss.channel[0].item)
        })
        json.items.forEach((item) => {
          item.forEach((data) => {
            const thumb = getThumbnails(data.description[0])
            Object.assign(data, { thumb })
          })
        })

        arr.push(json)
      })

      fse.outputFile(distJosonFile, JSON.stringify(arr))
    })
  )
}
