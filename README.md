# SixersToday

http://noahdonohue.com/SixersToday/
This is a web page that utilizes nba_api to pull the best Sixer performances for the current date.

nba_api is is an API Client for www.nba.com. For more information visit https://pypi.org/project/nba-api/

The main code is in SixersOnThisDay.py which accesses the relevant nba-api endpoints, then dynamically writes a javascript file SiteScript.js
which contains the accessed data as well as updates the relevant HTML elements in the index.html file. 

I have the batch files SixersOnThisDay.bat and AutoPush.bat set to run each morning using Windows Task Scheduler. They run SixersOnThisDay.py
and push the updates to github.

The text files AllGamesOnThisDate.txt and TodaysSixerGameIDs.txt are written to and read from in the main code body. This could have been
done without them, but I found them useful for data validation and troubleshooting.

This page is hosted with GithubPages on a custom domain

For any questions, issues, or suggestions you can reach me at NoahDonohue1@gmail.com
