const axios = require("axios");

const getGithubProfile = async (username) => {

  const userResponse = await axios.get(
    `https://api.github.com/users/${username}` // Fetches user profile
  );

  const repoResponse = await axios.get(
    `https://api.github.com/users/${username}/repos?per_page=100` // Fetch user Repo's
  );

  const user = userResponse.data;
  const repos = repoResponse.data;

  let totalStars = 0;

  const languageCount = {};

  repos.forEach(repo => {

    totalStars += repo.stargazers_count;

    if (repo.language) {
      languageCount[repo.language] =
        (languageCount[repo.language] || 0) + 1;
    }
  });

  let topLanguage = "Unknown";

  if (Object.keys(languageCount).length) {

    topLanguage = Object.keys(languageCount).reduce((a, b) =>
      languageCount[a] > languageCount[b] ? a : b
    );
  }

  const accountAgeDays = Math.floor(
    (Date.now() - new Date(user.created_at))
    / (1000 * 60 * 60 * 24)
  );

  const profileScore =
    (user.followers * 2) +
    user.public_repos +
    (totalStars * 3);

  return {
    github_id: user.id,
    username: user.login,
    name: user.name,

    followers: user.followers,
    following: user.following,

    public_repos: user.public_repos,

    total_stars: totalStars,

    top_language: topLanguage,

    account_age_days: accountAgeDays,

    profile_score: profileScore,

    profile_url: user.html_url
  };
};

module.exports = {
  getGithubProfile
};