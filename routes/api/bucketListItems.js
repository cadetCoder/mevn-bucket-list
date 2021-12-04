import { Router } from 'express';
const BucketListItem = require('../../models/BucketListItem')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const bucketListItems = await BucketListItem.find()
    if (!bucketListItems) throw new Error('No bucketListItems')
    const sorted = bucketListItems.sort((a,b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
    res.status(200).json(sorted)
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
})