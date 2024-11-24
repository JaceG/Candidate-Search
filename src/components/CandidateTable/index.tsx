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
        <th>Username</th>
        <th>Location</th>
        <th>Email</th>
        <th>Company</th>
        <th>X</th>
        <th>Website</th>
        <th>Bio</th>
        <th>Reject</th>
    </tr>
      {candidates?.map((candidate: User) => {
        return (
          <tr>
            <td>
              <img src={candidate.avatar_url}/>
            </td>
            <td>{candidate.name || "N/A"}</td>
            <td>{candidate.login || "N/A"}</td>
            <td>{candidate.location || "N/A"}</td>
            <td>{
              candidate.email ? 
              <a href={'mailto:'+candidate.email}>{candidate.email}</a>
              : "N/A"      
              }
            </td>
            <td>{candidate.company || "N/A"}</td>
            <td> {
                  candidate.twitter_username ? 
                  <a href={`https://x.com/${candidate.twitter_username}`} target="_blank" rel="noopener noreferrer">{candidate.twitter_username}</a>
                  : " N/A"
                }
            </td>
            <td>
            {
              candidate.blog ? 
              <a href={`${candidate.blog}` } target="_blank" rel="noopener noreferrer">{candidate.blog}</a>
              : " N/A"
            }
            </td>
            <td>{candidate.bio || "N/A"}</td>
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