import { createContext } from 'react';
import { User } from '../interfaces/Candidate.interface';


export default createContext<{
    candidates: User[],
    saveCandidate: (user: User) => void,
    removeCandidate: (id: number) => void,
}>({
   candidates: [],
   saveCandidate: () => {},
   removeCandidate: (_) => {},
}) 