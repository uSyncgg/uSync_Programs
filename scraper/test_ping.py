import requests

url = 'https://website-backend-5m32.onrender.com/usyncapp/tournaments'

try:
    response = requests.get(url)
    print(f"Pinged {url} - Status code: {response.status_code}")
except Exception as e:
    print(f"Error pinging {url}: {e}")