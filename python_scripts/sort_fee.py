import pandas as pd
import csv
from csv_to_html import convert_html 

# read in data from big csv file
all_data = []
with open('data/tournaments_data.csv', 'r') as fr:
    reader = csv.reader(fr)

    for line in reader:
        all_data.append(line)


# sort data
new_data = all_data[1:len(all_data)]
new_data.sort(key=lambda fee: float(fee[3][1:len(fee[3])]))

# for ii in new_data:
#     print(ii[3])

# write data to a sorted csv file
sorted_data = []
sorted_data.append(all_data[0])
sorted_data = sorted_data + new_data
# print(sorted_data)
with open('data/sorted_data.csv', 'w', newline='') as fw:
    writer = csv.writer(fw)
    writer.writerows(sorted_data)


# call convert html
convert_html('data/sorted_data.csv', 'pages/fee_sorted_tournaments_data.html')
