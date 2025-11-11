document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const sidebar = document.getElementById("sidebar");
    const tabs = document.querySelectorAll(".tab");
    const settingsBtn = document.getElementById("settings-btn");
    const alertsBtn = document.getElementById("alerts-btn");
    const aiAssistantBtn = document.getElementById("ai-assistant-btn");
    const logoutBtn = document.getElementById("logout-btn");
    const aiChatbot = document.getElementById("ai-chatbot");
    const closeChat = document.getElementById("close-chat");
    const aiChatMessages = document.getElementById("ai-chat-messages");
    const aiChatInput = document.getElementById("ai-chat-input");
    const aiChatSend = document.getElementById("ai-chat-send");

    // Hamburger menu toggle
    hamburgerBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
        hamburgerBtn.classList.toggle("active");
    });

    // Tab navigation active state
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            tabs.forEach((t) => t.classList.remove("active"));
            tab.classList.add("active");
        });
    });

    // Settings button click
    settingsBtn.addEventListener("click", () => {
        alert("Settings clicked!");
    });

    // All Alerts button click
    alertsBtn.addEventListener("click", () => {
        alert("All Alerts clicked!");
    });

    // AI Assistant button click
    aiAssistantBtn.addEventListener("click", () => {
        aiChatbot.style.display = "flex";
    });

    // Close chat
    closeChat.addEventListener("click", () => {
        aiChatbot.style.display = "none";
    });

    // Logout button click
    logoutBtn.addEventListener("click", () => {
        alert("Logout clicked!");
    });

    // Chatbot responses
    const responses = {
        "hello": "Hello! How can I help you today?",
        "hi": "Hi there! What do you need?",
        "how are you": "I'm just a bot, but I'm here to help!",
        "what is your name": "I'm your AI Assistant.",
        "bye": "Goodbye! Have a great day!",
        "default": "I'm sorry, I don't understand that. Can you rephrase?"
    };

    // Send message
    aiChatSend.addEventListener("click", sendMessage);
    aiChatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") sendMessage();
    });

    function sendMessage() {
        const message = aiChatInput.value.trim();
        if (message === "") return;

        // Add user message
        addMessage(message, "user");

        // Get bot response
        const lowerMessage = message.toLowerCase();
        let reply = responses[lowerMessage] || responses["default"];
        setTimeout(() => addMessage(reply, "bot"), 500);

        // Clear input
        aiChatInput.value = "";
        aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
    }

    function addMessage(text, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.className = `ai-chat-message ${sender}`;
        messageDiv.textContent = text;
        aiChatMessages.appendChild(messageDiv);
        aiChatMessages.scrollTop = aiChatMessages.scrollHeight;
    }
});
