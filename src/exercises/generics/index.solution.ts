/*

Modify the file "index.ts"
And check that "test.ts" does not display any errors

Documentation on generics : https://www.typescriptlang.org/docs/handbook/2/generics.html

Intro:

    We want to export methods to retrieve the authors and the books
    The response of those method will be wrapped in a newly create object represented by the interface `ListWrapper`

    Changes on this file :
    - new interface `ListWrapper`
    - new method `getAuthors`
    - new method `getBooks`
    - move `authors` and `books` in a mock file to simulate the fact it comes from an http request

Exercise:

    - Modify the `ListWrapper` interface and the 2 new methods to make them typesage
        - `getAuthors().items` must be typed as `Author`
        - `getBooks().items` must be typed as `Book`
*/

import {authors, books} from './mock';

export interface ListWrapper<T> {
    items: Array<T>;
    count: number;
}

export interface Author {
    id: string & {__type: 'AuthorId'};
    name: string;
    age: number;
}

export interface Book {
    id: string & {__type: 'BookId'};
    authorId: Author['id'];
    title: string;
    date: string;
}

export function getAuthors(): ListWrapper<Author> {
    return {
        items: authors,
        count: authors.length
    };
}

export function getBooks(): ListWrapper<Book> {
    return {
        items: books,
        count: books.length
    };
}

export function getBookFromAuthor(authorId: Author['id']) {
    return getBooks().items.filter((book) => book.authorId === authorId);
}

export function extractAuthorIdFromBook(book: Book): Author['id'] {
    return book.authorId;
}
