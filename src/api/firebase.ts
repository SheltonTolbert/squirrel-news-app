import firebase from 'firebase';
import { config } from '../config/firebaseconf';

import { Issue, Article, LANGUAGES } from '../models/index'

firebase.initializeApp(config);

export const firestore = firebase.firestore()


/**
 * receives the latest issue from Firestore sorted by publishedAt field and by given language
**/
export function getIssue(atIndex: number, language: LANGUAGES, onResult: (data: Issue) => void) {

  if (atIndex < 1) {
    throw new Error("invalid input, the minimum value is 1")
  }

  firestore.collection('issues')
    .where('language', '==', language)
    .orderBy('publishedAt', 'desc').limit(atIndex).onSnapshot(
      (issue) => {
        const result: Issue = issue.docChanges()[issue.docChanges().length - 1].doc.data() as Issue;

        firestore.collection('issues').doc(issue.docChanges()[0].doc.id).collection('articles').onSnapshot(articles => {
          result.articles = articles.docChanges().map(article => article.doc.data() as Article);
          onResult(result);
        })
      }
    )
}


/**
  * returns a list of issues as an archive 
**/
export function getArchive(language: LANGUAGES, lastChunk: Partial<Issue> | null, limit: number, onResult: ((data: Partial<Issue[]>, lastChunk: any) => void)) {

  if (lastChunk) {
    firestore.collection('issues')
      .where('language', '==', language)
      .orderBy('publishedAt', 'desc').startAfter(lastChunk).limit(limit).onSnapshot(issues => {
        onResult(
          issues.docChanges().map(issue => issue.doc.data() as Issue),
          null,
        )
      });
  } else {
    firestore.collection('issues')
      .where('language', '==', language)
      .orderBy('publishedAt', 'desc').limit(limit).onSnapshot(issues => {
        onResult(
          issues.docChanges().map(issue => issue.doc.data() as Issue),
          issues.docChanges()[issues.docChanges().length - 1],
        )
      });
  }

}


// interface StoredFav {
//   issue: string;
//   doc: string;
//   value: string;
// }

// export function getFavorites(favs: StoredFav[], onResult: (data: any) => void) {
  
//   const issues = favs.map( async (fav, idx) => await firestore.collection('issues').doc(fav.issue).collection('articles').get() );
//   issues.filter( article => article )
// }