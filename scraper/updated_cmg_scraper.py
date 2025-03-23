from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from scraper import TEAMS, PLATFORM, GAMEMODE, REQUIREMENT, MONTHS, SERIES_WORDING
import traceback
from datetime import datetime
import time

driver = webdriver.Chrome()

URL = 'https://www.checkmategaming.com/tournament/cross-platform/call-of-duty-black-ops-6'

tournaments = []
tourney_info = []

date_time = []

dates = [] 
times = [] 
team_sizes = [] 
gamemodes = [] 
series = [] 
platforms = [] 
entry_fees = [] 
regions = []
prize_pools = []
titles = []
requirements = []

return_dict = {
    'Title': [],
    'Time': [],
    'Date': [],
    'Team Size': [],
    'Gamemode': [], 
    'Series': [],
    'Platform': [],
    'Entry Fee': [],
    'Region': [],
    'Prize': [],
    'Requirements': [],
    'URLs': []
}

def get_banner_info(tournament_banners):
    global regions
    global prize_pools

    for banner in tournament_banners:
        banner_text = banner.text
        banner_text_lst = banner_text.split('\n')
        
        prize_pools.append(banner_text_lst[0])

        for item in banner_text_lst:
            if 'region' in item.lower():
                regions.append(banner_text_lst[banner_text_lst.index(item) + 1])
                break
    
    return None

def get_tournament_links(tournament_link_tags):
    global tournaments

    for link in tournament_link_tags:
        if link.get_attribute('href'):
            tournaments.append(link.get_attribute('href'))
    
    return None

def get_tournament_links_tags(wait):
    driver.get(URL)

    button = wait.until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, '[mi-name="chevron_right"]')))

    while 'disabled' not in button[0].get_attribute('class'):
        try:
            button[0].click()

            button = wait.until(EC.presence_of_all_elements_located((By.CSS_SELECTOR, '[mi-name="chevron_right"]')))
            tournament_link_tags = wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, 'mdl-button.mdl-js-button.css-ripple-effect.css-ripple-activated')))
            tournament_banners = wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, 'tournament-box')))

            get_banner_info(tournament_banners)
            get_tournament_links(tournament_link_tags)
        except:
            pass

def get_tournament_info(wait):
    global tournaments

    for link in tournaments:
        driver.get(link)
        
        
        tournament_details = wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, 'tournament-details-info-container')))

        for detail in tournament_details:
            tourney_info.append(detail.text)

    return None

def extract_tournament_info():
    global tourney_info
    global titles
    global gamemodes
    global series
    global date_time
    global platforms
    global entry_fees
    global team_sizes
    global requirements

    for tourney in tourney_info:
        info = tourney.split('\n')
        ruleset_present = False
        present_requirements = []

        entry_fee_index = 10
        team_size_index = 12
        requirement_size_index = 19

        titles.append(info[0])

        for gamemode in GAMEMODE:
            if gamemode in info[0].lower():
                gamemodes.append(gamemode)
                break

        for word in SERIES_WORDING:
            if word in info[0].lower():
                series.append(word)
                break

        date_time.append(info[8])

        if 'rule' in info[9].lower():
            ruleset_present = True
            entry_fee_index += 2
            team_size_index += 2
            requirement_size_index += 2

        if ruleset_present is False:
            platforms.append('cross platform')

        else:
            if 'console' in info[10].lower():
                platforms.append('console only')
            elif 'gold' in info[10].lower():
                present_requirements.append(info[10].lower())

        entry_fees.append(info[entry_fee_index])

        team_sizes.append(info[team_size_index])

        for item in info[requirement_size_index:]:
            for req in REQUIREMENT:
                if req in item.lower():
                    present_requirements.append(req)

        if len(present_requirements) > 0:
            requirements.append(', '.join(req for req in present_requirements))
        else:
            requirements.append('none')

    return None

def separate_date_time():
    global date_time
    global dates
    global times

    for dt in date_time:
        dt_lst = dt.split(' ')
        dates.append(dt_lst[0] + ' ' + dt_lst[1])
        times.append(dt_lst[2] + ' ' + dt_lst[3])

    return None        

if __name__ == '__main__':
    wait = WebDriverWait(driver, 10)

    get_tournament_links_tags(wait)

    get_tournament_info(wait) 

    extract_tournament_info()   

    separate_date_time()

    return_dict['Date'] = dates
    return_dict['Entry Fee'] = entry_fees
    return_dict['Gamemode'] = gamemodes
    return_dict['Platform'] = platforms
    return_dict['Prize'] = prize_pools
    return_dict['Region'] = regions
    return_dict['Requirements'] = requirements
    return_dict['Series'] = series
    return_dict['Team Size'] = team_sizes
    return_dict['Time'] = times
    return_dict['Title'] = titles
    return_dict['URLs'] = tournaments

    for item in return_dict:
        print(return_dict[item])
        print('\n')



        





        

        


