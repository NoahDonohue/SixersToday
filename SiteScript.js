var blocks_high = ['0028800481', 'Mike Gminski', 14, 0, 11, 1, 7, 'Bulls', 'H', '1989', 'https://www.basketball-reference.com/boxscores/198901250PHI.html', ['0029100553', 'Manute Bol', 2, 1, 7, 0, 7, 'Nets', 'H', '1992', 'https://www.basketball-reference.com/boxscores/199201250PHI.html']];
var steals_high = ['0029000542', 'Hersey Hawkins', 38, 6, 8, 9, 1, 'Celtics', 'H', '1991', 'https://www.basketball-reference.com/boxscores/199101250PHI.html'];
var rebounds_high = ['0026500221', 'Wilt Chamberlain', 53, 3, 31, 0, 0, 'Lakers', 'H', '1966', 'https://www.basketball-reference.com/boxscores/196601250PHI.html'];
var assists_high = ['0026700303', 'Wilt Chamberlain', 14, 14, 11, 0, 0, 'Pistons', 'A', '1968', 'https://www.basketball-reference.com/boxscores/196801250DET.html'];
var points_high = ['0026500221', 'Wilt Chamberlain', 53, 3, 31, 0, 0, 'Lakers', 'H', '1966', 'https://www.basketball-reference.com/boxscores/196601250PHI.html'];
var date = 'January 25th';
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
