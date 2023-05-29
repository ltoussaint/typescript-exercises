import {IsTypeEqual, typeAssert} from 'type-assertions';
import {authors, books, extractAuthorIdFromBook, getBookFromAuthor} from './index';

typeAssert<IsTypeEqual<string, ReturnType<typeof extractAuthorIdFromBook>>>();
typeAssert<IsTypeEqual<string, Parameters<typeof getBookFromAuthor>[0]>>();
typeAssert<IsTypeEqual<typeof authors, {id: string; name: string; age: number}[]>>();
typeAssert<IsTypeEqual<typeof books, {id: string; authorId: string; title: string; date: string}[]>>();
