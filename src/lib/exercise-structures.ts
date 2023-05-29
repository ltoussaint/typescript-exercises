/* eslint @typescript-eslint/no-var-requires: off */
/* eslint import/no-webpack-loader-syntax: off */

import {FileTree} from './file-tree';

const typeAssertions: FileTree = {
    '/node_modules/type-assertions/index.ts': {
        content: require('!!raw-loader!../exercises/node_modules/type-assertions/index.ts').default,
        readOnly: true
    }
};

export interface ExerciseStructure {
    name: string;
    files: FileTree;
}

function formatJson<T>(value: T): string {
    return JSON.stringify(value, null, 4);
}

export const exerciseStructures: Record<number, ExerciseStructure> = {
    // 1: {
    //     name: 'Any vs Unknown',
    //     files: {
    //         '/index.ts': {
    //             content: require('!!raw-loader!../exercises/1/index.ts').default,
    //             solution: require('!!raw-loader!../exercises/1/index.solution.ts').default
    //         },
    //         '/test.ts': {
    //             content: require('!!raw-loader!../exercises-bk/1/test.ts').default,
    //             readOnly: true
    //         },
    //         ...typeAssertions
    //     }
    // },
    1: {
        name: 'Indexed Access Type',
        files: {
            '/index.ts': {
                content: require('!!raw-loader!../exercises/indexed-access-type/index.ts').default,
                solution: require('!!raw-loader!../exercises/indexed-access-type/index.solution.ts').default
            },
            '/test.ts': {
                content: require('!!raw-loader!../exercises/indexed-access-type/test.ts').default,
                readOnly: true
            },
            ...typeAssertions
        }
    },
    2: {
        name: 'Branded Type',
        files: {
            '/index.ts': {
                content: require('!!raw-loader!../exercises/branded-type/index.ts').default,
                solution: require('!!raw-loader!../exercises/branded-type/index.solution.ts').default
            },
            '/test.ts': {
                content: require('!!raw-loader!../exercises/branded-type/test.ts').default,
                readOnly: true
            },
            ...typeAssertions
        }
    },
    3: {
        name: 'Generics',
        files: {
            '/index.ts': {
                content: require('!!raw-loader!../exercises/generics/index.ts').default,
                solution: require('!!raw-loader!../exercises/generics/index.solution.ts').default
            },
            '/mock.ts': {
                content: require('!!raw-loader!../exercises/generics/mock.ts').default,
                readOnly: true
            },
            '/test.ts': {
                content: require('!!raw-loader!../exercises/generics/test.ts').default,
                readOnly: true
            },
            ...typeAssertions
        }
    },
    4: {
        name: 'Generics With Inference',
        files: {
            '/index.ts': {
                content: require('!!raw-loader!../exercises/generics-with-inference/index.ts').default,
                solution: require('!!raw-loader!../exercises/generics-with-inference/index.solution.ts').default
            },
            '/mock.ts': {
                content: require('!!raw-loader!../exercises/generics-with-inference/mock.ts').default,
                readOnly: true
            },
            '/test.ts': {
                content: require('!!raw-loader!../exercises/generics-with-inference/test.ts').default,
                readOnly: true
            },
            ...typeAssertions
        }
    }
};
