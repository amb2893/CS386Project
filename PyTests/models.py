from bs4 import BeautifulSoup

class BodyTestPage:
    
    def __init__(self, html_file="bodyTest.html"):
        with open(html_file, "r", encoding="utf-8") as file:
            self.soup = BeautifulSoup(file.read(), "html.parser")
            
    def get_title(self):
        return self.soup.title.string if self.soup.title else None
    
    def get_header(self):
        return self.soup.find("header", class_="bodyTestHeader")
    
    def get_questions(self):
        return self.soup.find_all("div", class_="testQuestions")
    
    def get_buttons_by_class(self, class_name):
        return self.soup.find_all("button", class_=class_name)
        
    def get_submit_button(self):
        return self.soup.find("button", class_="submitTestButton")
        
    def get_stylesheet(self):
        return self.soup.find("link", rel="stylesheet")
        
    def get_script(self):
        return self.soup.find("script", src="script.js")