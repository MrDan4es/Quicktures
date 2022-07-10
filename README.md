# Quicktures

![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)

Small Django app to store image URLs and with simplified copy to clipboard with responsive layout on Bootstrap.

#### Deployed on Heroku: https://quicktures.herokuapp.com/
### Authorization data for a test user:
```
login: test
password: 87654321
```
# Requirements
- Python >= 3.6
- Django >= 4.0
- DRF >= 3.10
# Installation (dev server)
```
git clone https://github.com/MrDan4es/Quicktures
python3 -m venv venv
. venv/bin/activate (venv\Scripts\Activate.bat for windows)
pip install -r requirements.txt
python manage.py makemigrations; python manage.py migrate
python manage.py runserver
```
# Screenshots
![day mode screenshot](/static/img/day.png?raw=true)
![night mode screenshot](/static/img/night.png?raw=true)