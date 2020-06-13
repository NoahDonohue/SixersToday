var blocks_high = ['0040000086', 'Dikembe Mutombo', 19, 0, 9, 0, 1, 'Lakers', 'H', '2001', 'https://www.basketball-reference.com/boxscores/200106130PHI.html'];
var steals_high = ['0040000086', 'Eric Snow', 11, 4, 4, 3, 0, 'Lakers', 'H', '2001', 'https://www.basketball-reference.com/boxscores/200106130PHI.html'];
var rebounds_high = ['0040000086', 'Dikembe Mutombo', 19, 0, 9, 0, 1, 'Lakers', 'H', '2001', 'https://www.basketball-reference.com/boxscores/200106130PHI.html'];
var assists_high = ['0040000086', 'Allen Iverson', 35, 4, 4, 1, 0, 'Lakers', 'H', '2001', 'https://www.basketball-reference.com/boxscores/200106130PHI.html', ['0040000086', 'Eric Snow', 11, 4, 4, 3, 0, 'Lakers', 'H', '2001', 'https://www.basketball-reference.com/boxscores/200106130PHI.html']];
var points_high = ['0040000086', 'Allen Iverson', 35, 4, 4, 1, 0, 'Lakers', 'H', '2001', 'https://www.basketball-reference.com/boxscores/200106130PHI.html', ['0040000086', 'Eric Snow', 11, 4, 4, 3, 0, 'Lakers', 'H', '2001', 'https://www.basketball-reference.com/boxscores/200106130PHI.html']];
var date = 'June 13rd';
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
