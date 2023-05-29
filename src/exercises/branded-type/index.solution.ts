/*

Modify the file "index.ts"
And check that "test.ts" does not display any errors

Intro:

    This exercise follow the previous one
    You have a collection of books and another of authors
    Book are linked to an author through the `authorId` property
    The goal of this exercise is to use a Branded Type to ensure we always use a specific type when referencing Author["id"]

Exercise:

    - Use a specific branded type for Author["id"]
    - Use a specific branded type for Book["id"]
*/

type AuthorId = string & {__type: 'AuthorId'};

export interface Author {
    id: AuthorId;
    name: string;
    age: number;
}

type BookId = string & {__type: 'BookId'};

export interface Book {
    id: BookId;
    authorId: Author['id'];
    title: string;
    date: string;
}

export const authors: Author[] = [
    {
        id: 'e54b2fd7' as Author['id'],
        name: 'John Doe',
        age: 25
    },
    {
        id: '5d92aef4' as Author['id'],
        name: 'Jane Doe',
        age: 26
    }
];

export const books: Book[] = [
    {
        id: '18fc78ae' as Book['id'],
        authorId: 'e54b2fd7' as Author['id'],
        title: 'Book 1',
        date: '2016-12-02'
    },
    {
        id: 'e15dfc8' as Book['id'],
        authorId: 'e54b2fd7' as Author['id'],
        title: 'Book 2',
        date: '2015-05-26'
    },
    {
        id: 'ace518c8' as Book['id'],
        authorId: '5d92aef4' as Author['id'],
        title: 'Book 3',
        date: '2011-08-15'
    },
    {
        id: '9afd2ce1' as Book['id'],
        authorId: '398ed487' as Author['id'],
        title: 'Book 4',
        date: '2016-02-03'
    }
];

export function getBookFromAuthor(authorId: Author['id']) {
    return books.filter((book) => book.authorId === authorId);
}

export function extractAuthorIdFromBook(book: Book): Author['id'] {
    return book.authorId;
}
