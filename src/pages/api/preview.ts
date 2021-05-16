import fetch from 'node-fetch'
import { API_ENDPOINT, config } from '@/utils'

export default async function handler(req, res) {
  if (!req.query.id) {
    return res.status(404).end()
  }
  const content = await fetch(`${API_ENDPOINT}/blog/${req.query.id}?draftKey=${req.query.draftKey}`, config)
  .then(res => {
    return res.json()
  }).catch(e => {
    return null
  })

  if (!content) {
    return res.status(401).json({message: 'Invalid slug'})
  }

  res.setPreviewData({
    id: content.id,
    draftKey: req.query.draftKey
  })

  res.writeHead(307, {Location: `/blog/${content.id}`})
  res.end('Preview mode enabled')
}