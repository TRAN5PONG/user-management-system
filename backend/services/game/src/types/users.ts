export type UserStatus = "online" | "offline" | "idle" | "doNotDisturb";
export type rank_tier = "I" | "II" | "III";
export type RankDivision =
  | "Iron"
  | "Bronze"
  | "Silver"
  | "Gold"
  | "Platinum"
  | "Diamond"
  | "Ascendant"
  | "Immortal"
  | "Master";
export interface User {
	id : string;
	firstName: string;
	lastName: string;
	username: string;
  status : UserStatus;
	lastSeen: Date;
	avatar : string;
	banner?: string;
	bio?: string;
	createdAt: Date;
	updatedAt: Date;
  preferences: UserPreferences;
	isVerified: boolean;
	walletBalance: number; // In-game currency balance
  // ranking
	level: number;
	rankDivision : RankDivision;
  rankTier: rank_tier;
	// Statistics
	playerStats: PlayerStats;
  // Character related
  playerCharacters: string[]; // Array of character IDs owned by the player
  playerSelectedCharacter: string; // Currently selected character ID
  // Paddle related
  playerPaddles: string[]; // Array of paddle IDs owned by the player
  playerSelectedPaddle: string; // Currently selected paddle ID
}
export interface UserPreferences {
	soundEnabled: boolean;
  musicEnabled: boolean;
	twoFactorEnabled: boolean;
	notifications: NotificationSettings;
}
export interface NotificationSettings {
	friendRequests: boolean;
	chatMessages: boolean;
	gameInvites: boolean;
	tournamentUpdates: boolean;
}
export interface PlayerStats {
  score: number; // Current score of the player
  rank: number; // Current rank of the player
	totalGames: number; // not here.
	matchHistory: string[]; // Array of match IDs

  // Basic statistics (1 vs 1)
  gamesPlayed: number;
  gamesWon: number;
  gamesLost: number;

  // Tournament statistics
  tournamentsPlayed: number;
  tournamentsWon: number;
  tournamentsLost: number;

  // Vs AI statistics
  vsAIStats: {
    easy: {
      gamesPlayed: number;
      gamesWon: number;
      gamesLost: number;
    };
    medium: {
      gamesPlayed: number;
      gamesWon: number;
      gamesLost: number;
    };
    hard: {
      gamesPlayed: number;
      gamesWon: number;
      gamesLost: number;
    };
  };

  // Streak statistics
  winStreak: number; // Current win streak
  loseStreak: number; // Current lose streak
  longestWinStreak: number; // Longest win streak

  // Game Performance
  averageGameDuration: number; // Average duration of a game in seconds
  totalPlayTime: number; // Total play time in seconds

  // Socials  
  friendsCount: number; // Number of friends

  // Bounce Challenge statistics
  bounceChallengeBestScore: number; 
  bounceChallengeGamesPlayed: number; 
}
const FakeStats: PlayerStats = {
  matchHistory: [],
  totalGames: 200,
  score: 0,
  rank: 1,
  gamesPlayed: 23,
  gamesWon: 19,
  gamesLost: 4,
  tournamentsPlayed: 5,
  tournamentsWon: 4,
  tournamentsLost: 1,
  winStreak: 4,
  loseStreak: 5,
  longestWinStreak: 3,
  averageGameDuration: 1004,
  bounceChallengeBestScore: 130,
  bounceChallengeGamesPlayed: 44,
  totalPlayTime: 4000,
  friendsCount: 100,
  vsAIStats: {
    easy: {
      gamesPlayed: 11,
      gamesWon: 4,
      gamesLost: 7,
    },
    medium: {
      gamesPlayed: 21,
      gamesWon: 20,
      gamesLost: 1,
    },
    hard: {
      gamesPlayed: 1,
      gamesWon: 0,
      gamesLost: 1,
    },
  },
};
const User1: User = {
  id: "0",
  username: "Zero",
  firstName: "Hassan",
  lastName: "Karrach",
  status: "offline",
  lastSeen: new Date(),
  avatar: "https://cdn.pfps.gg/pfps/1426-tom-and-jerry-icon.png",
  banner:
    "https://i.pinimg.com/originals/4f/29/f1/4f29f15479b99d852271fa23b56d0817.gif",
  bio: "Just a gamer enjoying life!",
  createdAt: new Date(),
  updatedAt: new Date(),
  rankDivision: "Master",
  rankTier: "II",
  level: 13.66,
  isVerified: true,
  walletBalance: 1500,
  playerStats: FakeStats,
  playerCharacters: ["Zero", "Taizen", "Kira"],
  playerSelectedCharacter: "Zero",
  playerPaddles: [""],
  playerSelectedPaddle: "",
  preferences: {
    musicEnabled: false,
    notifications: {
      chatMessages: false,
      friendRequests: false,
      gameInvites: false,
      tournamentUpdates: false,
    },
    soundEnabled: false,
    twoFactorEnabled: false,
  },
};
const User2: User = {
  id: "2",
  username: "Lofi",
  firstName: "Jane",
  lastName: "Smith",
  status: "idle",
  lastSeen: new Date(),
  avatar: "https://cdn3.emoji.gg/emojis/22947-jerry.png",
  banner:
    "https://i.pinimg.com/originals/85/c1/3d/85c13d1d58e409386d9212cbc4c3cc1a.gif",
  bio: "Loves strategy games!",
  createdAt: new Date(),
  updatedAt: new Date(),
  rankDivision: "Diamond",
  rankTier: "II",
  level: 2,
  isVerified: true,
  walletBalance: 3000,
  playerStats: FakeStats,
  playerCharacters: ["Lofi", "Taizen"],
  playerSelectedCharacter: "Kira",
  playerPaddles: [""],
  playerSelectedPaddle: "",
  preferences: {
    musicEnabled: false,
    notifications: {
      chatMessages: false,
      friendRequests: false,
      gameInvites: false,
      tournamentUpdates: false,
    },
    soundEnabled: false,
    twoFactorEnabled: false,
  },
};
const User3: User = {
  id: "3",
  username: "marcos",
  firstName: "Alice",
  lastName: "Johnson",
  status: "doNotDisturb",
  lastSeen: new Date(),
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKbuGFOi7hBDNztRugDv-oGsJS4w-ErNme8Jpo6ZXE6LPyf7wdcvhpEaylE8gzmpn57VA",
  banner:
    "https://i.pinimg.com/originals/d9/23/b9/d923b99ae7193de31ae54baaf69722f4.gif",
  bio: "Avid gamer and streamer.",
  createdAt: new Date(),
  updatedAt: new Date(),

  rankDivision: "Platinum",
  rankTier: "I",
  level: 13.66,

  isVerified: false,
  walletBalance: 500,
  playerStats: FakeStats,
  playerCharacters: ["marcos", "Taizen"],
  playerSelectedCharacter: "Zero",
  playerPaddles: [""],
  playerSelectedPaddle: "",
  preferences: {
    musicEnabled: false,
    notifications: {
      chatMessages: false,
      friendRequests: false,
      gameInvites: false,
      tournamentUpdates: false,
    },
    soundEnabled: false,
    twoFactorEnabled: false,
  },
};
const User4: User = {
  id: "1",
  username: "Paulo",
  firstName: "Bob",
  lastName: "Brown",
  status: "online",
  lastSeen: new Date(),
  avatar:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs6-DjFhDB9341RiZqOj6EPutmbjAHDXXLMSKtcOB3JyjdZys61iigtjkWi8ZAjwwAFmA",
  banner:
    "https://i.pinimg.com/originals/1d/cf/8e/1dcf8e9ce0dac98f447f5790e2efd4b2.gif",
  bio: "Casual gamer.",
  createdAt: new Date(),
  updatedAt: new Date(),

  rankDivision: "Iron",
  rankTier: "I",
  level: 5,

  isVerified: false,
  walletBalance: 100,
  playerStats: FakeStats,
  playerCharacters: ["Paulo", "Taizen"],
  playerSelectedCharacter: "Paulo",
  playerPaddles: [""],
  playerSelectedPaddle: "",
  preferences: {
    musicEnabled: false,
    notifications: {
      chatMessages: false,
      friendRequests: false,
      gameInvites: false,
      tournamentUpdates: false,
    },
    soundEnabled: false,
    twoFactorEnabled: false,
  },
};
export const FakeUsers: User[] = [User1, User2, User3, User4];