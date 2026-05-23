import textsPLPL from '../locales/pl_PL.json';
import textsENUK from '../locales/en_UK.json';

export type PageTexts = {
    header: {
        home: string;
        settings: string;
        thisPage: string;
    };
    home: {
        play: string;
    };
    username: {
        chooseYourUsername: string;
        name: string;
        hint: string;
    };
    lobbyList: {
        listHeader: string;
        refresh: string;

        tableName: string;
        tablePlayers: string;
        tableHasGame: string;
        tableNo: string;
        tableYes: string;

        formCancel: string;

        lobbyFormHint: string;
        lobbyFormButton: string;
        lobbyToast: string;

        createFormHint: string;
        createFormButton: string;
        createToast: string;

        usernameFormHint: string;
        usernameFormText: string;
        usernameFormButton: string;
        usernameToast: string;
    };
    lobby: {
        lobby: string;
        lobbyCode: string;

        players: string;
        labelYou: string;

        leaveButton: string;
        leaveToast: string;
        startGameButton: string;
    };
    game: {

    };
};

export type Languages = 'en_UK' | 'pl_PL';

export const textsMap: Record<Languages, PageTexts> = {
    pl_PL: textsPLPL,
    en_UK: textsENUK,
};
