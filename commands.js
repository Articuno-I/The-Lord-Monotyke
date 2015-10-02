/**
 * This is the file where the bot commands are located
 *
 * @license MIT license
 */

var playerDatabase = [{"sl":"n","smogon":"f(x)","inactivity":"none","timezone":"GMT","metagames":"ORAS, BW, Monothreat, STABmons, AAA, Hidden Type","undefined":328,"psname":"fx"},{"sl":"n","smogon":"jak","inactivity":"none","timezone":"EST","metagames":"BW, Monothreat, AAA, Hidden Type","undefined":328,"psname":"Jak"},{"sl":"n","smogon":"FreeRoamer","inactivity":"none","timezone":"GMT","metagames":"Hidden Type","undefined":328,"psname":"FreeRoamer"},{"sl":"Fri Apr 03 18:23:18 GMT-04:00 2015","smogon":"Sae Sae","inactivity":"Well May is busy but doable.","timezone":"GMT-6","metagames":"ORAS, BW, Monothreat, AAA, STABmons, Hidden Type","undefined":328,"psname":"Sae"},{"sl":"Sun Apr 05 14:51:03 GMT-04:00 2015","smogon":"scpinion","inactivity":"hopefully not","timezone":"EST (GMT -5)","metagames":"ORAS, BW, Monothreat, AAA, STABmons, Hidden Type","psname":"scpinion"},{"sl":"Sun Apr 05 15:11:06 GMT-04:00 2015","smogon":"balto","inactivity":"i\u0027ll be out a few times each weekend but other than that no long spanning inactivity.","timezone":"US central","metagames":"ORAS, BW, Monothreat","psname":"balto"},{"sl":"Sun Apr 05 15:11:20 GMT-04:00 2015","smogon":"Dream Eater Gengar","inactivity":"No inactivity","timezone":"gmt+2","metagames":"ORAS, STABmons","psname":"Dream Eater Gengar "},{"sl":"Sun Apr 05 15:12:52 GMT-04:00 2015","smogon":"xbooty","inactivity":"No","timezone":"est","metagames":"ORAS, BW, Monothreat","psname":"booty deluxe"},{"sl":"Sun Apr 05 15:13:39 GMT-04:00 2015","smogon":"Bondie","inactivity":"No inactivity","timezone":"GMT","metagames":"ORAS, BW, HIdden Type","psname":"Bondie"},{"sl":"Sun Apr 05 15:13:44 GMT-04:00 2015","smogon":"Franky391","inactivity":"No","timezone":"GMT","metagames":"ORAS, BW Monothreat, AAA STABmons, Hidden Type","psname":"Franky391"},{"sl":"Sun Apr 05 15:14:53 GMT-04:00 2015","smogon":"OmniaX","inactivity":"No.","timezone":"GMT +2","metagames":"ORAS, BW, AAA, STABmons","psname":"OmniaX"},{"sl":"Sun Apr 05 15:15:32 GMT-04:00 2015","smogon":"Cido","inactivity":"I will not have the abilities to come online at April 17-19.","timezone":"+2 GMT","metagames":"ORAS, BW, Monothreat","psname":"Singlex"},{"sl":"Sun Apr 05 15:17:34 GMT-04:00 2015","smogon":"n64lord","inactivity":"I\u0027m unavailable from 8-12 AM and 5-7 PM on weekdays.","timezone":"GMT-5","metagames":"ORAS, BW, AAA, Hidden Type","psname":"n64lord"},{"sl":"Sun Apr 05 15:18:11 GMT-04:00 2015","smogon":"MetaPhysical","inactivity":"Nope","timezone":"PST","metagames":"ORAS, BW, STABmons","psname":"MetaPhysical"},{"sl":"Sun Apr 05 15:21:32 GMT-04:00 2015","smogon":"Bushtush","inactivity":"No","timezone":"3pm-8pm EST","metagames":"ORAS, Monothreat","psname":"Bushtush"},{"sl":"Sun Apr 05 15:21:35 GMT-04:00 2015","smogon":"laxuy","inactivity":"no, IM SICK AF MEME PLAYER PUT ME IN COACH I THINK I NEED SOME GAMETIMEE","timezone":"PST","metagames":"ORAS, Monothreat, AAA, STABmons","undefined":"no, IM SICK AF MEME PLAYER PUT ME IN COACH I THINK I NEED SOME GAMETIMEE","psname":"laxuy"},{"sl":"Sun Apr 05 15:22:06 GMT-04:00 2015","smogon":"RedsCharizard","inactivity":"It is likely that I will be able to play throughout the entire league.","timezone":"GMT + 1","metagames":"ORAS, BW","psname":"Red\u0027s Charizard"},{"sl":"Sun Apr 05 15:22:24 GMT-04:00 2015","smogon":"Zulkaz","inactivity":"none expect on saturdays from 1:00 pm 4:00 pm central time\n","timezone":"Central USA","metagames":"ORAS, BW, Monothreat","psname":"AM Vid"},{"sl":"Sun Apr 05 15:27:48 GMT-04:00 2015","smogon":"Ordinary Oak","inactivity":"Gone from 6:00am-3:30pm due to high school.","timezone":"EST","metagames":"ORAS","psname":"Ordinary Oak"},{"sl":"Sun Apr 05 15:30:02 GMT-04:00 2015","smogon":"Xylen","inactivity":"Weird sleep schedule.","timezone":"GMT +8","metagames":"ORAS","psname":"Xylen"},{"sl":"Sun Apr 05 15:30:38 GMT-04:00 2015","smogon":"Croven","inactivity":"Weekdays I might be a bit inactive, anything else will come up as the day comes, my parents are really spontaneous with their plans *-* I should be open most weekends tho","timezone":"EST","metagames":"ORAS, Monothreat, AAA","psname":"Croven"},{"sl":"Sun Apr 05 15:32:44 GMT-04:00 2015","smogon":"Azelea","inactivity":"Nah, i can manage. #BestAAAPlayerHere","timezone":"EEST ","metagames":"ORAS, BW, AAA","psname":"xAzelea"},{"sl":"Sun Apr 05 15:34:44 GMT-04:00 2015","smogon":"Magnus42","inactivity":"No","timezone":"GMT -4 (EST)","metagames":"ORAS","psname":"Focus Blast Misses"},{"sl":"Sun Apr 05 15:35:05 GMT-04:00 2015","smogon":"ForgottenOnes","inactivity":"no inactivity","timezone":"PST","metagames":"ORAS, BW, Monothreat, Hidden Type","psname":"ForgottenOnes"},{"sl":"Sun Apr 05 15:41:09 GMT-04:00 2015","smogon":"Pk-Kaiser","inactivity":"No inactivity","timezone":"Est","metagames":"ORAS, BW, Monothreat","psname":"Pk-Kaiser"},{"sl":"Sun Apr 05 15:43:49 GMT-04:00 2015","smogon":"Cataquack64 ","inactivity":"Can play except on 8:00 am - 4:00pm on Monday-Friday","timezone":"EST","metagames":"ORAS, AAA, Hidden Type","psname":"Whirl the Pede "},{"sl":"Sun Apr 05 15:45:43 GMT-04:00 2015","smogon":"Clearly","inactivity":"No Inactivity","timezone":"Eastern Time Zone, New York","metagames":"ORAS, Monothreat, AAA, STABmons, Hidden Type","psname":"Clearly"},{"sl":"Sun Apr 05 15:46:03 GMT-04:00 2015","smogon":"Azian","inactivity":"Not usually on until after 12 pm my time","timezone":"Pacific Coast Time","metagames":"ORAS, BW, Monothreat","psname":"Azian"},{"sl":"Sun Apr 05 15:46:34 GMT-04:00 2015","smogon":"JayDub","inactivity":"Not as far as I know at this time, however if something does come up my manager will be notified.","timezone":"PST","metagames":"ORAS, BW, Monothreat, STABmons","psname":"JayDubb"},{"sl":"Sun Apr 05 15:47:09 GMT-04:00 2015","smogon":"Dirpz","inactivity":"Not to my knowledge","timezone":"Est","metagames":"ORAS, AAA, STABmons","psname":"Dirpz"},{"sl":"Sun Apr 05 16:00:10 GMT-04:00 2015","smogon":"SparksBlade","inactivity":"No inactivity","timezone":"+5.30","metagames":"ORAS, BW","psname":"SparksBlade"},{"sl":"Sun Apr 05 16:02:37 GMT-04:00 2015","smogon":"Crystal Marth","inactivity":"I will not be inactive for any of the events","timezone":"Central ","metagames":"ORAS, BW, Monothreat","psname":"Crystal Marth"},{"sl":"Sun Apr 05 16:03:10 GMT-04:00 2015","smogon":"Mono Is Gay","inactivity":"nah","timezone":"CST","metagames":"ORAS, BW","psname":"Mono Is Gay"},{"sl":"Sun Apr 05 16:04:44 GMT-04:00 2015","smogon":"all falls down","inactivity":"no","timezone":"gmt-6","metagames":"ORAS, Monothreat, STABmons","psname":"all falls down"},{"sl":"Sun Apr 05 16:05:09 GMT-04:00 2015","smogon":"AM Zer0","inactivity":"Unavailable Mondays and (likely) Wednesdays, unless I die the other days should be fine. High School is also a bitch.","timezone":"PST in summer, MST in Winter","metagames":"ORAS, BW, Monothreat","psname":"AM E4 Zer0"},{"sl":"Sun Apr 05 16:11:40 GMT-04:00 2015","smogon":"1 True Lycan","inactivity":"Thursday and Saturday Afternoons","timezone":"GMT","metagames":"ORAS, Monothreat, AAA","psname":"1 True Lycan"},{"sl":"Sun Apr 05 16:14:55 GMT-04:00 2015","smogon":"Tylacto","inactivity":"Not that I know of.","timezone":"GMT","metagames":"ORAS, AAA","psname":"Tylacto"},{"sl":"Sun Apr 05 16:15:34 GMT-04:00 2015","smogon":"Zarif","inactivity":"No","timezone":"GMT +6","metagames":"ORAS, BW, Monothreat, STABmons","psname":"Zarif"},{"sl":"Sun Apr 05 16:15:49 GMT-04:00 2015","smogon":"syb3rthegod","inactivity":"Nope #nolife One of the top bug players around pick me plz ;-;","timezone":"EST (GSM -5)","metagames":"ORAS, BW, Monothreat","psname":"Void SYB3R"},{"sl":"Sun Apr 05 16:18:39 GMT-04:00 2015","smogon":"iGlack","inactivity":"Some days I\u0027ll be unable to make it because of exams, certain that I\u0027ll be able to complete all my battles.\n","timezone":"GMT 0+","metagames":"ORAS, Monothreat, STABmons","psname":"iGlacky "},{"sl":"Sun Apr 05 16:25:08 GMT-04:00 2015","smogon":"Vlahdimir Lenin","inactivity":"No Inactivity as of now","timezone":"EST","metagames":"ORAS, BW, Monothreat, AAA, STABmons","psname":"Vlahdimir Lenin"},{"sl":"Sun Apr 05 16:36:46 GMT-04:00 2015","smogon":"Great Ape Gohan","inactivity":"Not much vacation other than Uni for 2-3 hours Tues, Wed and Thurs","timezone":"GMT","metagames":"ORAS, BW, Monothreat, AAA, STABmons, Hidden Type","psname":"Great Ape Gohan"},{"sl":"Sun Apr 05 16:51:45 GMT-04:00 2015","smogon":"jiggle","inactivity":"Vaca (May 13-14), Mon-Fri 8:00-3:30, The week of April 13 6:00 pm-8:30 pm, April 20-23 5-9 pm, not available April 24, April 25 5-9 pm, April 29 3-6:30 pm, not available April 30 and May 1, May 2 5-9 pm, Good after that :D, sorry for that long thing","timezone":"EST","metagames":"ORAS, BW, Monothreat, AAA","psname":"jiggle"},{"sl":"Sun Apr 05 17:16:29 GMT-04:00 2015","smogon":"Suspensse","inactivity":"Nope :]]]","timezone":"EST","metagames":"ORAS, AAA","psname":"Suspense"},{"sl":"Sun Apr 05 18:10:31 GMT-04:00 2015","smogon":"Ashaury","inactivity":"No ;]","timezone":"EST (GMT -5)","metagames":"ORAS, BW, Monothreat","psname":"Ashaury"},{"sl":"Sun Apr 05 18:35:44 GMT-04:00 2015","smogon":"Cell","inactivity":"No inactivity","timezone":"EST","metagames":"ORAS","psname":"MyWiiUBroke"},{"sl":"Sun Apr 05 19:00:05 GMT-04:00 2015","smogon":"Lucina09","inactivity":"No inactivity.","timezone":"EST","metagames":"ORAS, AAA, STABmons","psname":"Lucina09"},{"sl":"Sun Apr 05 19:13:11 GMT-04:00 2015","smogon":"Hingo","inactivity":"no","timezone":"CST","metagames":"ORAS, BW, Monothreat","psname":"Hingo"},{"sl":"Sun Apr 05 20:25:47 GMT-04:00 2015","smogon":"Anttya","inactivity":"No inactivity (hopefully)","timezone":"EST HYPE","metagames":"ORAS, BW, Monothreat, AAA, STABmons, Hidden Type","psname":"Anttya"},{"sl":"Sun Apr 05 21:00:55 GMT-04:00 2015","smogon":"Blade64","inactivity":"I will not be able to participate on Wednesdays. I may not be able to participate on certain weekends, but I am not aware of which ones. Other than that I don\u0027t think anything else should cause me to be inactive. (As far as I know).","timezone":"EST","metagames":"ORAS, BW, AAA","psname":"Blade64"},{"sl":"Sun Apr 05 21:09:57 GMT-04:00 2015","smogon":"Ninety Nine","inactivity":"none","timezone":"GMT+0","metagames":"ORAS, Monothreat, AAA","psname":"Ninety Nine"},{"sl":"Sun Apr 05 21:10:07 GMT-04:00 2015","smogon":"The Great Unknown","inactivity":"Most likely not.","timezone":"CST","metagames":"ORAS, BW","psname":"The Great Unknown"},{"sl":"Sun Apr 05 21:19:24 GMT-04:00 2015","smogon":"The TurtleLord","inactivity":"no inactivity","timezone":"gmt +10","metagames":"ORAS","psname":"The TurtleLord"},{"sl":"Sun Apr 05 21:42:13 GMT-04:00 2015","smogon":"Crestfall","inactivity":"I generally only come on during late nights. Am active on IRC and showdown + skype! No inactivity! ","timezone":"EST (GMT -4 iirc)","metagames":"BW, Monothreat","psname":"Crestfall"},{"sl":"Sun Apr 05 21:56:11 GMT-04:00 2015","smogon":"ZeroChaosLegacy","inactivity":"Vacation (May 29-31st) and possibly unavailable on Saturdays/Sundays","timezone":"EST (GMT -5)","metagames":"ORAS, BW, Monothreat, AAA","psname":"Ishtaria"},{"sl":"Sun Apr 05 22:00:27 GMT-04:00 2015","smogon":"Mega Pikachu","inactivity":"Most likely not","timezone":"+5:30 Gmt","metagames":"ORAS, Monothreat, AAA, STABmons","psname":"Mega Pika"},{"sl":"Sun Apr 05 23:08:00 GMT-04:00 2015","smogon":"Temperarious","inactivity":"May 13-20th","timezone":"Easter Caribbean ","metagames":"ORAS, Monothreat, AAA","psname":"DylaTheRed"},{"sl":"Sun Apr 05 23:08:17 GMT-04:00 2015","smogon":"CapnSlinky","inactivity":"No inactivity","timezone":"EDT","metagames":"ORAS, Monothreat, AAA, STABmons, Hidden Type","psname":"Spectre Knight"},{"sl":"Sun Apr 05 23:08:21 GMT-04:00 2015","smogon":"Death God Anubis","inactivity":"Have school, can\u0027t play during that obviously. Also have track and occasional practices, will inform ahead of time if drafted.","timezone":"GMT + 5","metagames":"ORAS, Monothreat","psname":"Death God Anubis"},{"sl":"Sun Apr 05 23:56:51 GMT-04:00 2015","smogon":"Arifeen","inactivity":"No I won\u0027t be.","timezone":"GMT +6","metagames":"ORAS, BW, AAA, STABmons","psname":"Arifeen"},{"sl":"Mon Apr 06 01:04:04 GMT-04:00 2015","smogon":"Cnorth26","inactivity":"Not that i know of","timezone":"Gmt-5","metagames":"ORAS, BW","psname":"Cnorth26"},{"sl":"Mon Apr 06 02:36:19 GMT-04:00 2015","smogon":"shartruce2","inactivity":"no inactivity","timezone":"gmt -8","metagames":"ORAS, BW","psname":"shartruce2"},{"sl":"Mon Apr 06 03:39:16 GMT-04:00 2015","smogon":"QuoteCS","inactivity":"No inactivity","timezone":"AST/ADT -3","metagames":"ORAS, BW, Monothreat, AAA, STABmons, Hidden Type","psname":"QuoteCS"},{"sl":"Mon Apr 06 03:54:37 GMT-04:00 2015","smogon":"Lasagne","inactivity":"na","timezone":"GMT+12","metagames":"Monothreat","psname":"Lasagne"},{"sl":"Mon Apr 06 04:19:29 GMT-04:00 2015","smogon":"galbia","inactivity":"Some of may I guess","timezone":"+2","metagames":"ORAS, BW, Monothreat, AAA, STABmons, Hidden Type","psname":"galbia"},{"sl":"Mon Apr 06 05:11:28 GMT-04:00 2015","smogon":"ucn","inactivity":"cant play mostly on weekdays, if important, i\u0027ll try to play on weekdays","timezone":"BST","metagames":"ORAS","psname":"ucn"},{"sl":"Mon Apr 06 05:25:33 GMT-04:00 2015","smogon":"TUO","inactivity":"It will get harder to play if it lasts past June, since thats when my school starts","timezone":"GMT+8","metagames":"ORAS, BW, Hidden Type","psname":"TUO"},{"sl":"Mon Apr 06 09:07:52 GMT-04:00 2015","smogon":"Xertz","inactivity":"I can only play on weekends :C","timezone":"AEST","metagames":"Monothreat","psname":"Xertz"},{"sl":"Mon Apr 06 09:51:37 GMT-04:00 2015","smogon":"pokemon are very cool","inactivity":"weekdays till 4 pm","timezone":"eastern","metagames":"Hidden Type","psname":"pokemonfansuper"},{"sl":"Mon Apr 06 10:05:42 GMT-04:00 2015","smogon":"Almost God","inactivity":"I am unable to play on Mondays and Tuesdays due to Extra-Curricular activities. ","timezone":"Adelaide","metagames":"Monothreat, AAA","psname":"Almost God"},{"sl":"Mon Apr 06 10:11:03 GMT-04:00 2015","smogon":"DISTROBRO","inactivity":"Maybe","timezone":"UTC+1","metagames":"ORAS, BW, Monothreat","psname":"DISTROBRO"},{"sl":"Mon Apr 06 11:00:27 GMT-04:00 2015","smogon":"Ultimate Sandman","inactivity":"No inactivity ","timezone":"BDT ","metagames":"Monothreat","psname":"sandman619"},{"sl":"Mon Apr 06 13:38:02 GMT-04:00 2015","smogon":"Articuno I","inactivity":"(hopefully) no. (/me glares down exam season and pretends it doesn\u0027t exist at the same time)","timezone":"GMT","metagames":"ORAS, BW, Monothreat, AAA","psname":"Death on Wings"},{"sl":"Mon Apr 06 15:17:48 GMT-04:00 2015","smogon":"Omega-Xis14","inactivity":"Pretty much any day of the week except for Tuesdays.","timezone":"GMT -7","metagames":"ORAS, BW, STABmons","psname":"Omega-Xis14"},{"sl":"Mon Apr 06 15:32:20 GMT-04:00 2015","smogon":"Irraquated","inactivity":"Hopefully not","timezone":"GMT +10","metagames":"ORAS, AAA, STABmons","psname":"Irraquated"},{"sl":"Mon Apr 06 16:09:46 GMT-04:00 2015","smogon":"Illusio","inactivity":"Probably not","timezone":"GMT -4","metagames":"AAA, STABmons, Hidden Type","psname":"Illusio"},{"sl":"Mon Apr 06 18:06:24 GMT-04:00 2015","smogon":"ArVaDa-","inactivity":"No inactivity in the foreseeable  future.","timezone":"EST","metagames":"ORAS","psname":"ArVaDa-"},{"sl":"Mon Apr 06 18:12:08 GMT-04:00 2015","smogon":"Chleg","inactivity":"No inactivity","timezone":"GMT +1","metagames":"ORAS, Monothreat, Hidden Type","psname":"Alts. Chleg"},{"sl":"Mon Apr 06 19:36:21 GMT-04:00 2015","smogon":"Ranger helmut","inactivity":"No ","timezone":"Cdt","metagames":"ORAS, BW, Monothreat, AAA, STABmons, Hidden Type","psname":"Ranger mike"},{"sl":"Mon Apr 06 20:16:02 GMT-04:00 2015","smogon":"RZL2000","inactivity":"I can\u0027t play every other weekend. This weekend coming up I can\u0027t play but the one after I can. Other than that I will have no inactivity.","timezone":"GMT -5","metagames":"ORAS","psname":"RZL"},{"sl":"Mon Apr 06 20:25:56 GMT-04:00 2015","smogon":"Kyosuru Jets","inactivity":"awkward i have school from 7AM-3PM EST, and uh well i think thats it.","timezone":"EST","metagames":"ORAS, BW","psname":"AM Jets"},{"sl":"Mon Apr 06 21:22:03 GMT-04:00 2015","smogon":"Acast","inactivity":"Weekdays I am usually unavailable, but any night of the week is fine.","timezone":"GMT -5","metagames":"ORAS, Monothreat","psname":"Acast"},{"sl":"Mon Apr 06 22:46:16 GMT-04:00 2015","smogon":"Animus Majulous","inactivity":"lol May 15-18th as in the example. Other than that I should be fine unless some kind of personal problem arises.","timezone":"central standard","metagames":"ORAS, BW, Monothreat, Hidden Type","psname":"Animus Majulous"},{"sl":"Tue Apr 07 03:11:15 GMT-04:00 2015","smogon":"Zewwok","inactivity":"Nada. ","timezone":"GMT +10","metagames":"ORAS, BW, Monothreat, AAA, STABmons","psname":"Zewwok"},{"sl":"Tue Apr 07 05:27:48 GMT-04:00 2015","smogon":"unfixable","inactivity":"no ","timezone":-7,"metagames":"AAA, STABmons, Hidden Type","psname":"unfixable"},{"sl":"Tue Apr 07 11:50:48 GMT-04:00 2015","smogon":"FlamingArcanine","inactivity":"I will be here","timezone":"Eastern","metagames":"ORAS, Monothreat","psname":"Not Soulace"},{"sl":"Tue Apr 07 11:57:27 GMT-04:00 2015","smogon":"floe","inactivity":"free most Friday nights and weekends","timezone":"PST","metagames":"ORAS, BW, Monothreat, AAA, STABmons, Hidden Type","psname":"aquas0und"},{"sl":"Tue Apr 07 17:32:32 GMT-04:00 2015","smogon":"Rumor","inactivity":"FUCKING NEVER I LIVE ON PS","timezone":"MTN GMT -6","metagames":"ORAS, BW, Monothreat, AAA","psname":"Cashier"},{"sl":"Tue Apr 07 18:34:33 GMT-04:00 2015","smogon":"Pocketkandy","inactivity":"Not perfectly sure, might be unable to play around the 20th","timezone":"UTC +02:00","metagames":"BW","psname":"NotPocketkandy"},{"sl":"Tue Apr 07 20:06:32 GMT-04:00 2015","smogon":"Mega Ridley","inactivity":"Most weekends I\u0027ll be inactive during the day, but I should be on at night. I should be online most every night during the week.","timezone":"Central USA","metagames":"ORAS","psname":"Mega Ridley"},{"sl":"Tue Apr 07 21:09:27 GMT-04:00 2015","smogon":"Barida","inactivity":"No ","timezone":"Eastern ","metagames":"ORAS, BW","psname":"Barida"},{"sl":"Wed Apr 08 11:51:30 GMT-04:00 2015","smogon":"paleo","inactivity":"None","timezone":"gmt-5","metagames":"ORAS, BW, Monothreat, AAA","psname":"machmush47/paleo"},{"sl":"Wed Apr 08 12:01:55 GMT-04:00 2015","smogon":"Void Daemon","inactivity":"To my knowledge, I will not be absent for any portion","timezone":"Eastern Standard","metagames":"ORAS, BW, Monothreat","psname":"Void Daemon"},{"sl":"Wed Apr 08 17:38:23 GMT-04:00 2015","smogon":"SirSkit","inactivity":"Other than school, I shouldn\u0027t be overly inactive for MPL","timezone":"CST (-6)","metagames":"ORAS, BW, Monothreat, STABmons","psname":"SirSkit"},{"sl":"Thu Apr 09 03:28:29 GMT-04:00 2015","smogon":"collaterals","inactivity":"Most likely not but i could be memeing :/","timezone":"EST","metagames":"ORAS, BW, Monothreat","psname":"xNoel, Treasure, Concealed"},{"sl":"Thu Apr 09 09:27:09 GMT-04:00 2015","smogon":"Wisteria Masters","inactivity":"Not that I know of at the moment.","timezone":"Eastern Standered","metagames":"ORAS, BW","psname":"Wisteria Masters"},{"sl":"Thu Apr 09 09:31:51 GMT-04:00 2015","smogon":"Dual","inactivity":"I have school from 7 AM to 3:30 PM. I might be gone from like 7-9 PM one or two days on the weekend for swimming. but other then that, I\u0027m free.","timezone":"UTC -6","metagames":"ORAS, BW","psname":"SleepingIn"},{"sl":"Thu Apr 09 09:33:16 GMT-04:00 2015","smogon":"Alliance - Rich","inactivity":"will be inactive on sundays (got classes)","timezone":"+5:30 gmt","metagames":"ORAS","psname":"Alliance - Rich"},{"sl":"Thu Apr 09 11:48:36 GMT-04:00 2015","smogon":"Kammi","inactivity":"For the foreseeable future, no. Depends on how long this may last, but I won\u0027t be out for more than a random day or two.","timezone":"EST (GMT -5)","metagames":"ORAS, BW, Monothreat","psname":"Kammi"},{"sl":"Thu Apr 09 19:48:33 GMT-04:00 2015","smogon":"unklewiggles","inactivity":"no","timezone":"EST","metagames":"ORAS, Monothreat","psname":"unklewiggles"},{"sl":"Thu Apr 09 22:19:07 GMT-04:00 2015","smogon":"InsanityZenith","inactivity":"Most active on weekends. Varying activity during weekdays.","timezone":"EST","metagames":"ORAS, Monothreat, AAA","psname":"iZenith"},{"sl":"Thu Apr 09 22:19:59 GMT-04:00 2015","smogon":"Slurmz","inactivity":"no inactivity :O","timezone":"est","metagames":"ORAS, Monothreat, AAA","psname":"Slurmz"},{"sl":"Thu Apr 09 22:21:11 GMT-04:00 2015","smogon":"Dr Ciel","inactivity":"Outside of School, none.","timezone":"EST","metagames":"ORAS, Monothreat","psname":"Doctor Ciel"},{"sl":"Thu Apr 09 22:21:19 GMT-04:00 2015","smogon":"Quaseem","inactivity":"I can be online from 3-11 pm on school days and on at any time of the day on weekends (most of the time)","timezone":"Easter Standard Time","metagames":"ORAS, BW, AAA, STABmons","psname":"Quaseem"},{"sl":"Thu Apr 09 22:23:45 GMT-04:00 2015","smogon":"A$AP Groudon","inactivity":"Irregular workdays, usually from 7am to as late as 6pm. ","timezone":"Central ","metagames":"ORAS, AAA, STABmons","psname":"ASAP Groudon "},{"sl":"Thu Apr 09 22:47:45 GMT-04:00 2015","smogon":"Crashy","inactivity":"I\u0027m available everyday :] ","timezone":"CST","metagames":"ORAS","psname":"Crashy"},{"sl":"Thu Apr 09 23:04:09 GMT-04:00 2015","smogon":"Demist","inactivity":"I should be pretty much active all the time, would notify beforehand if anything comes up. ","timezone":"GMT+3","metagames":"BW","psname":"Demist"},{"sl":"Fri Apr 10 00:37:04 GMT-04:00 2015","smogon":"Cuzzie","inactivity":"Nope","timezone":"Pacific","metagames":"ORAS, AAA","psname":"Cuzzie"},{"sl":"Fri Apr 10 00:46:40 GMT-04:00 2015","smogon":"Aslan07","inactivity":"I\u0027ll be mainly active through the hours of 4pm-9pm AEST","timezone":"GMT +10","metagames":"ORAS, BW","psname":"Aslan7"},{"sl":"Fri Apr 10 00:56:12 GMT-04:00 2015","smogon":"Blader96","inactivity":"only on weekends","timezone":"GMT +8","metagames":"ORAS","psname":"Blader96"},{"sl":"Fri Apr 10 00:57:11 GMT-04:00 2015","smogon":"Trade","inactivity":"I\u0027m free all April to May. No Inactivities unless it extends to June, in which mid-month I\u0027ll be a little bit busy.","timezone":"GMT +8","metagames":"ORAS, AAA, STABmons, Hidden Type","psname":"Trade"},{"sl":"Fri Apr 10 01:13:19 GMT-04:00 2015","smogon":"art vandelay","inactivity":"2nd week of July","timezone":"GMT-8","metagames":"ORAS, Monothreat","psname":"alexis breeze"},{"sl":"Fri Apr 10 01:13:49 GMT-04:00 2015","smogon":"Rhythms","inactivity":"no","timezone":"GMT -7","metagames":"ORAS, Monothreat, STABmons","psname":"Rhythms"},{"sl":"Fri Apr 10 01:16:25 GMT-04:00 2015","smogon":"Dusk raimon","inactivity":"Active","timezone":"English one","metagames":"ORAS, BW, Monothreat, AAA, STABmons, Hidden Type","psname":"raimon"},{"sl":"Fri Apr 10 01:47:30 GMT-04:00 2015","smogon":"MalamarEX","inactivity":"no inactivity","timezone":"India","metagames":"ORAS","psname":"HydraTalonflame"},{"sl":"Fri Apr 10 01:51:43 GMT-04:00 2015","smogon":"Brandon Wellner","inactivity":"No chance. :)","timezone":"EST","metagames":"ORAS, BW, Monothreat, AAA, STABmons, Hidden Type","psname":"BluntsideKensei"},{"sl":"Fri Apr 10 02:04:03 GMT-04:00 2015","smogon":"Shikiyo","inactivity":"Um I can play around 1pm pacific(and later)on Saturdays. And I can around the same time but to be safe around 3pm pacific.. If there is a possibly early game I can make I will let you no anytime.","timezone":"Pacific","metagames":"ORAS, Monothreat","psname":"O.G Dell"},{"sl":"Fri Apr 10 02:06:02 GMT-04:00 2015","smogon":"Mentalist Swag","inactivity":"No Inactivity.","timezone":"GMT +6","metagames":"ORAS, Monothreat","psname":"Mentalist Swag"},{"sl":"Fri Apr 10 02:14:35 GMT-04:00 2015","smogon":"Charilax Blastler","inactivity":"No","timezone":"+5:30","metagames":"ORAS","psname":"Tushar Cool"},{"sl":"Fri Apr 10 02:43:21 GMT-04:00 2015","smogon":"Derps United","inactivity":"None","timezone":"(UTC-05:00) Eastern Time (US \u0026 Canada)","metagames":"ORAS, Hidden Type","psname":"Derps United"},{"sl":"Fri Apr 10 02:47:31 GMT-04:00 2015","smogon":"TheSoulDefender","inactivity":"Vacation (May 18- 22)","timezone":"GMT +5:30","metagames":"ORAS, Monothreat, AAA, STABmons, Hidden Type","psname":"TheSoulDefender"},{"sl":"Fri Apr 10 02:54:03 GMT-04:00 2015","smogon":"I like donkeys","inactivity":"No major inactivitys, but things like sleep, meals, chilling with friends etc ","timezone":"+8","metagames":"ORAS","psname":"I like donkeys"},{"sl":"Fri Apr 10 02:54:48 GMT-04:00 2015","smogon":"Fire Lord Mako","inactivity":"No major inactivity but stuff comes up. Also my timezone could change cause travelling.","timezone":"UTC +2","metagames":"ORAS","psname":"Fire Lord Mako"},{"sl":"Fri Apr 10 03:09:20 GMT-04:00 2015","smogon":"thecreyman","inactivity":"More inactivity in labours day except friday but i can make an exception and play one match\n\nAnd mornings are more dificultades yo me than afternoon and sundays","timezone":"gmt +1","metagames":"ORAS, AAA, STABmons, Hidden Type","psname":"creyman"},{"sl":"Fri Apr 10 03:15:33 GMT-04:00 2015","smogon":"oosuplex8oo","inactivity":"No","timezone":"Mtn","metagames":"ORAS","psname":"oosuplex8oo"},{"sl":"Fri Apr 10 03:53:43 GMT-04:00 2015","smogon":"Stinson","inactivity":"Only the odd day due to exams which shouldn\u0027t affect sorting out games as I\u0027ll be finishing school for the year in the next few weeks.","timezone":"+0","metagames":"ORAS, BW","psname":"Stinsonn"},{"sl":"Fri Apr 10 03:54:12 GMT-04:00 2015","smogon":"Keta","inactivity":"Maybe, Because i\u0027m currently re watching my favorite anime boku no pico.\nAnime \u003e Showdown shoutout to shep\u003c3","timezone":"EST","metagames":"BW, Monothreat, AAA, STABmons, Hidden Type","psname":"Pack"},{"sl":"Fri Apr 10 04:08:06 GMT-04:00 2015","smogon":"Anty","inactivity":"possibly in may","timezone":"GMT+1","metagames":"ORAS, BW, Monothreat","psname":"Anty"},{"sl":"Fri Apr 10 04:28:06 GMT-04:00 2015","smogon":"PrankMaster","inactivity":"4pm-9pm weekdays not free possibly Saturdays as well, before and after free","timezone":"Eastern (GMT-5)","metagames":"ORAS, BW, Monothreat, STABmons","psname":"PrankMaster"},{"sl":"Fri Apr 10 04:36:11 GMT-04:00 2015","smogon":"harsh","inactivity":"no\n","timezone":"UTC+05:30","metagames":"ORAS, AAA","psname":"dracozard8750"},{"sl":"Fri Apr 10 04:41:44 GMT-04:00 2015","smogon":"tereli2000","inactivity":"most of the time i would be offline if not given prior details of my next match","timezone":"UTC+05:30","metagames":"ORAS, STABmons","psname":"tereli"},{"sl":"Fri Apr 10 05:03:54 GMT-04:00 2015","smogon":"sparktrain","inactivity":"I have no life; inactivity will not be an issue.","timezone":"GMT-4","metagames":"AAA","psname":"sparktrain"},{"sl":"Fri Apr 10 05:18:42 GMT-04:00 2015","smogon":"Bionic Puppy","inactivity":"the 18th I may struggle with if it is before four but apart from that, I\u0027m on whenever you\u0027re ready for me","timezone":"GMT","metagames":"AAA","psname":"Bionic Puppy"},{"sl":"Fri Apr 10 05:23:51 GMT-04:00 2015","smogon":"MetaEvoaricii","inactivity":"7am-5pm Monday-Friday","timezone":"GMT 0","metagames":"ORAS, Monothreat, STABmons","psname":"Metalingus"},{"sl":"Fri Apr 10 05:26:49 GMT-04:00 2015","smogon":"Enrique miguel","inactivity":"Exams from 13th April to 19th april  :p","timezone":"GMT +5:30","metagames":"Monothreat","psname":"1love 1life"},{"sl":"Fri Apr 10 05:47:15 GMT-04:00 2015","smogon":"samxxxson","inactivity":"cant play on monday\n","timezone":"india","metagames":"BW","psname":"Samxxxson"},{"sl":"Fri Apr 10 05:54:28 GMT-04:00 2015","smogon":"yatin","inactivity":"i cant play after april 16th\n","timezone":"india","metagames":"ORAS","psname":"yatina"},{"sl":"Fri Apr 10 06:34:06 GMT-04:00 2015","smogon":"SSJ3Tin","inactivity":"Exams May 5th-June 1 st","timezone":"BST","metagames":"ORAS","psname":"SSJ3Tin"},{"sl":"Fri Apr 10 06:49:39 GMT-04:00 2015","smogon":"Dreaded Ned","inactivity":"Not as far as i know.","timezone":"GMT +1","metagames":"ORAS, BW, Monothreat","psname":"Dreaded Ned"},{"sl":"Fri Apr 10 07:05:41 GMT-04:00 2015","smogon":"RealShady","inactivity":"probably not, I don\u0027t have anything really expected to effect me","timezone":"Eastern","metagames":"ORAS, Monothreat","psname":"Delta Moist"},{"sl":"Fri Apr 10 07:27:05 GMT-04:00 2015","smogon":"I don\u0027t have one","inactivity":"I might not be on every day, since this is mainly in the US.","timezone":"Copenhagen (don\u0027t know number)","metagames":"ORAS, BW","psname":"Delta Forest/bprc"},{"sl":"Fri Apr 10 07:32:51 GMT-04:00 2015","smogon":"Fartzal","inactivity":"No","timezone":"Singapore","metagames":"ORAS, BW, Monothreat, AAA, STABmons, Hidden Type","psname":"Fartzal"},{"sl":"Fri Apr 10 08:02:55 GMT-04:00 2015","smogon":"En4cer","inactivity":"no i will be active all the time","timezone":"IST-but usually almost all day","metagames":"ORAS, BW, Monothreat, STABmons","psname":"En4cer"},{"sl":"Fri Apr 10 08:11:48 GMT-04:00 2015","smogon":"Calculu","inactivity":"(Just putting a note) I don\u0027t have a team for most of these bet i\u0027m sure i can look it up and make one.","timezone":"Central ","metagames":"ORAS, Monothreat, AAA, STABmons, Hidden Type","psname":"Calculu"},{"sl":"Fri Apr 10 08:15:32 GMT-04:00 2015","smogon":"Jafar8384","inactivity":"Can\u0027t play on Sundays, and some weekdays.","timezone":"EST","metagames":"Monothreat, Hidden Type","psname":"Jafar8384"},{"sl":"Fri Apr 10 08:16:22 GMT-04:00 2015","smogon":"adamdesai","inactivity":"On Sundays I cannot play from 9:30 am to 1:30 pm","timezone":"central standard time","metagames":"ORAS","psname":"adamdesai"},{"sl":"Fri Apr 10 08:23:06 GMT-04:00 2015","smogon":"Cyberknight98","inactivity":"Can\u0027t play on Sundays","timezone":"Central","metagames":"ORAS, Monothreat, AAA","psname":"Cyberknight98"},{"sl":"Fri Apr 10 08:36:26 GMT-04:00 2015","smogon":"asianpoods","inactivity":"no","timezone":"eastern time us-canada","metagames":"ORAS","psname":"asianpewdiepie"},{"sl":"Fri Apr 10 08:37:56 GMT-04:00 2015","smogon":"blinkboy","inactivity":"No , but it should be noted I stay up until about 2 pm almost every night which makes match ups with other time-zones easier.   ","timezone":"GMT+2","metagames":"ORAS, Monothreat","psname":"blinkboy"},{"sl":"Fri Apr 10 08:52:28 GMT-04:00 2015","smogon":"WalrusOfTheG0dZ","inactivity":"if i am not online the computer is being used by someone else","timezone":"utc","metagames":"ORAS","psname":"w.o.t.gods"},{"sl":"Fri Apr 10 09:05:52 GMT-04:00 2015","smogon":"TraceofLife","inactivity":"I will be inactive at may 8-11. otherwise no inactivity","timezone":"gmt +7","metagames":"ORAS, BW, Monothreat","psname":"TraceofLife RC"},{"sl":"Fri Apr 10 09:06:48 GMT-04:00 2015","smogon":"KaranGill","inactivity":"how to elvole mew","timezone":"how to elvole mew","metagames":"BW","psname":"KaranGill"},{"sl":"Fri Apr 10 09:07:47 GMT-04:00 2015","smogon":"ryyjyywyy","inactivity":"maybe a little for school but ill be on.","timezone":"central","metagames":"ORAS","psname":"ryyjyywyy"},{"sl":"Fri Apr 10 09:37:11 GMT-04:00 2015","smogon":"GhastlyTwo","inactivity":"Nope i will be free all that week!!!","timezone":"Pacific ","metagames":"ORAS","psname":"GhastlyTwo"},{"sl":"Fri Apr 10 09:42:45 GMT-04:00 2015","smogon":"MFahim","inactivity":"No weeekends.\nNo weekdays after 5:30 PM PST\nI have classes at different times on weekdays, but for the most part, I am free most of the time.","timezone":"Pacific Standard Time","metagames":"ORAS","psname":"MFahim"},{"sl":"Fri Apr 10 09:43:26 GMT-04:00 2015","smogon":"IChooseCharmander","inactivity":"Available everyday","timezone":"Central","metagames":"ORAS, Monothreat, STABmons","psname":"IChooseCharmander"},{"sl":"Fri Apr 10 09:44:05 GMT-04:00 2015","smogon":"CrazyClown94","inactivity":"No inactivity","timezone":"Eastern","metagames":"ORAS, BW, Monothreat, AAA, STABmons, Hidden Type","psname":"CrazyClown94"},{"sl":"Fri Apr 10 09:49:27 GMT-04:00 2015","smogon":"VoltScreen","inactivity":"Unavailable Monday to Friday until 3:30 PM GMT, otherwise free.","timezone":"GMT","metagames":"ORAS, BW, AAA, STABmons","psname":"VoltScreen"},{"sl":"Fri Apr 10 10:03:01 GMT-04:00 2015","smogon":"parivard","inactivity":"Vacation(june 11-20) , exams(september and march)","timezone":"IST (GMT+5.5)","metagames":"STABmons","psname":"parivard"},{"sl":"Fri Apr 10 10:19:21 GMT-04:00 2015","smogon":"Chill Shadow","inactivity":"No inactivity","timezone":"GMT +2","metagames":"ORAS","psname":"ChillShadow"},{"sl":"Fri Apr 10 10:21:16 GMT-04:00 2015","smogon":"lightning1870","inactivity":"no","timezone":"EST","metagames":"ORAS, AAA, STABmons","psname":"lightning1870"},{"sl":"Fri Apr 10 10:21:46 GMT-04:00 2015","smogon":"Xanthopoulus-","inactivity":"Slightly inactive at middle May, to some Cup matches going on.","timezone":"GMT +8","metagames":"ORAS, Monothreat","psname":"Xanthopoulus"},{"sl":"Fri Apr 10 10:31:44 GMT-04:00 2015","smogon":"diniz804","inactivity":"I can play from monday to friday at night after 22:00\nSaturdays and Sundays the whole days","timezone":"UTC 03:00","metagames":"ORAS","psname":"diniz804"},{"sl":"Fri Apr 10 10:36:14 GMT-04:00 2015","smogon":"CombustibeleLimes ","inactivity":"No inactivity","timezone":"EST","metagames":"ORAS, BW, Hidden Type","psname":"CombustibeleLimes "},{"sl":"Fri Apr 10 10:44:43 GMT-04:00 2015","smogon":"RewhX ","inactivity":"Some Saturday\u0027s I may have to participate in a volunteerservice I won\u0027t be able to participate in \n","timezone":"Central/Chicago","metagames":"ORAS","psname":"RewhX "},{"sl":"Fri Apr 10 11:14:18 GMT-04:00 2015","smogon":"darkrai147","inactivity":"Don\u0027t think so","timezone":"EST","metagames":"ORAS, BW","psname":"Receptionist147"},{"sl":"Fri Apr 10 11:14:28 GMT-04:00 2015","smogon":"Dusk Stem","inactivity":"No","timezone":"PST","metagames":"ORAS","psname":"Dusk Stem"},{"sl":"Fri Apr 10 11:48:24 GMT-04:00 2015","smogon":"clawitzermaster1","inactivity":"on week days i\u0027m available after 7. cool on week ends","timezone":"et","metagames":"ORAS","psname":"Clawitzermaster1"},{"sl":"Fri Apr 10 11:52:17 GMT-04:00 2015","smogon":"SapphireCB","inactivity":"I don\u0027t know. something may come up.","timezone":"Central US and Canada","metagames":"ORAS, Monothreat, Hidden Type","psname":"SapphireCB"},{"sl":"Fri Apr 10 12:01:50 GMT-04:00 2015","smogon":"Kswiss","inactivity":"no","timezone":"Standard Eastern time","metagames":"ORAS, BW, Monothreat","psname":"Kswissle"},{"sl":"Fri Apr 10 12:09:24 GMT-04:00 2015","smogon":"BenOhver","inactivity":"I may be absent in the morning or late afternoon on weekends.","timezone":"GMT -5","metagames":"ORAS, Monothreat, AAA, STABmons","psname":"Ben Ohver"},{"sl":"Fri Apr 10 12:10:14 GMT-04:00 2015","smogon":"brandonbarajas","inactivity":"My weekdays are usually pretty tightly scheduled and will be especially tight from 5-4 to 5-15 due to AP Exams. Weekends are perfectly fine for me though.","timezone":"GMT -5 (US Eastern)","metagames":"ORAS, BW","psname":"brojas"},{"sl":"Fri Apr 10 12:10:37 GMT-04:00 2015","smogon":"fredhi15","inactivity":"As far as I know I will be available the entire time.","timezone":"GMT","metagames":"ORAS, BW, AAA, STABmons","psname":"fredhi15"},{"sl":"Fri Apr 10 12:29:47 GMT-04:00 2015","smogon":"Yung","inactivity":"Can\u0027t play until after 4pm","timezone":"CST","metagames":"ORAS, BW, STABmons","psname":"Gym Leader Yung"},{"sl":"Fri Apr 10 13:09:52 GMT-04:00 2015","smogon":"Death0816","inactivity":"School 7:00am-4:00pm\nChurch sundays ","timezone":"Mountain US and Canada","metagames":"ORAS","psname":"Death0816"},{"sl":"Fri Apr 10 13:20:06 GMT-04:00 2015","smogon":"M\u0026M suspect test","inactivity":"no I wont be inactive...","timezone":"GMT +1","metagames":"ORAS","psname":"M\u0026M suspect test"},{"sl":"Fri Apr 10 13:35:40 GMT-04:00 2015","smogon":"Snaquaza","inactivity":"There shouldn\u0027t be any inactivity.","timezone":"GMT +1","metagames":"ORAS, BW, AAA, STABmons","psname":"Snaquaza"},{"sl":"Fri Apr 10 13:38:02 GMT-04:00 2015","smogon":"inwhale","inactivity":"I doubt it.","timezone":"GMT+3","metagames":"ORAS, AAA","psname":"Loli Master Race"},{"sl":"Fri Apr 10 13:38:49 GMT-04:00 2015","smogon":"VGC","inactivity":"cant play from next week monday due to university","timezone":"UCT-4:00","metagames":"Monothreat","psname":"vgcVGC"},{"sl":"Fri Apr 10 13:44:06 GMT-04:00 2015","smogon":"Paid Dave","inactivity":"No","timezone":"Eastern","metagames":"ORAS, BW, Monothreat","psname":"Paid Dave"},{"sl":"Fri Apr 10 14:05:31 GMT-04:00 2015","smogon":"LevineMa","inactivity":"I can not play till like 7 est most days but i should be able to go on every day","timezone":"Eastern USA","metagames":"ORAS, BW, Monothreat, AAA, STABmons, Hidden Type","psname":"LevineMa"},{"sl":"Fri Apr 10 14:17:15 GMT-04:00 2015","smogon":"dragons world","inactivity":"I free from 2 pm to 4:30 pm everyday","timezone":"UTC+05:30","metagames":"BW","psname":"dragon blizard"},{"sl":"Fri Apr 10 14:39:17 GMT-04:00 2015","smogon":"CorruptedFlame","inactivity":"Can\u0027t play on Saturdays or 3:00-6:00, weekdays","timezone":"EDT (Eastern Daylight Time) UTC/GMT -4 hours","metagames":"ORAS, BW, Monothreat, AAA, STABmons","psname":"Other Metas Test"},{"sl":"Fri Apr 10 14:52:04 GMT-04:00 2015","smogon":"havarti2","inactivity":"Probably not. (Ignore the first two responses I put in please: this is the updated version)","timezone":"Eastern","metagames":"ORAS, Monothreat, STABmons, Hidden Type","psname":"havarti2"},{"sl":"Fri Apr 10 14:55:11 GMT-04:00 2015","smogon":"hvbreakey","inactivity":"no","timezone":"az","metagames":"ORAS","psname":"hvbreakey"},{"sl":"Fri Apr 10 15:09:40 GMT-04:00 2015","smogon":"reyaansh","inactivity":"blank\n","timezone":"UTC+5:30","metagames":"ORAS, Monothreat","psname":"reyaansh"},{"sl":"Fri Apr 10 15:18:20 GMT-04:00 2015","smogon":"superstarsrock","inactivity":"Nope","timezone":"EST (GMT -5)","metagames":"ORAS, STABmons, Hidden Type","psname":"superstarsrock"},{"sl":"Fri Apr 10 15:39:28 GMT-04:00 2015","smogon":"HeathLedgerLives","inactivity":"Can\u0027t play on Sundays or Tuesday or Thursday evenings. Busy on April 25, May 15, and from June 21 on.","timezone":"PST","metagames":"ORAS, BW","psname":"The Giant Pikachu"},{"sl":"Fri Apr 10 16:00:36 GMT-04:00 2015","smogon":"MainEvent","inactivity":"no","timezone":"GMT -4(EST)","metagames":"ORAS, BW","psname":"MainEvent"},{"sl":"Fri Apr 10 16:35:17 GMT-04:00 2015","smogon":"ArkenCiel","inactivity":"No inactivity - arbitrary online time though","timezone":"CST/GMT+6","metagames":"ORAS, Monothreat","psname":"ArkenCiel"},{"sl":"Fri Apr 10 16:35:23 GMT-04:00 2015","smogon":"Floette","inactivity":"Potential first week of August absence and an intense study period in October-early November. ","timezone":"GMT+9 (as of recent changes)","metagames":"ORAS, BW, AAA, STABmons","psname":"Floette"},{"sl":"Fri Apr 10 16:39:42 GMT-04:00 2015","smogon":"JA Answerdon","inactivity":"No inactivity","timezone":"UTC−05:00 Bogotá, Time zone","metagames":"ORAS","psname":"JA Bloo"},{"sl":"Fri Apr 10 16:39:48 GMT-04:00 2015","smogon":"Demoy","inactivity":"No inactivity. ","timezone":"UTC−05:00 Bogotá, Time zone","metagames":"ORAS","psname":"JA Supahtallwall"},{"sl":"Fri Apr 10 16:49:52 GMT-04:00 2015","smogon":"naradmuni","inactivity":"dont no\n","timezone":"est","metagames":"ORAS, BW, Monothreat, AAA, STABmons, Hidden Type","psname":"sriram"},{"sl":"Fri Apr 10 17:24:39 GMT-04:00 2015","smogon":"Tux Victini","inactivity":"Vacation on the 17, Won\u0027t Play On Sundays","timezone":"EST","metagames":"ORAS","psname":"Tux Victini"},{"sl":"Fri Apr 10 17:36:18 GMT-04:00 2015","smogon":"TheMaximumBlackout","inactivity":"I have school on weekdays but if I play after 4 that should be good","timezone":"CST","metagames":"ORAS","psname":"themaximumblackout"},{"sl":"Fri Apr 10 18:05:30 GMT-04:00 2015","smogon":"Luigi_GameZ","inactivity":"I Can Play Everyday After 6:00 and sometimes I will be Here early","timezone":"Central","metagames":"Monothreat","psname":"LuigiPokemon"},{"sl":"Fri Apr 10 18:09:48 GMT-04:00 2015","smogon":"HAXUpTheAss","inactivity":"can\u0027t play until 6 pm ","timezone":"Central European","metagames":"ORAS","psname":"HAXUpTheAss"},{"sl":"Fri Apr 10 18:19:39 GMT-04:00 2015","smogon":"ScorpionZ","inactivity":"No inactivity","timezone":"EST","metagames":"ORAS, AAA","psname":"ScorpionZ"},{"sl":"Fri Apr 10 18:28:22 GMT-04:00 2015","smogon":"Mega Blaziken 12","inactivity":"No","timezone":"Eastern","metagames":"ORAS, STABmons","psname":"Mega Blaziken 12"},{"sl":"Fri Apr 10 18:38:43 GMT-04:00 2015","smogon":"Exhaust","inactivity":"Nope","timezone":"US Central ","metagames":"ORAS, BW, Monothreat, AAA","psname":"Exhaust"},{"sl":"Fri Apr 10 18:41:36 GMT-04:00 2015","smogon":"mj gould","inactivity":"Maybe ","timezone":"US","metagames":"AAA, STABmons","psname":"inferno mj"},{"sl":"Fri Apr 10 18:47:21 GMT-04:00 2015","smogon":"Kyo004","inactivity":"No inactivity","timezone":"eastern","metagames":"ORAS, BW","psname":"Drizzle Kyo"},{"sl":"Fri Apr 10 18:49:21 GMT-04:00 2015","smogon":"Killstar197","inactivity":"i will be inactive only for maybe monday,tuesday,wedsday,thursday and friday because of school","timezone":"5:30 PM","metagames":"ORAS, STABmons","psname":"Killstar197"},{"sl":"Fri Apr 10 18:49:57 GMT-04:00 2015","smogon":"Kevin Jung","inactivity":"I can\u0027t play from 9 am to 5 pm on Mondays/Wednesdays due to school.\nAlso, I cannot play on Fridays from 9 am to 1 pm for the same reason. ","timezone":"Pacific Time","metagames":"ORAS, BW, Monothreat","psname":"hitherecat"},{"sl":"Fri Apr 10 18:57:46 GMT-04:00 2015","smogon":"Nathaniel Knox","inactivity":"Can\u0027t play Sunday night through Wednesday night due to school. At summer break will be able to play any time","timezone":"GMT-5","metagames":"ORAS, Monothreat, AAA, STABmons","psname":"thehaymakeralt"},{"sl":"Fri Apr 10 19:01:13 GMT-04:00 2015","smogon":"Physical Tyranitar","inactivity":"There is a mild chance of me not being able to play on Weekdays. I have school and it lets out 3:23 so if it\u0027s taking place at like at noon I\u0027ll be inactive. I\u0027ll be active on the weekends. ","timezone":"GMT -4","metagames":"ORAS, BW","psname":"Physical Tyranitar"},{"sl":"Fri Apr 10 19:24:32 GMT-04:00 2015","smogon":"COCO is my dog","inactivity":"studying for finals on April14-18th","timezone":"central time zone","metagames":"ORAS","psname":"COCO is my dog"},{"sl":"Fri Apr 10 19:25:06 GMT-04:00 2015","smogon":"Fluff Nutz","inactivity":"No Monday-Friday: (7:00 - 6:00)","timezone":"EST","metagames":"ORAS","psname":"Fluff Nutz"},{"sl":"Fri Apr 10 19:55:04 GMT-04:00 2015","smogon":"CharmingMander","inactivity":"no inactivity","timezone":"Eastern","metagames":"ORAS","psname":"CharmingMander"},{"sl":"Fri Apr 10 20:29:26 GMT-04:00 2015","smogon":"Insanelegend","inactivity":"I should be active most times, although some weekends I may be camping","timezone":"GMT -6","metagames":"Monothreat, AAA, STABmons","psname":"Insanelegend"},{"sl":"Fri Apr 10 20:35:09 GMT-04:00 2015","smogon":"Schismatic","inactivity":"May 15-19","timezone":"Central","metagames":"ORAS","psname":"Schism CB"},{"sl":"Fri Apr 10 20:59:28 GMT-04:00 2015","smogon":"XCynicalChaosX","inactivity":"No inactivity","timezone":"Central","metagames":"ORAS, STABmons","psname":"Chaos"},{"sl":"Fri Apr 10 22:10:54 GMT-04:00 2015","smogon":"iHeartlessHero1337","inactivity":"Work from 0630 til 1530 APR 13th to the 17th.","timezone":"CST ","metagames":"ORAS, BW","psname":"MegaTaylorSwift"},{"sl":"Fri Apr 10 23:05:27 GMT-04:00 2015","smogon":"minatokyuubi","inactivity":"No inactivity","timezone":"PST","metagames":"ORAS, Monothreat, STABmons","psname":"minatokyuubi"},{"sl":"Fri Apr 10 23:09:19 GMT-04:00 2015","smogon":"Dr Tricky Phd","inactivity":"No","timezone":"Pacific","metagames":"ORAS, BW, Hidden Type","psname":"Dr Tricky Phd"},{"sl":"Fri Apr 10 23:19:37 GMT-04:00 2015","smogon":"ESPGarrystrainer","inactivity":"I Cant be active on Saturday until 1:30 pm  ","timezone":"Central Standard Time","metagames":"BW, Monothreat, AAA","psname":"ESPGarrystrainer"},{"sl":"Fri Apr 10 23:59:44 GMT-04:00 2015","smogon":"Letters","inactivity":"No inactivity.","timezone":"GMT -4","metagames":"ORAS, BW, STABmons","psname":"Psych0"},{"sl":"Sat Apr 11 00:39:43 GMT-04:00 2015","smogon":"minatokyuubi","inactivity":"No inactivity","timezone":"PST","metagames":"ORAS, Monothreat, STABmons","psname":"New Minatokyuubi"},{"sl":"Sat Apr 11 01:04:25 GMT-04:00 2015","smogon":"Frntier Ape","inactivity":"no","timezone":"Eastern","metagames":"ORAS, Monothreat","psname":"Frntier Ape"},{"sl":"Sat Apr 11 02:55:05 GMT-04:00 2015","smogon":"Lonely Parrot","inactivity":"I don\u0027t have a fixed schedule though I will inform if I will not be available","timezone":"GMT +5.5","metagames":"ORAS, BW","psname":"Lonely Parrot"},{"sl":"Sat Apr 11 03:37:25 GMT-04:00 2015","smogon":"RoamerGamer","inactivity":"No","timezone":"NZST","metagames":"ORAS","psname":"RoamrGamr"},{"sl":"Sat Apr 11 04:30:50 GMT-04:00 2015","smogon":"damon3107","inactivity":"no","timezone":"(UTC+05:30)","metagames":"BW","psname":"damon3107"},{"sl":"Sat Apr 11 05:51:44 GMT-04:00 2015","smogon":"Bulkamniac","inactivity":"No inactivity(in case there is some lastminute change i will inform it)","timezone":"IST","metagames":"ORAS, Monothreat","psname":"Bulkamaniac"},{"sl":"Sat Apr 11 06:08:33 GMT-04:00 2015","smogon":"Fírnen","inactivity":"18/05/2015 - 20/05/2015\nExams.","timezone":"Belgium, Center of Europa","metagames":"ORAS, BW, AAA, Hidden Type","psname":"Fírnen"},{"sl":"Sat Apr 11 06:42:51 GMT-04:00 2015","smogon":"innovamania","inactivity":"no","timezone":"gmt -6","metagames":"ORAS, BW","psname":"innovamania"},{"sl":"Sat Apr 11 07:06:33 GMT-04:00 2015","smogon":"truedrew ","inactivity":"Will be during exams so will have to be told at least a few days in advance ","timezone":"+5:30 GMT","metagames":"ORAS, Monothreat","psname":"truedrew"},{"sl":"Sat Apr 11 07:41:13 GMT-04:00 2015","smogon":"Hawlumen","inactivity":"Yes\n","timezone":"+1","metagames":"Monothreat","psname":"Hawlumen"},{"sl":"Sat Apr 11 08:44:53 GMT-04:00 2015","smogon":"QBone36","inactivity":"No","timezone":"AEST (UTC +10:00)","metagames":"ORAS, BW","psname":"36QBone36"},{"sl":"Sat Apr 11 08:54:07 GMT-04:00 2015","smogon":"hank brown","inactivity":"I won\u0027t be able to play much from 8:05 to 3:50 I have work","timezone":"Eastern central ","metagames":"BW","psname":"Hank brown"},{"sl":"Sat Apr 11 10:04:01 GMT-04:00 2015","smogon":"alberto98","inactivity":"no","timezone":"cordoba, españa","metagames":"ORAS","psname":"alberto98"},{"sl":"Sat Apr 11 10:05:39 GMT-04:00 2015","smogon":"dolores68","inactivity":"No inactivity","timezone":"GMT +8","metagames":"ORAS","psname":"dolores68"},{"sl":"Sat Apr 11 10:11:02 GMT-04:00 2015","smogon":"neju457","inactivity":"s,t,q,q,s","timezone":"brazil","metagames":"ORAS, BW","psname":"neju"},{"sl":"Sat Apr 11 10:16:59 GMT-04:00 2015","smogon":"Bluemew1213","inactivity":"No","timezone":"Eastern","metagames":"ORAS, BW, Monothreat, AAA, STABmons, Hidden Type","psname":"Bluemew1213"},{"sl":"Sat Apr 11 10:57:45 GMT-04:00 2015","smogon":"dawnmidst","inactivity":"I\u0027ll be on daily so I won\u0027t be inactive :P","timezone":"Eastern Time (UTC−05:00)","metagames":"ORAS, BW, STABmons","psname":"dawnmidst"},{"sl":"Sat Apr 11 11:14:17 GMT-04:00 2015","smogon":"boo118","inactivity":"Exams on various days, but those are 1-2 hour slots.","timezone":"GMT","metagames":"ORAS, AAA, STABmons","psname":"boo118"},{"sl":"Sat Apr 11 12:41:46 GMT-04:00 2015","smogon":"manri_negro","inactivity":"hola como estan\n","timezone":"12:45","metagames":"ORAS","psname":"manri"},{"sl":"Sat Apr 11 12:42:32 GMT-04:00 2015","smogon":"Ilight","inactivity":"yes","timezone":"anywhere bewteen 12pm-12am (Est)","metagames":"ORAS, Monothreat","psname":"ILight"},{"sl":"Sat Apr 11 12:45:04 GMT-04:00 2015","smogon":"Zinnia\u0027s Mega Mence","inactivity":"will be at school but will battle after 2:30\n","timezone":"Us \u0026 Canda","metagames":"ORAS","psname":"Zinnias Son"},{"sl":"Sat Apr 11 13:32:18 GMT-04:00 2015","smogon":"James Fisher","inactivity":"I will be unavailable any time past 6:00 PM in the Greenwich Mean Time Zone ","timezone":"Greenwich Mean Time Zone ","metagames":"ORAS","psname":"Fantastic420"},{"sl":"Sat Apr 11 13:49:20 GMT-04:00 2015","smogon":"Grand Salad God","inactivity":"Cannot play on Tuesdays.","timezone":"GMT+1 (Wolverhampton)","metagames":"ORAS, BW","psname":"SalamenceStreaming"},{"sl":"Sat Apr 11 13:52:23 GMT-04:00 2015","smogon":"bapon","inactivity":"no","timezone":"4.00 pm","metagames":"Hidden Type","psname":"bapon"},{"sl":"Sat Apr 11 14:30:59 GMT-04:00 2015","smogon":"Peeta","inactivity":"April 16-18 (Drama Production)\nApril 22-24 (DisneyLand)\nApril 30 - May 1 (Dance Show)\nMay 5 (Choir Concert)\nMay 6 (Drama Banquet)\n\nAnd a Choir Banquet, date TBD. ","timezone":"Arizona (PST/MST)","metagames":"AAA, STABmons","psname":"PeetaMellark"},{"sl":"Sat Apr 11 14:40:48 GMT-04:00 2015","smogon":"HardCoreLegend","inactivity":"Cannot play on weekdays. Can only play on weekends. Can play on Friday      afternoons from around 6:30 to 9 PM.","timezone":"Eastern Time Zone","metagames":"ORAS","psname":"HardCoreLegend"},{"sl":"Sat Apr 11 14:53:44 GMT-04:00 2015","smogon":"Silkenfloss","inactivity":"No sir I won\u0027t","timezone":"Eastern","metagames":"ORAS, BW, Monothreat, AAA, STABmons, Hidden Type","psname":"SilkenFloss"},{"sl":"Sat Apr 11 15:48:34 GMT-04:00 2015","smogon":"Magoodies","inactivity":"No inactivity","timezone":"Pacific","metagames":"ORAS","psname":"Magoodies"},{"sl":"Sat Apr 11 15:51:16 GMT-04:00 2015","smogon":"demonkingk1377","inactivity":"time constratints on the 18th from 2pm - 6pm for a musical performance but other wise ok","timezone":"(utc-5:00) eastern time (us \u0026canada)","metagames":"ORAS, BW, AAA, STABmons","psname":"demonkingk"},{"sl":"Sat Apr 11 15:58:54 GMT-04:00 2015","smogon":"blast95","inactivity":"Vacation June 1-6","timezone":"Paris +1","metagames":"ORAS","psname":"blast95"},{"sl":"Sat Apr 11 16:17:30 GMT-04:00 2015","smogon":"Gat5","inactivity":"No inactivity","timezone":"Eastern","metagames":"ORAS","psname":"Gat5"},{"sl":"Sat Apr 11 16:23:26 GMT-04:00 2015","smogon":"VIP QUALITY","inactivity":"nope","timezone":"Central Timezone ","metagames":"ORAS","psname":"VIP QUALITY"},{"sl":"Sat Apr 11 16:57:27 GMT-04:00 2015","smogon":"butter1358","inactivity":"Cant play on the week days only fridays, saturdays, and sundays","timezone":"Pacific Time","metagames":"ORAS","psname":"butter1358"},{"sl":"Sat Apr 11 17:17:44 GMT-04:00 2015","smogon":"crstan23232","inactivity":"Always active  except on mornings","timezone":"Centroamérica","metagames":"ORAS","psname":"crstan23232"},{"sl":"Sat Apr 11 17:26:52 GMT-04:00 2015","smogon":"Time Manipulator","inactivity":"I will be on everyday however week days i wont be on until 3:30pm minimum","timezone":"+0100 UTC ","metagames":"ORAS, Monothreat, AAA","psname":"Tomiichi"},{"sl":"Sat Apr 11 17:54:49 GMT-04:00 2015","smogon":"Kitten for Ubers","inactivity":"No.","timezone":"EST","metagames":"ORAS, AAA, STABmons","psname":"K1TTEN"},{"sl":"Sat Apr 11 18:10:30 GMT-04:00 2015","smogon":"dragonsonbathsalts","inactivity":"I have school everyday and track until about 5;00 pm after that I\u0027m on normally","timezone":"Est","metagames":"ORAS, BW","psname":"dragonsonbathsalts"},{"sl":"Sat Apr 11 18:18:45 GMT-04:00 2015","smogon":"CSYukki\u0027","inactivity":"Can\u0027t play on Thursday. ","timezone":"UTC-06:00","metagames":"ORAS, BW","psname":"SadRaccoon"},{"sl":"Sat Apr 11 18:21:03 GMT-04:00 2015","smogon":"rfhfdd","inactivity":"School (5:30am To 3:30pm on Monday through Friday) ","timezone":"Pacific","metagames":"ORAS, BW, AAA, STABmons","psname":"rfhfdd"},{"sl":"Sat Apr 11 18:42:26 GMT-04:00 2015","smogon":"Nathan G","inactivity":"Nope.","timezone":"EST","metagames":"ORAS, Monothreat","psname":"Grimsley Jr"},{"sl":"Sat Apr 11 18:48:49 GMT-04:00 2015","smogon":"ArarisVeil","inactivity":"School Days (8 a.m.-4 p.m.)\nFamily Outing and ACT (April 17-18th)\nAP Study Session (April 25th)\nAnd a random Tuesday in April and May. And maybe a random day in May. All for band.\nJune and July if it extends that long...I have a lot to do, but I could squeeze it in occasionally then.","timezone":"EST","metagames":"AAA, STABmons, Hidden Type","psname":"Vael Gale"},{"sl":"Sat Apr 11 18:51:08 GMT-04:00 2015","smogon":"vermelhin","inactivity":"No inactivity (i wait)","timezone":"13:00-18:00 (Brazil)","metagames":"ORAS","psname":"vermelhin"},{"sl":"Sat Apr 11 18:52:49 GMT-04:00 2015","smogon":"monfernobro10","inactivity":"My birthday on the 15 so yes on the 15th and school time all days besides 18th which I should be done by 3:30\nalso have a camp out on 18th so not sure about 17th either","timezone":"Central Time Zone","metagames":"ORAS, BW, STABmons","psname":"Affinity Monferno"},{"sl":"Sat Apr 11 18:57:51 GMT-04:00 2015","smogon":"aaNick","inactivity":"Only on at night during weekdays.","timezone":"Central Time Zone","metagames":"ORAS, BW, Monothreat, AAA, STABmons","psname":"Laminate"},{"sl":"Sat Apr 11 19:14:48 GMT-04:00 2015","smogon":"Auburn","inactivity":"as long as i know the times to come on, i\u0027ll be there.","timezone":"Mountain Time (GMT -07:00)","metagames":"ORAS, BW, Monothreat","psname":"Auburn"},{"sl":"Sat Apr 11 19:20:50 GMT-04:00 2015","smogon":"nickwatic","inactivity":"Cannot play on Tuesdays, as well as times 6 AM EST-3:30 PM EST on Mondays-Fridays as i have school. Otherwise i should be available","timezone":"EST","metagames":"ORAS, STABmons","psname":"nickwatic"},{"sl":"Sat Apr 11 19:47:59 GMT-04:00 2015","smogon":"Hutyro","inactivity":"No","timezone":"GMT","metagames":"ORAS, BW, Monothreat, AAA, STABmons","psname":"Hutyro"},{"sl":"Sat Apr 11 20:18:28 GMT-04:00 2015","smogon":"Mensual","inactivity":"always there","timezone":"Argentina","metagames":"ORAS","psname":"tututu"},{"sl":"Sat Apr 11 20:21:50 GMT-04:00 2015","smogon":"The Alextaker","inactivity":"Workin 3 days weekly\n\n","timezone":"(utc - 06:00)","metagames":"Hidden Type","psname":"The Alextaker"},{"sl":"Sat Apr 11 20:56:04 GMT-04:00 2015","smogon":"BlackSchwan","inactivity":"None except uni on Monday and Friday and all of Saturday","timezone":"UTC + 10:00","metagames":"ORAS, BW","psname":"BlackSchwan"},{"sl":"Sat Apr 11 21:06:50 GMT-04:00 2015","smogon":"Zaine the man","inactivity":"may be offline","timezone":"eastern time","metagames":"ORAS, BW","psname":"Zaine the man"},{"sl":"Sat Apr 11 21:31:36 GMT-04:00 2015","smogon":"Pentak the Beast","inactivity":"I can\u0027t play in the daytime of Monday through Friday.","timezone":"Pacific Time","metagames":"ORAS, BW, STABmons","psname":"Volley11"},{"sl":"Sat Apr 11 21:55:10 GMT-04:00 2015","smogon":"trollo 182","inactivity":"No inactivity","timezone":"(UTC-05:00) Bogotá, Lima, Quito","metagames":"ORAS, BW","psname":"trollo 182"},{"sl":"Sun Apr 12 00:37:34 GMT-04:00 2015","smogon":"Maskun529","inactivity":"Nope i\u0027ll always be active.","timezone":"GMT -6","metagames":"ORAS, STABmons","psname":"Maskun529"},{"sl":"Sun Apr 12 02:06:45 GMT-04:00 2015","smogon":"savio ban","inactivity":"no","timezone":"5.00 pm","metagames":"Hidden Type","psname":"savio ban "},{"sl":"Sun Apr 12 02:08:37 GMT-04:00 2015","smogon":"Joshiee_boy","inactivity":"Will be active","timezone":"Aest","metagames":"ORAS, Monothreat","psname":"Joshiee"},{"sl":"Sun Apr 12 02:13:06 GMT-04:00 2015","smogon":"Xylox","inactivity":"Really active on weekends, cant be on from 7am-4pm on weekdays(School)","timezone":"Mountain Time (Canada)","metagames":"ORAS, BW, Monothreat","psname":"Xylox"},{"sl":"Sun Apr 12 02:15:21 GMT-04:00 2015","smogon":"abd007","inactivity":"monday to friday\nschool 5am t o 3 pm ","timezone":"+5:50 kolkta","metagames":"Monothreat","psname":"cdlo"},{"sl":"Sun Apr 12 05:26:45 GMT-04:00 2015","smogon":"pezmango","inactivity":"no inactivity","timezone":"Eastern","metagames":"ORAS, BW, Monothreat","psname":"pezmango"},{"sl":"Sun Apr 12 06:00:43 GMT-04:00 2015","smogon":"guavafx","inactivity":"nope i wont be inactive ","timezone":"australian eastern standard  UTC/GMT +10 hours","metagames":"ORAS, Monothreat, STABmons","psname":"GuavaFx"},{"sl":"Sun Apr 12 07:03:09 GMT-04:00 2015","smogon":"Str1f3","inactivity":"I cannot do 12:30pm to 4:10pm on the Friday or 11:30am to 4:10pm on the Monday, AEST","timezone":"AEST 10+","metagames":"ORAS, Monothreat, AAA, STABmons","psname":"Str1f3"},{"sl":"Sun Apr 12 07:19:44 GMT-04:00 2015","smogon":"Xenorin","inactivity":"I can play with in those days\n","timezone":"Pacific time ","metagames":"STABmons","psname":"Xenorin"},{"sl":"Sun Apr 12 07:27:13 GMT-04:00 2015","smogon":"Shanks","inactivity":"weekends maybe a problem(might be free sometimes though)","timezone":"GMT+6:30","metagames":"ORAS, Monothreat, AAA, STABmons","psname":"Shanks"},{"sl":"Sun Apr 12 07:31:19 GMT-04:00 2015","smogon":"A_Shanks","inactivity":"weekends maybe a problem(might be available too)","timezone":"GMT+6:30","metagames":"ORAS, Monothreat, AAA, STABmons","psname":"A_Shanks"},{"sl":"Sun Apr 12 09:06:51 GMT-04:00 2015","smogon":"Drought Kyogre","inactivity":"Active most days","timezone":"EST","metagames":"ORAS, AAA, STABmons","psname":"Drought Kyogre"},{"sl":"Sun Apr 12 10:16:47 GMT-04:00 2015","smogon":"Psystriker","inactivity":"No inactivity ","timezone":"Eastern Time Zone","metagames":"ORAS, BW, Monothreat, AAA, STABmons, Hidden Type","psname":"jacobharris"},{"sl":"Sun Apr 12 10:27:51 GMT-04:00 2015","smogon":"Dykes","inactivity":"no inactivity","timezone":"GMT+1","metagames":"ORAS, STABmons, Hidden Type","psname":"Dykas"},{"sl":"Sun Apr 12 10:46:09 GMT-04:00 2015","smogon":"BobbyV","inactivity":"no inactivity","timezone":"EST","metagames":"ORAS, BW, Monothreat","psname":"Leader BobbyV"},{"sl":"Sun Apr 12 11:45:50 GMT-04:00 2015","smogon":"Furrets","inactivity":"I\u0027ll be active for all of it.","timezone":"CST (GMT - 5:00)","metagames":"ORAS, BW, AAA, STABmons, Hidden Type","psname":"Furrets"},{"sl":"Sun Apr 12 12:00:52 GMT-04:00 2015","smogon":"Lockdown999","inactivity":"No inactivity ","timezone":"GMT","metagames":"ORAS, Monothreat, STABmons, Hidden Type","psname":"lockdown999"},{"sl":"Sun Apr 12 12:04:43 GMT-04:00 2015","smogon":"BigBangPegusus","inactivity":"I\u0027m Active All The Time Now A Days. I\u0027m On A Vacation ;D ","timezone":"(UTC+06:00)Astana,Dhaka","metagames":"ORAS","psname":"BigBangPegusus"},{"sl":"Sun Apr 12 12:23:14 GMT-04:00 2015","smogon":"miranda lotto","inactivity":"yes","timezone":"portugues","metagames":"Monothreat, AAA, STABmons, Hidden Type","psname":"Miranda lotto"},{"sl":"Sun Apr 12 12:26:25 GMT-04:00 2015","smogon":"Lambent Lucario","inactivity":"school and work 7am-7pm, tues and thurs 7am-4pm, cant play everyother sunday","timezone":"est.Standard","metagames":"ORAS, Monothreat, AAA, STABmons","psname":"Lambent Lucario"},{"sl":"Sun Apr 12 12:26:25 GMT-04:00 2015","smogon":"ToxicStar","inactivity":"i only enter on PS after 18:00 pm (21:00 pm on london),and i don\u0027t play on sundays","timezone":"-3 gmt","metagames":"ORAS","psname":"ToxicStar"},{"sl":"Sun Apr 12 13:03:52 GMT-04:00 2015","smogon":"Gym Leader Icy","inactivity":"No Inactivity","timezone":"Eastern Standard","metagames":"ORAS, BW","psname":"Retired Leader Icy"},{"sl":"Sun Apr 12 13:24:02 GMT-04:00 2015","smogon":"kingwall32","inactivity":"I will be active the whole tournament ","timezone":"eastern ","metagames":"ORAS","psname":"kingmar"},{"sl":"Sun Apr 12 14:33:19 GMT-04:00 2015","smogon":"Aeisglash","inactivity":"No","timezone":"GMT","metagames":"ORAS, BW, Monothreat, AAA, STABmons, Hidden Type","psname":"Aeisglash"},{"sl":"Sun Apr 12 17:40:22 GMT-04:00 2015","smogon":"ZKillz269","inactivity":"I\u0027ll be fine to join.","timezone":"Easter Time Zone (UTC-05:00)","metagames":"ORAS, BW","psname":"ZKillz269"},{"sl":"Sun Apr 12 17:41:04 GMT-04:00 2015","smogon":"BolterXD","inactivity":"no","timezone":"EST","metagames":"ORAS","psname":"BolterXD"},{"sl":"Sun Apr 12 18:11:31 GMT-04:00 2015","smogon":"jroo95","inactivity":"N/A","timezone":"EST","metagames":"ORAS, BW, Monothreat, AAA","psname":"Psilocyborg"},{"sl":"Sun Apr 12 19:12:09 GMT-04:00 2015","smogon":"Nikithb","inactivity":"Have school and after-school sports, so can\u0027t play before 4 on weekdays","timezone":"Eastern","metagames":"ORAS, BW, AAA","psname":"Nikithb"},{"sl":"Sun Apr 12 19:17:57 GMT-04:00 2015","smogon":"Arcticblast","inactivity":"nope","timezone":"EDT (GMT -4)","metagames":"ORAS","psname":"Arcticblast"},{"sl":"Sun Apr 12 19:25:20 GMT-04:00 2015","smogon":"Christestchris ","inactivity":"Nope","timezone":"Gmt-8","metagames":"ORAS, BW, Monothreat","psname":"Clius"},{"sl":"Sun Apr 12 19:29:14 GMT-04:00 2015","smogon":"ArgusWasTaken","inactivity":"No.","timezone":"PST (-8)","metagames":"ORAS","psname":"Argus2Spooky"},{"sl":"Sun Apr 12 20:00:46 GMT-04:00 2015","smogon":"3erserk","inactivity":"Non aucun à juste à part le fait que il y a des coupures ","timezone":"(UTC-03:00)","metagames":"ORAS, BW, Monothreat","psname":"3erserk"},{"sl":"Sun Apr 12 20:27:48 GMT-04:00 2015","smogon":"Raseri","inactivity":"huehuehue","timezone":-7,"metagames":"ORAS, BW, AAA, STABmons, Hidden Type","psname":"Raseri"},{"sl":"Sun Apr 12 21:16:02 GMT-04:00 2015","smogon":"Dusk Demosn","inactivity":"Hopefully not.","timezone":"central time zone","metagames":"ORAS, Monothreat","psname":"Dusk Demons"},{"sl":"Sun Apr 12 21:18:47 GMT-04:00 2015","smogon":"Vin E4 Bossman","inactivity":"Nope","timezone":"Eastern","metagames":"ORAS, BW","psname":"Vin E4 Bossman"},{"sl":"Sun Apr 12 21:26:49 GMT-04:00 2015","smogon":"savanah","inactivity":"Nein","timezone":"Central (US)","metagames":"ORAS, AAA, STABmons","psname":"savanah"},{"sl":"Sun Apr 12 21:45:58 GMT-04:00 2015","smogon":"LeSageStupide","inactivity":"Weekdays 7-3","timezone":"PST","metagames":"ORAS","psname":"LeSageStupide"},{"sl":"Sun Apr 12 21:58:24 GMT-04:00 2015","smogon":"viperfang4","inactivity":"not at the moment, if anything does happen to come up i will notify someone about it ahead of time.","timezone":"EST","metagames":"ORAS, BW, Monothreat","psname":"viperfang4 or Void Masquerade"},{"sl":"Sun Apr 12 23:01:16 GMT-04:00 2015","smogon":"jayelt777","inactivity":"Can\u0027t play often during the weekdays","timezone":"Central","metagames":"ORAS, BW, AAA, STABmons","psname":"jayelt777"},{"sl":"Sun Apr 12 23:43:28 GMT-04:00 2015","smogon":"Darkness417","inactivity":"Birthday Weekend (April 17-18) Can\u0027t play 8am-7pm on Monday and 7am-7pm on Tuesdays and Thursdays because of school","timezone":"Central","metagames":"ORAS, BW, AAA, STABmons","psname":"Dorell"},{"sl":"Mon Apr 13 00:33:17 GMT-04:00 2015","smogon":"TheFenderStory ","inactivity":"no","timezone":-7,"metagames":"ORAS, BW, Monothreat, AAA, STABmons, Hidden Type","psname":"fender"},{"sl":"Mon Apr 13 00:57:26 GMT-04:00 2015","smogon":"LolImADog","inactivity":"Best in afternoon or nights","timezone":"Eastern","metagames":"ORAS","psname":"LolImADog"},{"sl":"Mon Apr 13 01:11:49 GMT-04:00 2015","smogon":"IgnisDragon","inactivity":"Nope, all clear i can play on the dates only reason i should drop out is if i die","timezone":"Australian eastern standard time","metagames":"Monothreat, AAA","psname":"IgnisDragon"},{"sl":"Mon Apr 13 04:41:46 GMT-04:00 2015","smogon":"tjfreckles","inactivity":"Nope","timezone":"Pacific","metagames":"ORAS, BW, Monothreat, AAA","psname":"tjfreckles"},{"sl":"Mon Apr 13 04:55:59 GMT-04:00 2015","smogon":"Matthew Clifton","inactivity":"no","timezone":"+8:00 perth","metagames":"ORAS, BW, Monothreat, AAA","psname":"CcrucifixX"},{"sl":"Mon Apr 13 06:20:36 GMT-04:00 2015","smogon":"Gokul","inactivity":"No inactivity","timezone":"IST","metagames":"ORAS","psname":"Gokul"},{"sl":"Mon Apr 13 06:22:39 GMT-04:00 2015","smogon":"Gigglewithme","inactivity":"Hopefully No ","timezone":"India","metagames":"ORAS, Monothreat, Hidden Type","psname":"Gigglewithme"},{"sl":"Mon Apr 13 06:39:11 GMT-04:00 2015","smogon":"Clytius_1","inactivity":"During school hours","timezone":"UTC) Dublin, Edinburgh, Lisbon, London","metagames":"ORAS","psname":"Clytius"},{"sl":"Mon Apr 13 07:08:58 GMT-04:00 2015","smogon":"Greed The Avaricious ","inactivity":"No","timezone":"Est","metagames":"ORAS, Monothreat, Hidden Type","psname":"Dark Greed"},{"sl":"Mon Apr 13 07:12:59 GMT-04:00 2015","smogon":"UberGamer","inactivity":"I work some days, but can play at some point any day","timezone":"Mountain Time","metagames":"ORAS, Monothreat","psname":"UberGamer"},{"sl":"Mon Apr 13 07:14:30 GMT-04:00 2015","smogon":"Sazh Katzroy","inactivity":"No.","timezone":"CST","metagames":"ORAS, BW, AAA","psname":"Crystal Katzroy"},{"sl":"Mon Apr 13 08:37:49 GMT-04:00 2015","smogon":"Hypher Chocolate","inactivity":"No.","timezone":"GMT","metagames":"ORAS","psname":"Hypher Chocolate"},{"sl":"Mon Apr 13 08:59:38 GMT-04:00 2015","smogon":"Chinese Restaurant ","inactivity":"Weekends","timezone":"Us-Canada ","metagames":"ORAS, BW, STABmons","psname":"Chinese Restaurant "},{"sl":"Mon Apr 13 09:13:05 GMT-04:00 2015","smogon":"YourKouhai","inactivity":"No","timezone":"PST","metagames":"ORAS, Monothreat, AAA, STABmons","psname":"YourKouhai"},{"sl":"Mon Apr 13 09:58:45 GMT-04:00 2015","smogon":"ace15035","inactivity":"Mondays and Thursdays 5-10","timezone":"GMT -5","metagames":"ORAS","psname":"ace15035"},{"sl":"Mon Apr 13 09:59:45 GMT-04:00 2015","smogon":"Unity Mullin","inactivity":"Saturday the 16th i will be at work from 8am-3pm","timezone":"Eastern","metagames":"ORAS","psname":"Skyfall Mullin"},{"sl":"Mon Apr 13 10:25:31 GMT-04:00 2015","smogon":"vuyo123","inactivity":"cant play during the week","timezone":"england","metagames":"ORAS","psname":"vuyomakoni"},{"sl":"Mon Apr 13 11:53:50 GMT-04:00 2015","smogon":"Herndonchad","inactivity":"Should be active unless something unexpected comes up. will be inactive 7-3 EST everday till mid june for school","timezone":"EST","metagames":"ORAS, BW, Monothreat, AAA","psname":"Herndonchad"},{"sl":"Mon Apr 13 12:00:25 GMT-04:00 2015","smogon":"the fire King infernape ","inactivity":"School Monday to Friday ","timezone":"Colorado ","metagames":"ORAS","psname":"Kinginfernape5"}];

var typeList = [
	"bug",
    "dark",
    "dragon",
    "electric",
    "fairy",
    "fighting",
    "fire",
    "flying",
    "ghost",
    "grass",
    "ground",
    "ice",
    "normal",
    "poison",
    "psychic",
    "rock",
    "steel",
    "water"];

var http = require('http');
var sys = require('sys');
var mmc = require('./mmc.js').mmc // used to maintain touraments in monotype room
var scout = require('./scoutChecker.js').scout;
var $ = require('jquery')(require("jsdom").jsdom().parentWindow);
$.support.cors = true;

var staffList = [
		'freeroamer', 'omegaxis14', 'scpinion', 
		'acast', 'anttya', 'betahousing', 'deathonwings', 'dell', 'dirpz', 'dreameatergengar', 'eeveegeneral', 'formerhope', 'saesae', 'zinnia', 
		'arkenciel', 'blackschwan', 'bondie', 'clearly', 'megapikchu', 'misakamikoto'
		];


var nomList = [];
var bidders = [];
var managers = ['@Anttya','@Dirpz','@Death on Wings','#Omega-Xis14','@FreeRoamer','#scpinion'];
//var managers = ['haxQueen','someRandomGuy','Life below Gills','Last Letter of the Greek Alphabet','nomad','#scpinion'];
var teamLookup = ['aa','cc','dd','mm','ll','ss']//used as a lookup for the team in the "teams" list teams[teamLookup.IndexOf('ss')]
var currentBid = 0;
var bidHistory = [];
var currentMaxBidder = -1; //a number corresponding to the manager/team index.
var currentUp4Bid='blah';
var biddingActive = false;
var managerUpForBid = false;
var currentlyNominating = '#scpinion';
var aa={name: 'Ambitious Altarias',
	manager: '@Anttya',
	budget: 100000,
	players: [],
	allowedBidders: [],
	maxBid: 68000
}
var cc={name: 'Cute Clefables',
	manager: '@Dirpz',
	budget: 100000,
	players: [],
	allowedBidders: [],
	maxBid: 68000
};
var dd={name: 'Devious Diancies',
	manager: '@Death on Wings',
	budget: 100000,
	players: [],
	allowedBidders: [],
	maxBid: 68000
};
var mm={name: 'Mauville Maulers',
	manager: '#Omega-Xis14',
	budget: 100000,
	players: [],
	allowedBidders: [],
	maxBid: 68000
};
var ll={name: 'Lewd Lucarios',
	manager: '@FreeRoamer',
	budget: 100000,
	players: [],
	allowedBidders: [],
	maxBid: 68000
	
};
var ss={name: 'Salacious Swamperts',
	manager: '#scpinion',
	budget: 100000,
	players: [],
	allowedBidders: [],
	maxBid: 68000
};
var teams = [aa,cc,dd,mm,ll,ss];

if (config.serverid === 'showdown') {
	var https = require('https');
	var csv = require('csv-parse');
}

var owner = '+scpinion';

exports.commands = {
	
	/********************************
	 * MonoPL Draft Commands
	 * *****************************/
	
	// adjustBudget: function(arg, by, room) {
	// 	if(by.localeCompare('#scpinion')==0 || by.localeCompare('%Irraquated')==0 || by.localeCompare('#Nani Man')==0 || by.localeCompare('@Zinnia')==0){
	// 		if (arg){
	// 			var asdf=arg.split(', ');
	// 			var foo = teamLookup.indexOf(asdf[0]);
	// 			if (foo>=0 && foo<7 && asdf.length>1){
	// 				if(!isNaN(parseFloat(asdf[1])) && isFinite(asdf[1])){
	// 					var blah = asdf[1]*1;
	// 					teams[foo].budget = teams[foo].budget + blah;
	// 					teams[foo].maxBid = teams[foo].budget - (9 - teams[foo].players.length-1)*4000;
	// 					var text = 'budget edited; use .st or .sta to view';
	// 					this.say(room, text);
	// 				}
	// 			}
	// 		}
	// 	}
	// },
	
	// b:'bid',
	// bid: function(arg, by, room) {
	// 	//only managers can bid
	// 	if (managers.indexOf(by) >= 0) {
	// 		var text = '';
	// 		if (biddingActive){
	// 			//check for a numeric entry
	// 			if(arg && !isNaN(parseFloat(arg)) && isFinite(arg)){
	// 				if(arg<4000){
	// 					arg=arg*1000
	// 				}
	// 				var editedBid = 500 * Math.round(arg/500); 
	// 				var managerIndex = managers.indexOf(by);
	// 				if(editedBid <= teams[managerIndex].maxBid){
	// 					if(editedBid>currentBid){
	// 						currentBid=editedBid;
	// 						currentMaxBidder = managers.indexOf(by);
	// 						bidHistory.push([managerIndex,editedBid])
	// 						text+=teams[managerIndex].name +': ' + currentBid;
	// 					} else if(editedBid<=currentBid){
	// 						text+=teams[managerIndex].name +': bid must me at least 500 higher than the max bid of ' + currentBid;
	// 					} else {
	// 						text+='scp messed up';
	// 					}
	// 				} else {
	// 					text+= teams[managerIndex].name + ': bid must be less than your max allowed bid of ' + teams[managerIndex].maxBid
	// 				}
	// 			} else {
	// 				text+='type a number next time dummy';
	// 			}
	// 		} else {
	// 			text+='bidding is currently disabled';
	// 		}
	// 	} else {
	// 		var text = '/pm ' + by + ', yeah...only managers can do that';
	// 	}
	// 	this.say(room, text);
	// },
	
	// lb:'listBidders',
	// listBidders: function(arg, by, room) {
	// 	if(by.localeCompare('#scpinion')==0){
	// 		var text = '';
	// 		for (i in managers){
	// 			text+=managers[i] + ', ' + teams[i].manager + '; ';
	// 		}
			
	// 		this.say(room, text);
	// 	}
	// },
	
	// changeBidder: function(arg, by, room) {
	// 	if(by.localeCompare('#scpinion')==0 || by.localeCompare('#Nani Man')==0 || by.localeCompare('@Zinnia')==0){
			
	// 		if(arg){
	// 			var asdf=arg.split(', ')
	// 		}
	// 		//change person in manager list
	// 		if(asdf.length>1){
	// 			if(teamLookup.indexOf(asdf[0]) > 0){
	// 				var teamIndex = teamLookup.indexOf(asdf[0])
	// 				var text = managers[teamIndex] + ' has been replaced by ' + asdf[1] +' as the bidder for the ' + teams[teamIndex].name;
	// 				if(managers[teamIndex].localeCompare(currentlyNominating)==0){
	// 					currentlyNominating=asdf[1];
	// 				}
	// 				teams[teamIndex].manager = asdf[1];
	// 				managers[teamIndex] = asdf[1];
	// 				this.say(room, text);
	// 			}
	// 		}
			
	// 	}
	// },
	
	// endBidding: function(arg, by, room) {
	// 	if(by.localeCompare('#scpinion')==0 || by.localeCompare('#Nani Man')==0 || by.localeCompare('@Zinnia')==0){
	// 		var text= '';
	// 		text+= currentUp4Bid.psname + ' is no longer up for bid ';
	// 		this.say(room, text);
	// 		//text= '/modnote ' + currentUp4Bid.psname + ' joins the ' + teams[currentMaxBidder].name +' for ' + currentBid;
	// 		//this.say(room, text);
	// 		biddingActive = false;
	// 		text = currentlyNominating + ' is up to nominate'
	// 		this.say(room, text)
	// 	}
	// },
	
	// // lb:'listBidders',
	// // listBidders: function(arg, by, room) {
	// // 	if(by.localeCompare('#scpinion')==0){
	// // 		var text = '';
	// // 		for (i in managers){
	// // 			text+=managers[i] + ', ';
	// // 		}
	// // 		for (j in bidders){
	// // 			text+=bidders[j] + ', ';
	// // 		}
	// // 		this.say(room, text);
	// // 	}
	// // },
	
	// mb:'maxBid',
	// maxBid: function(arg, by, room) {
	// if (this.hasRank(by, '#~') || room.charAt(0) === ',') {
	// 		var text = '';
	// 	} else {
	// 		var text = '/pm ' + by + ', ';
	// 	}
	// 	if (arg){
	// 		var blah = teamLookup.indexOf(arg);
	// 		if(blah >= 0){
	// 			text += teams[blah].name + ' max possible bid: ' + teams[blah].maxBid;
	// 		}
	// 	} else {
	// 		text += 'retry with a team identifier'
	// 	}
	// 	this.say(room, text);
	// },
	
	// mba:'maxBids',
	// maxBids: function(arg, by, room) {
		
	// 	for (var i in teams) {
	// 		if (this.hasRank(by, '#~') || room.charAt(0) === ',') {
	// 			var text = '';
	// 		} else {
	// 			var text = '/pm ' + by + ', ';
	// 		}
	// 		text+= teams[i].name + ': ' + teams[i].maxBid;
	// 		this.say(room, text);
	// 	}
	// },
	
	// nom:'nominate',//set the current player up for bid
	// nominate: function(arg, by, room) {
	// 	//only managers can nominate
	// 	if (managers.indexOf(by) >= 0 && by.localeCompare(currentlyNominating)==0) {
	// 		//only nominate a new player is we aren't currently bidding
	// 		if (!(biddingActive)){
	// 			var managerNames = ['Anttya','Dirpz','Death on Wings', 'Omega-Xis14','FreeRoamer','scpinion']
	// 			var text='';
	// 			var isManager=false;
	// 			var managerIndex = 0;
	// 			var inputName = '';
	// 			var databaseName = '';
				
	// 			for(var i in playerDatabase){
					
	// 				//format the names
	// 				inputName = arg.split(' ').join('');
	// 				//is the player in the database?
	// 				databaseName=playerDatabase[i].psname.split(' ').join('')
	// 				if(inputName.toLowerCase().localeCompare(databaseName.toLowerCase())==0){
	// 					currentUp4Bid=playerDatabase[i];
	// 					if(nomList.indexOf(currentUp4Bid.psname)<0){
	// 						//check if the nominee is a manager
	// 						for (var j in managerNames){
	// 							if(inputName.toLowerCase().localeCompare(managerNames[j].split(' ').join('').toLowerCase())==0){
	// 								isManager=true;
	// 								//managers can only nominate themselves
	// 								if (by.localeCompare(teams[j].manager)==0){
	// 									currentBid=15000;
	// 									currentMaxBidder = managers.indexOf(by);
	// 									text=currentUp4Bid.psname +', metagames: '+ currentUp4Bid.metagames;
	// 									this.say(room, text);
	// 									text=teams[currentMaxBidder].name +': ' + currentBid;
	// 									managerUpForBid = true;
	// 								} else {
	// 									text='you can\'t have another manager on your team! '
	// 								}
	// 							} 
	// 						}
	// 						//if the nom is not a manager, go through the regular process
	// 						if(!(isManager)) {
	// 							biddingActive=true;
	// 							text=currentUp4Bid.psname +', metagames: '+ currentUp4Bid.metagames
	// 							this.say(room, text);
								
	// 							currentBid=4000;
	// 							currentMaxBidder = managers.indexOf(by);
	// 							text=teams[currentMaxBidder].name +': ' + currentBid;
	// 							bidHistory.push([currentMaxBidder,currentBid])
	// 						} 
	// 						break
	// 					} else{
	// 						text='that player has already been drafted';
	// 						break
	// 					}
	// 				} else {
	// 					text='player not found'
	// 				}		
	// 			}
	// 			this.say(room, text);	
	// 		}
	// 	}
	// },
	
	// sa: 'showall',
	// showall: function(arg, by, room) {
		
	// 	for (var i in teams) {
	// 		if (this.hasRank(by, '#~') || room.charAt(0) === ',') {
	// 			var text = '';
	// 		} else {
	// 			var text = '/pm ' + by + ', ';
	// 		}
	// 		text+= teams[i].name + ' (' + teams[i].budget + '): ';
	// 		for (var j in teams[i].players){
	// 			text+= teams[i].players[j].psname + ', ';
	// 		}
	// 		this.say(room, text);
	// 	}
	// },
	
	// //show the full bid history for the current player
	// showBidHistory: function(arg, by, room) {
	// 	if (this.hasRank(by, '#~')) {
	// 		var text = '';
	// 		for(var bid in bidHistory){
	// 			text+= bidHistory[bid][0] + ', ' + bidHistory[bid][1] + ';   ';
	// 		}
	// 		this.say(room, text);
	// 	}
	// },
	
	// st: 'showteam',
	// showteam: function(arg, by, room) {
	// 	if (this.hasRank(by, '#~') || room.charAt(0) === ',') {
	// 			var text = '';
	// 		} else {
	// 			var text = '/pm ' + by + ', ';
	// 		}
	// 		if (arg){
	// 			var blah = teamLookup.indexOf(arg);
	// 			if (blah >= 0){
	// 				text+= teams[blah].name + ' (' + teams[blah].budget + '): ';
	// 				for (var j in teams[blah].players){
	// 					text+= teams[blah].players[j].psname + ', ';
	// 				}
	// 			} else {
	// 				text +='try again with a team identifier';
	// 			}
				
	// 		} else {
	// 			text +='try again with a team identifier';
	// 		}
	// 		this.say(room, text);
	// },
	
	// skip: function(arg, by, room) {
	// 	if (this.hasRank(by, '#~')) {
	// 		var blah = managers.indexOf(currentlyNominating);
	// 		if(blah < 5){
	// 			currentlyNominating = managers[blah+1];
	// 		} else {
	// 			currentlyNominating = managers[0];
	// 		}
	// 		blah = managers.indexOf(currentlyNominating);
	// 		var text = 'the ' + teams[blah].name + ' are currently up to nominate';
	// 		this.say(room, text);
	// 	}
	// },
	
	// sold: function(arg, by, room) {
	// 	if(by.localeCompare('#scpinion')==0 || by.localeCompare('#Nani Man')==0 || by.localeCompare('@Zinnia')==0) {
	// 		if(biddingActive || managerUpForBid) {
	// 			var text= '';
	// 			currentUp4Bid.price = currentBid;
	// 			teams[currentMaxBidder].players.push(currentUp4Bid);
	// 			teams[currentMaxBidder].budget = teams[currentMaxBidder].budget - currentBid;
	// 			nomList.push(currentUp4Bid.psname);
	// 			teams[currentMaxBidder].maxBid = teams[currentMaxBidder].budget - (9 - teams[currentMaxBidder].players.length-1)*4000;
	// 			text+= currentUp4Bid.psname + ' joins the ' + teams[currentMaxBidder].name +' for ' + currentBid;
	// 			this.say(room, text);
	// 			text= '/modnote ' + currentUp4Bid.psname + ' joins the ' + teams[currentMaxBidder].name +' for ' + currentBid;
	// 			this.say(room, text);
	// 			biddingActive = false;
	// 			managerUpForBid = false;
	// 			//update manager that is currently nominating
	// 			var blah = managers.indexOf(currentlyNominating)
	// 			if(blah < 5){
	// 				currentlyNominating = managers[blah+1];
	// 			} else {
	// 				currentlyNominating = managers[0];
	// 			}
	// 			blah = managers.indexOf(currentlyNominating)
	// 			text = 'the ' + teams[blah].name + ' are currently up to nominate'
	// 			this.say(room, text)
	// 		} else {
	// 			text = 'bidding is currently inactive'
	// 			this.say(room, text);
	// 		}
	// 	} 
	// },
	
	// ub:'undoBid',
	// undoBid: function(arg, by, room) {
	// 	if (this.hasRank(by, '#~') && biddingActive) {
	// 		if (!(bidHistory.length < 2)){
	// 			var text = '';
	// 			var oldMaxBid = bidHistory[bidHistory.length-1][1]
	// 			var oldMaxBidder = teams[bidHistory[bidHistory.length-1][0]].name;
	// 			text+= 'the bid of ' + oldMaxBid +' by the ' + oldMaxBidder + ' has been removed'
	// 			this.say(room, text);
				
	// 			text = '';
	// 			bidHistory.pop();
	// 			currentBid = bidHistory[bidHistory.length-1][1];
	// 			currentMaxBidder = bidHistory[bidHistory.length-1][0];
	// 			text+= 'the bid of ' + currentBid + ' by the ' + teams[currentMaxBidder].name + ' has been restored';
	// 			this.say(room, text);
	// 		} else {
	// 			text = 'can\'t remove the first bid';
	// 			this.say(room, text);
	// 		}
	// 	}
	// },
	
	// whoIs:'whoIsNominating',
	// whoIsNominating: function(arg, by, room) {
	// 	if (this.hasRank(by, '#~')) {
	// 		var text = currentlyNominating;
	// 		this.say(room, text);
	// 	}
	// },
	
	//  /*************************
	//  * Fun Commands			  *
	//  * ***********************/
	
	// rof: function(arg, by, room) {
	// 	if (this.hasRank(by, '@#~') || room.charAt(0) === ',') {
	// 		var text = '';
	// 	} else {
	// 		var text = '/pm ' + by + ', ';
	// 	}
	// 	if(by.localeCompare('#scpinion')==0){
	// 		text+= 'I\'m going to draft and drop DEG; ';
	// 	}
	// 	if(by.localeCompare('#Nani Man')==0){
	// 		text+= 'tan, ';
	// 	}
	// 	if(by.localeCompare('@Dirpz')==0){
	// 		text+= 'Ay Lmao! ';
	// 	}
	// 	if(by.localeCompare('#Omega-Xis14')==0){
	// 		text+= 'Nani is so tanned! ';
	// 	}
	// 	if(by.localeCompare('@Anttya')==0){
	// 		text+= 'Nani is so tanned! ';
	// 	}
	// 	if(by.localeCompare('@Death on Wings')==0){
	// 		text+= 'DEG\'s a nub! ';
	// 	}
	// 	if(by.localeCompare('%Irraquated')==0){
	// 		text+='haha I deleted my rof! (DoW is new around here) ';
	// 	}
	// 	text += 'rof';
	// 	this.say(room, text);
	// },
	// sae: function(arg, by, room) {
	// 	if (this.hasRank(by, '@#~') || room.charAt(0) === ',') {
	// 		var text = '';
	// 	} else {
	// 		var text = '/pm ' + by + ', ';
	// 	}
		
	// 	if(by.localeCompare('%Sae')==0){
	// 		text= arg;
	// 	}else{
	// 		text += 'you\'re not Sae';
	// 	}
	// 	this.say(room, text);
	// },
	// 	welcome: function(arg, by, room) {
	// 	if (this.hasRank(by, '@#~') || room.charAt(0) === ',') {
	// 		var text = '';
	// 	} else {
	// 		var text = '/pm ' + by + ', ';
	// 	}
		
	// 	if(by.localeCompare('')==0){;
	// 	}else{
	// 		text += 'Ready to play monopoly, ' + by + '?';
	// 	}
	// 	this.say(room, text);
	// },
	// 	irra: function(arg, by, room) {
	// 	if (this.hasRank(by, '%@#~') || room.charAt(0) === ',') {
	// 		var text = '';
	// 	} else {
	// 		var text = '/pm ' + by + ', ';
	// 	}
		
	// 	if(by.localeCompare('%Irraquated')==0){
	// 		text+= 'Welcome to the monopoly room User: Irraquated :]';
	// 	}else{
	// 		text += 'sweatty person using irra\'s command :[';
	// 	}
	// 	this.say(room, text);
	// },
	// pfs: function(arg, by, room) {
	// 	if (this.hasRank(by, '%@#~') || room.charAt(0) === ',') {
	// 		var text = '';
	// 	} else {
	// 		var text = '/pm ' + by + ', ';
	// 	}
	// 	text += 'https://www.youtube.com/watch?v=9fGCVb6eS6A';
	// 	this.say(room, text);
	// },
	
	/************************************************************************************
*  Monotype OT Commands											*
*************************************************************************************/
	startOT: function(arg, by, room){
		if (this.hasRank(by, '%@#~') ) {
			this.say(room, '/wall An Official Tour (OT) has started!  Team Switching is now allowed in OTs! There is still **no** scouting and **no** revealing other user’s teams. __Break the rules and you will be dq’d, or in severe cases, banned from future OTs.__ \n/wall Starts in 10 minutes. If you think someone has broken the rules, please pm a % or higher that is not participating in the OT. You will need evidence of their wrong-doing, so make sure to keep the battles open or save your replays. \nOT Rules: http://monotypeps.weebly.com/monotype-monthly-championship.html');
			var text = '/tour create monotype, elimination';
			console.log("***OT Started***");
			mmc.otTrue();
		} else if (room.charAt(0) === ',') {
			var text = 'Try starting the tour in the Monotype room, not a pm. :P';
		} else {
			var text = '/pm ' + by + ', only staff can use this command';;
		}
		this.say(room, text);
		this.say(room, '/tour setautostart 10');
	},
	/************************************************************************************
*  Tournament Commands											*
*************************************************************************************/
	startTour: function(arg, by, room) {
		if (room.charAt(0) === ',') {
			var text = 'why would you pm me that?';
		} else if (this.hasRank(by, '%@#~')) {
			var text = '/tour start';
		} else{
			var text = '/pm ' + by + ', only staff can use this command.';
		}
		this.say(room, text);
	},
	newTour: function(arg, by, room) {
		if (room.charAt(0) === ',') {
			var text = 'why would you pm me that?';
		} else if (this.hasRank(by, '%@#~')) {
			var text = '/tour ' + arg; 
		} else{
			var text = '/pm ' + by + ', only staff can use this command.';
		}
		this.say(room, text);
	},
	tour: function(arg, by, room) {
		if (room.charAt(0) === ',') {
			var text = 'why would you pm me that?';
		} else if (this.hasRank(by, '%@#~')) {
			var text = '/tour ' + arg;
		} else{
			var text = '/pm ' + by + ', only staff can use this command.';
		}
		this.say(room, text);
	},
	scoutCheck: function(arg, by, room) {
		if (this.hasRank(by, '%@#~')) {
			if(arg ==='on') {
				scout.scoutTrue();
				text = '/wall Tour players that watch other players\' battles will be disqualified!'
			}
			if(arg ==='off') {
				scout.scoutFalse();
				text = '/wall Tour players are allowed to watch other players\' battles!';
			}
		} else if (room.charAt(0) === ',') {
			var text = 'This command only works in the main chat.';
		} else{
			var text = '/pm ' + by + ', only staff can use this command.';
		}
		scout.logCheckScouters();
		this.say(room, text);
	},
	ignoreScouts: function (arg, by, room) {
		if (room.charAt(0) === ',') {
			if(arg ==='on') {
				console.log(by)
				scout.addToIgnoreList(toId(by));
				this.say(room, 'you will not be notified of scouters by pm anymore.');
			}
			if(arg ==='off') {
				scout.removeFromIgnoreList(toId(by))
				this.say(room, 'you will be notified of scouters by pm.');
			}
		}
	},
	/*******************************************/
	//usable by anyone, + and up can broadcast
	/*******************************************/
	bl:'banlist',
	banlist: function(arg, by, room) {
		if (this.hasRank(by, '+%@#~') || room.charAt(0) === ',') {
			var text = '';
		} else{
			var text = '/pm ' + by + ', ';
		}
		text += 'The Monotype banlist can be found here: http://www.smogon.com/dex/xy/formats/monotype/';
		this.say(room, text);
	},
	cc: function(arg, by, room) {
		if (this.hasRank(by, '+%@#~') || room.charAt(0) === ',' || toId(by) === 'rumcoke' || toId(by) === 'omniax') {
			var text = '';
		} else{
			var text = '/pm ' + by + ', ';
		}
		if (arg) {
			text += 'http://monotypeps.weebly.com/challenge-' + arg + '.html';
		} else {
			text += 'The Monotype Core Challenge homepage can be found at: http://monotypeps.weebly.com/core-ladder-challenge.html';
		}
		this.say(room, text);
	},
	contribute:function(arg, by, room) {
		if (this.hasRank(by, '+%@#~') || room.charAt(0) === ',') {
			var text = '';
		} else{
			var text = '/pm ' + by + ', ';
		}
		text += 'You can contribute to the Monotype Strategy Pokedex here: http://monotypeps.weebly.com/contributediscuss.html';
		this.say(room, text);
	},
	monodex:'strategyDex',
	strats: 'strategyDex',
	dex: 'strategyDex',
	strategyDex:function(arg, by, room) {
		if (this.hasRank(by, '+%@#~') || room.charAt(0) === ',') {
			var text = '';
		} else{
			var text = '/pm ' + by + ', ';
		}
		if (arg) {
			arg = arg.split(', ');
			if(typeList.indexOf(arg[0].toLowerCase()) > -1 && arg.length == 1) {
				text +=  arg + '-type analyses: http://monotypeps.weebly.com/strategy-pokedex.html'
				text+='#type=' + arg + '&pokemon=';
			} else if (typeList.indexOf(arg[0].toLowerCase()) > -1) {
				text += arg[1] + ' (' + arg[0] + ') analysis: http://monotypeps.weebly.com/strategy-pokedex.html' 
				text+='#type=' + arg[0] + '&pokemon=' + arg[1];
			} else {
				text += 'Try inputing the command as .dex type, pokemon. http://monotypeps.weebly.com/strategy-pokedex.html';
			}
		} else {
			text += 'The Monotype Strategy Pokedex can be found at: http://monotypeps.weebly.com/strategy-pokedex.html';
		}
		this.say(room, text);
	},
	discussion: 'tiering',
	tiering: function(arg, by, room) {
		if (this.hasRank(by, '+%@#~') || room.charAt(0) === ',') {
			var text = '';
		} else{
			var text = '/pm ' + by + ', ';
		}
		text += 'The Monotype Discussion/Tiering thread can be found at: http://www.smogon.com/forums/threads/oras-monotype.3544507/';
		this.say(room, text);
	},
	suspect: function(arg, by, room) {
		if (this.hasRank(by, '+%@#~') || room.charAt(0) === ',') {
			var text = '';
		} else{
			var text = '/pm ' + by + ', ';
		}
		if (arg === 'id') {
			text += "Voter Identification thread for Altarianite suspect: http://www.smogon.com/forums/threads/monotype-suspect-identification-thread-altarianite.3545803/";
		} else {
			text += 'Altarianite is currently being suspected! Announcement/more info: http://www.smogon.com/forums/threads/oras-monotype.3544507/page-7#post-6350855';
		}
		this.say(room, text);
	},
	gc:'goodCores',
	goodCores: function(arg, by, room) {
		if (this.hasRank(by, '+%@#~') || room.charAt(0) === ',') {
			var text = '';
		} else{
			var text = '/pm ' + by + ', ';
		}
		text += 'The Monotype Good Cores thread can be found at: http://www.smogon.com/forums/threads/monotype-good-cores-see-post-136-for-updates.3519342/';
		this.say(room, text);
	},
	lt:'ladderTour',
	ladderTour: function(arg, by, room) {
		if (this.hasRank(by, '+%@#~') || room.charAt(0) === ',') {
			var text = '';
		} else{
			var text = '/pm ' + by + ', ';
		}
		
		if (arg === 'playoffs') {
			text += 'The Monotype Ladder Tour Playoff bracket can be found at: http://monotypeps.weebly.com/playoffs.html';
		} else {
			text += 'Info on the Monotype Ladder Tour can be found at: http://monotypeps.weebly.com/monotype-ladder-tour.html';
		}
		this.say(room, text);
	},
	st:'sampleTeams',
	sampleTeams: function(arg, by, room) {
		if (this.hasRank(by, '+%@#~') || room.charAt(0) === ',') {
			var text = '';
		} else{
			var text = '/pm ' + by + ', ';
		}
		text += 'The Monotype sample teams can be found at: http://monotypeps.weebly.com/sample-teams.html';
		this.say(room, text);
	},
	stats: function(arg, by, room){
		if (this.hasRank(by, '+%@#~') || room.charAt(0) === ',') {
			var text = '';
		} else{
			var text = '/pm ' + by + ', ';
		}
		if(arg) {
			switch (arg) {
				case 'gallery':
				case 'sg':
				case 'sprites':
				case 'spriteGallery':
				case 'usage':
					text += 'Monotype usage stats sprite gallery: http://monotypeps.weebly.com/sprite-gallery.html';
					break;
				case 'tables':
				case 'matchup':
				case 'mt':
				case 'matchupTables':	
					text += 'Monotype type matchup tables: http://monotypeps.weebly.com/matchup-tables.html';
					break;
				case 'trends':
				case 'typeAnalyses':
				case 'ta':
				case 'leads':
					text += 'Monotype type analyses/metagame trends: http://monotypeps.weebly.com/type-analyses.html';
					break;
				default:
					text += 'Monotype stats homepage: http://monotypeps.weebly.com/stats.html';
					break;
			}
		} else {
			text += 'Monotype stats homepage: http://monotypeps.weebly.com/stats.html';
		}
		this.say(room, text);
	},
	standings: function(arg, by, room) {
		if (this.hasRank(by, '+%@#~') || room.charAt(0) === ',') {
			var text = '';
		} else{
			var text = '/pm ' + by + ', ';
		}
		text += 'The Monotype Monthly Championship Standings can be found at: http://monotypeps.weebly.com/monotype-monthly-championship.html';
		this.say(room, text);
	},
	tf:'topFinishers',
	topFinishers: function(arg, by, room) {
		if (this.hasRank(by, '+%@#~') || room.charAt(0) === ',' || toId(by) === 'rumcoke' || toId(by) === 'omniax') {
			var text = '';
		} else{
			var text = '/pm ' + by + ', ';
		}
		text += 'The Top Finishers Hall of Fame can be found at: http://monotypeps.weebly.com/top-finishers.html';
		this.say(room, text);
	},
	tourLog: function(arg, by, room) {
		if (this.hasRank(by, '+%@#~') || room.charAt(0) === ',') {
			var text = '';
		} else{
			var text = '/pm ' + by + ', ';
		}
		text += 'The current Monotype Monthly Championship Tour Log can be found at: https://docs.google.com/spreadsheets/d/13ybodryeRS-Vw7k1V8T0SYe-EgX3J7zVGve_xebqNfI/pubhtml?gid=0&single=true';
		this.say(room, text);
	},
	vr:'viabilityRankings',
	viabilityRankings:function(arg, by, room) {
		if (this.hasRank(by, '+%@#~') || room.charAt(0) === ',') {
			var text = '';
		} else{
			var text = '/pm ' + by + ', ';
		}
		text += 'The Monotype Viability Rankings thread can be found at: http://www.smogon.com/forums/threads/monotype-viability-rankings-see-post-1118-before-reserving.3517737/';
		this.say(room, text);
	},
	ot: function(arg, by, room) {
		if (this.hasRank(by, '+%@#~') || room.charAt(0) === ',') {
			var text = '';
		} else{
			var text = '/pm ' + by + ', ';
		}
		text += 'Info on the Monotype Monthly Championship can be found at: http://monotypeps.weebly.com/monotype-monthly-championship.html';
		this.say(room, text);
	},
	nextot:'nextOT',
	nextOT: function(arg, by, room) {
		if (room.charAt(0) === ',') {
			var text = '';
		} else if (this.hasRank(by, '+%@#~')) {
			var text = '/wall ';
		} else{
			var text = '/pm ' + by + ', ';
		}
		var now = new Date();
		
		var timeOfNextTour = [];
		if (now.getUTCHours() < 1) {
			timeOfNextTour = [now.getFullYear(), now.getMonth(), now.getUTCDate(), 1, 0];
		} else if (now.getUTCHours() < 7) {
			timeOfNextTour = [now.getFullYear(), now.getMonth(), now.getUTCDate(), 7, 0];
		} else if (now.getUTCHours() < 13) {
			timeOfNextTour = [now.getFullYear(), now.getMonth(), now.getUTCDate(), 13, 0];
		} else if (now.getUTCHours() < 19) {
			timeOfNextTour = [now.getFullYear(), now.getMonth(), now.getUTCDate(), 19, 0];
		} else if (now.getUTCHours() >= 19) {
			timeOfNextTour = [now.getFullYear(), now.getMonth(), now.getUTCDate() + 1, 1, 0];
		}
		
		var end = new Date(timeOfNextTour[0],timeOfNextTour[1],timeOfNextTour[2],timeOfNextTour[3],timeOfNextTour[4]);
		var _second = 1000;
        var _minute = _second * 60;
        var _hour = _minute * 60;
        var _day = _hour * 24;
		
		var distance = end-now;
        
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute) + 1;
        if (hours == 0) {
        	text += 'The next Official Tour for the Monotype Monthly Championship will be in ' + minutes + ' minute(s).';
        } else {
			text += 'The next Official Tour for the Monotype Monthly Championship will be in ' + hours + ' hour(s) and ' + minutes + ' minute(s).';
        }
		this.say(room, text);
	},
	coil: function(arg, by, room) {
		if(!(room.charAt(0) === ',')) return;
		
		send("|/pm " + by + ", " + "There isn't a Monotype suspect right now!");
		return;
		
		try{
			var http = require("http");
			var coil = require("./coil.js").coil;
			
			var userid = toId(by);
			if(arg) userid = toId(arg);
			
			var options = {
			  host: 'play.pokemonshowdown.com',
			  path: '/~~showdown/action.php?act=ladderget&user=' + userid
			};
			
			var doStuff = function() {
				var coil = require("./coil.js").coil;
				var blah = coil.getBlah();
				var monoIndex = coil.getIndex();
				if (monoIndex > -1){
					var tag = 'MS1';
					var B = 16;
			    	var C = 2600;
			    	var N = parseInt(blah[monoIndex]["w"]) + parseInt(blah[monoIndex]["l"]) + parseInt(blah[monoIndex]["t"]);
			    	var GXE = blah[monoIndex]["gxe"];
			    	var COIL = 40*GXE*Math.pow(2,(-1*B/N));
			    	var gamesLeft = Math.ceil((B/(Math.log(40*GXE/C) / Math.log(2))) - N);
			    	var foo2= userid + ': ' + Math.floor(COIL) + " W: " + blah[monoIndex]["w"] + " L: " + blah[monoIndex]["l"] + " GXE: " + blah[monoIndex]["gxe"] + " B: 16."
			    	if (COIL < C) console.log(foo2.blue.bold);
			    	if (COIL >= C && toId(userid.substr(0, tag.length)) === toId(tag)) console.log(foo2.green.bold);
			    	if (COIL < C){
			    		if(toId(userid.substr(0, tag.length)) === toId(tag)){
			    			send("|/pm " + by + ", " + userid + "'s current COIL is: **" + Math.floor(COIL) + "**. A COIL of " + C + " is required to vote in the suspect test.");
			    		} else {
			    			send("|/pm " + by + ", " + userid + "'s current COIL is: **" + Math.floor(COIL) + "**. A COIL of " + C + " on an account that starts with the " + tag + " tag is required to vote in the suspect test.");
			    		}
			    	} else {
			    		if(toId(userid.substr(0, tag.length)) === toId(tag)){
			    			send("|/pm " + by + ", " + userid + "'s current COIL is: **" + Math.floor(COIL) + "**. They may vote in the suspect test!");
			    		} else {
			    			send("|/pm " + by + ", " + userid + "'s current COIL is: **" + Math.floor(COIL) + "**. A COIL of " + C + " on an account that starts with the " + tag + " tag is required to vote in the suspect test.");
			    		}
			    	}
			    	send("|/pm " + by + ", " + "This value was calculated using the following info (let scp know if it is incorrect): W: " + blah[monoIndex]["w"] + " L: " + blah[monoIndex]["l"] + " GXE: " + blah[monoIndex]["gxe"] + " B: 16.");
				} else {
					send("|/pm " + by + ", " + userid + " has not played any monotype games yet!");
				}
				coil.setBlah([]);
				coil.setIndex(-1);
			};
			
			http.get(options, function (http_res) {
			    var data = "";
			    http_res.on("data", function (chunk) {
			        data += chunk;
			    });
			    http_res.on("end", function () {
		        	
					try{
		        		var blah = JSON.parse(data.substr(1));
					} catch (e) {
						console.log('@@@@@ error parsing JSON from PS! @@@@@')
						console.log(e)
						console.log(data)
						return;
					}
		        	coil.setBlah(blah);
		        	
		        	var i = 0;
		        	while (i < blah.length) {
		        		if(blah[i].formatid === 'monotype') {
		        			coil.setIndex(i);
		        			break;
		        		}
		        		i++;
		        	}
		        	doStuff();
			    });
			});
		} catch(e) {
			console.log(e);
		}
	},
	
	/*******************************************/
	//usable only by scpinion to manage the bot
	/*******************************************/
	test: function(arg, by, room) {
		if(room.charAt(0) === ',' && by === owner) console.log('.test: ' + mmc.isOT);
		//this.say(room, 'Tour Log has been re-written to tourLog.txt. Use .tourLog to view');
	},
	otTrue: function(arg, by, room) {
		if(room.charAt(0) === ',' && by === owner) mmc.otTrue();
		//this.say(room, 'Tour Log has been re-written to tourLog.txt. Use .tourLog to view');
	},
	otFalse: function(arg, by, room) {
		if(room.charAt(0) === ',' && by === owner) mmc.otFalse();
		//this.say(room, 'Tour Log has been re-written to tourLog.txt. Use .tourLog to view');
	},
	changeAvatar: function(arg, by, room){
		if(room.charAt(0) === ',' && by === owner) this.say('monotype', '/avatar ' + arg)
	},
	talk: function(arg, by, room){
		if(room.charAt(0) === ',' && by === owner) this.say('monotype', arg)
	},
	
	// testing commands
	foo: function(arg, by, room) {
		if(room.charAt(0) === ',' && by === owner) {
			scout.scoutFalse();
			scout.logCheckScouters();
		}
	},
	bar: function(arg, by, room) {
		if(room.charAt(0) === ',' && by === owner) {
			scout.scoutTrue();
			scout.logCheckScouters();
		}
	},
	blah: function (){
		scout.logCheckScouters();
	},
/************************************************************************************
*  BoTTT Commands																	*
*  These are all the commands from BoTTT, made by TalkTakesTime, Quinella & Morfent.*
*************************************************************************************/

	credits: 'about',
	about: function(arg, by, room) {
		if (this.hasRank(by, '#~') || room.charAt(0) === ',') {
			var text = '';
		} else {
			var text = '/pm ' + by + ', ';
		}
		text += '**The Lord Monotyke** by: scpinion. Built from boTTT code by TalkTakesTime. More Info: http://pastebin.com/zzE5t1Z4';
		this.say(room, text);
	},
	git: function(arg, by, room) {
		var text = config.excepts.indexOf(toId(by)) < 0 ? '/pm ' + by + ', ' : '';
		text += '**Pokemon Showdown Bot** source code: ' + config.fork;
		this.say(room, text);
	},
	help: 'guide',
	guide: function(arg, by, room) {
		if (this.hasRank(by, '#~') || room.charAt(0) === ',') {
			var text = '';
		} else {
			var text = '/pm ' + by + ', ';
		}
		if (config.botguide) {
			text += 'A guide on how to use this bot can be found here: ' + config.botguide;
		} else {
			text += 'There is no guide for this bot. PM the owner with any questions.';
		}
		this.say(room, text);
	},
	commandList: function(arg, by, room) {
		if (this.hasRank(by, '#~') || room.charAt(0) === ',') {
			var text = '';
		} else {
			var text = '/pm ' + by + ', ';
		}
		text += 'http://pastebin.com/zzE5t1Z4';
		this.say(room, text);
	},

	reload: function(arg, by, room) {
		if (!this.hasRank(by, '#~')) return false;
		try {
			this.uncacheTree('./commands.js');
			Commands = require('./commands.js').commands;
			this.uncacheTree('./coil.js');
			coil = require('./coil.js').coil;
			this.say(room, 'Commands reloaded.');
		} catch (e) {
			error('failed to reload: ' + sys.inspect(e));
		}
	},
	custom: function(arg, by, room) {
		if (!this.hasRank(by, '~')) return false;
		if (arg.indexOf('[') === 0 && arg.indexOf(']') > -1) {
			var tarRoom = arg.slice(1, arg.indexOf(']'));
			arg = arg.substr(arg.indexOf(']') + 1).trim();
		}
		this.say(tarRoom || room, arg);
	},
	settings: 'set',
	set: function(arg, by, room) {
		if (!this.hasRank(by, '%@&#~') || room.charAt(0) === ',') return false;

		var settable = {
			say: 1,
			joke: 1,
			choose: 1,
			usagestats: 1,
			buzz: 1,
			'8ball': 1,
			survivor: 1,
			games: 1,
			wifi: 1,
			monotype: 1,
			autoban: 1,
			happy: 1,
			guia: 1,
			studio: 1,
			'switch': 1,
			banword: 1
		};
		var modOpts = {
			flooding: 1,
			caps: 1,
			stretching: 1,
			bannedwords: 1
		};

		var opts = arg.split(',');
		var cmd = toId(opts[0]);
		if (cmd === 'mod' || cmd === 'm' || cmd === 'modding') {
			if (!opts[1] || !toId(opts[1]) || !(toId(opts[1]) in modOpts)) return this.say(room, 'Incorrect command: correct syntax is ' + config.commandcharacter + 'set mod, [' +
				Object.keys(modOpts).join('/') + '](, [on/off])');

			if (!this.settings['modding']) this.settings['modding'] = {};
			if (!this.settings['modding'][room]) this.settings['modding'][room] = {};
			if (opts[2] && toId(opts[2])) {
				if (!this.hasRank(by, '#~')) return false;
				if (!(toId(opts[2]) in {on: 1, off: 1}))  return this.say(room, 'Incorrect command: correct syntax is ' + config.commandcharacter + 'set mod, [' +
					Object.keys(modOpts).join('/') + '](, [on/off])');
				if (toId(opts[2]) === 'off') {
					this.settings['modding'][room][toId(opts[1])] = 0;
				} else {
					delete this.settings['modding'][room][toId(opts[1])];
				}
				this.writeSettings();
				this.say(room, 'Moderation for ' + toId(opts[1]) + ' in this room is now ' + toId(opts[2]).toUpperCase() + '.');
				return;
			} else {
				this.say(room, 'Moderation for ' + toId(opts[1]) + ' in this room is currently ' +
					(this.settings['modding'][room][toId(opts[1])] === 0 ? 'OFF' : 'ON') + '.');
				return;
			}
		} else {
			if (!Commands[cmd]) return this.say(room, config.commandcharacter + '' + opts[0] + ' is not a valid command.');
			var failsafe = 0;
			while (!(cmd in settable)) {
				if (typeof Commands[cmd] === 'string') {
					cmd = Commands[cmd];
				} else if (typeof Commands[cmd] === 'function') {
					if (cmd in settable) {
						break;
					} else {
						this.say(room, 'The settings for ' + config.commandcharacter + '' + opts[0] + ' cannot be changed.');
						return;
					}
				} else {
					this.say(room, 'Something went wrong. PM TalkTakesTime here or on Smogon with the command you tried.');
					return;
				}
				failsafe++;
				if (failsafe > 5) {
					this.say(room, 'The command "' + config.commandcharacter + '' + opts[0] + '" could not be found.');
					return;
				}
			}

			var settingsLevels = {
				off: false,
				disable: false,
				'false': false,
				'+': '+',
				'%': '%',
				'@': '@',
				'&': '&',
				'#': '#',
				'~': '~',
				on: true,
				enable: true,
				'true': true
			};
			if (!opts[1] || !opts[1].trim()) {
				var msg = '';
				if (!this.settings[cmd] || (!this.settings[cmd][room] && this.settings[cmd][room] !== false)) {
					msg = '' + config.commandcharacter + '' + cmd + ' is available for users of rank ' + ((cmd === 'autoban' || cmd === 'banword') ? '#' : config.defaultrank) + ' and above.';
				} else if (this.settings[cmd][room] in settingsLevels) {
					msg = '' + config.commandcharacter + '' + cmd + ' is available for users of rank ' + this.settings[cmd][room] + ' and above.';
				} else if (this.settings[cmd][room] === true) {
					msg = '' + config.commandcharacter + '' + cmd + ' is available for all users in this room.';
				} else if (this.settings[cmd][room] === false) {
					msg = '' + config.commandcharacter + '' + cmd + ' is not available for use in this room.';
				}
				this.say(room, msg);
				return;
			} else {
				if (!this.hasRank(by, '#~')) return false;
				var newRank = opts[1].trim();
				if (!(newRank in settingsLevels)) return this.say(room, 'Unknown option: "' + newRank + '". Valid settings are: off/disable/false, +, %, @, &, #, ~, on/enable/true.');
				if (!this.settings[cmd]) this.settings[cmd] = {};
				this.settings[cmd][room] = settingsLevels[newRank];
				this.writeSettings();
				this.say(room, 'The command ' + config.commandcharacter + '' + cmd + ' is now ' +
					(settingsLevels[newRank] === newRank ? ' available for users of rank ' + newRank + ' and above.' :
					(this.settings[cmd][room] ? 'available for all users in this room.' : 'unavailable for use in this room.')))
			}
		}
	},
	tell: 'say',
	say: function(arg, by, room) {
		if (!this.canUse('say', room, by)) return false;
		//this.say(room, stripCommands(arg) + ' (' + by + ' said this)');
	},
	blacklist: 'autoban',
	ban: 'autoban',
	ab: 'autoban',
	autoban: function (arg, by, room) {
		if (room.charAt(0) === ',') return false;
		if (!this.hasRank(by, '@#~')) return this.say(room, Config.nick + ' requires rank of @ or higher to (un)blacklist.');

		arg = arg.split(',');
		var added = [];
		var illegalNick = [];
		var alreadyAdded = [];
		if (!arg.length || (arg.length === 1 && !arg[0].trim().length)) return this.say(room, 'You must specify at least one user to blacklist.');
		for (var i = 0; i < arg.length; i++) {
			var tarUser = toId(arg[i]);
			if (tarUser.length < 1 || tarUser.length > 18) {
				illegalNick.push(tarUser);
				continue;
			}
			if (!this.blacklistUser(tarUser, room)) {
				alreadyAdded.push(tarUser);
				continue;
			}
			this.say(room, '/roomban ' + tarUser + ', Blacklisted user');
			added.push(tarUser);
		}
		var text = '';
		if (added.length) {
			text += 'User' + (added.length > 1 ? 's "' + added.join('", "') + '" were' : ' "' + added[0] + '" was') + ' added to the blacklist';
			this.say(room, '/modnote ' + text + ' by ' + by + '.');
			text += '.';
			this.writeSettings();
		}
		if (alreadyAdded.length) text += ' User' + (alreadyAdded.length ? 's "' + alreadyAdded.join('", "') + '" are' : ' "' + alreadyAdded[0] + '" is') +
			' already present in the blacklist.';
		if (illegalNick.length) text += (text.length ? ' All other' : 'All') + ' users had illegal nicks and were not blacklisted.';
		this.say(room, text);
	},
	unblacklist: 'unautoban',
	unban: 'unautoban',
	unab: 'unautoban',
	unautoban: function (arg, by, room) {
		if (room.charAt(0) === ',') return false;
		if (!this.hasRank(this.ranks[room] || ' ', '@#&~')) return this.say(room, Config.nick + ' requires rank of @ or higher to (un)blacklist.');

		arg = arg.split(',');
		var removed = [];
		var notRemoved = [];
		if (!arg.length || (arg.length === 1 && !arg[0].trim().length)) return this.say(room, 'You must specify at least one user to unblacklist.');
		for (var i = 0; i < arg.length; i++) {
			var tarUser = toId(arg[i]);
			if (tarUser.length < 1 || tarUser.length > 18) {
				notRemoved.push(tarUser);
				continue;
			}
			if (!this.unblacklistUser(tarUser, room)) {
				notRemoved.push(tarUser);
				continue;
			}
			this.say(room, '/roomunban ' + tarUser);
			removed.push(tarUser);
		}

		var text = '';
		if (removed.length) {
			text += 'User' + (removed.length > 1 ? 's "' + removed.join('", "') + '" were' : ' "' + removed[0] + '" was') + ' removed from the blacklist';
			this.say(room, '/modnote ' + text + ' by ' + by + '.');
			text += '.';
			this.writeSettings();
		}
		if (notRemoved.length) text += (text.length ? ' No other' : 'No') + ' specified users were present in the blacklist.';
		this.say(room, text);
	},
};
