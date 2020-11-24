import React, { FC } from 'react';

import { ReactComponent as Logo } from '../assets/icon/squirrel-news-logo.svg';

export const FAB: FC<{}> = () => {
  return (
    <button className="p-1 w-10 h-10 bg-gray-700 rounded-full hover:bg-gray-400 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none">
      <Logo />
    </button>);
}