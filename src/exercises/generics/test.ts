import {IsNotAny, IsTypeEqual, typeAssert} from 'type-assertions';
import {Author, Book, getAuthors, getBooks} from './index';

typeAssert<IsTypeEqual<Author, ReturnType<typeof getAuthors>['items'][number]>>();
typeAssert<IsTypeEqual<Book, ReturnType<typeof getBooks>['items'][number]>>();
typeAssert<IsNotAny<ReturnType<typeof getAuthors>['items'][number]>>();
typeAssert<IsNotAny<ReturnType<typeof getBooks>['items'][number]>>();
