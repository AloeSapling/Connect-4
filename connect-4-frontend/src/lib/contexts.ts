import { createContext } from 'react';
import { models } from './proto.js';
import type { Languages, PageTexts } from './lang.js';

export const UserContext = createContext<models.IUser | null>(null);

export const langContext = createContext<{
    texts: PageTexts;
    lang: Languages;
    setLang: (l: Languages) => void;
} | null>(null);
