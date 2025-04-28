from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


driver = webdriver.Chrome()
driver.get('https://gaming-workout-hub.onrender.com/workoutPlan.html')
wait = WebDriverWait(driver, 90)

#function to assert correct title
def assertion(text):
    wait.until(EC.text_to_be_present_in_element((By.CLASS_NAME, 'size_title'), text))
    title = driver.find_element(By.CLASS_NAME, 'size_title').text
    assert title == text

#Test initial buttons
def test_button():
    #Only test first butotn for simplicity
    button = driver.find_element(By.CLASS_NAME, "big-button")
    button.click()

    assertion("Confirm Choice")

#Test choice confirmation
def test_confirm_choice():
    button = driver.find_element(By.CLASS_NAME, "selectButton")
    button.click()
    
    assertion("Choose Workout Style")

#Test interval
def test_interval():
    button = driver.find_element(By.CLASS_NAME, "big-button")
    button.click()

    assertion("Interval Based Workouts")

    timer_input = driver.find_element(By.CLASS_NAME, "number-input")
    timer_input.send_keys("0.05")

    submit = driver.find_element(By.CLASS_NAME, "timer-button")
    submit.click()

    wait.until(EC.presence_of_element_located((By.CLASS_NAME, "instructions")))

    subtitle = driver.find_element(By.CLASS_NAME, "size_sub_title").text
    assert "Your workout is:" in subtitle

#Test round based workouts
def test_round():
    button = driver.find_elements(By.CLASS_NAME, "big-button")[1]
    button.click()

    assertion("Round Based Workouts")

    timer_input = driver.find_element(By.CLASS_NAME, "number-input")
    timer_input.send_keys("10")

    submit = driver.find_element(By.CLASS_NAME, "rounds-button")
    submit.click()

    wait.until(EC.presence_of_element_located((By.CLASS_NAME, "instructions")))

    subtitle = driver.find_element(By.CLASS_NAME, "size_sub_title").text
    assert "Your workout is:" in subtitle


#Test intervals first
test_button()
test_confirm_choice()
test_interval()

print("Interval workouts work as intended")

#Test round based workouts
driver.refresh()
wait.until(EC.presence_of_element_located((By.CLASS_NAME, "big-button")))

test_button()
test_confirm_choice()
test_round()

print("Round based workouts work as intended")