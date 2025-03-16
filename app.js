// Standard poker position names from Button clockwise
const standardPositions = ["D", "SB", "BB", "UTG1", "UTG2", "UTG3", "MP1", "MP2", "MP3", "CO"];

// Object containing poker hand strategies
const hands = {
    // Високи чифтове (High Pairs)
    "AA": createHandStrategy("high_pair"),
    "KK": createHandStrategy("high_pair"),
    "QQ": createHandStrategy("high_pair"),
    
    // Средни чифтове (Medium Pairs)
    "JJ": createHandStrategy("medium_pair"),
    "TT": createHandStrategy("medium_pair"),
    
    // Ниски чифтове (Low Pairs)
    "99": createHandStrategy("low_pair"),
    "88": createHandStrategy("low_pair"),
    "77": createHandStrategy("low_pair"),
    "66": createHandStrategy("low_pair"),
    "55": createHandStrategy("low_pair"),
    "44": createHandStrategy("low_pair"),
    "33": createHandStrategy("low_pair"),
    "22": createHandStrategy("low_pair"),
    
    // Високи аса (High Aces)
    "AKO": createHandStrategy("high_ace"),
    "AKS": createHandStrategy("high_ace"),
    
    // Средни аса (Medium Aces)
    "AQO": createHandStrategy("medium_ace"),
    "AQS": createHandStrategy("medium_ace"),
    "AJO": createHandStrategy("medium_ace"),
    "AJS": createHandStrategy("medium_ace"),
    "ATO": createHandStrategy("medium_ace"),
    "ATS": createHandStrategy("medium_ace"),
    
    // Ниски аса с карта от същата боя (Low Suited Aces)
    "A9S": createHandStrategy("low_suited_ace"),
    "A8S": createHandStrategy("low_suited_ace"),
    "A7S": createHandStrategy("low_suited_ace"),
    "A6S": createHandStrategy("low_suited_ace"),
    "A5S": createHandStrategy("low_suited_ace"),
    "A4S": createHandStrategy("low_suited_ace"),
    "A3S": createHandStrategy("low_suited_ace"),
    "A2S": createHandStrategy("low_suited_ace"),
    
    // Карти с картинки от една боя (Suited Face Cards)
    "KQS": createHandStrategy("suited_face_cards"),
    "KJS": createHandStrategy("suited_face_cards"),
    "KTS": createHandStrategy("suited_face_cards"),
    "QJS": createHandStrategy("suited_face_cards"),
    "QTS": createHandStrategy("suited_face_cards"),
    "JTS": createHandStrategy("suited_face_cards"),
    
    // Карти с картинки от различни бои (Offsuit Face Cards)
    "KQO": createHandStrategy("offsuit_face_cards"),
    "KJO": createHandStrategy("offsuit_face_cards"),
    "KTO": createHandStrategy("offsuit_face_cards"),
    "QJO": createHandStrategy("offsuit_face_cards"),
    "QTO": createHandStrategy("offsuit_face_cards"),
    "JTO": createHandStrategy("offsuit_face_cards"),
    
    // Поредни карти от една боя (Suited Connectors)
    "T9S": createHandStrategy("suited_connectors"),
    "98S": createHandStrategy("suited_connectors"),
    "87S": createHandStrategy("suited_connectors"),
    "76S": createHandStrategy("suited_connectors"),
    "65S": createHandStrategy("suited_connectors"),
    "54S": createHandStrategy("suited_connectors"),

    // Нови ръце от таблицата
    "K9S": createHandStrategy("suited_face_cards"),
    "Q9S": createHandStrategy("suited_face_cards"),
    "J9S": createHandStrategy("suited_face_cards"),
    "T8S": createHandStrategy("suited_connectors"),
    "97S": createHandStrategy("suited_connectors"),
    "86S": createHandStrategy("suited_connectors"),
    "75S": createHandStrategy("suited_connectors"),
    "64S": createHandStrategy("suited_connectors"),
    "53S": createHandStrategy("suited_connectors"),
    "43S": createHandStrategy("suited_connectors"),
    "32S": createHandStrategy("suited_connectors")
};

// Function to create a strategy object based on hand type
function createHandStrategy(handType) {
    switch(handType) {
        case "high_pair": // AA, KK, QQ
            return {
                "early": {
                    "allfold": "Рейз",
                    "limpers": "Рейз",
                    "raise": "Рейз"
                },
                "middle": {
                    "allfold": "Рейз",
                    "limpers": "Рейз",
                    "raise": "Рейз"
                },
                "late": {
                    "allfold": "Рейз",
                    "limpers": "Рейз",
                    "raise": "Рейз"
                },
                "blinds": {
                    "allfold": "Рейз",
                    "limpers": "Рейз",
                    "raise": "Рейз"
                }
            };
            
        case "medium_pair": // JJ, TT
            return {
                "early": {
                    "allfold": "Рейз",
                    "limpers": "Рейз",
                    "raise": "Кол20"
                },
                "middle": {
                    "allfold": "Рейз",
                    "limpers": "Рейз",
                    "raise": "Кол20"
                },
                "late": {
                    "allfold": "Рейз",
                    "limpers": "Рейз",
                    "raise": "Кол20"
                },
                "blinds": {
                    "allfold": "Рейз",
                    "limpers": "Рейз",
                    "raise": "Кол20"
                }
            };
            
        case "low_pair": // 99, 88, 77, 66, 55, 44, 33, 22
            return {
                "early": {
                    "allfold": "Фолд",
                    "limpers": "Фолд",
                    "raise": "Кол20"
                },
                "middle": {
                    "allfold": "Фолд",
                    "limpers": "Фолд",
                    "raise": "Кол20"
                },
                "late": {
                    "allfold": "Кол",
                    "limpers": "Кол",
                    "raise": "Кол20"
                },
                "blinds": {
                    "allfold": "Рейз",
                    "limpers": "Кол",
                    "raise": "Кол20"
                }
            };
            
        case "high_ace": // AKo, AKs
            return {
                "early": {
                    "allfold": "Рейз",
                    "limpers": "Рейз",
                    "raise": "Рейз"
                },
                "middle": {
                    "allfold": "Рейз",
                    "limpers": "Рейз",
                    "raise": "Рейз"
                },
                "late": {
                    "allfold": "Рейз",
                    "limpers": "Рейз",
                    "raise": "Рейз"
                },
                "blinds": {
                    "allfold": "Рейз",
                    "limpers": "Рейз",
                    "raise": "Рейз"
                }
            };
            
        case "medium_ace": // AQo, AQs, AJo, AJs, ATo, ATs
            return {
                "early": {
                    "allfold": "Фолд",
                    "limpers": "Фолд",
                    "raise": "Фолд"
                },
                "middle": {
                    "allfold": "Фолд",
                    "limpers": "Фолд",
                    "raise": "Фолд"
                },
                "late": {
                    "allfold": "Рейз",
                    "limpers": "Рейз",
                    "raise": "Фолд"
                },
                "blinds": {
                    "allfold": "Рейз",
                    "limpers": "Кол",
                    "raise": "Фолд"
                }
            };
            
        case "low_suited_ace": // A9s, A8s, A7s, A6s, A5s, A4s, A3s, A2s
            return {
                "early": {
                    "allfold": "Фолд",
                    "limpers": "Фолд",
                    "raise": "Фолд"
                },
                "middle": {
                    "allfold": "Фолд",
                    "limpers": "Фолд",
                    "raise": "Фолд"
                },
                "late": {
                    "allfold": "Рейз",
                    "limpers": "Кол",
                    "raise": "Фолд"
                },
                "blinds": {
                    "allfold": "Рейз",
                    "limpers": "Кол",
                    "raise": "Фолд"
                }
            };
            
        case "suited_face_cards": // KQs, KJs, KTs, QJs, QTs, JTs
            return {
                "early": {
                    "allfold": "Фолд",
                    "limpers": "Фолд",
                    "raise": "Фолд"
                },
                "middle": {
                    "allfold": "Фолд",
                    "limpers": "Фолд",
                    "raise": "Фолд"
                },
                "late": {
                    "allfold": "Рейз",
                    "limpers": "Кол",
                    "raise": "Фолд"
                },
                "blinds": {
                    "allfold": "Рейз",
                    "limpers": "Кол",
                    "raise": "Фолд"
                }
            };
            
        case "offsuit_face_cards": // KQo, KJo, KTo, QJo, QTo, JTo
            return {
                "early": {
                    "allfold": "Фолд",
                    "limpers": "Фолд",
                    "raise": "Фолд"
                },
                "middle": {
                    "allfold": "Фолд",
                    "limpers": "Фолд",
                    "raise": "Фолд"
                },
                "late": {
                    "allfold": "Рейз",
                    "limpers": "Кол",
                    "raise": "Фолд"
                },
                "blinds": {
                    "allfold": "Рейз",
                    "limpers": "Кол",
                    "raise": "Фолд"
                }
            };
            
        case "suited_connectors": // T9s, 98s, 87s, 76s, 65s, 54s
            return {
                "early": {
                    "allfold": "Фолд",
                    "limpers": "Фолд",
                    "raise": "Фолд"
                },
                "middle": {
                    "allfold": "Фолд",
                    "limpers": "Фолд",
                    "raise": "Фолд"
                },
                "late": {
                    "allfold": "Рейз",
                    "limpers": "Кол",
                    "raise": "Фолд"
                },
                "blinds": {
                    "allfold": "Фолд",
                    "limpers": "Кол",
                    "raise": "Фолд"
                }
            };
            
        default: // All other hands
            return {
                "early": {
                    "allfold": "Фолд",
                    "limpers": "Фолд",
                    "raise": "Фолд"
                },
                "middle": {
                    "allfold": "Фолд",
                    "limpers": "Фолд",
                    "raise": "Фолд"
                },
                "late": {
                    "allfold": "Фолд",
                    "limpers": "Фолд",
                    "raise": "Фолд"
                },
                "blinds": {
                    "allfold": "Фолд",
                    "limpers": "Фолд",
                    "raise": "Фолд"
                }
            };
    }
}

// Function to categorize hands that aren't explicitly defined
function categorizeHand(hand) {
    hand = hand.toUpperCase();
    
    // Check for pairs
    if (hand.length === 2 && hand[0] === hand[1]) {
        const rank = hand[0];
        if (rank === 'A' || rank === 'K' || rank === 'Q') {
            return "high_pair";
        } else if (rank === 'J' || rank === 'T') {
            return "medium_pair";
        } else {
            return "low_pair";
        }
    }
    
    // Check for other hands
    if (hand.length === 3) {
        const firstCard = hand[0];
        const secondCard = hand[1];
        const suitedness = hand[2].toUpperCase();
        
        if (firstCard === 'A' && secondCard === 'K') {
            return "high_ace";
        } else if (firstCard === 'A' && ['Q', 'J', 'T'].includes(secondCard)) {
            return "medium_ace";
        } else if (firstCard === 'A') {
            return suitedness === 'S' ? "low_suited_ace" : "other";
        } else if (['K', 'Q', 'J'].includes(firstCard) && ['K', 'Q', 'J', 'T'].includes(secondCard) && firstCard !== secondCard) {
            return suitedness === 'S' ? "suited_face_cards" : "offsuit_face_cards";
        } else if (
            (firstCard === 'T' && secondCard === '9') ||
            (firstCard === '9' && secondCard === '8') ||
            (firstCard === '8' && secondCard === '7') ||
            (firstCard === '7' && secondCard === '6') ||
            (firstCard === '6' && secondCard === '5') ||
            (firstCard === '5' && secondCard === '4')
        ) {
            return suitedness === 'S' ? "suited_connectors" : "other";
        }
    }
    
    return "other";
}

// Current position index and player count
let currentPositionIndex = 0;
let playerCount = 10;
let userPosition = 0; // The user is always at position 0 (fixed)

/**
 * Get the recommended action for a specific hand, position, and prior action
 * @param {string} hand - The poker hand (e.g., "AA", "JJ", "ATo")
 * @param {string} position - The table position (early, middle, late, blinds)
 * @param {string} priorAction - The prior action (allfold, limpers, raise)
 * @returns {string} The recommended action
 */
function getAction(hand, position, priorAction) {
    // Convert hand to uppercase to handle any case input
    hand = hand.toUpperCase();
    
    // Check if the hand exists directly in our database
    if (hands[hand]) {
        let action = hands[hand][position][priorAction];
        
        // Add additional advice for raising when no one has entered
        if (action === "Рейз" && priorAction === "allfold") {
            action += " до 4 големи блинда";
        }
        
        return action;
    }
    
    // If the hand isn't explicitly defined, try to categorize it
    const handType = categorizeHand(hand);
    if (handType !== "other") {
        const strategyObj = createHandStrategy(handType);
        let action = strategyObj[position][priorAction];
        
        // Add additional advice for raising when no one has entered
        if (action === "Рейз" && priorAction === "allfold") {
            action += " до 4 големи блинда";
        }
        
        return action;
    }
    
    return "Невалидна ръка или липсва в таблицата.";
}

// Function to get the appropriate positions based on player count
function getPositionsForPlayerCount(count) {
    // Always start with Button, SB, BB as these are essential for any poker game
    const essentialPositions = ["D", "SB", "BB"];
    
    // Special case for heads-up (2 players)
    if (count === 2) {
        return ["D/BB", "SB"];
    }
    
    // For 3 players, just return the essential positions
    if (count === 3) {
        return essentialPositions;
    }
    
    // For more than 3 players, add additional positions
    const positions = [...essentialPositions];
    
    // Add remaining positions based on player count
    for (let i = 3; i < count; i++) {
        positions.push(standardPositions[i] || `Seat ${i+1}`);
    }
    
    return positions;
}

// Function to rotate positions - following poker rules
function rotatePositions(positions) {
    // Make a copy of the original array to avoid modifying it
    const rotated = [...positions];
    
    // In poker, positions rotate clockwise:
    // Current SB becomes D
    // Current BB becomes SB
    // Current UTG1 becomes BB
    // and so on...
    // This means we need to rotate the array in the opposite direction
    // of how positions move (counterclockwise in array)
    for (let i = 0; i < positions.length; i++) {
        const newIndex = (i - currentPositionIndex + positions.length) % positions.length;
        rotated[i] = positions[newIndex];
    }
    
    return rotated;
}

// Render the poker table with positions
function renderTable() {
    const pokerTable = document.getElementById("pokerTable");
    pokerTable.innerHTML = ""; // Clear previous content
    
    // Get the player count and adjust activePositions
    playerCount = parseInt(document.getElementById("playerCountSelect").value);
    const activePositions = getPositionsForPlayerCount(playerCount);
    
    // Rotate positions if currentPositionIndex is set
    const rotatedPositions = rotatePositions(activePositions);
    
    // Изчисляваме динамично размера на масата
    const tableRect = pokerTable.getBoundingClientRect();
    const tableWidth = tableRect.width;
    const tableHeight = tableRect.height;
    
    // Calculate the number of positions to display
    const numPositions = activePositions.length;
    const centerX = tableWidth / 2;
    const centerY = tableHeight / 2;
    
    // По-компактни размери за по-малка маса
    const radiusFactor = Math.min(tableWidth, tableHeight) / 300;
    const radiusX = (tableWidth - 40 * radiusFactor) / 2;
    const radiusY = (tableHeight - 40 * radiusFactor) / 2;
    
    // Още по-малки позиции на масата
    const positionSize = Math.max(18, Math.min(26, Math.min(tableWidth, tableHeight) / 12));
    const halfPositionSize = positionSize / 2;
    
    // Render each position in the ellipse
    for (let i = 0; i < activePositions.length; i++) {
        const positionDiv = document.createElement("div");
        positionDiv.className = "position";
        positionDiv.textContent = rotatedPositions[i];
        
        // Set adaptive size
        positionDiv.style.width = `${positionSize}px`;
        positionDiv.style.height = `${positionSize}px`;
        positionDiv.style.fontSize = `${Math.max(7, positionSize / 3.5)}px`;
        
        // Add appropriate classes for special positions
        if (rotatedPositions[i].includes("D")) {
            positionDiv.classList.add("button-position");
        } else if (rotatedPositions[i] === "SB") {
            positionDiv.classList.add("sb-position");
        } else if (rotatedPositions[i] === "BB") {
            positionDiv.classList.add("bb-position");
        } else if (rotatedPositions[i] === "CO") {
            positionDiv.classList.add("co-position");
        } else if (rotatedPositions[i].includes("MP")) {
            positionDiv.classList.add("mp-position");
        } else if (rotatedPositions[i].includes("UTG")) {
            positionDiv.classList.add("utg-position");
        }
        
        // Add active class to user's position (always index 0 after rotation)
        if (i === 0) {
            positionDiv.classList.add("active-position");
        }
        
        // Calculate position on the ellipse
        // Start from bottom center (π/2) and go clockwise
        const angle = ((i * 2 * Math.PI / numPositions) + Math.PI / 2);
        const x = centerX + radiusX * Math.cos(angle);
        const y = centerY + radiusY * Math.sin(angle);
        
        // Set position
        positionDiv.style.left = `${x - halfPositionSize}px`;
        positionDiv.style.top = `${y - halfPositionSize}px`;
        
        // Add to the table
        pokerTable.appendChild(positionDiv);
    }
}

// Map prior actions from UI values to strategy values
const actionMapping = {
    "allfold": "Всички играчи фолдват",
    "limpers": "Някои е колнал",
    "raise": "Един играч е рейзнал"
};

// Дефиниране на рейндж таблиците по позиции
const rangeByPosition = {
    // Ранни позиции (синьо): UTG, UTG+1, UTG+2
    early: {
        premium: ["AA", "KK", "QQ", "JJ", "AKs", "AKo", "AQs", "AQo"],
        strong: ["TT", "99", "AJs", "AJo", "ATs", "KQs", "KJs"],
        playable: ["88", "77", "KQo", "KTs", "QJs", "QTs", "JTs"]
    },
    // Средни позиции (жълто): MP1, MP2, MP3
    middle: {
        premium: ["AA", "KK", "QQ", "JJ", "TT", "AKs", "AKo", "AQs", "AQo", "AJs"],
        strong: ["99", "88", "77", "AJo", "ATs", "A9s", "KQs", "KJs", "KTs", "QJs", "QTs", "JTs"],
        playable: ["66", "55", "A8s", "A7s", "KQo", "K9s", "QJo", "T9s", "98s", "87s"]
    },
    // Късни позиции (червено): CO, D
    late: {
        premium: ["AA", "KK", "QQ", "JJ", "TT", "99", "AKs", "AKo", "AQs", "AQo", "AJs", "AJo", "ATs"],
        strong: ["88", "77", "66", "55", "A9s", "A8s", "A7s", "A6s", "A5s", "KQs", "KQo", "KJs", "KTs", "K9s", "QJs", "QTs", "JTs", "T9s"],
        playable: ["44", "33", "22", "A4s", "A3s", "A2s", "K8s", "K7s", "Q9s", "J9s", "T8s", "98s", "87s", "76s", "65s", "54s"]
    },
    // Блиндове (розово): SB, BB
    blinds: {
        premium: ["AA", "KK", "QQ", "JJ", "TT", "AKs", "AKo", "AQs"],
        strong: ["99", "88", "AQo", "AJs", "AJo", "ATs", "KQs", "KJs"],
        playable: ["77", "66", "55", "A9s", "A8s", "KQo", "KTs", "QJs", "QTs", "JTs", "T9s"]
    }
};

// Таблица със всички възможни ръце
const allHands = [
    ["AA", "AKs", "AQs", "AJs", "ATs", "A9s", "A8s", "A7s", "A6s", "A5s", "A4s", "A3s", "A2s"],
    ["AKo", "KK", "KQs", "KJs", "KTs", "K9s", "K8s", "K7s", "K6s", "K5s", "K4s", "K3s", "K2s"],
    ["AQo", "KQo", "QQ", "QJs", "QTs", "Q9s", "Q8s", "Q7s", "Q6s", "Q5s", "Q4s", "Q3s", "Q2s"],
    ["AJo", "KJo", "QJo", "JJ", "JTs", "J9s", "J8s", "J7s", "J6s", "J5s", "J4s", "J3s", "J2s"],
    ["ATo", "KTo", "QTo", "JTo", "TT", "T9s", "T8s", "T7s", "T6s", "T5s", "T4s", "T3s", "T2s"],
    ["A9o", "K9o", "Q9o", "J9o", "T9o", "99", "98s", "97s", "96s", "95s", "94s", "93s", "92s"],
    ["A8o", "K8o", "Q8o", "J8o", "T8o", "98o", "88", "87s", "86s", "85s", "84s", "83s", "82s"],
    ["A7o", "K7o", "Q7o", "J7o", "T7o", "97o", "87o", "77", "76s", "75s", "74s", "73s", "72s"],
    ["A6o", "K6o", "Q6o", "J6o", "T6o", "96o", "86o", "76o", "66", "65s", "64s", "63s", "62s"],
    ["A5o", "K5o", "Q5o", "J5o", "T5o", "95o", "85o", "75o", "65o", "55", "54s", "53s", "52s"],
    ["A4o", "K4o", "Q4o", "J4o", "T4o", "94o", "84o", "74o", "64o", "54o", "44", "43s", "42s"],
    ["A3o", "K3o", "Q3o", "J3o", "T3o", "93o", "83o", "73o", "63o", "53o", "43o", "33", "32s"],
    ["A2o", "K2o", "Q2o", "J2o", "T2o", "92o", "82o", "72o", "62o", "52o", "42o", "32o", "22"]
];

// Функция за създаване на рентабилна таблица с по-малки клетки
function generateRangeTable() {
    const rangeTable = document.getElementById("rangeTable");
    rangeTable.innerHTML = '';
    
    // Създаваме контейнер за всеки ред, за по-добра организация
    for (let i = 0; i < 13; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "hand-row";
        rowDiv.style.display = "contents";
        
        for (let j = 0; j < 13; j++) {
            const handCell = document.createElement("div");
            handCell.className = "hand-cell none";
            const handValue = allHands[i][j];
            handCell.setAttribute("data-hand", handValue);
            
            // Показваме пълния текст на ръката, без да го съкращаваме
            handCell.textContent = handValue;
            
            // Добавяне на събитие при кликване - слагаме ръката в полето за въвеждане
            handCell.addEventListener("click", function() {
                handInput.value = this.getAttribute("data-hand");
                highlightSelectedHand(this.getAttribute("data-hand"));
                
                // Автоматично генерираме действие за текущата ръка и позиция
                const activePosition = document.querySelector(".active-position");
                if (activePosition) {
                    const positionText = activePosition.textContent;
                    const positionCategory = getPositionCategory(positionText);
                    const input = handInput.value.toUpperCase();
                    
                    // За простота използваме "allfold" като стандартен случай
                    const action = getAction(input, positionCategory, "allfold");
                    
                    // Display the result with specific hand and position formatting
                    resultDiv.innerHTML = `
                        <strong>Ръка:</strong> ${input}<br>
                        <strong>Позиция:</strong> ${positionText}<br>
                        <strong>Препоръка:</strong> ${action}
                    `;
                    resultDiv.classList.add("has-result");
                }
            });
            
            rowDiv.appendChild(handCell);
        }
        
        rangeTable.appendChild(rowDiv);
    }
    
    // Актуализираме таблицата за текущата позиция
    updateRangeTableForCurrentPosition();
}

// Функция за актуализиране на рейндж таблицата според позицията
function updateRangeForPosition(positionCategory) {
    const cells = document.querySelectorAll(".hand-cell");
    
    // Нулиране на всички клетки
    cells.forEach(cell => {
        // Запазваме selected класа, ако е активен
        const isSelected = cell.classList.contains("selected");
        cell.className = isSelected ? "hand-cell none selected" : "hand-cell none";
    });
    
    // Няма избрана позиция или липсва в rangeByPosition
    if (!positionCategory || !rangeByPosition[positionCategory]) {
        return;
    }
    
    // Определяне на цвета според категорията
    let cellClass;
    switch(positionCategory) {
        case "early":
            cellClass = "blue";
            break;
        case "middle":
            cellClass = "yellow";
            break;
        case "late":
            cellClass = "red";
            break;
        case "blinds":
            cellClass = "pink";
            break;
        default:
            cellClass = "none";
    }
    
    // Оцветяване на premium ръце
    rangeByPosition[positionCategory].premium.forEach(hand => {
        const cell = document.querySelector(`.hand-cell[data-hand="${hand}"]`);
        if (cell) {
            // Запазваме selected класа, ако е активен
            const isSelected = cell.classList.contains("selected");
            cell.className = isSelected ? `hand-cell ${cellClass} selected` : `hand-cell ${cellClass}`;
        }
    });
    
    // Оцветяване на strong ръце
    rangeByPosition[positionCategory].strong.forEach(hand => {
        const cell = document.querySelector(`.hand-cell[data-hand="${hand}"]`);
        if (cell) {
            // Запазваме selected класа, ако е активен
            const isSelected = cell.classList.contains("selected");
            cell.className = isSelected ? `hand-cell ${cellClass} selected` : `hand-cell ${cellClass}`;
        }
    });
    
    // Оцветяване на playable ръце
    rangeByPosition[positionCategory].playable.forEach(hand => {
        const cell = document.querySelector(`.hand-cell[data-hand="${hand}"]`);
        if (cell) {
            // Запазваме selected класа, ако е активен
            const isSelected = cell.classList.contains("selected");
            cell.className = isSelected ? `hand-cell ${cellClass} selected` : `hand-cell ${cellClass}`;
        }
    });
}

// Функция за отбелязване на избраната ръка в таблицата
function highlightSelectedHand(hand) {
    // Нормализирме въведената ръка
    hand = hand.toUpperCase();
    
    // За дебъг цели
    console.log("Търсим ръка:", hand);
    
    // Премахваме отбелязването от всички клетки
    document.querySelectorAll(".hand-cell.selected").forEach(cell => {
        cell.classList.remove("selected");
        cell.style.animation = '';
    });
    
    // Отбелязваме текущата ръка
    const cell = document.querySelector(`.hand-cell[data-hand="${hand}"]`);
    
    // Ако не намираме ръката, опитваме да видим дали имаме всички клетки с техните атрибути
    if (!cell) {
        console.log("Не можем да намерим ръка:", hand);
        console.log("Налични ръце:", 
            Array.from(document.querySelectorAll('.hand-cell'))
                .map(c => c.getAttribute('data-hand'))
                .slice(0, 10)
        );
        
        // Опитваме също и case-insensitive търсене
        const allCells = document.querySelectorAll('.hand-cell');
        for (let i = 0; i < allCells.length; i++) {
            if (allCells[i].getAttribute('data-hand') && 
                allCells[i].getAttribute('data-hand').toUpperCase() === hand) {
                animateCell(allCells[i]);
                return;
            }
        }
        return;
    }
    
    // Ако сме намерили клетката, анимираме я
    animateCell(cell);
}

// Функция за анимиране на клетка
function animateCell(cell) {
    cell.classList.add("selected");
    
    // Restart animation to trigger effect
    cell.style.animation = 'none';
    // Force reflow
    void cell.offsetWidth;
    cell.style.animation = 'bubble 0.8s ease-in-out forwards';
    
    // Scroll to cell if needed
    cell.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Функция за определяне на категорията на позиция от името
function getPositionCategory(positionText) {
    if (positionText.includes("D")) {
        return "late";
    } else if (positionText === "SB" || positionText === "BB") {
        return "blinds";
    } else if (["UTG1", "UTG2", "UTG3"].includes(positionText)) {
        return "early";
    } else if (["MP1", "MP2", "MP3"].includes(positionText)) {
        return "middle";
    } else if (positionText === "CO") {
        return "late";
    }
    return null;
}

// Функция за актуализиране на таблицата според текущата активна позиция
function updateRangeTableForCurrentPosition() {
    const activePosition = document.querySelector(".active-position");
    if (activePosition) {
        const positionText = activePosition.textContent;
        const positionCategory = getPositionCategory(positionText);
        updateRangeForPosition(positionCategory);
    }
}

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Съществуващи DOM референции
    const handInput = document.getElementById("handInput");
    const playerCountSelect = document.getElementById("playerCountSelect");
    const checkButton = document.getElementById("checkButton");
    const resultDiv = document.getElementById("result");
    const nextRoundButton = document.getElementById("nextRoundButton");
    
    // Изчакваме малко време за правилно измерване на размерите
    setTimeout(() => {
        // Генерираме таблицата при зареждане
        generateRangeTable();
    
        // Инициализираме масата при зареждане
        renderTable();
    }, 50);
    
    // Add event listener to player count select
    playerCountSelect.addEventListener("change", function() {
        currentPositionIndex = 0; // Reset position when player count changes
        renderTable();
    });
    
    // Add event listener to next round button
    nextRoundButton.addEventListener("click", function() {
        // Move to next position by rotating positions counterclockwise in the array
        // This will make positions move clockwise on the table
        currentPositionIndex = (currentPositionIndex + 1) % playerCount;
        renderTable();
        
        // Clear previous result
        resultDiv.textContent = "";
        resultDiv.classList.remove("has-result");
        
        // Clear the search input field
        handInput.value = "";
        // Remove any highlighted hands from the range table
        const selectedCells = document.querySelectorAll(".hand-cell.selected");
        selectedCells.forEach(cell => {
            cell.classList.remove("selected");
            cell.style.animation = 'none';
        });
    });
    
    // Добавяме слушател за input полето за ръка
    handInput.addEventListener("input", function() {
        highlightSelectedHand(this.value);
    });
    
    // Добавяме слушател за бутона за проверка
    checkButton.addEventListener("click", function() {
        // Get the input value and normalize it
        const input = handInput.value.toUpperCase();
        if (!input.trim()) {
            resultDiv.textContent = "Моля, въведете ръка.";
            resultDiv.classList.add("has-result");
            return;
        }
        
        // Find the active position on the table
        const activePosition = document.querySelector(".active-position");
        if (!activePosition) {
            resultDiv.textContent = "Не може да се определи позицията Ви.";
            resultDiv.classList.add("has-result");
            return;
        }
        
        // Get the position name and prior action
        const positionText = activePosition.textContent;
        
        // Determine strategy position category based on current position
        let positionCategory = getPositionCategory(positionText);
        
        // Get the recommended action for this hand and position
        // За простота използваме "allfold" като стандартен случай
        const action = getAction(input, positionCategory, "allfold");
        
        // Display the result with specific hand and position formatting
        resultDiv.innerHTML = `
            <strong>Ръка:</strong> ${input}<br>
            <strong>Позиция:</strong> ${positionText}<br>
            <strong>Препоръка:</strong> ${action}
        `;
        resultDiv.classList.add("has-result");
        
        // Highlight the hand in the range table with animation
        setTimeout(() => {
            highlightSelectedHand(input);
        }, 100);
    });
    
    // Модифициран renderTable за автоматично актуализиране на рейндж таблицата
    const originalRenderTable = renderTable;
    window.renderTable = function() {
        originalRenderTable();
        // Актуализираме таблицата според новата позиция
        updateRangeTableForCurrentPosition();
    };
});

// Добавяме функция за реоразмеряване на всичко при промяна на размера на прозореца
window.addEventListener('resize', function() {
    generateRangeTable();
    renderTable();
});
