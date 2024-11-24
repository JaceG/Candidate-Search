import { useState, useEffect, useContext } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import { User } from "../interfaces/Candidate.interface";
import CandidateCard from "../components/CandidateCard/";
import Store from '../store';

const CandidateSearch = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const { candidates, saveCandidate } = useContext(Store);
  const [loadingError, setLoadingError] = useState<boolean>(false);

  console.log({candidates});

  const getUsers = async () => {
    try {
      const data = await searchGithub();
      if (data?.length > 0) {
        setLoadingError(false);
        const searchUsers = [];
        for (const user of data) {
          searchUsers.push(searchGithubUser(user.login));
        }
        const usersData = (await Promise.all(searchUsers)).filter((user) => user);
        if(!usersData.length) {
          getUsers();
          return;
        }
        setUsers([...users, ...usersData]);
      } else {
        setUsers([]);
        setLoadingError(true);
        console.error("No data found");
      }
    } catch (error) {
      getUsers();
      console.error("Error fetching users:", error);
    }
  };

  const handleButtonClick = async () => {
    if (currentIndex > ((users.length / 2) - 1)) {
      await getUsers();
    } 
    setCurrentIndex((prev) => {
      return prev + 1;
    });
  };

  useEffect(() => {
    getUsers();
  }, []);

  const onPlusHandler = () => {
    saveCandidate(users[currentIndex]);
    handleButtonClick();
  }

  const onMinusHandler = () => {
    handleButtonClick();
  }

  let errorMessage = "Loading users...";
  if(loadingError) {
    errorMessage = "Technical error. Please retry after some time."; 
  }
  return (
    <div className="app">
      <header className="header">
        <h1>Candidate Search</h1>
      </header>
      <main className="main-content">
        {users.length > 0 ? (
          <CandidateCard
            avatarUrl={users[currentIndex]?.avatar_url}
            name={users[currentIndex]?.name}
            username={users[currentIndex]?.login}
            location={users[currentIndex]?.location}
            email={users[currentIndex]?.email}
            company={users[currentIndex]?.company}
            twitter_username={users[currentIndex]?.twitter_username}
            blog={users[currentIndex]?.blog}
            bio={users[currentIndex]?.bio}
            onPlusClick={onPlusHandler}
            onMinusClick={onMinusHandler}
          />
        ) : (
        <p>{errorMessage}</p>
        )}
      </main>
    </div>
  );
};

export default CandidateSearch;
