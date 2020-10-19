var blocks_high = ['0011200077', 'Spencer Hawes', 13, 3, 5, 3, 2, 'Nets', 'A', '2012', 'https://www.basketball-reference.com/boxscores/2012010190BKN.html', ['0011200077', 'Thaddeus Young', 24, 0, 9, 1, 2, 'Nets', 'A', '2012', 'https://www.basketball-reference.com/boxscores/2012010190BKN.html']];
var steals_high = ['0011200077', 'Jason Richardson', 13, 2, 6, 3, 0, 'Nets', 'A', '2012', 'https://www.basketball-reference.com/boxscores/2012010190BKN.html', ['0011200077', 'Spencer Hawes', 13, 3, 5, 3, 2, 'Nets', 'A', '2012', 'https://www.basketball-reference.com/boxscores/2012010190BKN.html', ['0011200077', 'Thaddeus Young', 24, 0, 9, 1, 2, 'Nets', 'A', '2012', 'https://www.basketball-reference.com/boxscores/2012010190BKN.html']]];
var rebounds_high = ['0027700011', 'George McGinnis', 32, 7, 22, 0, 0, 'Pistons', 'H', '1977', 'https://www.basketball-reference.com/boxscores/1977010190PHI.html'];
var assists_high = ['0027900047', 'Maurice Cheeks', 9, 14, 4, 0, 0, 'Pistons', 'H', '1979', 'https://www.basketball-reference.com/boxscores/1979010190PHI.html'];
var points_high = ['0027900047', 'Julius Erving', 36, 7, 10, 0, 0, 'Pistons', 'H', '1979', 'https://www.basketball-reference.com/boxscores/1979010190PHI.html'];
var date = 'October 19th';
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
