import React from 'react';
import s from './styles.module.scss';
import { MainMenuQuery } from '@/graphql/generated/graphql';

export const Header = ({ menu }: { menu: MainMenuQuery['mainMenu'] }) => {
  console.log(menu);
  return <header className={s.header}></header>;
};
