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
# Codagent tournament page, testing valid tournaments
# URL = https://esportsagent.gg/tournament

# Info
# Date and Time
# Per Person/Entry
# Team Size
# Format
# Game
# Platform
# Link

# URL = "https://esportsagent.gg/tournament"
# URL_begin = "https://esportsagent.gg/tournament"
# driver = webdriver.Chrome(ChromeDriverManager().install())

#### IMPORTANT: you will need to set a bound for each piece of code here or else it will look through outdate tourneys as well

# Inputs: driver, tourney URL
# Returns: all tournament information
def get_tournament_info(driver, URL):
    driver.get(URL)

    soup = BeautifulSoup(driver.page_source, 'html.parser')
    # live_tournaments = soup.find_all('div', {'class': 'grid md:grid-cols-2 lg:grid-cols-3 gap-4'})

    

    # Date and time, look words but figure out if its needed or if i can loop through all available tournaments in the data writer
    # IMPORTANT: look at main in the esportsagent git hub under the ld3 branch and see what he does to create a list of dictionaries rather
    # than dictionary of lists
    # div tag was 'text-gray-700 text-[13px] uppercase letter tracking-wide'
    date_time_res = soup.find_all('div', {'class': 'text-gray-500 uppercase text-sm font-roboto'})
    print(date_time_res)
    # for i in range(len(date_time_res)):
    date_time = date_time_res[0].text.strip()
    date_time_list = date_time.split()
    date = date_time_list[0] + " " + date_time_list[1] + " " + date_time_list[2]
    # print(date)
    time = date_time_list[3] + " " + date_time_list[4]
    # print(time)
        # if(date != get_date()):
        #     break
        # print(date)
        # if(date != get_date):
        #     break
        
        # date.append(a.get('grid md:grid-cols-2 lg:grid-cols-3 gap-4'))

    # Tourney Title
    # span was 'font-semibold text-lg leading-6 text-white'
    title_res = soup.find_all('span', {'class': 'font-semibold text-2xl lg:text-3xl text-white'})
    if len(title_res) < 1:
        title_res = soup.find_all('span', {'class': 'font-semibold text-2xl lg:text-3xl text-gold'})
    title = title_res[0].text.strip()
    # print(title)

    # Entry/Per Person
    # span was 'font-semibold text-gold'
    per_person_res = soup.find_all('span', {'class': 'font-semibold text-white'})
    per_person = per_person_res[0].text.strip()
    # print(per_person)

    # Platforms
    xbox_logo = "xbox"
    ps_logo = "playstation"
    battle_net_logo = "battle.net"
    steam_logo = "steam"
    xbox_res = soup.find_all(srcset=re.compile(xbox_logo))
    ps_res = soup.find_all(srcset=re.compile(ps_logo))
    battle_net_res = soup.find_all(srcset=re.compile(battle_net_logo))
    platforms = []
    if xbox_res is not None:
        platforms.append(xbox_logo)
    if ps_res is not None:
        platforms.append(ps_logo)
    if battle_net_res is not None:
        platforms.append(battle_net_logo)
    
    # Team Size & Format
    # span was 'ui-label__text'
    team_size_res = soup.find_all('span', {'class': 'font-semibold text-white'})
    team_size = team_size_res[0].text.strip()
    # print(team_size)

    # Gamemode
    #span was 'text-white font-semibold'
    game_res = soup.find_all('span', {'class': 'font-semibold text-white'})
    game = game_res[0].text.strip()
    # print(game)

    info = {"date": date, "time": time, "title": title, "entry": per_person, "size": team_size, "platforms": platforms, "gamemode": game}
    # info = date
    return info

# Inputs: driver, URL_begin
# Returns: a list of all the valid tournament links for the day
# Note: esportsagent.gg returns <Response [500]> if broken link and <Response [200]> if valid
def get_tournament_ids(driver, URL_begin):
    id_list = []
    driver.get(URL_begin)
    soup = BeautifulSoup(driver.page_source, 'html.parser')
    live_tournaments = soup.find_all('div', {'class': 'grid md:grid-cols-2 lg:grid-cols-3 gap-4'})
    for c in live_tournaments[0].children:
        a = c.find('a')
        id_list.append(a.get('href'))

    return id_list

def get_tournament_link(id_list, URL):
    # id_list = get_tournament_ids(driver, URL)
    tournament_links = []

    for i in range(len(id_list)):
        tournament_links.append(URL + str(id_list[i]))
    return tournament_links

# Inputs: None
# Returns: The current date
def get_date():
    current_date = datetime.date.today()

    date_to_string = current_date.strftime("%d-%B-%Y")
    current_date_list = date_to_string.split('-')

    day = current_date_list[0]
    month = current_date_list[1]
    year = current_date_list[2]

    today_date = month + " " + day + ", " + year

    # print(current_date)
    # print("to string: ", date_to_string)
    # print(year)
    # print(month)
    # print(day)

    return today_date

# tourney_test = get_tournament_info(driver, URL)
# print(tourney_test["date"])
# print(get_tournament_link(driver, URL))
# print(get_tournament_info(driver, URL))
# print(get_tournament_ids(driver, URL_begin))
# print(get_date())

# testinfo = {}
# testinfo = get_tournament_info(driver, URL)
# if (get_tournament_info(driver, URL) == testinfo):
#     print("tournament info method works")

# testid = {}
# testid = get_tournament_ids(driver, URL)
# if (get_tournament_ids(driver, URL) == testid):
#     print("tournament id method works")

# testlinks = {}
# testlinks = get_tournament_link(driver, URL)
# if (get_tournament_link(driver, URL) == testlinks):
#     print("tournament link method works")

# testdate = {}
# testdate = get_date()
# if (get_date() == testdate):
#     print("date method works")


    


        
        
