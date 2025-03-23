from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from scraper import TEAMS, PLATFORM, GAMEMODE, REQUIREMENT
import traceback

driver = webdriver.Chrome()

URL = 'https://esportsagent.gg/tournament'

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
games = []
requirements = []
urls = []

return_dict = {
    'Title': [],
    'Time': [], # Derive from date
    'Date': [],
    'Team Size': [],
    'Gamemode': [], # Derive from title
    'Series': [],
    'Platform': [],
    'Entry Fee': [],
    'Region': [],
    'Prize': [],
    'Game': [],
    'Requirements': [],
    'URLs': []
}

def extend_page(wait):
    button = wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, 'ui-button.ui-button__size-middle.ui-button__type-primary.ui-button__outlined.mt-4')))
    
    try:
        while button[0].is_enabled():
            button[0].click()
    except:
        pass

    return None

def get_active_tournaments_and_platforms(wait):
    global platforms
    global tourney_info

    classes = wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, 'relative.flex-1.p-6.space-y-3')))
    
    for c in classes:
        gray = False
        gray_text = None

        try:
            gray_text = c.find_element(By.CLASS_NAME, 'font-semibold.text-lg.leading-6.text-gray-700')
            
            if gray_text.text:
                gray = True
        except:
            gray = False

        if gray is False:
            tourney_info.append(c.text)

            try:
                platforms_found = c.find_elements(By.CSS_SELECTOR, 'img')
                platforms_listed = []

                for plat in platforms_found:
                    platform_option = plat.get_attribute('alt').lower()

                    for p in PLATFORM:
                        if p in platform_option:
                            platforms_listed.append(p)

                if len(platforms_listed) == len(PLATFORM):
                    platforms.append('all')
                elif PLATFORM[0] in platforms_listed and PLATFORM[1] in platforms_listed and PLATFORM[2] not in platforms_listed and PLATFORM[3] not in platforms_listed:
                    platforms.append('pc only')
                elif PLATFORM[2] in platforms_listed and PLATFORM[3] in platforms_listed and PLATFORM[0] not in platforms_listed and PLATFORM[1] not in platforms_listed:
                    platforms.append('console only')
                elif PLATFORM[2] in platforms_listed and PLATFORM[0] not in platforms_listed and PLATFORM[1] not in platforms_listed and PLATFORM[3] not in platforms_listed:
                    platforms.append('playstation only')
                elif PLATFORM[3] in platforms_listed and PLATFORM[0] not in platforms_listed and PLATFORM[1] not in platforms_listed and PLATFORM[2] not in platforms_listed:
                    platforms.append('xbox only')

            except:
                print(f'PLATFORMS BROKE')
                traceback.print_exc()

    return None

def get_urls(wait):
    global urls

    tourney_card = wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, 'bg-dark-500.w-full.border.border-[#2A2A2D]')))

    for card in tourney_card:
        url_tag = card.find_elements(By.TAG_NAME, 'a')
        url = url_tag[0].get_attribute('href')
        urls.append(url)

    return None

def extract_tourney_info():
    global tourney_info
    global date_time
    global titles
    global prize_pools
    global entry_fees
    global regions
    global team_sizes
    global series
    global games

    for index, tourney in enumerate(tourney_info):
        info = tourney.split('\n')

        date_time.append(info[0])
        
        titles.append(info[1])

        for team in TEAMS:
            if team in info[1]:
                team_sizes.append(team)
                break

        for req in REQUIREMENT:
            if req in info[1].lower():
                requirements.append(req)
            
        if len(requirements) - 1 != index:
            requirements.append('none')

        prize_pools.append(info[3])

        entry_fees.append(info[5])

        regions.append(info[7])

        series.append(info[10])

        games.append(info[12])

    return None

def derive_date_time():
    global date_time
    global dates
    global times

    for d in date_time:
        temp_date_time_list = d.split(' ')

        dates.append(' '.join(item for item in temp_date_time_list[:3]))
        times.append(' '.join(item for item in temp_date_time_list[3:]))

def derive_gamemode():
    global titles
    global gamemodes

    for title in titles:
        for game in GAMEMODE:
            if game in title.lower():
                gamemodes.append(game)
                break

if __name__ == '__main__':
    driver.get(URL)
    wait = WebDriverWait(driver, 1)
    
    extend_page(wait)

    get_active_tournaments_and_platforms(wait)

    get_urls(wait)

    extract_tourney_info()

    derive_date_time()

    derive_gamemode()

    return_dict['Title'] = titles
    return_dict['Time'] = times
    return_dict['Date'] = dates
    return_dict['Team Size'] = team_sizes
    return_dict['Gamemode'] = gamemodes
    return_dict['Series'] = series
    return_dict['Platform'] = platforms
    return_dict['Entry Fee'] = entry_fees
    return_dict['Region'] = regions
    return_dict['Prize'] = prize_pools
    return_dict['Game'] = games
    return_dict['Requirements'] = requirements
    return_dict['URLs'] = urls

    print(return_dict)
    