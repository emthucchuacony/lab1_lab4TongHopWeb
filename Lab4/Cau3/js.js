document.addEventListener("DOMContentLoaded", function () {
    const greetings = [
        "Hello!",
        "Hi there!",
        "Welcome!",
        "Greetings!",
        "Hola!",
        "Bonjour!",
        "Ciao!",
        "Howdy!",
        "Hey!",
        "Salutations!"
    ];

    const greetingElement = document.getElementById("greeting");

    // Lấy một lời chào ngẫu nhiên từ mảng 'greetings'
    const randomIndex = Math.floor(Math.random() * greetings.length);
    const randomGreeting = greetings[randomIndex];

    // Hiển thị lời chào ngẫu nhiên trên trang web
    greetingElement.textContent = randomGreeting;
});
