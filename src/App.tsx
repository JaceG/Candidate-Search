import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Store from './store';
import { User } from './interfaces/Candidate.interface';
function App() {
const [candidates,setCandidates] = useState<User[]>([]);

useEffect(() => {
  const candidates = localStorage.getItem('candiates');
   if(candidates) {
    setCandidates(JSON.parse(candidates));
   }
},[]);

const saveCandidate = (user:User) => {
  setCandidates((prevCandidates:User[]) => {
    const newCandidates = [...prevCandidates,user];
    localStorage.setItem('candiates',JSON.stringify(newCandidates));
    return newCandidates;
  })
}

const removeCandidate = (id: number) => {
  const newCandidates = candidates.filter((candidate: User) => candidate.id !== id);
  localStorage.setItem('candiates',JSON.stringify(newCandidates));
  setCandidates(newCandidates);
}
return (
    <Store.Provider value={{candidates, saveCandidate, removeCandidate}}>
      <Nav />
      <main>
        <Outlet />
      </main>
    </Store.Provider>
  );
}

export default App;
