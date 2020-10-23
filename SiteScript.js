var blocks_high = ['0011400109', 'Nerlens Noel', 8, 1, 8, 5, 5, 'Pistons', 'A', '2014', 'https://www.basketball-reference.com/boxscores/2014010230DET.html'];
var steals_high = ['0011300095', 'Michael Carter-Williams', 15, 3, 9, 5, 0, 'Timberwolves', 'H', '2013', 'https://www.basketball-reference.com/boxscores/2013010230PHI.html', ['0011400109', 'Nerlens Noel', 8, 1, 8, 5, 5, 'Pistons', 'A', '2014', 'https://www.basketball-reference.com/boxscores/2014010230DET.html']];
var rebounds_high = ['0026500015', 'Wilt Chamberlain', 53, 2, 21, 0, 0, 'Pistons', 'H', '1965', 'https://www.basketball-reference.com/boxscores/1965010230PHI.html'];
var assists_high = ['0026500015', 'Hal Greer', 29, 14, 9, 0, 0, 'Pistons', 'H', '1965', 'https://www.basketball-reference.com/boxscores/1965010230PHI.html'];
var points_high = ['0026500015', 'Wilt Chamberlain', 53, 2, 21, 0, 0, 'Pistons', 'H', '1965', 'https://www.basketball-reference.com/boxscores/1965010230PHI.html'];
var date = 'October 23rd';
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
