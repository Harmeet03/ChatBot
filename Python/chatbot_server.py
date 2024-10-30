from flask import Flask, request, jsonify
import openai
import os
from dotenv import load_dotenv

load_dotenv()

server = Flask(__name__)

openai.api_key = os.getenv("OPENAI_API_KEY")

@server.route('/')
def home():
    return "Python server is running", 200 

@server.route('/chatbot', methods=['POST'])
def chatbot():
    data = request.get_json()
    user_message = data['message']

    try:
        response = openai.ChatCompletion.create(
            model = "gpt-3.5-turbo",
            messages = [{"role": "user", "content": user_message}]
        )
        bot_response = response['choices'][0]['message']['content'].strip()
        return jsonify({"response": bot_response})
    except Exception as e:
        print(f"Error with OpenAI API: {e}")
        return jsonify({"error": "Unable to process request"}), 500

if __name__ == '__main__':
    server.run(host = 'localhost', port = 5001)