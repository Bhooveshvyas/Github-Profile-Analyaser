const db = require("../Config/db.js");

const saveProfile = async (profile) => {

    const query = `
  INSERT INTO profiles
  (
  github_id,
  username,
  name,
  followers,
  following,
  public_repos,
  total_stars,
  top_language,
  account_age_days,
  profile_score,
  profile_url
  )
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  ON DUPLICATE KEY UPDATE

  followers=VALUES(followers),
  following=VALUES(following),
  public_repos=VALUES(public_repos),
  total_stars=VALUES(total_stars),
  top_language=VALUES(top_language),
  account_age_days=VALUES(account_age_days),
  profile_score=VALUES(profile_score),
  profile_url=VALUES(profile_url);
  `;

    await db.query(query, [
        profile.github_id,
        profile.username,
        profile.name,
        profile.followers,
        profile.following,
        profile.public_repos,
        profile.total_stars,
        profile.top_language,
        profile.account_age_days,
        profile.profile_score,
        profile.profile_url
    ]);
};

const getAllProfiles = async () => {
    const [rows] = await db.query(
        "SELECT * FROM profiles ORDER BY analyzed_at DESC"
    );
    return rows;
};

const getProfileByUsername = async (username) => {
    const [rows] = await db.query(
        "SELECT * FROM profiles WHERE username=?",
        [username]
    );

    return rows[0];
};

module.exports = {
    saveProfile,
    getAllProfiles,
    getProfileByUsername
};