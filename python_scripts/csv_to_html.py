# Python program to convert
# CSV to HTML Table
 
 
import pandas as pd
 
def convert_html(csv_path, html_path): 
    # to read csv file named "samplee"
    a = pd.read_csv(csv_path)
 
    # to save as html file
    # named as "Table"
    a.to_html(html_path)
 
    # assign it to a
    # variable (string)
    # html_file = a.to_html()

    print("done")
