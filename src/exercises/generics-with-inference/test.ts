import {IsTypeEqual, typeAssert} from 'type-assertions';
import {Author, Book, randomAuthor, randomBook} from './index';

typeAssert<IsTypeEqual<Author, typeof randomAuthor>>();
typeAssert<IsTypeEqual<Book, typeof randomBook>>();
