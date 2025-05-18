import { VideoGallery } from '@/components/video-gallery';
import {
  CategoryVideoPageDocument,
  CategoryVideoPageQuery,
} from '@/graphql/generated/graphql';
import { getClient } from '@/utils/serverClient';
import React from 'react';

export default async function VideoPage({
  params,
}: {
  params: { slug: string };
}) {
  const client = getClient();
  const data = await client.query<CategoryVideoPageQuery>({
    query: CategoryVideoPageDocument,
    variables: { slug: params.slug },
    context: {
      fetchOptions: {},
    },
  });
  if (!data.data.categoryPage?.videoGallery) return <></>;
  return (
    <div>
      <VideoGallery data={data.data.categoryPage?.videoGallery} />
    </div>
  );
}
