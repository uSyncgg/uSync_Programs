#### uSync LLC
#### Matthew O'Connor, Co-Founder

# Imports
from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import requests
import re
import csv
import os
import shutil
from pymongo_get_database import get_database

def write_all(data):
    dbname = get_database()
    collection_name = dbname["tournaments"]
    num = 0
    
    for i in data:
        tournament_num = {
            "_id": num,
            "date": i["date"],
            "time": i["time"],
            "title": i["title"],
            "entry": i["entry"],
            "region": i["region"],
            "platforms": i["platforms"],
            "game": i["game"],
            "requirements": i["requirements"],
            "skill": i["skill"]
        }

        collection_name.insert_one(tournament_num)
        num += 1
    
    return None

def write_all_links(data):
    dbname = get_database()
    collection_name = dbname["links"]
    num = 0

    for i in data:

        link_num = {
            "_id": num,
            "url": data[num]
        }        

        collection_name.insert_one(link_num)
        num += 1

    return None
