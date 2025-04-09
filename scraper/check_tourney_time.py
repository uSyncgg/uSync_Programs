from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from .pymongo_get_database import get_database

date_time = {}
times = {}

CODAGENT_URL = 'https://esportsagent.gg/tournament'

def extract_cmg_tourney_info(wait, URL):
    global date_time

    tournament_details = wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, 'tournament-details-info-container')))
    date_time[URL] = tournament_details[0].text.split('\n')[8]

    return None

def separate_date_time():
    global date_time
    global times

    for URL in date_time:
        if 'checkmategaming' not in URL.lower():
            continue

        dt_lst = date_time[URL].split(' ')
        times[URL] = dt_lst[2] + ' ' + dt_lst[3]

    return None  

def extract_codagent_tourney_info(wait, titles):
    global date_time
    
    classes = wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, 'relative.flex-1.p-6.space-y-3')))

    for c in classes:
        current_class_list = c.text.split('\n')

        for title in titles:
            if current_class_list[1] == title and title not in date_time.keys():
                date_time[title] = current_class_list[0]

        if len(date_time.keys()) == len(titles):
            break

    return None

def derive_date_time():
    global date_time
    global times

    for title in date_time:
        if 'checkmategaming' in title.lower():
            continue

        temp_date_time_list = date_time[title].split(' ')

        times[title] = ' '.join(item for item in temp_date_time_list[3:])

    return None

def cmg_check_tourney_time(driver, URLs):
    for URL in URLs:
        driver.get(URL)
        wait = WebDriverWait(driver, 10)

        extract_cmg_tourney_info(wait, URL)

    separate_date_time()

def codagent_check_tourney_time(driver, titles):
    driver.get(CODAGENT_URL)
    wait = WebDriverWait(driver, 10)

    extract_codagent_tourney_info(wait, titles)
    derive_date_time()

def check_database():
    dbname = get_database()
    collection_name = dbname["tournaments"]

    all_docs = collection_name.find_one()
    # [print(doc) for doc in all_docs]
    print(all_docs)

def check_tourney_time_interface(driver, titles=[], URLs=[]):
    check_database()

    # if len(titles) > 0:
    #     codagent_check_tourney_time(driver, titles)

    # if len(URLs) > 0:
    #     cmg_check_tourney_time(driver, URLs)

    return times

if __name__ == '__main__':
    check_database()

