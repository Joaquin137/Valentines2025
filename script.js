document.getElementById("yesButton").addEventListener("click", function () { 
    const message = document.getElementById("message");
    const newImage = document.createElement('img');
    newImage.src = 'ositotedi.jpg'; 
    newImage.alt = 'osito tedi';
    newImage.style.width = '200px';
    newImage.style.display = 'block'; // Ensure image appears on its own line
    newImage.style.margin = '0 auto'; // Centers the image horizontally

    message.innerHTML = ""; // Clear contents
    message.appendChild(newImage);

    const text = document.createElement('span');
    text.textContent = "You will spend Valentine's Day with Osito Tedi!";
    text.style.display = 'block'; // Ensure text appears on its own line
    text.style.marginTop = '10px';
    message.appendChild(text);
});

document.getElementById("noButton").addEventListener("click", function() {
    const message = document.getElementById("message");
    const newImage = document.createElement('img');
    newImage.src = 'ositogrisly.jpg'; 
    newImage.alt = 'osito grisly';
    newImage.style.width = '200px';
    newImage.style.display = 'block'; // Ensure image appears on its own line
    newImage.style.margin = '0 auto'; // Centers the image horizontally

    message.innerHTML = ""; // Clear contents
    message.appendChild(newImage);

    const text = document.createElement('span');
    text.textContent = "You made Osito Grisly pmo'd fr!";
    text.style.display = 'block'; // Ensure text appears on its own line
    text.style.marginTop = '10px';
    message.appendChild(text);
});


