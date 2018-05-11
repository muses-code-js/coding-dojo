class TennisGame1 {
    constructor(player1Name, player2Name) {
        this.m_score1 = 0;
        this.m_score2 = 0;
        this.player1Name = player1Name;
        this.player2Name = player2Name;
    }
    wonPoint(playerName) {
        if (playerName === "player1")
            this.m_score1 += 1;
        else
            this.m_score2 += 1;
    }

    getScore() {
        if (this.m_score1 === this.m_score2) {
            return this.getEqualScore();
        } 
        
        if (this.m_score1 >= 4 || this.m_score2 >= 4) {
            return this.getWinningScore();
        } 

        return this.getNormalScore();
    
    }
    getEqualScore() {
        switch (this.m_score1) {
            case 0:
                return "Love-All";
            case 1:
                return "Fifteen-All";
            case 2:
                return "Thirty-All";
            default:
                return "Deuce";
        }
    }
    getWinningScore() {
        var minusResult = this.m_score1 - this.m_score2;
        if (minusResult === 1) return "Advantage player1";
        if (minusResult === -1) return "Advantage player2";
        if (minusResult >= 2) return "Win for player1";
        return "Win for player2";
    }
    getNormalScore() {
        var score_map = ["Love", "Fifteen", "Thirty", "Forty"];
        return `${score_map[this.m_score1]}-${score_map[this.m_score2]}`
    }
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}

/*
function 1 checks if scores of players equal and 
function 2 

*/

/* function 2 finds the winner (if score > 4 and >2 from opponent)
*/

/* function 3 returns a score if game not won */
/* m.score_1 0, m.score_2 1 love-fifteen, love-forty */



