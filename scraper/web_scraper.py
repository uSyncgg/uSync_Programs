#### uSync LLC
#### Matthew O'Connor, Co-Founder

# Imports
from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import requests
import re

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

URL = "https://esportsagent.gg/tournament"
URL_begin = "https://esportsagent.gg/tournament"
driver = webdriver.Chrome(ChromeDriverManager().install())

# Inputs: driver, tourney URL
# Returns: all tournament information
def get_tournament_info(driver, URL):
    driver.get(URL)

    soup = BeautifulSoup(driver.page_source, 'html.parser')

    # Date and time
    date_time_res = soup.find_all('div', {'class': 'text-gray-700 text-[13px] uppercase letter tracking-wide'})
    date_time = date_time_res[0].text.strip()
    date_time_list = date_time.split()
    date = date_time_list[0] + " " + date_time_list[1] + " " + date_time_list[2]
    time = date_time_list[3] + " " + date_time_list[4]

    # Tourney Title
    title_res = soup.find_all('span', {'class': 'font-semibold text-lg leading-6 text-white'})
    title = title_res[0].text.strip()

    # Entry/Per Person
    per_person_res = soup.find_all('span', {'class': 'font-semibold text-gold'})
    per_person = per_person_res[0].text.strip()

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
    team_size_res = soup.find_all('span', {'class': 'ui-label__text'})
    team_size = team_size_res[0].text.strip()

    # Game
    game_res = soup.find_all('span', {'class': 'text-white font-semibold'})
    game = game_res[0].text.strip()

    info = {"date": date, "time": time, "title": title, "entry": per_person, "size": team_size, "platforms": platforms, "game": game}

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
    id_list = get_tournament_ids(driver, URL)
    tournament_links = []

    for i in range(len(id_list)):
        tournament_links.append(URL + str(id_list[i]))
    return tournament_links

#print(get_tournament_link(driver, URL))
#print(get_tournament_info(driver, URL))
#print(get_tournament_ids(driver, URL_begin))

    


        
        
