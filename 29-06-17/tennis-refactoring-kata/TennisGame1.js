var TennisGame1 = function(player1Name, player2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.player1Name = player1Name;
    this.player2Name = player2Name;
};


TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === this.player1Name)
        this.m_score1 += 1;
    else
        this.m_score2 += 1;
};

function getScoreTied(playersScores) {
    var tiedScore = {
        0:"Love-All",
        1: "Fifteen-All",
        2: "Thirty-All"
    };
    return tiedScore[playersScores] || "Deuce";
}

function getScoreNotTied(player1Score, player2Score) {
    var score = '';
    for (var i = 1; i < 3; i++) {
            if (i === 1) tempScore = player1Score;
            else {
                score += "-";
                tempScore = player2Score;
            }
            switch (tempScore) {
                case 0:
                    score += "Love";
                    break;
                case 1:
                    score += "Fifteen";
                    break;
                case 2:
                    score += "Thirty";
                    break;
                case 3:
                    score += "Forty";
                    break;
            }
        }
    return score;
}

TennisGame1.prototype.getScore = function() {
    var score = "";
    var tempScore = 0;
    var isScoreTied = this.m_score1 === this.m_score2;
    var advantageOrWin = this.m_score1 >= 4 || this.m_score2 >= 4;
    if (isScoreTied) {
            score = getScoreTied(this.m_score1);
    } else if (advantageOrWin) {
        var scoreDiff = this.m_score1 - this.m_score2;
        if (scoreDiff === 1) score = `Advantage ${this.player1Name}`;
        else if (scoreDiff === -1) score = `Advantage ${this.player2Name}`;
        else if (scoreDiff >= 2) score = `Win for ${this.player1Name}`;
        else score = `Win for ${this.player2Name}`;
    } else {
       score = getScoreNotTied(this.m_score1, this.m_score2);
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}
