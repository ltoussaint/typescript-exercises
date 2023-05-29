/*

Modify the file "index.ts"
And check that "test.ts" does not display any errors

Documentation on generics : https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html

Intro:

    In this example, you have a collection of books and another of authors
    Book are linked to an author through the `authorId` property
    The goal of this exercise is to use Indexed Access Type when referencing the type of an Author["id"]

Exercise:

    Step 1 : Use Author["id"] as type wherever we reference a Author id
    Step 2 : Change the `id` type to `string` in the Author interface
             By only changing this type, it should fix all typing errors of the file `test.ts`

*/

export interface Author {
    id: string;
    name: string;
    age: number;
}

export interface Book {
    id: string;
    authorId: Author['id'];
    title: string;
    date: string;
}

export const authors: Author[] = [
    {
        id: 'e54b2fd7',
        name: 'John Doe',
        age: 25
    },
    {
        id: '5d92aef4',
        name: 'Jane Doe',
        age: 26
    }
];

export const books: Book[] = [
    {
        id: '18fc78ae',
        authorId: 'e54b2fd7',
        title: 'Book 1',
        date: '2016-12-02'
    },
    {
        id: 'e15dfc8',
        authorId: 'e54b2fd7',
        title: 'Book 2',
        date: '2015-05-26'
    },
    {
        id: 'ace518c8',
        authorId: '5d92aef4',
        title: 'Book 3',
        date: '2011-08-15'
    },
    {
        id: '9afd2ce1',
        authorId: '398ed487',
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
