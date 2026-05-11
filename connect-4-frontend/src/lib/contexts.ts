import { createContext } from 'react';
import { models } from './proto.js';

export const UserContext = createContext<models.IUser | null>(null);
