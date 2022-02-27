import { createClient, createCurrentUserHook, ClientConfig } from 'next-sanity'
import ImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'

export const config: ClientConfig = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2020-03-25',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string,
  useCdn: process.env.NODE_ENV === 'production',
}

export const sanityClient = createClient(config)
export const urlFor = (source: SanityImageSource) =>
  ImageUrlBuilder(config).image(source)
export const useCurrentUser = createCurrentUserHook(config)
