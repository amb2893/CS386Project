from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.keys import Keys
import time

def setup_browser():
    chrome_driver_path = r"C:\Users\Markiso\Downloads\chromedriver-win64\chromedriver-win64\chromedriver.exe"
    service = Service(executable_path=chrome_driver_path)
    driver = webdriver.Chrome(service=service)
    return driver

def test_page_load():
    driver = setup_browser()
    
    # Navigate to the page
    driver.get("http://127.0.0.1:5500/index.html")
    
    # Wait for the page to load fully by waiting for a specific element
    try:
        WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.XPATH, "//h1[contains(text(),'Gaming Workout Hub')]"))
        )
        print("Page loaded successfully. Title found.")
    except:
        print("Page failed to load or title not found.")
    
    # Close the browser
    driver.quit()

def test_progress_bar_update():
    driver = setup_browser()

    # Navigate to the page
    driver.get("http://127.0.0.1:5500/index.html")

    # Wait for the "Workouts" button
    workouts_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "//a[contains(@href, 'workoutPlan')]"))
    )
    workouts_button.click()
    time.sleep(2)

    # Select the "Bodyweight" button
    workout_button = driver.find_element(By.XPATH, "//button[contains(text(),'Bodyweight Full-Body Workout')]")
    workout_button.click()
    time.sleep(2)

    # Confirm the workout
    correct_button = driver.find_element(By.XPATH, "//button[contains(text(),'Correct')]")
    correct_button.click()
    time.sleep(2)

    # Select "Interval" workout style
    interval_button = driver.find_element(By.XPATH, "//button[contains(text(),'Interval')]")
    interval_button.click()
    time.sleep(2)

    # Set the timer input
    timer_input = driver.find_element(By.CLASS_NAME, "number-input")
    timer_input.send_keys(Keys.BACKSPACE)
    timer_input.send_keys("0.05")

    # Start the timer
    start_timer_button = driver.find_element(By.CLASS_NAME, "timer-button")
    start_timer_button.click()

    # Wait for the timer to complete
    time.sleep(5)

    workouts_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "//a[contains(@href, 'index')]"))
    )
    workouts_button.click()
    time.sleep(2)

    workouts_button = WebDriverWait(driver, 10).until(
        EC.element_to_be_clickable((By.XPATH, "//a[contains(@href, 'progress')]"))
    )
    workouts_button.click()
    time.sleep(2)

    # Check progress bar
    progress_bar = driver.find_element(By.ID, "progressBar")
    assert progress_bar.get_attribute("value") == "1", "Progress bar value should be 1"

    driver.quit()

# Run the test
test_page_load()
