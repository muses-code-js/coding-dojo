var TennisGame1 = function(player1Name, player2Name) {
    this.player1Score = 0;
    this.player2Score = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === this.player1Name)
        this.player1Score += 1;
    else
        this.player2Score += 1;
};

TennisGame1.prototype.getScore = function() {
    var score = "";
    var tempScore = 0;

    var tiedScore = {
      0: "Love-All",
      1: "Fifteen-All",
      2: "Thirty-All",
      3: "Deuce"
    }
    var noTiedScore = {
      0: "Love",
      1: "Fifteen",
      2: "Thirty",
      3: "Forty"
    }
    var scoresAreTied = () => {
      return (this.player1Score === this.player2Score);
    }
    var playerHasAdvantage = () => {
      return (this.player1Score >= 4 || this.player2Score >= 4);
    }
    if (scoresAreTied()) {
        if (this.player1Score >2) {
          score = tiedScore[3];
        } else{
          score = tiedScore[this.player1Score];
        }
    } else if (playerHasAdvantage()) {
        var scoreDifference = this.player1Score - this.player2Score;
        if (scoreDifference === 1) score = "Advantage " + this.player1Name;
        else if (scoreDifference === -1) score = "Advantage " + this.player2Name;
        else if (scoreDifference >= 2) score = "Win for " + this.player1Name;
        else score = "Win for " + this.player2Name;
    } else {
      score = noTiedScore[this.player1Score] + "-" + noTiedScore[this.player2Score];
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
