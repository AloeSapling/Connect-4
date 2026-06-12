import textsPLPL from '../locales/pl_PL.json';
import textsENUK from '../locales/en_UK.json';

export type PageTexts = {
    general: {
        loading: string;
    };
    header: {
        home: string;
        settings: string;
        thisPage: string;
    };
    home: {
        play: string;
        settings: string;
    };
    error: {
        notFound: string;
        home: string;
    };
    username: {
        chooseYourUsername: string;
        name: string;
        hint: string;
        ok: string;
    };
    lobbyList: {
        listHeader: string;
        refresh: string;

        myLobbies: string;
        otherLobbies: string;

        tableName: string;
        tablePlayers: string;
        tableHasGame: string;
        tableNo: string;
        tableYes: string;

        formCancel: string;
        formOk: string;
        noLobbiesFound: string;
        defaultLobbyName: string;

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

        createGameButton: string;
        createGameToast: string;

        changePlayerIDFormHint: string;
        changePlayerIDFormUnspecified: string;
        changePlayerIDFormPlayer1: string;
        changePlayerIDFormPlayer2: string;
        changePlayerIDFormButton: string;
        changePlayerIDToast: string;

        selectUser: string;
        cancel: string;
        p1: string;
        p2: string;
        host: string;
        changePlayerId: string;
        tempban: string;
        userTempbanned: string;
        loading: string;
    };
    lobbySettings: {
        heading: string;
        enableExtraGamemode: string;
        tokenQueueMode: string;
        fullRandom: string;
        every: string;
        deck: string;
        allowedTokens: string;
        saveSettings: string;
        settingsChanged: string;
    };
    playerSelect: {
        player1: string;
        playAsPlayer1: string;
        player2: string;
        playAsPlayer2: string;
        spectator: string;
        watchGame: string;
    };
    game: {
        loading: string;
        forfeitButton: string;

        resultsWinText: string;
        resultsDrawText: string;
        resultsForfeitText: string;
        resultsLeaveButton: string;
        resultsBackToLobbyButton: string;

        leaveToast: string;

        player1Turn: string;
        player2Turn: string;
        player1Tokens: string;
        player2Tokens: string;
        canvasUnsupported: string;
        endUnspecified: string;
        endDefault: string;
    };
};

export type Languages = 'en_UK' | 'pl_PL';

export const textsMap: Record<Languages, PageTexts> = {
    pl_PL: textsPLPL,
    en_UK: textsENUK,
};
