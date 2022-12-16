#### uSync LLC
#### Matthew O'Connor, Co-Founder

# Imports
from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import requests
import re
import datetime

# Test Data
# Checkmate Gaming Page, testing all tournaments and tournaments for the day
# URL begin = https://www.checkmategaming.com/tournament/cross-platform/call-of-duty-modern-warfare-ii

# Info
# Date and Time
# Tournament Title
# Entry Fee
# Team size
# Regions
# Skill Level
# URL

URL = "https://www.checkmategaming.com/tournament/cross-platform/call-of-duty-modern-warfare-ii/console-only-promod-3v3-snd-best-of-3-178947"
URL_begin = "https://www.checkmategaming.com/tournament/cross-platform/call-of-duty-modern-warfare-ii"
driver = webdriver.Chrome(ChromeDriverManager().install())

#### IMPORTANT: you will need to set a bound for each piece of code here or else it will look through outdate tourneys as well

# Inputs: driver, tourney URL
# Returns: all tournament information
def cmg_tourney_info(driver, URL):
    driver.get(URL)

    soup = BeautifulSoup(driver.page_source, 'html.parser')

    # NEED TO FINISH
    # IMPORTANT: look at main in the esportsagent git hub under the ld3 branch and see what he does to create a list of dictionaries rather
    # than dictionary of lists
    # class was 'tournament-details-date-text'
    # date_time_res = soup.find_all('span', {'class': 'tournament-details-date-text'})
    # print(date_time_res)
    # for i in range(len(date_time_res)):
    # date_time = date_time_res[0].text.strip()
    # date_time_list = date_time.split()
    # date = date_time_list[0] + " " + date_time_list[1]
    # # # print(date)
    # time = date_time_list[2] + " " + date_time_list[3] + " " + date_time_list[4]

    # Tourney Title - DONE
    # class was 'tournament-details-info-header'
    # title_res = soup.find_all('div', {'class': 'tournament-details-info-header'})
    # title = title_res[0].text.strip()
    # tourneyTitle = ""
    # for i in range(len(title)):
    #     tourneyTitle = tourneyTitle + title[i]
    #     if (title[i] == "\n"):
    #         break

    # Entry/Per, Team Size, Skill Level - DONE
    # class was 'tournament-details-entry-info'
    tourney_details_res = soup.find_all('div', {'class': 'tournament-details-entry-info'})
    tourney_details = tourney_details_res[0].text.strip()
    tourney_details_list = tourney_details.split()

    entry = tourney_details_list[1] + " " + tourney_details_list[2]
    team_size_full = tourney_details_list[4] + " " + tourney_details_list[5] + " " + tourney_details_list[6]
    team_size = team_size_full[4:10]
    skill_level = tourney_details_list[12] + " " + tourney_details_list[13]

    # print(entry)
    # print(team_size)
    # print(skill_level)   

    # info = date_time_res
    # info = tourneyTitle
    # info = per_person
    # return info

# Figure out why it isnt scraping what is needed, list is empty
def cmg_tourney_region(driver, URL_begin):
    driver.get(URL_begin)

    soup = BeautifulSoup(driver.page_source, 'html.parser')

    region_details_res = soup.find_all('div', {'class': 'tournament-stats'})
    region_details = region_details_res[0].text.strip()
    region_details_list = region_details.split()
    print(region_details_res)

# print(cmg_tourney_info(driver, URL))
print(cmg_tourney_region(driver, URL_begin))