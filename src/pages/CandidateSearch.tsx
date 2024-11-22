import { useState, useEffect, useContext } from "react";
import { searchGithub, searchGithubUser } from "../api/API";
import { User } from "../interfaces/Candidate.interface";
import CandidateCard from "../components/CandidateCard/";
import Store from '../store';
const CandidateSearch = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
 const { candidates , saveCandidate } = useContext(Store);
  // Fetch users with detailed information
  console.log({candidates});
  const getUsers = async () => {
    try {
      // Fetch a batch of users
      const data = await searchGithub();
      if (data?.length > 0) {
        // Fetch detailed user information for each user asynchronously
        const detailedUsers: User[] = [];
        for (const user of data) {
          const detailedUser = await searchGithubUser(user.login);
          if (detailedUser) {
            detailedUsers.push(detailedUser);
          }
        }
        setUsers(detailedUsers); // Update the state with detailed users
        setCurrentIndex(0); // Reset to the first user
      } else {
        console.error("No data found");
      }
    } catch (error) {
      getUsers();
      console.error("Error fetching users:", error);
    }
  };

  // Handle button clicks for both "+" and "-" buttons
  const handleButtonClick = async () => {
    // If no users are available, fetch a new batch of users
    if (users.length === 1) {
      await getUsers(); // Fetch new users
    } else {
      // Randomly select a user from the list
      const randomIndex = Math.floor(Math.random() * users.length);
      setCurrentIndex(randomIndex);
    }
  };

  // Fetch users on component load
  useEffect(() => {
    getUsers(); // Fetch initial batch of users
  }, []);

  const onPlusHandler = () => {
    saveCandidate(users[currentIndex]);
    handleButtonClick();
  }

  const onMinusHandler = () => {
    handleButtonClick();
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
          <p>Loading users...</p>
        )}
      </main>
    </div>
  );
};

export default CandidateSearch;
