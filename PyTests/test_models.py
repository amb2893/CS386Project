import time
from selenium import webdriver
from selenium.webdriver.common.by import By
import unittest

class TestGamingWorkoutHub(unittest.TestCase):
    
    @classmethod
    def setUpClass(cls):
        cls.driver = webdriver.Chrome()

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

    def test_app_loads(self):
        self.driver.get("https://gaming-workout-hub.onrender.com")
        time.sleep(2)
        self.assertIn("Gaming Workout Hub", self.driver.title)

    def test_login_load(self):
        self.driver.get("https://gaming-workout-hub.onrender.com/login.html")
        time.sleep(2)
        self.assertIn("Gaming Workout Hub", self.driver.title)

    def test_workout_page(self):
        self.driver.get("https://gaming-workout-hub.onrender.com/workoutPlan.html")
        time.sleep(2)
        self.assertIn("At-Home Workouts", self.driver.title)

    def test_about_page(self):
        self.driver.get("https://gaming-workout-hub.onrender.com/about.html")
        time.sleep(2)
        self.assertIn("About Us", self.driver.title)

    def test_contact_page(self):
        self.driver.get("https://gaming-workout-hub.onrender.com/contact.html")
        time.sleep(2)
        self.assertIn("Gaming Workout Hub", self.driver.title)

    def test_login_page(self):
        self.driver.get("https://gaming-workout-hub.onrender.com/alert.html")
        time.sleep(2)
        self.assertIn("Gaming Workout Hub", self.driver.title)

    def test_body_page(self):
        self.driver.get("https://gaming-workout-hub.onrender.com/bodyTest.html")
        time.sleep(2)
        self.assertIn("Gaming Workout Hub", self.driver.title)

    def test_register_function(self):
        self.driver.get("https://gaming-workout-hub.onrender.com/register.html")
        full_name_box = self.driver.find_element(By.NAME, "name")
        full_name_box.send_keys("testuser")
        time.sleep(1)
        email_box = self.driver.find_element(By.NAME, "email")
        email_box.send_keys("4test@test.com")
        time.sleep(1)
        password_box = self.driver.find_element(By.NAME, "password")
        password_box.send_keys("testuser")
        time.sleep(1)
        login_button = self.driver.find_element(By.XPATH, "//button[text()='Sign up']")
        login_button.click()
        time.sleep(2)
        self.assertIn("Gaming Workout Hub", self.driver.title)

    def test_login_function(self):
        self.driver.get("https://gaming-workout-hub.onrender.com/login.html")
        email_box = self.driver.find_element(By.NAME, "email")
        email_box.send_keys("4test@test.com")
        time.sleep(1)
        password_box = self.driver.find_element(By.NAME, "password")
        password_box.send_keys("testuser")
        time.sleep(1)
        login_button = self.driver.find_element(By.XPATH, "//button[text()='Login']")
        login_button.click()
        time.sleep(2)
        self.assertIn("Gaming Workout Hub", self.driver.title)

if __name__ == "__main__":
    unittest.main()
