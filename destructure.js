let sports = {
    sport: {
        baseball: {
            ball: true,
            bat: true,
            court: false,
            teams: true,
            score: 'runs'
        }
    }
};

let {ball, teams, score} = sports.sport.baseball;

console.log(ball,teams,score);