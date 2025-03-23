import pytest
from bs4 import BeautifulSoup

@pytest.fixture

def soup():
    with open("bodyTest.html", "r", encoding="utf-8") as file:
        html_content = file.read()
    return BeautifulSoup(html_content, "html.parser")
    
def test_tile(soup):
    assert soup.title.string == "Gaming Workout Hub"

def test_header_exists(soup):
    header = soup.find("header", class_="bodyTestHeader")
    assert header is not None
    assert "Desired Body Type Test" in header.h1.text
    
def test_questions_exist(soup):
    questions = soup.find_all("div", class_="testQuestions")
    assert len(questions) > 0
    
@pytest.mark.parametrize("class_name", [
    "userBodyTypeQustion-button",
    "desiredBodyTypeQuestion-button",
    "userGenderQuestion-button",
    "userHeightQuestion-button",
    "howmuchQuestion-button",
    "howOften-button",
    "howLongQuestion-button",
])

def test_button_exist(soup, class_name):
    buttons = soup.find_all("button", class_=class_name)
    assert len(buttons) > 0

def test_submit_button(soup):
    submit_button = soup.find("button", class_="submitTestButton")
    assert submit_button is not None
    assert "Submit" in submit_button.text
    
def test_stylesheet_linked(soup):
    link = soup.find("link", rel="stylesheet")
    assert link is not None
    assert link["href"] == "indexStyles.css"

def test_script_linked(soup):
    script = soup.find("script", src="script.js")
    assert script is not None