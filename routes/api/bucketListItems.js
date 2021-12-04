import { Router } from 'express';
const BucketListItem = require('../../models/BucketListItem')

const router = Router()

router.get('/', async (req, res) => {
  const bucketListItems = await BucketListItem.find()
  if (!bucketListItems) throw new Error('No bucketListItems')
  const srted = bucketListItems.sort((a,b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime()
  })
})