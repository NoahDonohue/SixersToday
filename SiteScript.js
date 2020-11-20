var blocks_high = ['0028600108', 'Roy Hinson', 23, 2, 6, 1, 5, 'Knicks', 'H', '1986', 'https://www.basketball-reference.com/boxscores/1986011190PHI.html'];
var steals_high = ['0027500107', 'Doug Collins', 19, 3, 2, 5, 0, 'Kings', 'H', '1975', 'https://www.basketball-reference.com/boxscores/1975011190PHI.html', ['0028000221', 'Maurice Cheeks', 10, 9, 3, 5, 0, 'Warriors', 'H', '1980', 'https://www.basketball-reference.com/boxscores/1980011190PHI.html'], ['0028200119', 'Maurice Cheeks', 19, 8, 4, 5, 0, 'Bucks', 'H', '1982', 'https://www.basketball-reference.com/boxscores/1982011190PHI.html'], ['0028300128', 'Julius Erving', 18, 3, 5, 5, 1, 'Celtics', 'H', '1983', 'https://www.basketball-reference.com/boxscores/1983011190PHI.html'], ['0028300128', 'Maurice Cheeks', 20, 5, 3, 5, 0, 'Celtics', 'H', '1983', 'https://www.basketball-reference.com/boxscores/1983011190PHI.html'], ['0028600108', 'Maurice Cheeks', 11, 7, 4, 5, 1, 'Knicks', 'H', '1986', 'https://www.basketball-reference.com/boxscores/1986011190PHI.html']];
var rebounds_high = ['0026500069', 'Wilt Chamberlain', 36, 5, 25, 0, 0, 'Wizards', 'H', '1965', 'https://www.basketball-reference.com/boxscores/1965011190PHI.html'];
var assists_high = ['0029300099', 'Jeff Hornacek', 23, 12, 0, 1, 0, 'Jazz', 'H', '1993', 'https://www.basketball-reference.com/boxscores/1993011190PHI.html', ['0020500132', 'Allen Iverson', 37, 12, 2, 3, 0, 'Cavaliers', 'H', '2005', 'https://www.basketball-reference.com/boxscores/2005011190PHI.html']];
var points_high = ['0020200150', 'Allen Iverson', 38, 7, 6, 3, 0, 'Pelicans', 'A', '2002', 'https://www.basketball-reference.com/boxscores/2002011190NOP.html'];
var date = 'November 19th';
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
