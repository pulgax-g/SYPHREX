// Crear la ventana principal
const windowDiv = document.createElement("div");
windowDiv.style.position = "fixed";
windowDiv.style.top = "20%";
windowDiv.style.left = "10%";
windowDiv.style.width = "400px";
windowDiv.style.height = "370px";
windowDiv.style.background = "#222";
windowDiv.style.border = "2px solid #444";
windowDiv.style.borderRadius = "5px";
windowDiv.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.3)";
windowDiv.style.overflow = "hidden";
windowDiv.style.zIndex = "1000";
document.body.appendChild(windowDiv);

// Barra superior para mover
const topBar = document.createElement("div");
topBar.style.background = "#333";
topBar.style.padding = "8px";
topBar.style.cursor = "grab";
topBar.style.display = "flex";
topBar.style.alignItems = "center";
topBar.style.justifyContent = "space-between";
windowDiv.appendChild(topBar);

// Hacer que la ventana sea arrastrable
let isDragging = false, startX, startY;

const startDrag = (e) => {
    isDragging = true;
    startX = e.clientX || e.touches[0].clientX;
    startY = e.clientY || e.touches[0].clientY;
    windowDiv.style.transition = "none";
};

const doDrag = (e) => {
    if (!isDragging) return;
    const x = (e.clientX || e.touches[0].clientX) - startX;
    const y = (e.clientY || e.touches[0].clientY) - startY;
    windowDiv.style.left = `${windowDiv.offsetLeft + x}px`;
    windowDiv.style.top = `${windowDiv.offsetTop + y}px`;
    startX = e.clientX || e.touches[0].clientX;
    startY = e.clientY || e.touches[0].clientY;
};

const stopDrag = () => {
    isDragging = false;
};

topBar.addEventListener("mousedown", startDrag);
topBar.addEventListener("touchstart", startDrag);
document.addEventListener("mousemove", doDrag);
document.addEventListener("touchmove", doDrag);
document.addEventListener("mouseup", stopDrag);
document.addEventListener("touchend", stopDrag);

// Imagen de título
const titleImg = document.createElement("img");
titleImg.src = "https://lh3.googleusercontent.com/pw/AP1GczNjR0xmZ3skkJ0hNxDUJh3a5qAoKR80nzWuHKAX4EwzrXXDtjGkDIm9I4je57Fh18jpHIykjsvsEVvOYFbJAdi862UwRAL36-GcchPAnpJx8o5xOI778DP8PUjX1tyfuHSVy5XBT8LUUeqrRoovEa9fWp-C_tg8s5HwoV8xK77egmKUCp1spI_Ev9Pitdq1hNOBhJBLEKBcpVbpaaiLo8X0sVWfyBlHKCmobsUObOvGNhB2mb6HNLWtkyMG2RoI-MNAgYzCBu1lyLYdSUDw2btF__5nNRYx6rIeNPcguThWj8yJzCxY1xAjzv6gJTnfJhvT7uBP1wPlHX7RvemPWqKc1sp52jlRmx-pFogtGG6duYDeLtF1TXV_o8su1A8VvE6jVFm_I1KEJP9anhnqGbLufZfBElHPCS13Qut3usFb7GQe4W8Ce2RZp9P6Kq8cFmxW5a9dy_1fc51-Owpg1blXXjoE1A0ZDkMtZ7iQHesyl3QhNFhFEQHZ7wl5d73gmRQDr7hmPRu06s2fqZJvHrbnh6mR7NKQj1lKbe9vHP8gOz3H4yJhKIELGXsieCNQzJon7XiHFRtmzy1blD-Q6W4BmejmFO3L-upH4zf96jzBdL0CO-3TcQ_B14_uFc2P_pjtjo0pQUsgqKPcN1C7hwQAjcICTCOEDR2mPdetP2_r9J14sSAf0sW7sL9G_EFTfTmSvw_lmccknzYpEx44vzDkAwpU1WmNdwo1guvhRemaGmvDymdM5KycPtmvFq-24mBqB_To3t6aYGDVuduqzPAGe95ibRNvNqmuq_k5Gcs198cbeCR32oX-jzY9B2C5fJPLqCXZ4GLquqg0NNUpzd-z0IsO46UVK9afB9ZbEqUXkwxAPXMXfyFOJcQGOG1v2tJZPm_wFzQOyLPDy3kFIQ=w1350-h138-s-no?authuser=0";
titleImg.style.width = "80px";
titleImg.style.marginLeft = "10px";
topBar.appendChild(titleImg);

// Botón de cerrar
const closeBtn = document.createElement("button");
closeBtn.innerText = "X";
closeBtn.style.background = "#777";
closeBtn.style.color = "white";
closeBtn.style.border = "none";
closeBtn.style.cursor = "pointer";
closeBtn.style.marginRight = "10px";
closeBtn.style.padding = "8px";
closeBtn.style.fontSize = "14px";
closeBtn.style.borderRadius = "3px";
closeBtn.onclick = () => document.body.removeChild(windowDiv);
topBar.appendChild(closeBtn);

// Contenedor del editor
const editorContainer = document.createElement("div");
editorContainer.style.display = "flex";
editorContainer.style.background = "#111";
editorContainer.style.height = "220px";
windowDiv.appendChild(editorContainer);

// Números de línea
const lineNumbers = document.createElement("div");
lineNumbers.style.width = "30px";
lineNumbers.style.padding = "10px";
lineNumbers.style.textAlign = "right";
lineNumbers.style.color = "#888";
lineNumbers.style.background = "#1a1a1a";
lineNumbers.style.fontFamily = "monospace";
lineNumbers.style.userSelect = "none";
lineNumbers.style.overflow = "hidden";
lineNumbers.style.height = "100%";
lineNumbers.style.position = "relative";
editorContainer.appendChild(lineNumbers);

// Área de código
const codeInput = document.createElement("textarea");
codeInput.style.width = "100%";
codeInput.style.height = "100%";
codeInput.style.background = "#111";
codeInput.style.color = "#0f0";
codeInput.style.border = "none";
codeInput.style.padding = "10px";
codeInput.style.fontFamily = "monospace";
codeInput.style.resize = "none";
codeInput.style.overflowY = "auto";
codeInput.style.touchAction = "manipulation";
codeInput.placeholder = "Write JavaScript here...";
editorContainer.appendChild(codeInput);

// Sincronizar scroll de números de línea con el código
codeInput.addEventListener("scroll", () => {
    lineNumbers.scrollTop = codeInput.scrollTop;
});

// Función para actualizar los números de línea
function updateLineNumbers() {
    const lines = codeInput.value.split("\n").length;
    let lineNumberHTML = "";
    for (let i = 1; i <= lines; i++) {
        lineNumberHTML += i + "<br>";
    }
    lineNumbers.innerHTML = lineNumberHTML;
}

// Actualizar números de línea cuando se escribe
codeInput.addEventListener("input", updateLineNumbers);

// Contenedor de botones
const buttonContainer = document.createElement("div");
buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "space-between";
buttonContainer.style.padding = "15px";
windowDiv.appendChild(buttonContainer);

// Botón de ejecutar
const executeBtn = document.createElement("button");
executeBtn.innerText = "Execute";
executeBtn.style.background = "#6a0dad";
executeBtn.style.color = "#fff";
executeBtn.style.border = "none";
executeBtn.style.padding = "12px 20px";
executeBtn.style.cursor = "pointer";
executeBtn.style.borderRadius = "5px";
executeBtn.style.fontSize = "16px";
executeBtn.onclick = () => {
    try {
        eval(codeInput.value);
    } catch (error) {
        alert("Error: " + error.message);
    }
};
buttonContainer.appendChild(executeBtn);

// Botón de limpiar
const clearBtn = document.createElement("button");
clearBtn.innerText = "Clear";
clearBtn.style.background = "#555";
clearBtn.style.color = "#fff";
clearBtn.style.border = "none";
clearBtn.style.padding = "12px 20px";
clearBtn.style.cursor = "pointer";
clearBtn.style.borderRadius = "5px";
clearBtn.style.fontSize = "16px";
clearBtn.onclick = () => {
    codeInput.value = "";
    updateLineNumbers();
};
buttonContainer.appendChild(clearBtn);

// Inicializar números de línea
updateLineNumbers();
};
