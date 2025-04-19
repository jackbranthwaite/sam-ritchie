import { TitlePage } from '@/components/title-page';
import {
  CategoryTitlePageDocument,
  CategoryTitlePageQuery,
} from '@/graphql/generated/graphql';
import { getClient } from '@/utils/serverClient';
import React from 'react';

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const client = getClient();
  const data = await client.query<CategoryTitlePageQuery>({
    query: CategoryTitlePageDocument,
    variables: { slug: params.slug },
    context: {
      fetchOptions: {
        next: { tags: [params.slug] },
      },
    },
  });

  if (!data.data.categoryPage) {
    console.log('Make a not found function');
    // notFound()
  }

  return (
    <div>
      <TitlePage data={data.data.categoryPage} />
    </div>
  );
}
