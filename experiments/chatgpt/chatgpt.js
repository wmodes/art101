$(document).ready(function() {
    // HTML elements
    const chatContainer = $('#chat-container');
    const userInput = $('#user-input');
    const chatLog = $('#chat-log');
  
    // Event listener for user input
    userInput.on('keydown', function(event) {
      if (event.key === 'Enter') {
        const message = userInput.val();
        displayUserMessage(message);
        generateResponse(message);
        userInput.val('');
      }
    });
  
    // Display user message in the chat log
    function displayUserMessage(message) {
      const messageElement = $('<div>').addClass('message user-message').text(message);
      chatLog.append(messageElement);
      chatContainer.scrollTop(chatContainer[0].scrollHeight);
    }
  
    // Display bot message in the chat log
    function displayBotMessage(message) {
      const messageElement = $('<div>').addClass('message bot-message').text(message);
      chatLog.append(messageElement);
      chatContainer.scrollTop(chatContainer[0].scrollHeight);
    }
  
    // Generate response using ChatGPT
    function generateResponse(message) {
      // Send user message to the server for processing
      $.ajax({
        url: '/chatbot',
        type: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ message }),
        success: function(data) {
          const response = data.response;
          displayBotMessage(response);
        },
        error: function(error) {
          console.error('Error:', error);
        }
      });
    }
  });