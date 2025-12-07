// Millonarios de Amor - Quiz Bíblico
// Autor: adaptado para clase infantil/juvenil
// Instrucciones: guardar como script.js y enlazar en index.html

const questions = [
    {
        q: "¿Cuál es el título o tema principal de la lección de hoy?",
        a: "Creciendo en Amor",
        opts: ["Creciendo en Amor", "La Parábola del Rico", "El Viaje de la Semilla", "La Oración de la Mañana"],
        hint: "Es el encabezado que aparece en grande en la página."
    },
    {
        q: "¿Qué pide el versículo de memoria (1 Tes. 3:12)?",
        a: "Que el Señor haga crecer y abundar el amor unos para con otros",
        opts: [
            "Que tengamos mucho dinero",
            "Que el Señor haga crecer y abundar el amor unos para con otros",
            "Que vivamos siempre lejos de los demás",
            "Que nadie se equivoque nunca"
        ],
        hint: "Habla de crecimiento y abundar en una cualidad entre las personas."
    },
    {
        q: "¿Cuál es el objetivo pedagógico de la lección de hoy?",
        a: "Cultivar en el niño el amor hacia los hermanos por la demostración del amor de Cristo",
        opts: [
            "Explicar matemáticas avanzadas",
            "Aprender a plantar árboles",
            "Cultivar en el niño el amor hacia los hermanos por la demostración del amor de Cristo",
            "Memorizar versículos sin entenderlos"
        ],
        hint: "Busca que los niños aprendan un sentimiento práctico hacia otros."
    },
    {
        q: "¿Qué parábola del Evangelio está mencionada en las bases bíblicas?",
        a: "La parábola del trigo y la cizaña (Mateo 13:24-30)",
        opts: [
            "La parábola del hijo pródigo",
            "La parábola del sembrador",
            "La parábola del trigo y la cizaña (Mateo 13:24-30)",
            "La parábola del buen samaritano"
        ],
        hint: "Una parábola que habla de trigo y de mala planta junto a él."
    },
    {
        q: "En la historia del niño y la planta ¿qué insecto dañaba la planta?",
        a: "Una hormiga",
        opts: ["Una mariposa", "Una hormiga", "Una abeja", "Un caracol"],
        hint: "El texto habla de deshacerse de este insecto para que la planta pueda crecer."
    },
    {
        q: "Según la lección de hoy, ¿qué se debe quitar para permitir un verdadero crecimiento espiritual?",
        a: "Envidia, malicia, engaños e hipocresía",
        opts: [
            "Envidia, malicia, engaños e hipocresía",
            "La ropa vieja",
            "Las hojas verdes",
            "Los libros de la biblioteca"
        ],
        hint: "Son actitudes negativas entre personas que impiden el amor fraternal."
    },
    {
        q: "¿Qué condición práctica se recomienda para que la planta crezca bien?",
        a: "El terreno debe estar abonado",
        opts: [
            "El terreno debe estar abonado",
            "Siempre dejar la planta sin agua",
            "Colocarla en la oscuridad total",
            "Ponerle sal alrededor"
        ],
        hint: "Es una acción típica en jardinería para nutrir la tierra."
    },
    {
        q: "¿Qué hace Jesús cuando enseña sobre sembrar y cosechar en la lección de hoy?",
        a: "Habla por parábolas",
        opts: ["Escribe cartas", "Habla por parábolas", "Construye casas", "Cocina pan"],
        hint: "Es su forma habitual de enseñar con historias con enseñanza."
    },
    {
        q: "Según la enseñanza del texto, ¿qué debe hacer el cristiano para poder dar buenos frutos?",
        a: "Eliminar de su vida lo que impide un verdadero crecimiento espiritual",
        opts: [
            "Asistir todos los días a reuniones sociales",
            "Eliminar de su vida lo que impide un verdadero crecimiento espiritual",
            "Evitar hablar con otros creyentes",
            "Acumular conocimientos sin ponerlos en práctica"
        ],
        hint: "La comparación con la planta muestra que, igual que se quita la maleza, el cristiano debe quitar obstáculos espirituales."
    },
    {
        q: "Según el texto, ¿qué necesita una persona para crecer espiritualmente como una planta saludable?",
        a: "Quitar de su vida aquello que impide su crecimiento en Cristo",
        opts: [
            "Quitar de su vida aquello que impide su crecimiento en Cristo",
            "Ignorar los consejos bíblicos",
            "Evitar la oración y la lectura de la Palabra",
            "Aislarse de la iglesia y de otros creyentes"
        ],
        hint: "El texto compara la vida espiritual con una planta que debe limpiarse para poder crecer."
    },
    {
        q: "Según la enseñanza del texto, ¿qué representa la ‘hormiga’ en la vida cristiana?",
        a: "Aquellas actitudes o pecados que impiden el amor fraternal",
        opts: [
            "Los frutos que da un buen cristiano",
            "Aquellas actitudes o pecados que impiden el amor fraternal",
            "Las bendiciones que Dios da a su pueblo",
            "Las pruebas que fortalecen la fe"
        ],
        hint: "Involucra completar oraciones en un tablero o cartulina."
    },
    {
        q: "Según la lección, ¿qué permite que el cuerpo se fortalezca en lo fraternal?",
        a: "Amor auténtico con sencillez y sinceridad",
        opts: [
            "Amor auténtico con sencillez y sinceridad",
            "Competencia feroz",
            "Ignorar a los vecinos",
            "Solo asistir a reuniones"
        ],
        hint: "La lección enfatiza una forma de amor simple y sincera."
    },
    {
        q: "¿Qué hizo la madre al descubrir la hormiga en la planta del niño?",
        a: "Aplicó un remedio para matar la hormiga y conservar la planta",
        opts: [
            "Se fue de viaje",
            "Aplicó un remedio para matar la hormiga y conservar la planta",
            "Regaló la planta",
            "La enterró inmediatamente"
        ],
        hint: "La historia dice que la madre actuó para salvar la planta."
    },
    {
        q: "¿Cuál de estos versículos aparece entre las 'Bases Bíblicas' de la lección de hoy?",
        a: "1 Tesalonicenses 3:12",
        opts: [
            "1 Tesalonicenses 3:12",
            "Salmo 23:1",
            "Éxodo 20:13",
            "Isaías 40:31"
        ],
        hint: "Es el versículo que corresponde al versículo de memoria citado."
    },
    {
        q: "¿Qué elemento se menciona que debe tener la semilla para buen crecimiento?",
        a: "Ser de buena calidad",
        opts: ["Ser de buena calidad", "Ser muy pequeña", "Tener colores brillantes", "Ser pesada"],
        hint: "La lección indica una característica deseable de la semilla para crecer bien."
    }
];

// estado del juego
let current = 0;
let score = 0;
let shuffledOptions = []; // para mantener opciones visibles
const total = questions.length;

// elementos
const qIndex = document.getElementById("qIndex");
const questionText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const hintBtn = document.getElementById("hintBtn");
const hintBox = document.getElementById("hintBox");
const nextBtn = document.getElementById("nextBtn");
const feedback = document.getElementById("feedback");
const scoreCard = document.getElementById("scoreCard");
const correctCount = document.getElementById("correctCount");
const finalMessage = document.getElementById("finalMessage");
const restartBtn = document.getElementById("restartBtn");

function shuffle(array) {
    // Fisher-Yates
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function loadQuestion(index) {
    const item = questions[index];
    qIndex.textContent = index + 1;
    questionText.textContent = item.q;
    hintBox.hidden = true;
    hintBox.textContent = item.hint;
    feedback.textContent = "";
    nextBtn.disabled = true;

    // crear opciones mezcladas
    const opts = [...item.opts];
    // asegurar que la respuesta correcta esté en opts (definido en datos)
    if (!opts.includes(item.a)) opts[0] = item.a;
    shuffle(opts);

    shuffledOptions = opts; // guardar
    optionsDiv.innerHTML = "";

    opts.forEach(optText => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = optText;
        btn.addEventListener("click", () => selectOption(btn, item.a));
        optionsDiv.appendChild(btn);
    });
}

function selectOption(btn, correctAnswer) {
    // bloquear más clicks
    const btns = Array.from(optionsDiv.children);
    btns.forEach(b => b.disabled = true);

    const chosen = btn.textContent;
    if (chosen === correctAnswer) {
        btn.classList.add("correct");
        feedback.textContent = "¡Correcto! ✅";
        score++;
    } else {
        btn.classList.add("wrong");
        feedback.textContent = `Incorrecto ✖ La respuesta correcta es: "${correctAnswer}".`;
        // marcar botón correcto
        const btnsArr = Array.from(optionsDiv.children);
        btnsArr.forEach(b => {
            if (b.textContent === correctAnswer) b.classList.add("correct");
        });
    }
    nextBtn.disabled = false;
    // si es última pregunta mostrar resultado al pulsar siguiente
}

hintBtn.addEventListener("click", () => {
    hintBox.hidden = !hintBox.hidden;
});

nextBtn.addEventListener("click", () => {
    current++;
    if (current < total) {
        loadQuestion(current);
    } else {
        endGame();
    }
});

function endGame() {
    document.getElementById("game").hidden = true;
    scoreCard.hidden = false;
    correctCount.textContent = score;
    const pct = Math.round((score / total) * 100);
    let msg = "";
    if (pct >= 90) msg = "¡Excelente! Siembra y comparte ese amor con otros. 🌟";
    else if (pct >= 70) msg = "Muy bien — sigamos creciendo en amor. 🌱";
    else msg = "Buen comienzo — repasemos juntos y sigamos aprendiendo. 🤝";
    finalMessage.textContent = `${msg} Tu puntuación: ${pct}%`;
}

restartBtn.addEventListener("click", () => {
    // reiniciar
    current = 0; score = 0;
    document.getElementById("game").hidden = false;
    scoreCard.hidden = true;
    loadQuestion(0);
});

// inicio
loadQuestion(0);
