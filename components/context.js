import { createContext } from 'react';

const globalCtxDefault = {
    questions: [],
    questionsNum: 0,
    pallete: {}
};
export const GlobalCtx = createContext(globalCtxDefault);