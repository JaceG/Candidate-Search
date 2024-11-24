import { User} from '../../interfaces/Candidate.interface';

interface CandidateTableProps {
  candidates: User[], 
  onRejectClicked : (u: User) => void
};
const CandidateTable  = ({ candidates, onRejectClicked }:CandidateTableProps) => {
    return(
    <table className="candidates-table">
    <tr>
        <th className="table-column table-column-company">Image</th>
        <th className="table-column table-column-company">Name</th>
        <th className="table-column table-column-company">Username</th>
        <th className="table-column table-column-company">Location</th>
        <th className="table-column table-column-company">Email</th>
        <th className="table-column table-column-company">Company</th>
        <th className="table-column table-column-bio">X</th>
        <th className="table-column table-column-bio">Website</th>
        <th className="table-column table-column-bio">Bio</th>
        <th className="table-column">Reject</th>
    </tr>
    {
      !candidates?.length  ? 
      <tr className='no-data-row'>
        <td colSpan={10}> No candidates selected.</td>
      </tr>
      : null
    }
      {candidates?.map((candidate: User) => {
        return (
          <tr>
            <td className="table-column-company">
              <img alt="avatar" className="table-image" src={candidate.avatar_url}/>
            </td>
            <td className="table-column-company">{candidate.name || "N/A"}</td>
            <td className="table-column-company">{candidate.login || "N/A"}</td>
            <td className="table-column-company">{candidate.location || "N/A"}</td>
            <td className="table-column-company">{
              candidate.email ? 
              <a href={'mailto:'+candidate.email}>{candidate.email}</a>
              : "N/A"      
              }
            </td>
            <td className="table-column-company">{candidate.company || "N/A"}</td>
            <td className="table-column-bio"> {
                  candidate.twitter_username ? 
                  <a href={`https://x.com/${candidate.twitter_username}`} target="_blank" rel="noopener noreferrer">{candidate.twitter_username}</a>
                  : " N/A"
                }
            </td>
            <td className="table-column-bio">
            {
              candidate.blog ? 
              <a href={`${candidate.blog}` } target="_blank" rel="noopener noreferrer">{candidate.blog}</a>
              : " N/A"
            }
            </td>
            <td className="table-column-bio">{candidate.bio || "N/A"}</td>
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