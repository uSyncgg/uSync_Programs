#### uSync LLC
#### Matthew O'Connor, Co-Founder

import gspread
from oauth2client.service_account import ServiceAccountCredentials
import pandas as pd
import pprint

# Connectin to Google Sheets
scope = ['https://www.googleapis.com/auth/spreadsheets', "https://www.googleapis.com/auth/drive"]
# scope = ['https://www.googleapis.com/robot/v1/metadata/x509/usyncsheets%40usync-368521.iam.gserviceaccount.com']

credentials = ServiceAccountCredentials.from_json_keyfile_name("keys.json", scope)
client = gspread.authorize(credentials)

# sheet = client.create("uSync Database")

sheet = client.open("uSync Database").sheet1

# sheet.share('usyncsheets@usync-368521.iam.gserviceaccount.com', perm_type='user', role='writer')

# df = pd.read_csv('tounaments_data.csv')


# sheet.update([df.columns.values.tolist()] + df.values.tolist())

pp = pprint.PrettyPrinter()

# result = sheet.get_all_records()

sheet.update_locale(2, 9, '50000')
result = sheet.cell(2,9)
pp.pprint(result)

# print(df)