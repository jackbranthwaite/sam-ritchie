'use client';

import React, { useRef } from 'react';
import s from './styles.module.scss';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import Left from '@/assets/svgs/chevron-left.svg';
import Right from '@/assets/svgs/chevron-right.svg';

// Import Swiper styles
import 'swiper/css';

import Image from 'next/image';
import { GalleryFragment } from '@/graphql/generated/graphql';

export const Gallery = ({ images }: { images: GalleryFragment }) => {
  const swiperRef = useRef<SwiperRef | null>(null);

  return (
    <div className={s.galleryWrapper}>
      <Swiper loop ref={swiperRef}>
        {images &&
          images.galleryImages.map((image, i) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  src={`${image.responsiveImage?.src}`}
                  alt={`${image.responsiveImage?.alt}`}
                  width={image.responsiveImage?.width}
                  height={image.responsiveImage?.height}
                  className={s.image}
                />
              </SwiperSlide>
            );
          })}
      </Swiper>
      <div className={s.navWrapper}>
        <div
          className={s.navButton}
          onClick={() => swiperRef.current?.swiper.slidePrev()}
        >
          <Left />
        </div>
        <div
          className={s.navButton}
          onClick={() => swiperRef.current?.swiper.slideNext()}
        >
          <Right />
        </div>
      </div>
    </div>
  );
};
