CREATE DATABASE github_analyzer;

USE github_analyzer;

CREATE TABLE profiles (
    id INT AUTO_INCREMENT PRIMARY KEY,

    github_id BIGINT UNIQUE,

    username VARCHAR(255) UNIQUE,
    name VARCHAR(255),

    followers INT,
    following INT,

    public_repos INT,

    total_stars INT,

    top_language VARCHAR(100),

    account_age_days INT,

    profile_score INT,

    profile_url VARCHAR(255),

    analyzed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);