var blocks_high = ['0020500210', 'Samuel Dalembert', 8, 0, 11, 0, 5, 'Celtics', 'A', '2005', 'https://www.basketball-reference.com/boxscores/2005011300BOS.html'];
var steals_high = ['0028800159', 'Charles Barkley', 41, 5, 22, 6, 1, 'Trail Blazers', 'H', '1988', 'https://www.basketball-reference.com/boxscores/1988011300PHI.html', ['0029600210', 'Allen Iverson', 23, 9, 2, 6, 0, 'Grizzlies', 'H', '1996', 'https://www.basketball-reference.com/boxscores/1996011300PHI.html']];
var rebounds_high = ['0026500098', 'Wilt Chamberlain', 41, 5, 33, 0, 0, 'Wizards', 'A', '1965', 'https://www.basketball-reference.com/boxscores/1965011300WAS.html'];
var assists_high = ['0021200223', 'Jrue Holiday', 13, 15, 2, 0, 1, 'Hornets', 'A', '2012', 'https://www.basketball-reference.com/boxscores/2012011300CHA.html'];
var points_high = ['0026300087', 'Hal Greer', 43, 5, 5, 0, 0, 'Knicks', 'A', '1963', 'https://www.basketball-reference.com/boxscores/1963011300NYK.html', ['0028700139', 'Charles Barkley', 43, 5, 14, 3, 0, 'Jazz', 'A', '1987', 'https://www.basketball-reference.com/boxscores/1987011300UTA.html']];
var date = 'November 30th';
document.getElementById("date").innerHTML =  date;
document.getElementById("PointsLink").href = points_high[10];
document.getElementById("PointsPlayer").innerHTML = points_high[1]+ ": ";
document.getElementById("Points").innerHTML = String(points_high[2]) + " vs. " + points_high[7]; 
document.getElementById("PointsYear").innerHTML = points_high[9];
document.getElementById("AssistsLink").href = assists_high[10];
document.getElementById("AssistsPlayer").innerHTML = assists_high[1]+ ": ";
document.getElementById("Assists").innerHTML = String(assists_high[3]) + " vs. " +  assists_high[7];  
document.getElementById("AssistsYear").innerHTML = assists_high[9]
document.getElementById("ReboundsLink").href = rebounds_high[10];
document.getElementById("ReboundsPlayer").innerHTML = rebounds_high[1]+ ": ";
document.getElementById("Rebounds").innerHTML = String(rebounds_high[4]) + " vs. " + rebounds_high[7]; 
document.getElementById("ReboundsYear").innerHTML = rebounds_high[9];
document.getElementById("StealsLink").href = steals_high[10];
document.getElementById("StealsPlayer").innerHTML = steals_high[1]+ ": ";
document.getElementById("Steals").innerHTML = String(steals_high[5]) + " vs. " + steals_high[7]; 
document.getElementById("StealsYear").innerHTML = steals_high[9];
document.getElementById("BlocksLink").href = blocks_high[10];
document.getElementById("BlocksPlayer").innerHTML = blocks_high[1]+ ": ";
document.getElementById("Blocks").innerHTML = String(blocks_high[6]) + " vs. " +  blocks_high[7]; 
document.getElementById("BlocksYear").innerHTML = blocks_high[9];
