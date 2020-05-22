var blocks_high = ['0048200040', 'Julius Erving', 20, 9, 10, 1, 5, 'Lakers', 'H', '1983', 'https://www.basketball-reference.com/boxscores/198305220PHI.html'];
var steals_high = ['0047600401', 'Steve Mix', 9, 3, 5, 6, 0, 'Trail Blazers', 'H', '1977', 'https://www.basketball-reference.com/boxscores/197705220PHI.html'];
var rebounds_high = ['0048200040', 'Moses Malone', 27, 0, 18, 2, 3, 'Lakers', 'H', '1983', 'https://www.basketball-reference.com/boxscores/198305220PHI.html', ['0040000076', 'Dikembe Mutombo', 15, 1, 18, 1, 4, 'Bucks', 'H', '2001', 'https://www.basketball-reference.com/boxscores/200105220PHI.html']];
var assists_high = ['0048200040', 'Julius Erving', 20, 9, 10, 1, 5, 'Lakers', 'H', '1983', 'https://www.basketball-reference.com/boxscores/198305220PHI.html'];
var points_high = ['0040000076', 'Allen Iverson', 34, 6, 4, 1, 0, 'Bucks', 'H', '2001', 'https://www.basketball-reference.com/boxscores/200105220PHI.html'];
var date = 'May 22nd';
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
