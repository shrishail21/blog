CREATE TABLE blogs (id int PRIMARY KEY AUTO_INCREMENT, title VARCHAR(100), contents VARCHAR(1000),created_time    DATETIME default CURRENT_TIMESTAMP,user_id int,category_id int,FOREIGN KEY (user_id) REFERENCES user(id),FOREIGN KEY (user_id) REFERENCES categories(id));

INSERT into blogs(title, contents,user_id,category_id) VALUES ('ChatGPT Vs Bard: Which is better for coding?','The biggest difference between ChatGPT and Bard is the Large Language Models (LLMs) they are powered by. ChatGPT uses the Generative Pre-trained Transformer 4 (GPT-4), while Bard uses the Language Model for Dialogue Applications (LaMBDA). Also, ChatGPT is developed by OpenAI, while Bard was built by Google.In terms of capabilities, both do very similar things. Programmers can use ChatGPT for:
Suggestions: Both models can suggest the correct syntax and parameters for functions and other code constructs.
Completion: It can complete code that you have started writing.
Debugging: It can help you identify errors and problems in your code.
Explanation: It can explain the code that it generates, or code you input.',1,1)