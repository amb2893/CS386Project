import time
from selenium import webdriver
from selenium.webdriver.common.by import By

driver = None

def setup_module(module):
    global driver
    driver = webdriver.Chrome()

def teardown_module(module):
    driver.quit()

def test_app_loads():
    driver.get("https://gaming-workout-hub.onrender.com")
    time.sleep(2)
    assert "Gaming Workout Hub" in driver.title

def test_login_load():
    driver.get("https://gaming-workout-hub.onrender.com/login.html")
    time.sleep(2)
    assert "Gaming Workout Hub" in driver.title

def test_workout_page():
    driver.get("https://gaming-workout-hub.onrender.com/workoutPlan.html")
    time.sleep(2)
    assert "At-Home Workouts" in driver.title

def test_about_page():
    driver.get("https://gaming-workout-hub.onrender.com/about.html")
    time.sleep(2)
    assert "About Us" in driver.title

def test_contact_page():
    driver.get("https://gaming-workout-hub.onrender.com/contact.html")
    time.sleep(2)
    assert "Gaming Workout Hub" in driver.title

def test_login_page():
    driver.get("https://gaming-workout-hub.onrender.com/alert.html")
    time.sleep(2)
    assert "Gaming Workout Hub" in driver.title

def test_body_page():
    driver.get("https://gaming-workout-hub.onrender.com/bodyTest.html")
    time.sleep(2)
    assert "Gaming Workout Hub" in driver.title
                                
def test_register_function():
    driver.get("https://gaming-workout-hub.onrender.com/register.html")
    full_name_box = driver.find_element(By.NAME, "name")
    full_name_box.send_keys("testuser")
    time.sleep(1)
    email_box = driver.find_element(By.NAME, "email")
    email_box.send_keys("4test@test.com")
    time.sleep(1)
    password_box = driver.find_element(By.NAME, "password")
    password_box.send_keys("testuser")
    time.sleep(1)
    login_button = driver.find_element(By.XPATH, "//button[text()='Sign up']")
    login_button.click()
    time.sleep(2)
    assert "Gaming Workout Hub" in driver.title

def test_login_function():
    driver.get("https://gaming-workout-hub.onrender.com/login.html")
    email_box = driver.find_element(By.NAME, "email")
    email_box.send_keys("4test@test.com")
    time.sleep(1)
    password_box = driver.find_element(By.NAME, "password")
    password_box.send_keys("testuser")
    time.sleep(1)
    login_button = driver.find_element(By.XPATH, "//button[text()='Login']")
    login_button.click()
    time.sleep(2)
    assert "Gaming Workout Hub" in driver.title
