import {IsTypeEqual, Not, typeAssert} from 'type-assertions';
import {Author, Book, authors, books, extractAuthorIdFromBook, getBookFromAuthor} from './index';

typeAssert<IsTypeEqual<Author['id'], ReturnType<typeof extractAuthorIdFromBook>>>();
typeAssert<IsTypeEqual<Author['id'], Parameters<typeof getBookFromAuthor>[0]>>();
typeAssert<IsTypeEqual<typeof authors, {id: Author['id']; name: string; age: number}[]>>();
typeAssert<IsTypeEqual<typeof books, {id: Book['id']; authorId: Author['id']; title: string; date: string}[]>>();

typeAssert<Not<IsTypeEqual<string, ReturnType<typeof extractAuthorIdFromBook>>>>();
typeAssert<Not<IsTypeEqual<string, Parameters<typeof getBookFromAuthor>[0]>>>();
typeAssert<Not<IsTypeEqual<typeof authors, {id: string; name: string; age: number}[]>>>();
typeAssert<Not<IsTypeEqual<typeof books, {id: string; authorId: string; title: string; date: string}[]>>>();
typeAssert<Not<IsTypeEqual<Author['id'], Book['id']>>>();
