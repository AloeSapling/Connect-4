import textsPLPL from '../locales/pl_PL.json';
import textsENUK from '../locales/en_UK.json';

export type PageTexts = {
    lobbyList: {};
    username: {
        chooseYourUsername: string;
        name: string;
    };
    lobby: {};
    game: {};
};

export type Languages = 'en_UK' | 'pl_PL';

export const textsMap: Record<Languages, PageTexts> = {
    pl_PL: textsPLPL,
    en_UK: textsENUK,
};
