const searchGithub = async () => {
  try {
    const start = Math.floor(Math.random() * 100000000) + 1;
    // console.log(import.meta.env);
    const response = await fetch(
      `https://api.github.com/users?since=${start}&per_page=10`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error("Invalid API response, check the network tab");
    }

    const shuffledData = data.sort(() => Math.random() - 0.5);
    return shuffledData;
  } catch (err) {
    console.error("Error fetching GitHub users:", err);
    return [];
  }
};


const searchGithubUser = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
      },
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error('invalid API response, check the network tab');
    }
    console.log('User data:', data);
    return data;
  } catch (err) {
    // console.log('an error occurred', err);
    return null;
  }
};

export { searchGithub, searchGithubUser };
