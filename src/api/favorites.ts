import { Plugins } from '@capacitor/core';
import { getArticle } from './firebase';
const { Storage } = Plugins;
import { StoredFav } from '../models/index';

export async function getFavorites(): Promise<StoredFav[]> {
  const raw = await Storage.get({ key: 'favorites'});
  return raw.value ? JSON.parse(raw.value) : [];
}

/** sets StoredFavorites as a string value to the platform`s Storage system */
async function setFavorites(favorites: StoredFav[]) {
  await Storage.set({ key: 'favorites', value: JSON.stringify(favorites)});
}

/**  */
export const isFav = async (issueId: string, articleId: string): Promise<boolean> => {
  const result = (await getFavorites())
                        .filter( ( item ) => item.issueId === issueId && 
                                              item.articleId === articleId );
  return result.length === 1;
}

export const addFav = async (issueId: string, articleId: string) => {
  const result = (await getFavorites());
  result.push({ issueId, articleId });
  setFavorites(result);
}

export const removeFav = async (issueId: string, articleId: string) => {
  const result = (await getFavorites()).filter( item => item.issueId !== issueId && item.articleId !== articleId);
  setFavorites(result);
}
