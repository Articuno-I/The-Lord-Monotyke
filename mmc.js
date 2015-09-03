exports.mmc = {
    isOT: true,
    isStarted: true,
    isCreated: true,
    standings:{},
    idLookup:{},
    pastTours:[],
    otTrue: function () {
        this.isOT = true;
    },
    otFalse: function () {
        this.isOT = false;
    },
    onUpdate: function (tourProgress, room) {
        if(!tourProgress.bracketData) return;
		if(!tourProgress.bracketData.rootNode) return;
		if(tourProgress.bracketData.rootNode.state === 'inprogress') this.say(room, "/wall The finals have started!");
    },
    onForceEnd: function (tourProgess, room) {
        return;
    },
    onStart: function (room) {
    	this.say(room, "/tour autodq 3.14");
    },
    onEnd: function (rawTourOutput, room) {
        var tourOutput = JSON.parse(rawTourOutput);
        this.logRawOutput(rawTourOutput, tourOutput, room);
        
        //we only care about scoring standard monotype tours
        if(tourOutput.format !== 'monotype') return;
		if(tourOutput.generator !== 'Single Elimination') return;
       
        var top4 = this.determineTop4(tourOutput, room);
        
        //congratulate the winners
        var text = 'congratulations to ' + top4[0] + ' for winning the tour. 2nd: ' + top4[1] + ' 3rd: ' + top4[2] + ' and ' + top4[3];
        console.log(text);
		if(room) this.say(room, '/wall ' + text);
		
		//update OT stuff
		if (this.isOT){
        	
        	this.addTourToGoogleSheet(top4);
        	//this.addTourResult(top4, room);
        	//this.updateIdLookup([top4[0], top4[1], top4[2], top4[3]]);
        	
        	var numPlayers = this.countPlayers(tourOutput);
        	
        	var d = new Date();
        	var newTour = {
				date: d.toUTCString(),
				playerCount: numPlayers,
				results: top4,
				isOT: this.isOT,
				format: tourOutput.format
			};
			
			var d = new Date();
			var fs = require('fs');
			fs.writeFile("./tourOutputs/" + "2015_" + d.getMonth() + "/official/"+ d.getDate() + "_" + d.getHours() + ".txt", rawTourOutput, function(err) {
			    if(err) {
			        return console.log(err);
			    }
		    console.log("The raw tour output was saved in the official folder!");
		});
			
			this.otFalse();
		}
		
    },
    countPlayers: function (tourOutput) {
    	// how many people were in the tour?
		// done by recursively digging into rootNode until a .children w/o children is found.
		var deepestArray = [tourOutput.bracketData.rootNode];
		var newDeepestArray = [];
		var teamList = [];
		var atBottom = [];
		while (true) {
		    newDeepestArray = [];
		    for (var i = 0; i < deepestArray.length; i++) {
		        if (deepestArray[i].children.length > 0) {
		            for (var j = 0; j < deepestArray[i].children.length; j++) {
		                newDeepestArray.push(deepestArray[i].children[j]);
		                atBottom.push(0);
		            }
		        } else {
		            teamList.push(deepestArray[i].team);
		            atBottom.push(1);
		        }
		    }
		    if (atBottom.indexOf(0) < 0) break;
		    deepestArray = newDeepestArray;
		    atBottom = [];
		}
		var numPlayers = teamList.length;
		console.log('there were ' + numPlayers + ' players in this tour.');
		return numPlayers;
    },
    determineTop4: function (tourOutput, room) {
    	var foo=tourOutput.bracketData.rootNode;
		var firstPlace = '';
		var secondPlace = '';
		var thirdPlace = ['', ''];
		
		if (!foo.children[1].children[1]) return; //if the tour had less than 4 people then we don't care (keeps the bot from crashing)
		
		var top4 = [foo.children[0].children[0].team, foo.children[0].children[1].team, foo.children[1].children[0].team, foo.children[1].children[1].team];
		var top2 = [foo.children[0].team, foo.children[1].team]
		var firstPlace = foo.team;
		
		// cut down top4 and top 2 arrays to only include 3rd place and 2nd place.
		var index = top2.indexOf(firstPlace);
		if (index > -1) {
		    top2.splice(index, 1);
		    secondPlace = top2[0]
		}
		index = top4.indexOf(firstPlace);
		if (index > -1) {
		    top4.splice(index, 1);
		}
		index = top4.indexOf(secondPlace);
		if (index > -1) {
		    top4.splice(index, 1);
		    thirdPlace=top4;
		}
		var orderedTop4 = [firstPlace, secondPlace, thirdPlace[0], thirdPlace[1]];
    	return orderedTop4;
    },
    logRawOutput: function (rawTourOutput, tourOutput, room) {
    	var d = new Date();
		var fs = require('fs');
		fs.writeFile("./tourOutputs/" + "2015_" + d.getMonth() + "/all/"+ d.getDate() + "_" + d.getHours() + "_" + d.getMinutes( ) + "_" + tourOutput.format + "_" + tourOutput.generator + ".txt", rawTourOutput, function(err) {
		    if(err) {
		        return console.log(err);
		    }
		    console.log("The raw tour output was saved!");
		}); 
    },
	addTourToGoogleSheet: function(top4){
		if (typeof window === 'undefined') { // Running in NodeJS
			var domino=require('domino');
			var $=require('jquery')(domino.createWindow());
			var XMLHttpRequest=require('xmlhttprequest').XMLHttpRequest;
			$.support.cors = true;
			$.ajaxSettings.xhr=function(){return new XMLHttpRequest();};
			
			var request;
			request = $.ajax({
			    url: "https://script.google.com/macros/s/AKfycbynX99TA3nQjLFcZb2RM2ieoZgeRYKIr0iVsFX74wc-pGsbNWQ/exec",
			    type: "post",
			    data: {
			    	"First Place": top4[0],//toId(top4[0]),
			    	"Second Place": top4[1],//toId(top4[1]),
			    	"Third Place1": top4[2],//toId(top4[2]),
			    	"Third Place2": top4[3],//toId(top4[3])
			    }
			});
			
			// Callback handler that will be called on success
			request.done(function (response, textStatus, jqXHR){
			    // Log a message to the console
			    // console.log("Hooray, it worked!");
			});
			
			// Callback handler that will be called on failure
			request.fail(function (jqXHR, textStatus, errorThrown){
			    // Log the error to the console
			    // console.error(
			    //     "The following error occurred: "+
			    //     textStatus, errorThrown
			    // );
			});
		}
	},
	padToLength: function (name, finalLength) {
	    var amtOfPadding = finalLength - name.length;
	    for (var i = 0; i < Math.floor(amtOfPadding / 2); i++) {
	        name = ' ' + name + ' ';
	    }
	    if (amtOfPadding % 2 === 1) {
	        name = ' ' + name;
	    }
	    return name;
	},
	say: function(room, text) {
		if (room.charAt(0) !== ',') {
			var str = (room !== 'lobby' ? room : '') + '|' + text;
		} else {
			room = room.substr(1);
			var str = '|/pm ' + room + ', ' + text;
		}
		send(str);
	},
	
}