from flask import Flask, request, jsonify
import requests
import os
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()

server = Flask(__name__)
CORS(server, resources={r"/chatbot": {"origins": "https://robochatgpt.netlify.app"}, r"/chatbots": {"origins": "https://robochatgpt.netlify.app"}})

api_key = os.getenv("HUGGINGFACE_API_KEY")
PORT = os.getenv("PORT")

chat_history = []

@server.route('/')
def home():
    return "Python server is running", 200 

@server.route('/chatbot', methods=['POST'])
def chatbot():
    data = request.get_json()
    user_message = data['message']

    try:
        url = f"https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill"
        # url = f"https://api-inference.huggingface.co/models/gpt2"

        headers = {
            "Authorization": f"Bearer {api_key}",
            "Content-Type": "application/json"
        }

        payload = {
            "inputs": user_message,
            "parameters": {
                "temperature": 0.3  # Adjust for randomness
            }
        }

        response = requests.post(url, headers = headers, json = payload)
        response_data = response.json()
        print(response_data)

        bot_response = response_data[0]["generated_text"] if isinstance(response_data, list) and "generated_text" in response_data[0] else "Error generating response. Try again!"

        chat_history.append({
            "user": user_message,
            "bot": bot_response
        })
        return jsonify({"response": bot_response})
    
    except Exception as e:
        print(f"Error with API: {e}")
        return jsonify({"error": "Unable to process request"}), 500

@server.route('/chatbots', methods=['GET'])
def chatbots():
    return jsonify(chat_history)

if __name__ == '__main__':
    server.run(host = '0.0.0.0', port = PORT)