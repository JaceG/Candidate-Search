import { User} from '../../interfaces/Candidate.interface';

interface CandidateTableProps {
  candidates: User[], 
  onRejectClicked : (u: User) => void
};
const CandidateTable  = ({ candidates, onRejectClicked }:CandidateTableProps) => {
    return(
    <table className="candidates-table">
    <tr>
        <th>Image</th>
        <th>Name</th>
        <th>Location</th>
        <th>Email</th>
        <th>Company</th>
        <th>Bio</th>
        <th>Reject</th>
    </tr>
      {candidates?.map((candidate: User) => {
        return (
          <tr>
         <td>
              <img src={candidate.avatar_url}/>
          </td>
          <td>src={candidate.name}</td>
          <td>{candidate.location}</td>
          <td><a href={'mailto:'+candidate.email}>{candidate.email}</a></td>
          <td>{candidate.company}</td>
          <td>{candidate.bio}</td>
          <td>
      <button className="btn btn-danger"
      onClick={() => onRejectClicked(candidate)}
      >
              <svg width="35px" height="35px" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="btn-svg">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
      </svg>
      </button>
      </td>
      </tr>
        )
      })}

     
    
   
        </table>
    )
}

export default CandidateTable;