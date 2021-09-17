function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon	": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        }
    }
}

function numPointsScored(name) {
    const object = gameObject()
    for (const gameKey in object) {
        const teamObject = object[gameKey]
        const playerObject = teamObject.players
        for (const playerKey in playerObject) {
            if (playerKey === name) {
                 return playerObject[name].points
            }
        }
    }
}

function shoeSize(name) {
    const object = gameObject()
    for (const gameKey in object) {
        const teamObject = object[gameKey]
        const playerObject = teamObject.players
        for (const playerKey in playerObject) {
            if (playerKey === name) {
                 return playerObject[name].shoe
            }
        }
    }
}

function teamColors(team) {
    const object = gameObject()
    if (object['home']['teamName'] === team) {
        return object['home']['colors']
    } else {
        return object['away']['colors']
    }
}

function teamNames() {
    const object = gameObject()
    return Object.keys(object).map(team => object[team].teamName)
}


function playerNumbers(name) {
    const object = gameObject()
    const team = Object.keys(object).find(t => object[t].teamName === name)
    const players = Object.keys(object[team].players)
    return players.map(player => object[team].players[player].number)
}

function playerStats(name) {
    const object = gameObject()
    for (const gameKey in object) {
        const teamObject = object[gameKey]
        const playerObject = teamObject.players
        for (const playerKey in playerObject) {
            if (playerKey === name) {
                 return playerObject[name]
            }
        }
    }
}

function bigShoeRebounds() {
    const object = gameObject()
    const memory = {shoe: 0}
    for (key in object) {
        for (player in object[key].players) {
            const playerStat = object[key].players[player]
            if (playerStat.shoe > memory.shoe) {
                memory.shoe = playerStat.shoe
                memory.rebounds = playerStat.rebounds
            }
        } 
    }
    return memory.rebounds
}

function mostPointsScored() {
    const object = gameObject()
    const memory = {name: undefined, points: 0}
    for (key in object) {
        for (player in object[key].players) {
            const playerStat = object[key].players[player]
            if (playerStat.points > memory.points) {
                memory.name = player
                memory.points = playerStat.points
            }
        } 
    }
    return memory.name
}