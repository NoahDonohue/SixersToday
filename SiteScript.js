var blocks_high = ['0028300025', 'Clemon Johnson', 5, 0, 7, 0, 5, 'Bulls', 'H', '1983', 'https://www.basketball-reference.com/boxscores/1983011010PHI.html', ['0020000015', 'Theo Ratliff', 8, 0, 5, 0, 5, 'Raptors', 'H', '2000', 'https://www.basketball-reference.com/boxscores/2000011010PHI.html']];
var steals_high = ['0028500044', 'Charles Barkley', 20, 5, 8, 7, 3, 'Nets', 'A', '1985', 'https://www.basketball-reference.com/boxscores/1985011010BKN.html'];
var rebounds_high = ['0026700051', 'Wilt Chamberlain', 19, 13, 22, 0, 0, 'Wizards', 'H', '1967', 'https://www.basketball-reference.com/boxscores/1967011010PHI.html'];
var assists_high = ['0026700051', 'Wilt Chamberlain', 19, 13, 22, 0, 0, 'Wizards', 'H', '1967', 'https://www.basketball-reference.com/boxscores/1967011010PHI.html'];
var points_high = ['0028000127', 'Julius Erving', 45, 4, 9, 3, 4, 'Celtics', 'H', '1980', 'https://www.basketball-reference.com/boxscores/1980011010PHI.html'];
var date = 'November 1st';
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
