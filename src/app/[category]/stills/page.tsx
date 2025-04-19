import { Stills } from '@/components/stills-page';
import {
  CategoryStillsPageDocument,
  CategoryStillsPageQuery,
} from '@/graphql/generated/graphql';
import { getClient } from '@/utils/serverClient';
import React from 'react';

export default async function StillsPage({
  params,
}: {
  params: { slug: string };
}) {
  const client = getClient();
  const data = await client.query<CategoryStillsPageQuery>({
    query: CategoryStillsPageDocument,
    variables: { slug: params.slug },
    context: {
      fetchOptions: {
        next: { tags: [params.slug] },
      },
    },
  });

  return (
    <div>
      <Stills data={data.data.categoryPage} />
    </div>
  );
}
