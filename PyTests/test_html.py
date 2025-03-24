import pytest
from models import BodyTestPage

@pytest.fixture

def page():
    return BodyTestPage()
    
def test_tile(page):
    assert page.get_title() == "Gaming Workout Hub"

def test_header_exists(page):
    header = page.get_header()
    assert header is not None
    assert "Desired Body Type Test" in header.h1.text
    
def test_questions_exist(page):
    assert len(page.get_questions()) > 0
    
@pytest.mark.parametrize("class_name", [
    "userBodyTypeQustion-button",
    "desiredBodyTypeQuestion-button",
    "userGenderQuestion-button",
    "userHeightQuestion-button",
    "howmuchQuestion-button",
    "howOften-button",
    "howLongQuestion-button",
])

def test_button_exist(page, class_name):
    buttons = page.get_buttons_by_class(class_name)
    assert len(buttons) > 0

def test_submit_button(page):
    submit_button = page.get_submit_button()
    assert submit_button is not None
    assert "Submit" in submit_button.text
    
def test_stylesheet_linked(page):
    link = page.get_stylesheet()
    assert link is not None
    assert link["href"] == "indexStyles.css"

def test_script_linked(page):
    script = page.get_script()
    assert script is not None