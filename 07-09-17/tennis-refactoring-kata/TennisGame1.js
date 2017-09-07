var TennisGame1 = function(player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "player1")
        this.m_score1 += 1;
    else
        this.m_score2 += 1;
};

var getEqualScore = function(score){
    var scoreDescriptions = {
        0: "Love-All",
        1: "Fifteen-All",
        2: "Thirty-All"
    }
    score = scoreDescriptions[score] || "Deuce";
    return score;
}

var getRunningScore = function (score1, score2) {
    var runningScore = {
        0: "Love",
        1: "Fifteen",
        2: "Thirty",
        3: "Forty"
    }
    score = runningScore[score1] + "-" + runningScore[score2];
    return score;
}
TennisGame1.prototype.getScore = function() {
    var score = "";
    var equalScore = this.m_score1 === this.m_score2;
    var advantageOrWinScore = this.m_score1 >= 4 || this.m_score2 >= 4;
    var tempScore = 0;
    if (equalScore) {
        score = getEqualScore(this.m_score1);
    } else if (advantageOrWinScore) {
        var minusResult = this.m_score1 - this.m_score2;
        if (minusResult === 1) score = "Advantage player1";
        else if (minusResult === -1) score = "Advantage player2";
        else if (minusResult >= 2) score = "Win for player1";
        else score = "Win for player2";
    } else {
        score = getRunningScore(this.m_score1,this.m_score2);
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
