#### uSync LLC
#### Matthew O'Connor, Co-Founder

# Imports
from bs4 import BeautifulSoup
from selenium import wendriver
from webdriver_manager.chrome import ChromeDriverManager
import requests
import re

from web_scraper import get_tournament_info, get_tournament_link, get_date
