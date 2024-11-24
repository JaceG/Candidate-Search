import  { useContext }  from 'react';
import CandidateTable from "../components/CandidateTable/";
import Store from '../store';
import { User } from '../interfaces/Candidate.interface';
const SavedCandidates = () => {
 const { candidates, removeCandidate } = useContext(Store)
 const handleReject = (user: User) => {
  removeCandidate(user.id);
 } 
 return (
    <div className="app">
    <header className="header">
      <h1>Potential Candidates</h1>
    </header>
    <main className="main-content">
    <CandidateTable 
    candidates={candidates}
    onRejectClicked={handleReject}
    />
    </main>
  </div>
  );
};

export default SavedCandidates;
