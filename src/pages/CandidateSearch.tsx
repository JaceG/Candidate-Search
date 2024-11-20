import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';

const CandidateSearch = () => {
  const [users,setUsers] = useState<Object[]>([])
  const getUsers = async () => {
    try {
      const data = await searchGithub();
      console.log('apiii',data);
      // setUsers(data);
    } catch(e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getUsers();
  },[]);
  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
