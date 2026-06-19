const githubService = require("../Services/github.services.js");

const profileModel = require("../Models/profile.model.js");

exports.analyzeProfile = async (req, res) => {


  try {

    const profile = await githubService.getGithubProfile(req.params.username);

    await profileModel.saveProfile(profile);

    res.status(200).json(profile);

  } catch (error) {

    console.log("CONTROLLER");
    res.status(500).json({ message: error.message });
  }
};

exports.getProfiles = async (req, res) => {

  const profiles =
    await profileModel.getAllProfiles();

  res.json(profiles);
};

exports.getSingleProfile = async (req, res) => {

  const profile =
    await profileModel.getProfileByUsername(
      req.params.username
    );

  if (!profile) {

    return res.status(404).json({
      message: "Profile not found"
    });
  }

  res.json(profile);
};

exports.compareProfiles = async (req, res) => {

  try {

    const profile1 =
      await profileModel.getProfileByUsername(
        req.params.user1
      );

    const profile2 =
      await profileModel.getProfileByUsername(
        req.params.user2
      );

    if (!profile1 || !profile2) {

      return res.status(404).json({
        message:
          "One or both profiles not found. Analyze them first."
      });
    }

    const winner =
      profile1.profile_score >
        profile2.profile_score
        ? profile1.username
        : profile2.username;

    res.json({
      winner,

      user1: {
        username: profile1.username,
        profile_score: profile1.profile_score
      },

      user2: {
        username: profile2.username,
        profile_score: profile2.profile_score
      },

      score_difference:
        Math.abs(
          profile1.profile_score -
          profile2.profile_score
        )
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });
  }
};