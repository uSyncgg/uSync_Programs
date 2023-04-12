#### uSync LLC
#### Matthew O'Connor, Co-Founder

# Imports
from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import requests
import re

from web_scraper import get_tournament_info, get_tournament_link, get_date, get_tournament_ids
from data_writer import write_all, write_all_links
from drop_info import drop_all_tourneys, drop_all_links


def get_all_info(tournament_ids, driver, URL):
    all_info = []
    URL_begin = "https://esportsagent.gg"
    for i in range(len(tournament_ids)):
        # print(tournament_ids[i])
        url = URL_begin + str(tournament_ids[i]) + "/overview"
        all_info.append(get_tournament_info(driver, url))
        # print(all_info[0])

    return all_info
        

def main():
    drop_all_tourneys()
    drop_all_links()

    URL = "https://esportsagent.gg/tournament"
    driver = webdriver.Chrome(ChromeDriverManager().install()) 

    tourney_ids = get_tournament_ids(driver, URL)
    
    # tourney_links = get_tournament_link(ids, URL)
    # print(tourney_links)
    # all_info = get_all_info(tourney_links, driver, URL)
    all_info = get_all_info(tourney_ids, driver, URL)
    # print(all_info[0]["game"])
    all_links = get_tournament_link(tourney_ids, URL)
    flag = 0
    for i in all_info:
        # print(i["game"])
        if i["game"] == '':
            del all_info[flag]
            del all_links[flag]
        flag += 1
    # print(get_all_info(tourney_ids, driver, URL))
    # print(all_info[1]["date"])
    write_all(all_info)
    write_all_links(all_links)
    # write_all(all_info, path=main_path)
    # all_info = get_tournament_info(driver, URL_begin)

    # write_all()

main()