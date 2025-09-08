// Application Data
const nutritionData = {
    vitamins: [
  {
    "name": "Vitamin A",
    "type": "fat-soluble",
    "function": "Essential for vision, immune function, and cell growth",
    "foods": ["Carrot", "Sweet Potato", "Spinach", "Tomato"],
    "dry_fruits": ["Apricots", "Dried Figs/Anjeer"],
    "fruits": ["Mango", "Watermelon", "Papaya"]
  },
  {
    "name": "Vitamin B1 (Thiamine)",
    "type": "water-soluble",
    "function": "Helps convert carbohydrates into energy, essential for nervous system",
    "foods": ["Whole Wheat", "Dals", "Oats", "Rice"],
    "dry_fruits": ["Sunflower Seeds", "Flax Seeds"],
    "fruits": ["Oranges", "Bananas"]
  },
  {
    "name": "Vitamin B2 (Riboflavin)",
    "type": "water-soluble",
    "function": "Helps convert food into energy, important for cell growth",
    "foods": ["Milk", "Curd", "Spinach", "Eggs"],
    "dry_fruits": ["Almonds/Badam"],
    "fruits": ["Avocado"]
  },
  {
    "name": "Vitamin B3 (Niacin)",
    "type": "water-soluble",
    "function": "Helps convert food to energy, supports digestive and nervous systems",
    "foods": ["Fish", "Chicken", "Groundnut", "Peanut", "Corn", "Wheat", "Rice"],
    "dry_fruits": [],
    "fruits": ["Avocado"]
  },
  {
    "name": "Vitamin B5 (Pantothenic Acid)",
    "type": "water-soluble",
    "function": "Helps make hormones and cholesterol, converts food to energy",
    "foods": ["Mushrooms"],
    "dry_fruits": [],
    "fruits": ["Avocado"]
  },
  {
    "name": "Vitamin B6 (Pyridoxine)",
    "type": "water-soluble",
    "function": "Important for brain development, hemoglobin and immune function",
    "foods": ["Potatoes", "Chicken", "Onion"],
    "dry_fruits": ["Walnuts", "Pista", "Dates", "Dried Figs/Anjeer"],
    "fruits": ["Banana"]
  },
  {
    "name": "Vitamin B7 (Biotin)",
    "type": "water-soluble",
    "function": "Helps convert food to energy, important for hair and nail health",
    "foods": ["Eggs"],
    "dry_fruits": ["Almonds/Badam", "Walnuts"],
    "fruits": []
  },
  {
    "name": "Vitamin B9 (Folate)",
    "type": "water-soluble",
    "function": "Essential for DNA synthesis and red blood cell formation",
    "foods": ["Spinach", "Corn", "Dals", "Beetroot","Soy chunks/Meal Maker"],
    "dry_fruits": [],
    "fruits": ["Oranges", "Banana", "Papaya"]
  },
  {
    "name": "Vitamin B12 (Cobalamin)",
    "type": "water-soluble",
    "function": "Essential for nervous system and red blood cell formation",
    "foods": ["Fish", "Eggs", "Milk", "Paneer", "Curd", "Chicken", "Mutton", "Prawns"],
    "dry_fruits": [],
    "fruits": []
  },
  {
    "name": "Vitamin C",
    "type": "water-soluble",
    "function": "Antioxidant, supports immune system and collagen production",
    "foods": ["Lemon", "Amla", "Beetroot", "Bottle Gourd", "Okra/Lady's Finger", "Tomato", "Onion", "Potato"],
    "dry_fruits": ["Cranberries"],
    "fruits": ["Apple", "Oranges", "Kiwi", "Guava", "Pomegranate", "Watermelon", "Papaya", "Mango"]
  },
  {
    "name": "Vitamin D",
    "type": "fat-soluble",
    "function": "Essential for bone health and calcium absorption",
    "foods": ["Sunlight", "Eggs", "Milk", "Mushrooms", "Fish"],
    "dry_fruits": [],
    "fruits": []
  },
  {
    "name": "Vitamin E",
    "type": "fat-soluble",
    "function": "Antioxidant that protects cells from damage",
    "foods": ["Spinach"],
    "dry_fruits": ["Almonds/Badam", "Cranberry", "Walnuts", "Pumpkin Seeds", "Sunflower Seeds"],
    "fruits": []
  },
  {
    "name": "Vitamin K",
    "type": "fat-soluble",
    "function": "Essential for blood clotting and bone health",
    "foods": ["Spinach", "Broccoli", "Kale", "Cabbage", "Okra/Lady's Finger"],
    "dry_fruits": ["Dried Figs/Anjeer", "Pumpkin Seeds", "Chia Seeds"],
    "fruits": []
  }
]
,
    minerals: [
  {
    "name": "Calcium",
    "type": "mineral",
    "function": "Essential for strong bones, teeth, and muscle function",
    "foods": ["Milk", "Curd", "Cheese", "Spinach", "Broccoli", "Paneer", "Ragi", "Millet", "Drum Stick/Moringa Leaves"],
    "dry_fruits": ["Almonds/Badam", "Sesame Seeds"],
    "fruits": []
  },
  {
    "name": "Sulfur",
    "type": "mineral",
    "function": "Vital for oxygen transport and energy production",
    "foods": ["Lentils/Dals", "Eggs", "Chicken", "Fish", "Garlic", "Onions", "Brocolli", "Cabbage"],
    "dry_fruits": [],
    "fruits": []
  },
  {
    "name": "Magnesium",
    "type": "mineral",
    "function": "Important for muscle and nerve function, bone health",
    "foods": ["Spinach", "Rajma", "Dark Chocolate"],
    "dry_fruits": ["Almonds/Badam", "Cashews", "Pumpkin Seeds"],
    "fruits": ["Bananas", "Avocado"]
  },
  {
    "name": "Potassium",
    "type": "mineral",
    "function": "Regulates fluid balance and supports heart function",
    "foods": ["Coconut Water", "Sweet Potato", "Spinach", "Beans", "Rajma"],
    "dry_fruits": ["Dried Apricots", "Dates"],
    "fruits": ["Bananas", "Pomegranate"]
  },
  {
    "name": "Phosphorus",
    "type": "mineral",
    "function": "Essential for bone and teeth formation, energy storage",
    "foods": ["Fish", "Chicken", "Paneer", "Curd", "Dals", "Millets","Soy chunks/Meal Maker"],
    "dry_fruits": ["Sesame Seeds", "Sunflower Seeds", "Pumpkin Seeds"],
    "fruits": []
  }
]

};

// Application State
let currentMatches = {
    vitamins: new Set(),
    minerals: new Set()
};

let analysisInProgress = false;

// DOM Elements - will be initialized after DOM loads
let foodInput, analyzeBtn, resetBtn, vitaminGrid, mineralGrid, progressCircle, percentageValue, vitaminCount, mineralCount;

// Vitamin Icons
const vitaminIcons = {
    'Vitamin A': '👁️',
    'Vitamin B1 (Thiamine)': '⚡',
    'Vitamin B2 (Riboflavin)': '🔋',
    'Vitamin B3 (Niacin)': '🧠',
    'Vitamin B5 (Pantothenic Acid)': '🏭',
    'Vitamin B6 (Pyridoxine)': '🧬',
    'Vitamin B7 (Biotin)': '💇',
    'Vitamin B9 (Folate)': '🩸',
    'Vitamin B12 (Cobalamin)': '🔴',
    'Vitamin C': '🍊',
    'Vitamin D': '☀️',
    'Vitamin E': '🛡️',
    'Vitamin K': '🩹'
};

// Mineral Icons
const mineralIcons = {
    'Calcium': '🦴',
    'Iron': '🔴',
    'Magnesium': '💪',
    'Potassium': '💖',
    'Zinc': '🛡️',
    'Phosphorus': '⚡',
    'Selenium': '🔰',
    'Iodine': '🦋'
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    // Initialize DOM elements
    initializeDOMElements();
    
    // Render cards
    renderVitaminCards();
    renderMineralCards();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize percentage indicator
    updatePercentageIndicator();
    
    // Add initial animation delay for cards
    setTimeout(() => addCardLoadAnimations(), 100);
});

// Initialize DOM Elements
function initializeDOMElements() {
    foodInput = document.getElementById('foodInput');
    analyzeBtn = document.getElementById('analyzeBtn');
    resetBtn = document.getElementById('resetBtn');
    vitaminGrid = document.getElementById('vitaminGrid');
    mineralGrid = document.getElementById('mineralGrid');
    progressCircle = document.querySelector('.progress-ring__circle');
    percentageValue = document.querySelector('.percentage-value');
    vitaminCount = document.getElementById('vitaminCount');
    mineralCount = document.getElementById('mineralCount');
}

// Add loading animations for cards with enhanced effects
function addCardLoadAnimations() {
    const cards = document.querySelectorAll('.nutrient-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px) scale(0.9)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
        }, index * 80);
    });
}

// Event Listeners
function setupEventListeners() {
    if (analyzeBtn) {
        analyzeBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (!analysisInProgress) {
                analyzeNutrition();
            }
        });
    }
    
    if (resetBtn) {
        resetBtn.addEventListener('click', function(e) {
            e.preventDefault();
            if (!analysisInProgress) {
                resetAnalysis();
            }
        });
    }
    
    if (foodInput) {
        foodInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter' && !analysisInProgress) {
                e.preventDefault();
                analyzeNutrition();
            }
        });
        
        // Enhanced input focus effects
        foodInput.addEventListener('focus', function() {
            this.closest('.analysis-input-group').style.transform = 'scale(1.02)';
        });
        
        foodInput.addEventListener('blur', function() {
            this.closest('.analysis-input-group').style.transform = 'scale(1)';
        });
    }
}

// Render Vitamin Cards
function renderVitaminCards() {
    if (!vitaminGrid) return;
    
    vitaminGrid.innerHTML = '';
    
    nutritionData.vitamins.forEach((vitamin, index) => {
        const card = createNutrientCard(vitamin, 'vitamin', index);
        vitaminGrid.appendChild(card);
    });
}

// Render Mineral Cards
function renderMineralCards() {
    if (!mineralGrid) return;
    
    mineralGrid.innerHTML = '';
    
    nutritionData.minerals.forEach((mineral, index) => {
        const card = createNutrientCard(mineral, 'mineral', index);
        mineralGrid.appendChild(card);
    });
}

// Create Nutrient Card with enhanced structure
function createNutrientCard(nutrient, type, index) {
    const card = document.createElement('div');
    
    if (type === 'vitamin') {
        const typeClass = nutrient.type === 'water-soluble' ? 'water-soluble' : 'fat-soluble';
        card.className = `nutrient-card vitamin-card ${typeClass}`;
    } else {
        card.className = 'nutrient-card mineral-card';
    }
    
    card.dataset.index = index;
    card.dataset.type = type;
    
    const icon = type === 'vitamin' ? vitaminIcons[nutrient.name] || '💊' : mineralIcons[nutrient.name] || '🪨';
    const displayType = type === 'vitamin' ? nutrient.type.replace('-', ' ') : 'Essential Mineral';
    
    card.innerHTML = `
        <div class="card-content-bg"></div>
        <div class="card-header">
            <div class="card-icon">${icon}</div>
            <div class="card-title">
                <h3 class="card-name">${nutrient.name}</h3>
                <p class="card-type">${displayType}</p>
            </div>
        </div>
        <div class="card-content">
            <p class="card-function">${nutrient.function}</p>
            <div class="card-sources">
                ${createSourcesHTML(nutrient)}
            </div>
        </div>
    `;
    
    // Add enhanced hover interactions
    addCardHoverEffects(card);
    
    return card;
}

// Add enhanced hover effects to cards
function addCardHoverEffects(card) {
    let hoverTimeout;
    
    card.addEventListener('mouseenter', function() {
        clearTimeout(hoverTimeout);
        
        // Enhanced card effects
        this.style.transform = 'translateY(-8px) scale(1.03)';
        this.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.2)';
        
        // Add subtle animation to source tags with delay
        const sourceTags = this.querySelectorAll('.source-tag');
        sourceTags.forEach((tag, index) => {
            setTimeout(() => {
                tag.style.transition = 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)';
                tag.style.transform = 'translateY(-2px) scale(1.1)';
                tag.style.background = 'rgba(255, 255, 255, 0.35)';
                tag.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
            }, index * 50);
        });
    });
    
    card.addEventListener('mouseleave', function() {
        // Reset card effects
        this.style.transform = '';
        this.style.boxShadow = '';
        
        // Reset source tags
        hoverTimeout = setTimeout(() => {
            const sourceTags = this.querySelectorAll('.source-tag');
            sourceTags.forEach(tag => {
                tag.style.transform = 'translateY(0) scale(1)';
                tag.style.background = 'rgba(255, 255, 255, 0.2)';
                tag.style.boxShadow = '';
            });
        }, 100);
    });
    
    // Add individual source tag hover effects
    const sourceTags = card.querySelectorAll('.source-tag');
    sourceTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.15)';
            this.style.background = 'rgba(255, 255, 255, 0.4)';
            this.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.25)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-2px) scale(1.1)';
            this.style.background = 'rgba(255, 255, 255, 0.35)';
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.2)';
        });
    });
}

// Create Sources HTML
function createSourcesHTML(nutrient) {
    let sourcesHTML = '';
    
    if (nutrient.foods && nutrient.foods.length > 0) {
        sourcesHTML += `
            <div class="source-category">
                <span class="source-label">Foods:</span>
                <div class="source-tags">
                    ${nutrient.foods.map(food => `<span class="source-tag">${food}</span>`).join('')}
                </div>
            </div>
        `;
    }
    
    if (nutrient.dry_fruits && nutrient.dry_fruits.length > 0) {
        sourcesHTML += `
            <div class="source-category">
                <span class="source-label">Nuts:</span>
                <div class="source-tags">
                    ${nutrient.dry_fruits.map(fruit => `<span class="source-tag">${fruit}</span>`).join('')}
                </div>
            </div>
        `;
    }
    
    if (nutrient.fruits && nutrient.fruits.length > 0) {
        sourcesHTML += `
            <div class="source-category">
                <span class="source-label">Fruits:</span>
                <div class="source-tags">
                    ${nutrient.fruits.map(fruit => `<span class="source-tag">${fruit}</span>`).join('')}
                </div>
            </div>
        `;
    }
    
    return sourcesHTML;
}

// Analyze Nutrition with Enhanced Animations and Professional Loading States
function analyzeNutrition() {
    if (!foodInput || analysisInProgress) return;
    
    const input = foodInput.value.trim();
    
    if (!input) {
        showNotification('Please enter some foods to analyze.', 'warning');
        foodInput.focus();
        return;
    }
    
    analysisInProgress = true;
    
    // Enhanced loading state with professional animations
    if (analyzeBtn) {
        analyzeBtn.disabled = true;
        analyzeBtn.innerHTML = `
            <span class="btn-gradient"></span>
            <span style="display: inline-flex; align-items: center; gap: 8px;">
                <span class="loading-spinner"></span>
                Analyzing...
            </span>
        `;
        analyzeBtn.style.background = 'linear-gradient(135deg, var(--color-primary), var(--color-teal-600))';
    }
    
    if (resetBtn) {
        resetBtn.disabled = true;
        resetBtn.style.opacity = '0.5';
    }
    
    // Add analyzing class for loading animations
    document.body.classList.add('analyzing');
    
    // Add loading spinner styles
    const style = document.createElement('style');
    style.textContent = `
        .loading-spinner {
            width: 14px;
            height: 14px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            border-top: 2px solid white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
    
    // Clear previous matches
    currentMatches.vitamins.clear();
    currentMatches.minerals.clear();
    
    // Parse input foods
    const inputFoods = input.toLowerCase().split(',').map(food => food.trim());
    
    // Show initial progress notification
    showNotification('Starting nutritional analysis...', 'info');
    
    // Simulate professional analysis delay with progress updates
    setTimeout(() => {
        showNotification('Analyzing vitamin content...', 'info');
        
        // Check vitamins with staggered animations
        nutritionData.vitamins.forEach((vitamin, index) => {
            setTimeout(() => {
                const hasMatch = checkNutrientMatch(vitamin, inputFoods);
                const card = vitaminGrid?.children[index];
                
                if (card) {
                    // Remove existing state classes
                    card.classList.remove('matched', 'unmatched');
                    
                    // Add subtle analysis animation
                    card.style.transform = 'scale(1.02)';
                    card.style.boxShadow = '0 0 20px rgba(59, 130, 246, 0.3)';
                    
                    setTimeout(() => {
                        if (hasMatch) {
                            currentMatches.vitamins.add(index);
                            card.classList.add('matched');
                        } else {
                            card.classList.add('unmatched');
                        }
                        
                        // Reset analysis animation
                        card.style.transform = '';
                        card.style.boxShadow = '';
                    }, 300);
                }
            }, index * 120);
        });
        
        // Update to mineral analysis
        setTimeout(() => {
            showNotification('Analyzing mineral content...', 'info');
            
            // Check minerals with staggered animations
            nutritionData.minerals.forEach((mineral, index) => {
                setTimeout(() => {
                    const hasMatch = checkNutrientMatch(mineral, inputFoods);
                    const card = mineralGrid?.children[index];
                    
                    if (card) {
                        // Remove existing state classes
                        card.classList.remove('matched', 'unmatched');
                        
                        // Add subtle analysis animation
                        card.style.transform = 'scale(1.02)';
                        card.style.boxShadow = '0 0 20px rgba(224, 180, 214, 0.4)';
                        
                        setTimeout(() => {
                            if (hasMatch) {
                                currentMatches.minerals.add(index);
                                card.classList.add('matched');
                            } else {
                                card.classList.add('unmatched');
                            }
                            
                            // Reset analysis animation
                            card.style.transform = '';
                            card.style.boxShadow = '';
                        }, 300);
                    }
                }, index * 120);
            });
        }, nutritionData.vitamins.length * 120 + 500);
        
        // Complete analysis
        setTimeout(() => {
            updatePercentageIndicator();
            completeAnalysis();
            
            // Remove loading spinner styles
            style.remove();
        }, (nutritionData.vitamins.length + nutritionData.minerals.length) * 120 + 1000);
        
    }, 500);
}

// Complete analysis and reset UI with enhanced feedback
function completeAnalysis() {
    analysisInProgress = false;
    
    // Remove analyzing class
    document.body.classList.remove('analyzing');
    
    // Re-enable buttons with smooth transition
    if (analyzeBtn) {
        analyzeBtn.disabled = false;
        analyzeBtn.innerHTML = '<span class="btn-gradient"></span>Analyze Nutrition';
        analyzeBtn.style.background = '';
        analyzeBtn.style.transform = 'scale(1.05)';
        setTimeout(() => {
            analyzeBtn.style.transform = '';
        }, 200);
    }
    
    if (resetBtn) {
        resetBtn.disabled = false;
        resetBtn.style.opacity = '1';
    }
    
    // Show completion notification with detailed results
    const matchCount = currentMatches.vitamins.size + currentMatches.minerals.size;
    const totalNutrients = 21;
    const percentage = Math.round((matchCount / totalNutrients) * 100);
    
    if (matchCount > 0) {
        let resultMessage = `Analysis complete! 🎉 Found ${matchCount}/${totalNutrients} nutrients (${percentage}% coverage)`;
        
        if (percentage >= 75) {
            resultMessage += ' - Excellent nutrition profile!';
            showNotification(resultMessage, 'success');
        } else if (percentage >= 50) {
            resultMessage += ' - Good nutrition coverage!';
            showNotification(resultMessage, 'success');
        } else {
            resultMessage += ' - Consider adding more variety!';
            showNotification(resultMessage, 'warning');
        }
    } else {
        showNotification('Analysis complete! No nutrient matches found. Try foods like spinach, almonds/badam, or oranges.', 'info');
    }
}

// Check if nutrient matches input foods
function checkNutrientMatch(nutrient, inputFoods) {
    const allSources = [
        ...(nutrient.foods || []),
        ...(nutrient.dry_fruits || []),
        ...(nutrient.fruits || [])
    ].map(source => source.toLowerCase());
    
    return inputFoods.some(inputFood => 
        allSources.some(source => 
            source.includes(inputFood) || inputFood.includes(source)
        )
    );
}

// Reset Analysis with Enhanced Animations
function resetAnalysis() {
    if (analysisInProgress) return;
    
    showNotification('Resetting analysis...', 'info');
    
    // Clear input with smooth animation
    if (foodInput) {
        foodInput.style.transform = 'scale(0.95)';
        foodInput.style.opacity = '0.7';
        
        setTimeout(() => {
            foodInput.value = '';
            foodInput.style.transform = 'scale(1)';
            foodInput.style.opacity = '1';
            foodInput.focus();
        }, 200);
    }
    
    // Clear matches
    currentMatches.vitamins.clear();
    currentMatches.minerals.clear();
    
    // Reset cards with enhanced staggered animations
    const allCards = [...(vitaminGrid?.children || []), ...(mineralGrid?.children || [])];
    allCards.forEach((card, index) => {
        setTimeout(() => {
            // Add reset animation
            card.style.transform = 'scale(0.95) rotateY(10deg)';
            card.style.opacity = '0.8';
            
            setTimeout(() => {
                card.classList.remove('matched', 'unmatched');
                card.style.transform = 'scale(1) rotateY(0deg)';
                card.style.opacity = '1';
            }, 150);
        }, index * 40);
    });
    
    // Update percentage indicator with animation
    setTimeout(() => {
        updatePercentageIndicator();
        setTimeout(() => {
            showNotification('Analysis reset successfully! Ready for new input.', 'success');
        }, 300);
    }, allCards.length * 40 + 300);
}

// Update Percentage Indicator with Enhanced Smooth Animations
function updatePercentageIndicator() {
    const vitaminMatches = currentMatches.vitamins.size;
    const mineralMatches = currentMatches.minerals.size;
    const totalMatches = vitaminMatches + mineralMatches;
    const totalNutrients = 21; // 13 vitamins + 8 minerals
    const percentage = Math.round((totalMatches / totalNutrients) * 100);
    
    // Animate percentage text with bounce effect
    if (percentageValue) {
        percentageValue.style.transform = 'scale(0.8) rotateY(90deg)';
        percentageValue.style.opacity = '0';
        
        setTimeout(() => {
            percentageValue.textContent = `${percentage}%`;
            percentageValue.style.transform = 'scale(1.1) rotateY(0deg)';
            percentageValue.style.opacity = '1';
            
            setTimeout(() => {
                percentageValue.style.transform = 'scale(1) rotateY(0deg)';
            }, 200);
        }, 200);
    }
    
    // Animate counts with staggered bounce effects
    if (vitaminCount) {
        vitaminCount.style.transform = 'scale(0.8) translateY(10px)';
        vitaminCount.style.opacity = '0';
        
        setTimeout(() => {
            vitaminCount.textContent = `${vitaminMatches}/13`;
            vitaminCount.style.transform = 'scale(1.1) translateY(-5px)';
            vitaminCount.style.opacity = '1';
            
            setTimeout(() => {
                vitaminCount.style.transform = 'scale(1) translateY(0)';
            }, 200);
        }, 150);
    }
    
    if (mineralCount) {
        mineralCount.style.transform = 'scale(0.8) translateY(10px)';
        mineralCount.style.opacity = '0';
        
        setTimeout(() => {
            mineralCount.textContent = `${mineralMatches}/8`;
            mineralCount.style.transform = 'scale(1.1) translateY(-5px)';
            mineralCount.style.opacity = '1';
            
            setTimeout(() => {
                mineralCount.style.transform = 'scale(1) translateY(0)';
            }, 200);
        }, 200);
    }
    
    // Enhanced progress ring animation with color transitions
    if (progressCircle) {
        const circumference = 2 * Math.PI * 60; // r = 60 for the larger circle
        const currentOffset = parseFloat(progressCircle.style.strokeDashoffset) || circumference;
        const targetOffset = circumference - (percentage / 100) * circumference;
        
        // Smooth animation using requestAnimationFrame
        let startTime = null;
        const duration = 1500; // 1.5 seconds for smooth animation
        
        const animateProgress = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentOffsetValue = currentOffset + (targetOffset - currentOffset) * easeOutQuart;
            
            progressCircle.style.strokeDashoffset = currentOffsetValue;
            
            if (progress < 1) {
                requestAnimationFrame(animateProgress);
            }
        };
        
        requestAnimationFrame(animateProgress);
        
        // Dynamic color change based on percentage with smooth transition
        let strokeColor;
        if (percentage >= 75) {
            strokeColor = '#10B981'; // Green for excellent coverage
        } else if (percentage >= 50) {
            strokeColor = '#F59E0B'; // Orange for good coverage
        } else if (percentage >= 25) {
            strokeColor = '#EF4444'; // Red for low coverage
        } else {
            strokeColor = 'var(--color-primary)'; // Default color
        }
        
        progressCircle.style.transition = 'stroke 0.8s ease-in-out';
        progressCircle.style.stroke = strokeColor;
    }
}

// Enhanced notification system with rich animations
function showNotification(message, type = 'info') {
    // Remove existing notification if present
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.style.transform = 'translateX(100%) scale(0.8)';
        existingNotification.style.opacity = '0';
        setTimeout(() => existingNotification.remove(), 200);
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <div class="notification-content" style="display: flex; align-items: center; gap: 10px;">
            <span class="notification-icon" style="font-size: 18px;">${getNotificationIcon(type)}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;
    
    // Enhanced notification styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        z-index: 1000;
        padding: 16px 24px;
        border-radius: 12px;
        color: white;
        font-weight: 500;
        font-size: 14px;
        max-width: 350px;
        transform: translateX(100%) scale(0.8);
        transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
        opacity: 0;
    `;
    
    // Set background with enhanced gradients
    switch (type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #10B981, #059669, #047857)';
            break;
        case 'warning':
            notification.style.background = 'linear-gradient(135deg, #F59E0B, #D97706, #B45309)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #EF4444, #DC2626, #B91C1C)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #3B82F6, #1D4ED8, #1E40AF)';
    }
    
    document.body.appendChild(notification);
    
    // Enhanced animate in with bounce effect
    setTimeout(() => {
        notification.style.transform = 'translateX(0) scale(1.05)';
        notification.style.opacity = '1';
        
        setTimeout(() => {
            notification.style.transform = 'translateX(0) scale(1)';
        }, 150);
    }, 50);
    
    // Auto remove with enhanced animation
    setTimeout(() => {
        notification.style.transform = 'translateX(100%) scale(0.8)';
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 400);
    }, 4000);
}

// Get notification icon based on type
function getNotificationIcon(type) {
    switch (type) {
        case 'success': return '✅';
        case 'warning': return '⚠️';
        case 'error': return '❌';
        default: return 'ℹ️';
    }
}

// Utility function to capitalize first letter
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}