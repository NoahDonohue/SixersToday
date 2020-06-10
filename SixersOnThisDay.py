# -*- coding: utf-8 -*-
"""
Created on Wed May  6 18:48:07 2020

@author: Owner
"""

import time
import ast
import datetime

from nba_api.stats.endpoints import scoreboardv2
from nba_api.stats.endpoints import boxscoretraditionalv2
from nba_api.stats.static import teams

 

ordinal = lambda n: "%d%s" % (n,"tsnrhtdd"[(n/10%10!=1)*(n%10<4)*n%10::4])
monthDict={1:'January', 2:'February', 3:'March', 4:'April', 5:'May', 6:'June', 7:'July', 8:'August', 9:'September', 10:'October', 11:'November', 12:'December'}

sixers_id =   1610612755

today = datetime.datetime.now()
day = today.day
month = today.month
date = monthDict[month] + " " + ordinal(day)


def url_day_format(day):
    # This formats the first 9 days of the month to 01, 02, 03, 04 etc
    # Necessary for the basketball reference links to work
    if day < 10:
        day = str(0) + str(day)
    else:
        pass
    
    return str(day)

def line_prepender(filename, line):
    #Used to write to the top of a file
    with open(filename, 'r+') as f:
        content = f.read()
        f.seek(0, 0)
        f.write(line.rstrip('\r\n') + '\n' + content)

def write_javascript_file(date, points, assists, rebounds, steals, blocks):
    # dynamically writes a javascript file with the data for each stat in a differet variable
    # Then it sets the appropriate HTML elements to the valyes in each list
    
    f = open("SiteScript.js", "w")
    
    f.write("document.getElementById(\"date\").innerHTML =  date;\n")
    f.write("document.getElementById(\"PointsLink\").href = points_high[10];\n")
    f.write("document.getElementById(\"PointsPlayer\").innerHTML = points_high[1]+ \": \";\n")
    f.write("document.getElementById(\"Points\").innerHTML = String(points_high[2]) + \" vs. \" + points_high[7]; \n")
    f.write("document.getElementById(\"PointsYear\").innerHTML = points_high[9];\n")
    
    f.write("document.getElementById(\"AssistsLink\").href = assists_high[10];\n")
    f.write("document.getElementById(\"AssistsPlayer\").innerHTML = assists_high[1]+ \": \";\n")
    f.write("document.getElementById(\"Assists\").innerHTML = String(assists_high[3]) + \" vs. \" +  assists_high[7];  \n")
    f.write("document.getElementById(\"AssistsYear\").innerHTML = assists_high[9]\n")
    
    f.write("document.getElementById(\"ReboundsLink\").href = rebounds_high[10];\n")
    f.write("document.getElementById(\"ReboundsPlayer\").innerHTML = rebounds_high[1]+ \": \";\n")
    f.write("document.getElementById(\"Rebounds\").innerHTML = String(rebounds_high[4]) + \" vs. \" + rebounds_high[7]; \n")
    f.write("document.getElementById(\"ReboundsYear\").innerHTML = rebounds_high[9];\n")
    
    f.write("document.getElementById(\"StealsLink\").href = steals_high[10];\n")
    f.write("document.getElementById(\"StealsPlayer\").innerHTML = steals_high[1]+ \": \";\n")
    f.write("document.getElementById(\"Steals\").innerHTML = String(steals_high[5]) + \" vs. \" + steals_high[7]; \n")
    f.write("document.getElementById(\"StealsYear\").innerHTML = steals_high[9];\n")
    
    f.write("document.getElementById(\"BlocksLink\").href = blocks_high[10];\n")
    f.write("document.getElementById(\"BlocksPlayer\").innerHTML = blocks_high[1]+ \": \";\n")
    f.write("document.getElementById(\"Blocks\").innerHTML = String(blocks_high[6]) + \" vs. \" +  blocks_high[7]; \n")
    f.write("document.getElementById(\"BlocksYear\").innerHTML = blocks_high[9];\n")
    
    f.close()
    line_prepender("SiteScript.js", "var date = \'" + str(date) + "\';")
    line_prepender("SiteScript.js","var points_high = " + str(points) + ";")
    line_prepender("SiteScript.js","var assists_high = " + str(assists)+ ";")
    line_prepender("SiteScript.js","var rebounds_high = " + str(rebounds)+ ";")
    line_prepender("SiteScript.js","var steals_high = " + str(steals)+ ";")
    line_prepender("SiteScript.js","var blocks_high = " + str(blocks)+ ";")

def get_games_on_this_date():
    # This iterates over every year in the league's history and pulls every game on the current date.
    # The game data is written to a file
    
    years = range(1949, 2022)
    all_games = []

    for year in years:
        date = str(year) + '-' + str(month) + '-' + str(day)
        games = scoreboardv2.ScoreboardV2(game_date = date)
        game_dict = games.game_header.get_dict()
        print("good")
        all_games.append(game_dict)
        time.sleep(1.1)

    f = open("AllGamesOnThisDate.txt", "w")
    for game in all_games:
        f.write(str(game) + "\n")
    f.close()

def find_todays_sixers_games():
    # This iterates over all games in the all_games file, identies the games involving the Sixers,
    # and writes the relevant game data to a file
    
    sixers_games = []
    f = open("AllGamesOnThisDate.txt", "r")
    
    for game1 in f:
        game = ast.literal_eval(game1)
        if game['data'] == []:
            print("Passed")
        else:
            for each_game in range(len(game['data'])):
                if game['data'][each_game][6] == sixers_id:
                    #GameID, OpponentID, Home or Away, Game Year
                    game_data =[game['data'][each_game][2], game['data'][each_game][7], "H", game['data'][each_game][0][0:4]]
                    sixers_games.append(game_data)
                if game['data'][each_game][7] == sixers_id:
                    #GameID, OpponentID, Home or Away, Game Year
                    game_data = [game['data'][each_game][2], game['data'][each_game][6], "A", game['data'][each_game][0][0:4]]
                    sixers_games.append(game_data)
    f.close()
    
    f = open("TodaysSixerGameIDs.txt", "w")
    for game in sixers_games:
        f.write(str(game) + "\n")
    f.close() 


def get_todays_high_player_stats(sixers_scores):

    # Each player in the box score is iterated over and checked to see if they had the highest
    # of any stat for that day.
    
    high_default = [0, "No Games", 0, 0, 0, 0, 0, "Nobody", "H", "0000", "https://www.basketball-reference.com"]
    points_high = high_default
    assists_high = high_default
    rebounds_high = high_default
    steals_high = high_default
    blocks_high = high_default
 
    
    for game_list in sixers_scores:
      
        box_score = game_list[0]
    
        for player in box_score['data']:
            #if they're not a sixers player, continue
            if player[1] != sixers_id:
                continue
            else:
                #build a list of all important data about the player
                #game_id, player name, points, assists, rebounds, steals, blocks, opponent, home/away, year
                player_info = [player[0], player[5], player[26],player[21],player[20],player[22],player[23], teams.find_team_name_by_id(game_list[1])['nickname'], game_list[2], game_list[3]]
                #append basketball reference URL
                if player_info[8] == "H":
                    player_info.append("https://www.basketball-reference.com/boxscores/" + player_info[9] + "0" + str(month) + url_day_format(day) + "0" + "PHI.html")
                else:
                    player_info.append("https://www.basketball-reference.com/boxscores/" + player_info[9] + "0" + str(month) + url_day_format(day) + "0" + (teams.find_teams_by_nickname(player_info[7])[0]["abbreviation"]) +".html")
                    
                #check if player has highest points. If None type replace with 0
                if player_info[2] != None:
                    if player_info[2] > points_high[2]: 
                        points_high = player_info
                    #check for ties
                    elif player_info[2] == points_high[2]:
                        points_high.append(player_info)
                else:
                    player_info[2] = 0;
            
                #check for highest assists
                if player_info[3] != None:
                    if player_info[3] > assists_high[3]: 
                        assists_high = player_info
                    elif player_info[3] == assists_high[3]: 
                        assists_high.append(player_info)
                else:
                    player_info[3] = 0;
     
                #check for highest rebounds
                if player_info[4] != None:
                    if player_info[4] > rebounds_high[4]:
                        rebounds_high = player_info
                    elif player_info[4] == rebounds_high[4]: 
                        rebounds_high.append(player_info)
                else:
                    player_info[4] = 0;
        
                #check for highest steals
                if player_info[5] != None:
                    if player_info[5] > steals_high[5]:
                        steals_high = player_info
                    elif player_info[5] == steals_high[5]:
                        steals_high.append(player_info)
                else:
                    player_info[5] = 0;
            
                #check for highest blocks
                if player_info[6] != None:
                    if player_info[6] > blocks_high[6]:
                        blocks_high = player_info
                    elif player_info[6] == blocks_high[6]:
                        blocks_high.append(player_info)
                else:
                    player_info[6] = 0;
    #  f.close()
    write_javascript_file(date, points_high, assists_high, rebounds_high, steals_high, blocks_high)
    print("Points High:", points_high)
    print("Assists High:", assists_high)
    print("Rebounds High:", rebounds_high)
    print("Steals High:", steals_high)
    print("Blocks High:", blocks_high)
    


def find_todays_sixers_boxscores():
# This  function uses the Game IDs from the TodaysSixersGameIDs to pull the box score from each game
# each box score is then checked for the high stats for the date    
    f = open("TodaysSixerGameIDs.txt", "r")
    box_scores = []

    for gameid in f:
        game_list = ast.literal_eval(gameid)
        box_score= boxscoretraditionalv2.BoxScoreTraditionalV2(game_list[0].strip()).player_stats.get_dict()
        time.sleep(1.1)
        print("Good")
        box_list = [box_score, game_list[1], game_list[2], game_list[3]]
        box_scores.append(box_list)
    f.close()
    
    
    get_todays_high_player_stats(box_scores)

    



    
    
#get_games_on_this_date()
#find_todays_sixers_games()
find_todays_sixers_boxscores()
    

