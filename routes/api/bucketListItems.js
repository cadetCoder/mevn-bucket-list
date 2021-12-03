import { Router } from 'express';
const BucketListItem = require('../../models/BucketListItem')

const router = Router()

router.get('/', async (req, res) => {
  const bucketListItems = await BucketListItem.find()
})