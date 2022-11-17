# uSync_Programs
Useful Programs

Install Python
Make sure you have python installed. Preferably Python 3. If you do not have python installed, you can search for a tutorial on "How to download Python" or you can download it here: https://www.python.org/downloads/

Setup your own environment
1. In your terminal, type the following: pip3 install virtualenv
	OR 
	pip install virtualenv
2. Create your virtual environment by typing this (it can be whatever you want it to be called but make sure it ends in _env): python3 -m venv your-virtual-environment-name_env
	OR
	python -m venv your-virtual-environment-name_env
3. Install the bs4 dependency: pip3 install bs4
4. Install the selenium dependency: pip3 install selenium
5. Install the web driver manager: pip3 install webdriver_manager
6. Install pandas: pip3 install pandas

After Everything is Setup
1. Activate your environment if it isnt active already:
	For windows type this into your terminal: your-environment-folder-name/Scripts/activate.bat
	Make sure you are cd'ed into the correct folder right before your environment folder
	If you are using PowerShell, type this instead: your-environment-folder-name/Scripts/Activate.ps1
	If you are on Mac or Linux type this: source your-environment-folder-name/bin/activate\
2.  If on windows change line 28 in "scraper/main.py" to: 
    ```
        main_path = '../data/tournaments_data.csv'
    ```

    if on mac change line 28 in "scraper/main.py" to: 
    ```
        main_path = 'data/tournaments_data.csv'
    ```
