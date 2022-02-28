import { NextApiRequest, NextApiResponse } from 'next'
import sanityClient from '@sanity/client'
import { ClientConfig } from 'next-sanity'

const config: ClientConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  // apiVersion: '2021-08-31',
  useCdn: process.env.NODE_ENV == 'production',
  token: process.env.SANITY_API_TOKEN,
}

const client = sanityClient(config)

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { _id, name, email, comment } = JSON.parse(req.body)

  try {
    await client.create({
      _type: 'comment',
      post: {
        _type: 'reference',
        _ref: _id,
      },
      name,
      email,
      comment,
    })
  } catch (error) {
    return res.status(500).json({ message: "Couldn't Submit Comment!", error })
  }

  return res.status(200).json({ message: 'Comment Submitted!' })
}

export default handler
