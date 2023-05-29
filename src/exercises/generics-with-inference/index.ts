/*

Modify the file "index.ts"
And check that "test.ts" does not display any errors

Intro:

    Now we want to select a random author and a random books among all the authors and books
    To do this we created a new method `getRandomElementFromArray`

    Changes on this file :
    - new function `getRandomElementFromArray`
    - new variables `randomAuthor' and `randomBook`

Exercise:

    - Modify the function `getRandomElementFromArray` to make to return the good type depending on what it receive as parameter
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

export function getRandomElementFromArray(items) {
    let randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}

export const randomAuthor = getRandomElementFromArray(getAuthors().items);
export const randomBook = getRandomElementFromArray(getBooks().items);
