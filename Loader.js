(() => {
    let isMinimized = false;
    let container; // Declarado globalmente para acceder después de minimizar

    // Crear fondo borroso (pantalla de inicio de sesión)
    const blurOverlay = document.createElement("div");
    Object.assign(blurOverlay.style, {
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backdropFilter: "blur(10px)",
        background: "rgba(0, 0, 0, 0.6)",
        zIndex: "9999",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.5s ease-in-out"
    });

    // Caja de inicio de sesión
    const loginBox = document.createElement("div");
    Object.assign(loginBox.style, {
        background: "rgba(20, 20, 20, 0.9)",
        padding: "20px",
        borderRadius: "10px",
        textAlign: "center",
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    });

    // Entradas de usuario y contraseña
    const userInput = document.createElement("input");
    const passInput = document.createElement("input");

    [userInput, passInput].forEach(input => {
        Object.assign(input.style, {
            padding: "10px",
            marginBottom: "10px",
            border: "none",
            borderRadius: "5px",
            background: "#333",
            color: "white",
            textAlign: "center"
        });
    });

    userInput.placeholder = "Username";
    passInput.placeholder = "Password";
    passInput.type = "password";

    // Botón de inicio de sesión
    const loginButton = document.createElement("button");
    loginButton.innerText = "Login";
    Object.assign(loginButton.style, {
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        background: "#444",
        color: "white",
        cursor: "pointer"
    });

    // Caja de carga
    const loadingBox = document.createElement("div");
    Object.assign(loadingBox.style, {
        display: "none",
        flexDirection: "column",
        alignItems: "center"
    });

    const progressBar = document.createElement("div");
    Object.assign(progressBar.style, {
        width: "100%",
        height: "5px",
        background: "#444",
        borderRadius: "5px",
        overflow: "hidden"
    });

    const progress = document.createElement("div");
    Object.assign(progress.style, {
        width: "0%",
        height: "100%",
        background: "limegreen",
        transition: "width 1s linear"
    });

    progressBar.appendChild(progress);
    loadingBox.append(progressBar);

    // Agregar elementos al DOM
    loginBox.append(userInput, passInput, loginButton, loadingBox);
    blurOverlay.appendChild(loginBox);
    document.body.appendChild(blurOverlay);

    // Funcionalidad de inicio de sesión
    loginButton.onclick = () => {
        let scriptUrl = "";

        if (userInput.value === "root" && passInput.value === "syphrexontop") {
            scriptUrl = "https://raw.githubusercontent.com/pulgax-g/SYPHREX/refs/heads/main/Syphrexpremium.js";
        } else if (userInput.value === "guest" && passInput.value === "123456") {
            scriptUrl = "https://raw.githubusercontent.com/pulgax-g/SYPHREX/refs/heads/main/Syphrexfree.js";
        } else if (userInput.value === "pauchito" && passInput.value === "pauchitoguapo") {
            scriptUrl = "https://raw.githubusercontent.com/pulgax-g/SYPHREX/refs/heads/main/Syphrexpremium.js";
        } else {
            alert("Invalid Credentials");
            return;
        }

        // Animación de carga
        userInput.style.display = "none";
        passInput.style.display = "none";
        loginButton.style.display = "none";

        loadingBox.style.display = "flex";
        setTimeout(() => {
            progress.style.width = "100%";
        }, 200);

        setTimeout(() => {
            blurOverlay.style.opacity = "0";
            setTimeout(() => {
                blurOverlay.remove();
                ejecutarScript(scriptUrl);
            }, 500);
        }, 1500);
    };

    // Función para cargar y ejecutar el script correspondiente
    function ejecutarScript(url) {
        fetch(url)
            .then(response => {
                if (!response.ok) throw new Error("Failed to load script.");
                return response.text();
            })
            .then(scriptContent => {
                eval(scriptContent);
            })
            .catch(error => console.error("Error ejecutando script:", error));
    }
})();

