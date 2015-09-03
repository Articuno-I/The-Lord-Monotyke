exports.scout = {
    checkScouters: true,
    inTour: [],
    battleIds:[],
    currentBattles:{},
    staffList: ['freeroamer', 'omegaxis14', 'scpinion', 'acast', 'anttya', 'betahousing', 'deathonwings', 'dirpz', 'dreameatergengar', 'formerhope', 'saesae', 'zinnia', 'arkenciel', 'blackschwan', 'bondie', 'clearly', 'megapikchu', 'misakamikoto'],
	staffIgnoreScoutMessages: [],
	addToIgnoreList: function(staffMember) {
	    if(this.staffIgnoreScoutMessages.indexOf(staffMember) > -1) return console.log('staff ignoring scouting messages: ' + this.staffIgnoreScoutMessages);
	    this.staffIgnoreScoutMessages.push(staffMember);
	    console.log('staff ignoring scouting messages: ' + this.staffIgnoreScoutMessages)
	},
	removeFromIgnoreList: function(staffMember) {
	    var index = this.staffIgnoreScoutMessages.indexOf(staffMember);
	    if(index > -1) this.staffIgnoreScoutMessages.splice(index, 1);
	    console.log('staff ignoring scouting messages: ' + this.staffIgnoreScoutMessages);
	},
    scoutTrue: function() {
        this.checkScouters = true;
    },
    scoutFalse: function() {
        this.checkScouters = false;
    },
    logCheckScouters: function() {
        console.log('checkScouters: ' + this.checkScouters)
    },
    createBattle: function (player1, player2, battleId) {
        if(!(this.checkScouters)) return;
        this.battleIds.push(battleId);
        this.currentBattles[battleId] = {
            p1: player1,
            p2: player2,
            teams: [[],[]],
        };
        send('|/join ' + battleId);
    },
    addPokemon: function (battleId, playerNum, pokemon) {
        if(!(this.checkScouters)) return;
        if(!this.currentBattles[battleId]) return;
        if(playerNum==='p1') this.currentBattles[battleId]['teams'][0].push(pokemon);
        if(playerNum==='p2') this.currentBattles[battleId]['teams'][1].push(pokemon);
    },
    isScouting: function (battleId, user) {
        //triggers on battle chat joins
        if(!(this.checkScouters)) return;
        if(this.inTour.indexOf(user) < 0) return;
        
        // is a player disconnects and has to rejoin the battle.
        if(this.currentBattles[battleId]["p1"] === user) return;
        if(this.currentBattles[battleId]["p2"] === user) return;
        
        console.log(user + ' scouted in ' + battleId);
        send('monotype|/modnote ' + user + ' scouted: /join ' + battleId);
        
        for(var staffMember in this.staffList) {
            if(this.staffIgnoreScoutMessages.indexOf(this.staffList[staffMember]) > -1) continue; //ignore staff that request not to be notified
            if(this.inTour.indexOf(this.staffList[staffMember]) > -1) continue; //ignore staff that are in the tour
            send('monotype|/pm ' + this.staffList[staffMember] + ', ' + user + ' scouted in play.pokemonshowdown.com/' + battleId);
            
        }
    },
    onEnd: function (){
        for(var i=0; i < this.battleIds.length; i++){
            send('|/leave ' + this.battleIds[i]);
        }
        this.inTour = [];
        this.currentBattles = {};
        this.battleIds = [];
        this.checkScouters = true;
    },
    updatePlayersInTour: function() {
        // users in tour are determined using the /tour getusers command on PS!. 
        // PS! knows exactly who is left in the tour, so this prevents any trouble with /nick and maintaining that info here on TLM. 
        // this function sends the "/tour getusers command", which is picked up by parser.js under the "raw" case.
        // this funtion triggers when a player is disqualified or a battle ends.
        // the "raw" case in parser.js calls scout.parseGetUsers (directly below), which updates this.inTour. 
        if(!(this.checkScouters)) return;
        send('monotype|/tour getusers');
    },
    parseGetUsers: function(string) {
        //string looks like: <div class="infobox"><strong>X users remain in this tournament:</strong><br />user1, user2, etc.</div>
        var index = string.indexOf('<br />');
        var idList = [];
        var userList = string.substring(index + 6, string.length - 6).split(', ');
        for (var i=0; i<userList.length; i++){
            idList[i] = toId(userList[i]);
        }
        this.inTour = idList;
    },
//     collectPlayersInTour: function (tourUpdate) {
//     	// who is in the tour?
// 		// done by recursively digging into the update object until a .children w/o children is found and collecting all the teams.
        // this gives everyone in the tour. Eliminated users must be weeded our either within this script or elsewhere.
// 		if(!tourUpdate.bracketData) return;
// 		if(!tourUpdate.bracketData.rootNode) return;
// 		var deepestArray = [tourUpdate.bracketData.rootNode];
// 		if(deepestArray.length)
// 		var newDeepestArray = [];
// 		var teamList = [];
// 		var atBottom = [];
// 		while (true) {
		    
// 		    newDeepestArray = [];
// 		    for (var i = 0; i < deepestArray.length; i++) {
// 		        if(!deepestArray[i].children) return;
// 		        if (deepestArray[i].children.length > 0) {
// 		            for (var j = 0; j < deepestArray[i].children.length; j++) {
// 		                newDeepestArray.push(deepestArray[i].children[j]);
// 		                atBottom.push(0);
// 		            }
// 		        } else {
// 		            if(!(deepestArray[i].team)) break;
// 		            teamList.push(toId(deepestArray[i].team));
// 		            atBottom.push(1);
// 		        }
// 		    }
// 		    if (atBottom.indexOf(0) < 0) break;
// 		    deepestArray = newDeepestArray;
// 		    atBottom = [];
// 		}
// 		this.inTour = teamList;
//     },
};