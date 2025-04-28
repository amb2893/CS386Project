from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

driver = webdriver.Chrome()
driver.get('https://gaming-workout-hub.onrender.com/bodyTest.html')
wait = WebDriverWait(driver, 90)


#Test workout generation
button_classes = [
    ".userBodyTypeQuestion .userBodyTypeQuestion-button",
    ".desiredBodyTypeQuestion .desiredBodyTypeQuestion-button",
    ".userGenderQuestion .userGenderQuestion-button",
    ".userHeightQuestion .userHeightQuestion-button",
    ".howMuchQuestion .howMuchQuestion-button",
    ".howOftenQuestion .howOftenQuestion-button",
    ".howLongQuestion .howLongQuestion-button",
]

for buttons in button_classes:
    button = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, buttons)))
    button.click()

submit = driver.find_element(By.CLASS_NAME, "submitTestButton")
submit.click()

workouts = wait.until(EC.presence_of_all_elements_located((By.CLASS_NAME, "rec-workout")))
assert len(workouts) == 3
print("workout generated successfully")

#Test failing workout generation
driver.refresh()

some_buttons = [
    ".userBodyTypeQuestion .userBodyTypeQuestion-button",
    ".desiredBodyTypeQuestion .desiredBodyTypeQuestion-button",
    ".userGenderQuestion .userGenderQuestion-button",
    ".userHeightQuestion .userHeightQuestion-button"
]

for buttons in some_buttons:
    button = wait.until(EC.element_to_be_clickable((By.CSS_SELECTOR, buttons)))
    button.click()

submit = driver.find_element(By.CLASS_NAME, "submitTestButton")
submit.click()

alert = wait.until(EC.alert_is_present())
assert "Please select a choice" in alert.text
alert.accept()

print("Refused to generate a workout without every selection")
print("Everything works as intended")

driver.quit()