'use client';

import React from 'react';
import s from './styles.module.scss';
import { CategoryTitlePageQuery } from '@/graphql/generated/graphql';
import { Wrapper } from '../wrapper';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const TitlePage = ({
  data,
}: {
  data: CategoryTitlePageQuery['categoryPage'];
}) => {
  const slug = usePathname();
  return (
    <Wrapper>
      <div className={s.titlePageWrapper}>
        <div className={s.wrapper}>
          <Link className={s.image} href={`${slug}/stills`}>
            <img
              src={`${data?.stillsTitleImage?.responsiveImage?.src}`}
              alt={`${data?.stillsTitleImage?.responsiveImage?.alt}`}
              title={`${data?.stillsTitleImage?.responsiveImage?.title}`}
            />
            <p className={s.title}>Stills</p>
          </Link>
        </div>
        <Link className={s.wrapper} href={`${slug}/video`}>
          <div className={s.image}>
            <img
              src={`${data?.videoTitleImage?.responsiveImage?.src}`}
              alt={`${data?.videoTitleImage?.responsiveImage?.alt}`}
              title={`${data?.videoTitleImage?.responsiveImage?.title}`}
            />
            <p className={s.title}>Video</p>
          </div>
        </Link>
      </div>
    </Wrapper>
  );
};
