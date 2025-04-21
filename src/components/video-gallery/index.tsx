import React, { useRef } from 'react';
import s from './styles.module.scss';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { CategoryVideoPageQuery } from '@/graphql/generated/graphql';

export const VideoGallery = ({
  data,
}: {
  data: CategoryVideoPageQuery['categoryPage'];
}) => {
  const swiperRef = useRef<SwiperRef | null>(null);
  return (
    <div className={s.videoGalleryWrapper}>
      <Swiper loop ref={swiperRef}>
        {data?.videoGallery?.videos.map((video, i) => {
          return <SwiperSlide key={i}>{video.title}</SwiperSlide>;
        })}
      </Swiper>
    </div>
  );
};
