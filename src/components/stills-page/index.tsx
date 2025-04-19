import React from 'react';
import s from './styles.module.scss';
import { CategoryStillsPageQuery } from '@/graphql/generated/graphql';
import { Gallery } from '../gallery';
import { Wrapper } from '../wrapper';
import { DoubleImage } from '../double-image';
import { PageHeader } from '../page-header';
import { FullWidthImage } from '../full-width-image';

export const Stills = ({
  data,
}: {
  data: CategoryStillsPageQuery['categoryPage'];
}) => {
  if (!data?.stillsGallery) return <></>;
  return (
    <div className={s.stillsPageWrapper}>
      <Gallery images={data.stillsGallery} />
      <Wrapper>
        <PageHeader title={data.title || ''} />
        {data.content.map((item, i) => {
          if (item.__typename === 'DoubleImageRecord') {
            return <DoubleImage data={item} key={i} />;
          }
          if (item.__typename === 'FullWidthImageRecord') {
            return <FullWidthImage data={item} key={i} />;
          }
        })}
      </Wrapper>
    </div>
  );
};
