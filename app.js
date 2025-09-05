/**
 * NutrifyU - JavaScript Application Logic
 * This file handles all interactive functionality including:
 * - Dynamic vitamin card generation with vibrant blue/yellow themes
 * - Food matching with COMPLETE red/green color overrides
 * - Stress and activity indicator toggles with button color synchronization
 * - Responsive user interactions
 */

// ================================
// VITAMIN DATA CONFIGURATION
// ================================

// Complete vitamin data with all essential vitamins
const vitaminData = {
    "vitamins": [
        {
            "name": "Vitamin A",
            "type": "fat-soluble",
            "function": "Essential for vision, immune function, and cell growth",
            "foods": ["carrot", "sweet potato", "spinach"],
            "dry_fruits": ["apricots", "dried figs"],
            "fruits": ["mango"]
        },
        {
            "name": "Vitamin B1 (Thiamine)",
            "type": "water-soluble", 
            "function": "Helps convert carbohydrates into energy, essential for nervous system",
            "foods": ["whole wheat", "rice", "dals", "oats"],
            "dry_fruits": ["sunflower seeds", "flax seeds"],
            "fruits": ["oranges", "bananas"]
        },
        {
            "name": "Vitamin B2 (Riboflavin)",
            "type": "water-soluble",
            "function": "Helps convert food into energy, important for cell growth",
            "foods": ["milk", "curd", "spinach"],
            "dry_fruits": ["almonds"],
            "fruits": ["avocado"]
        },
        {
            "name": "Vitamin B3 (Niacin)",
            "type": "water-soluble",
            "function": "Helps convert food to energy, supports digestive and nervous systems",
            "foods": ["fish", "chicken", "groundnut", "peanut"],
            "dry_fruits": ["sunflower seeds"],
            "fruits": ["avocado"]
        },
        {
            "name": "Vitamin B5 (Pantothenic Acid)", 
            "type": "water-soluble",
            "function": "Helps make hormones and cholesterol, converts food to energy",
            "foods": [ "mushrooms"],
            "dry_fruits": ["sunflower seeds"],
            "fruits": ["avocado"]
        },
        {
            "name": "Vitamin B6 (Pyridoxine)",
            "type": "water-soluble", 
            "function": "Important for brain development, nemoglobin and immune function",
            "foods": ["potatoes"],
            "dry_fruits": ["walnuts"],
            "fruits": ["banana"]
        },
        {
            "name": "Vitamin B7 (Biotin)",
            "type": "water-soluble",
            "function": "Helps convert food to energy, important for hair and nail health", 
            "foods": ["eggs"],
            "dry_fruits": ["almonds", "walnuts", "sunflower seeds"],
            "fruits": []
        },
        {
            "name": "Vitamin B9 (Folate)",
            "type": "water-soluble",
            "function": "Essential for DNA synthesis and red blood cell formation",
            "foods": ["leafy greens"],
            "dry_fruits": [],
            "fruits": ["oranges", "banana", "papaya"]
        },
        {
            "name": "Vitamin B12 (Cobalamin)",
            "type": "water-soluble",
            "function": "Essential for nervous system and red blood cell formation",
            "foods": ["fish", "eggs", "milk", "paneer", "curd", "chicken"],
            "dry_fruits": [],
            "fruits": []
        },
        {
            "name": "Vitamin C",
            "type": "water-soluble",
            "function": "Antioxidant, supports immune system and collagen production",
            "foods": ["Lemon", "Amla"],
            "dry_fruits": ["cranberries"],
            "fruits": ["oranges", "kiwi", "guava"]
        },
        {
            "name": "Vitamin D", 
            "type": "fat-soluble",
            "function": "Essential for bone health and calcium absorption",
            "foods": ["Sunlight", "eggs", "milk", "mushrooms", "fish"],
            "dry_fruits": [],
            "fruits": []
        },
        {
            "name": "Vitamin E",
            "type": "fat-soluble",
            "function": "Antioxidant that protects cells from damage",
            "foods": ["spinach"],
            "dry_fruits": ["almonds"],
            "fruits": []
        },
        {
            "name": "Vitamin K",
            "type": "fat-soluble", 
            "function": "Essential for blood clotting and bone health",
            "foods": ["spinach", "broccoli", "kale", "cabbage"],
            "dry_fruits": [],
            "fruits": []
        }
    ]
};

// ================================
// APPLICATION STATE MANAGEMENT
// ================================

// Global state to track application status
let appState = {
    vitamins: vitaminData.vitamins,
    stressLevel: 'low', // Default: green (low stress)
    activityLevel: 'low', // Default: red (inactive)
    foodInputVisible: false,
    consumedFoods: [],
    foodMatchingActive: false // Track if food matching is currently active
};

// ================================
// BUTTON COLOR SYNCHRONIZATION HELPERS
// ================================

/**
 * Update activity button color to match activity card state
 * @param {string} colorState - 'red' for inactive, 'green' for active
 */
function updateActivityButtonColor(colorState) {
    const activityBtn = document.getElementById('activityBtn');
    if (!activityBtn) return;
    
    // Remove existing color classes
    activityBtn.classList.remove('btn-activity-red', 'btn-activity-green', 'btn--secondary', 'btn--outline');
    
    // Add appropriate color class to match card
    if (colorState === 'green') {
        activityBtn.classList.add('btn-activity-green');
    } else {
        activityBtn.classList.add('btn-activity-red');
    }
    
    console.log(`✅ Activity button color updated to: ${colorState}`);
}

/**
 * Update stress button color to match stress card state
 * @param {string} colorState - 'green' for relaxed, 'red' for stressed
 */
function updateStressButtonColor(colorState) {
    const stressBtn = document.getElementById('stressBtn');
    if (!stressBtn) return;
    
    // Remove existing color classes
    stressBtn.classList.remove('btn-stress-green', 'btn-stress-red', 'btn--secondary', 'btn--outline');
    
    // Add appropriate color class to match card
    if (colorState === 'green') {
        stressBtn.classList.add('btn-stress-green');
    } else {
        stressBtn.classList.add('btn-stress-red');
    }
    
    console.log(`✅ Stress button color updated to: ${colorState}`);
}

// ================================
// VITAMIN CARD GENERATION WITH VIBRANT THEMES
// ================================

/**
 * Generate HTML for a single vitamin card with vibrant blue/yellow themes
 * @param {Object} vitamin - Vitamin data object
 * @param {number} index - Index for unique ID generation
 * @returns {string} HTML string for vitamin card
 */
function generateVitaminCard(vitamin, index) {
    // Determine icon based on vitamin type
    const vitaminIcon = vitamin.type === 'water-soluble' ? '💧' : '🟡';
    
    // Determine solubility class for vibrant theming
    // Water-soluble = vibrant blue theme, Fat-soluble = vibrant yellow theme
    const solubilityClass = vitamin.type; // This will be "water-soluble" or "fat-soluble"
    
    // Generate food tags for each category
    const generateFoodTags = (foods, category) => {
        if (!foods || foods.length === 0) {
            return '<span class="food-tag">None listed</span>';
        }
        return foods.map(food => `<span class="food-tag">${food}</span>`).join('');
    };

    return `
        <div class="vitamin-card ${solubilityClass}" id="vitamin-${index}">
            <div class="vitamin-header">
                <div class="vitamin-icon">${vitaminIcon}</div>
                <div>
                    <h3 class="vitamin-name">${vitamin.name}</h3>
                    <span class="vitamin-type">${vitamin.type.replace('-', ' ')}</span>
                </div>
            </div>
            
            <p class="vitamin-function">${vitamin.function}</p>
            
            <div class="food-sources">
                <div class="source-group">
                    <h4>🍽️ Foods</h4>
                    <div class="source-list">
                        ${generateFoodTags(vitamin.foods, 'foods')}
                    </div>
                </div>
                
                <div class="source-group">
                    <h4>🌰 DryFruits & Seeds</h4>
                    <div class="source-list">
                        ${generateFoodTags(vitamin.dry_fruits, 'dry_fruits')}
                    </div>
                </div>
                
                <div class="source-group">
                    <h4>🍓 Fruits</h4>
                    <div class="source-list">
                        ${generateFoodTags(vitamin.fruits, 'fruits')}
                    </div>
                </div>
            </div>
        </div>
    `;
}

/**
 * Render all vitamin cards to the DOM with vibrant blue/yellow themes
 * Water-soluble vitamins get vibrant blue theme with animations
 * Fat-soluble vitamins get vibrant yellow theme with animations
 */
function renderVitaminCards() {
    const vitaminsGrid = document.getElementById('vitaminsGrid');
    
    if (!vitaminsGrid) {
        console.error('❌ Vitamins grid element not found');
        return;
    }
    
    // Generate HTML for all vitamin cards with solubility classes
    const cardsHTML = appState.vitamins.map((vitamin, index) => 
        generateVitaminCard(vitamin, index)
    ).join('');
    
    // Insert all cards at once for better performance
    vitaminsGrid.innerHTML = cardsHTML;
    
    console.log('✅ Vitamin cards rendered successfully with vibrant blue/yellow themes');
    console.log('🔵 Water-soluble vitamins (B1,B2,B3,B5,B6,B7,B9,B12,C): Vibrant blue theme with animations');
    console.log('🟡 Fat-soluble vitamins (A,D,E,K): Vibrant yellow theme with animations');
}

// ================================
// FOOD MATCHING LOGIC WITH COMPLETE COLOR OVERRIDE
// ================================

/**
 * Parse comma-separated food input and clean up the data
 * @param {string} foodInput - Raw comma-separated food input
 * @returns {Array} Array of cleaned food names
 */
function parseFoodInput(foodInput) {
    return foodInput
        .split(',')                          // Split by comma
        .map(food => food.trim().toLowerCase()) // Clean and normalize
        .filter(food => food.length > 0);    // Remove empty strings
}

/**
 * Check if a vitamin contains any of the consumed foods
 * @param {Object} vitamin - Vitamin data object
 * @param {Array} consumedFoods - Array of consumed food names
 * @returns {boolean} True if vitamin contains any consumed foods
 */
function vitaminContainsFood(vitamin, consumedFoods) {
    // Combine all food sources for this vitamin
    const allVitaminFoods = [
        ...(vitamin.foods || []),
        ...(vitamin.dry_fruits || []),
        ...(vitamin.fruits || [])
    ].map(food => food.toLowerCase());
    
    // Check if any consumed food matches any vitamin food source
    return consumedFoods.some(consumedFood => 
        allVitaminFoods.some(vitaminFood => 
            vitaminFood.includes(consumedFood) || consumedFood.includes(vitaminFood)
        )
    );
}

/**
 * Update vitamin card colors based on food consumption
 * COMPLETELY OVERRIDES blue/yellow themes with solid red/green
 * @param {Array} consumedFoods - Array of consumed food names
 */
function updateVitaminCardColors(consumedFoods) {
    appState.foodMatchingActive = true; // Mark food matching as active
    
    appState.vitamins.forEach((vitamin, index) => {
        const cardElement = document.getElementById(`vitamin-${index}`);
        if (!cardElement) return;
        
        const hasMatch = vitaminContainsFood(vitamin, consumedFoods);
        
        // COMPLETE OVERRIDE: Remove all existing color classes
        cardElement.classList.remove('default-light');
        
        // Add appropriate color class - this will COMPLETELY override blue/yellow
        if (hasMatch) {
            cardElement.classList.remove('unmatched');
            cardElement.classList.add('matched');
        } else {
            cardElement.classList.remove('matched');
            cardElement.classList.add('unmatched');
        }
    });
    
    console.log(`✅ COMPLETE COLOR OVERRIDE: Updated vitamin card colors based on ${consumedFoods.length} consumed foods`);
    console.log('🟢 Matched cards: SOLID GREEN (overrides blue/yellow, stops animations)');
    console.log('🔴 Unmatched cards: SOLID RED (overrides blue/yellow, stops animations)');
}

/**
 * Reset all vitamin cards to vibrant blue/yellow themes
 * Removes red/green overrides and restores animations
 */
function resetVitaminCardColors() {
    appState.foodMatchingActive = false; // Mark food matching as inactive
    
    appState.vitamins.forEach((vitamin, index) => {
        const cardElement = document.getElementById(`vitamin-${index}`);
        if (!cardElement) return;
        
        // Remove matched/unmatched classes to restore blue/yellow themes
        cardElement.classList.remove('matched', 'unmatched', 'default-light');
        
        // The solubility classes (water-soluble/fat-soluble) are preserved
        // This will restore the vibrant blue/yellow themes and animations
    });
    
    console.log('✅ RESTORED DEFAULT THEMES: All vitamin cards back to vibrant blue/yellow with animations');
}

// ================================
// WELLNESS INDICATOR CONTROLS WITH BUTTON SYNCHRONIZATION
// ================================

/**
 * Toggle stress indicator between low (green) and high (red)
 * Also synchronizes the stress button color to match the card
 */
function toggleStressIndicator() {
    const stressCard = document.getElementById('stressCard');
    const statusText = stressCard?.querySelector('.status-text');
    const iconElement = stressCard?.querySelector('.wellness-icon');
    
    if (!stressCard || !statusText || !iconElement) {
        console.error('❌ Stress card elements not found');
        return;
    }
    
    if (appState.stressLevel === 'low') {
        // Change from low (green) to high (red)
        appState.stressLevel = 'high';
        stressCard.classList.remove('default-green');
        stressCard.classList.add('active-red');
        statusText.textContent = 'Stressed';
        iconElement.textContent = '😰';
        
        // Synchronize button color to match card (red)
        updateStressButtonColor('red');
    } else {
        // Change from high (red) to low (green)
        appState.stressLevel = 'low';
        stressCard.classList.remove('active-red');
        stressCard.classList.add('default-green');
        statusText.textContent = 'Relaxed';
        iconElement.textContent = '😌';
        
        // Synchronize button color to match card (green)
        updateStressButtonColor('green');
    }
    
    console.log(`✅ Stress level changed to: ${appState.stressLevel} (button color synchronized)`);
}

/**
 * Toggle activity indicator between inactive (red) and active (green)
 * Also synchronizes the activity button color to match the card
 */
function toggleActivityIndicator() {
    const activityCard = document.getElementById('activityCard');
    const statusText = activityCard?.querySelector('.status-text');
    const iconElement = activityCard?.querySelector('.wellness-icon');
    
    if (!activityCard || !statusText || !iconElement) {
        console.error('❌ Activity card elements not found');
        return;
    }
    
    if (appState.activityLevel === 'low') {
        // Change from inactive (red) to active (green)
        appState.activityLevel = 'high';
        activityCard.classList.remove('default-red');
        activityCard.classList.add('active-green');
        statusText.textContent = 'Active';
        iconElement.textContent = '🏃‍♂️';
        
        // Synchronize button color to match card (green)
        updateActivityButtonColor('green');
    } else {
        // Change from active (green) to inactive (red)
        appState.activityLevel = 'low';
        activityCard.classList.remove('active-green');
        activityCard.classList.add('default-red');
        statusText.textContent = 'Inactive';
        iconElement.textContent = '🏃';
        
        // Synchronize button color to match card (red)
        updateActivityButtonColor('red');
    }
    
    console.log(`✅ Activity level changed to: ${appState.activityLevel} (button color synchronized)`);
}

// ================================
// FOOD INPUT HANDLING - FIXED VERSION
// ================================

/**
 * Show or hide the food input section - FIXED VERSION
 */
function toggleFoodInput() {
    const foodInputSection = document.getElementById('foodInputSection');
    
    if (!foodInputSection) {
        console.error('❌ Food input section not found');
        return;
    }
    
    console.log(`🔍 Current food input visibility: ${appState.foodInputVisible}`);
    console.log(`🔍 Food input section classes before toggle: ${foodInputSection.className}`);
    
    if (appState.foodInputVisible) {
        // Hide food input section
        foodInputSection.classList.add('hidden');
        foodInputSection.classList.remove('fade-in');
        appState.foodInputVisible = false;
        
        // Reset vitamin card colors to default blue/yellow themes
        resetVitaminCardColors();
        
        console.log('✅ Food input section HIDDEN - restored vibrant blue/yellow themes');
    } else {
        // Show food input section
        foodInputSection.classList.remove('hidden');
        foodInputSection.classList.add('fade-in');
        appState.foodInputVisible = true;
        
        // Focus on the input field for better UX
        setTimeout(() => {
            const foodInput = document.getElementById('foodInput');
            if (foodInput) {
                foodInput.focus();
                console.log('🎯 Food input field focused');
            }
        }, 100);
        
        console.log('✅ Food input section SHOWN - ready for food matching');
    }
    
    console.log(`🔍 Food input section classes after toggle: ${foodInputSection.className}`);
}

/**
 * Process food input and COMPLETELY OVERRIDE vitamin card colors
 */
function processFoodInput() {
    const foodInput = document.getElementById('foodInput');
    
    if (!foodInput) {
        console.error('❌ Food input element not found');
        return;
    }
    
    const foodInputValue = foodInput.value.trim();
    
    if (!foodInputValue) {
        alert('Please enter some foods before checking vitamins!');
        return;
    }
    
    // Parse the food input
    const consumedFoods = parseFoodInput(foodInputValue);
    appState.consumedFoods = consumedFoods;
    
    // COMPLETE COLOR OVERRIDE: Update vitamin card colors based on consumed foods
    updateVitaminCardColors(consumedFoods);
    
    // Provide user feedback
    console.log(`✅ FOOD MATCHING ACTIVE: Processed foods: ${consumedFoods.join(', ')}`);
    
    // Show success message
    showTemporaryMessage(`Analyzed ${consumedFoods.length} foods! Green = Found, Red = Missing`);
}

/**
 * Show a temporary success message to the user
 * @param {string} message - Message to display
 */
function showTemporaryMessage(message) {
    // Create temporary message element
    const messageEl = document.createElement('div');
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: var(--color-success);
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        font-family: var(--font-family-base);
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(messageEl);
    
    // Remove message after 4 seconds
    setTimeout(() => {
        if (messageEl.parentNode) {
            messageEl.remove();
        }
    }, 4000);
}

// ================================
// INITIAL STATE SETUP
// ================================

/**
 * Set initial wellness card states to match requirements
 * Activity card should be RED (inactive), Stress card should be GREEN (relaxed)
 */
function initializeWellnessCardStates() {
    // Set Activity card to RED (inactive) - this is the default state
    const activityCard = document.getElementById('activityCard');
    if (activityCard) {
        activityCard.classList.remove('default-green', 'active-green', 'active-red');
        activityCard.classList.add('default-red');
        
        const statusText = activityCard.querySelector('.status-text');
        const iconElement = activityCard.querySelector('.wellness-icon');
        if (statusText) statusText.textContent = 'Inactive';
        if (iconElement) iconElement.textContent = '🏃';
    }
    
    // Set Stress card to GREEN (relaxed) - this is the default state  
    const stressCard = document.getElementById('stressCard');
    if (stressCard) {
        stressCard.classList.remove('default-red', 'active-green', 'active-red');
        stressCard.classList.add('default-green');
        
        const statusText = stressCard.querySelector('.status-text');
        const iconElement = stressCard.querySelector('.wellness-icon');
        if (statusText) statusText.textContent = 'Relaxed';
        if (iconElement) iconElement.textContent = '😌';
    }
    
    console.log('✅ Wellness cards initialized: Activity=RED (inactive), Stress=GREEN (relaxed)');
}

// ================================
// EVENT LISTENERS - ENHANCED VERSION
// ================================

/**
 * Set up all event listeners for user interactions - ENHANCED VERSION
 */
function setupEventListeners() {
    // Foods Consumed Button - Toggle food input section
    const foodsBtn = document.getElementById('foodsBtn');
    if (foodsBtn) {
        foodsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('🍽️ Foods Consumed button clicked');
            toggleFoodInput();
        });
        console.log('✅ Foods Consumed button event listener added');
    } else {
        console.error('❌ Foods button not found');
    }
    
    // Activity Button - Toggle activity indicator (with button color sync)
    const activityBtn = document.getElementById('activityBtn');
    if (activityBtn) {
        activityBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('🏃 Activity button clicked');
            toggleActivityIndicator();
        });
        console.log('✅ Activity button event listener added');
    } else {
        console.error('❌ Activity button not found');
    }
    
    // Stress Button - Toggle stress indicator (with button color sync)
    const stressBtn = document.getElementById('stressBtn');
    if (stressBtn) {
        stressBtn.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('😰 Stress button clicked');
            toggleStressIndicator();
        });
        console.log('✅ Stress button event listener added');
    } else {
        console.error('❌ Stress button not found');
    }
    
    // Submit Foods Button - Process food input with COMPLETE color override
    const submitFoods = document.getElementById('submitFoods');
    if (submitFoods) {
        submitFoods.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('✅ Submit Foods button clicked');
            processFoodInput();
        });
        console.log('✅ Submit Foods button event listener added');
    } else {
        console.error('❌ Submit foods button not found');
    }
    
    // Enter key support for food input
    const foodInput = document.getElementById('foodInput');
    if (foodInput) {
        foodInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                console.log('⌨️ Enter key pressed in food input');
                processFoodInput();
            }
        });
        console.log('✅ Food input Enter key event listener added');
    } else {
        console.error('❌ Food input field not found');
    }
    
    console.log('✅ All event listeners set up successfully with COMPLETE color override system');
}

// ================================
// APPLICATION INITIALIZATION
// ================================

/**
 * Initialize the entire application with vibrant blue/yellow themes
 * This function runs when the DOM is fully loaded
 */
function initializeApp() {
    console.log('🚀 Initializing NutrifyU application with COMPLETE color override system...');
    
    try {
        // Render vitamin cards with vibrant blue/yellow themes
        renderVitaminCards();
        
        // Initialize wellness card states to correct defaults
        initializeWellnessCardStates();
        
        // Set up event listeners
        setupEventListeners();
        
        // Initialize button colors to match default card states
        // Activity card starts red (inactive), so button should be red
        updateActivityButtonColor('red');
        // Stress card starts green (relaxed), so button should be green  
        updateStressButtonColor('green');
        
        // Verify all elements exist
        const foodInputSection = document.getElementById('foodInputSection');
        const foodsBtn = document.getElementById('foodsBtn');
        const submitBtn = document.getElementById('submitFoods');
        const foodInput = document.getElementById('foodInput');
        
        console.log('🔍 Element verification:');
        console.log(`   - Food input section: ${foodInputSection ? '✅ Found' : '❌ Missing'}`);
        console.log(`   - Foods button: ${foodsBtn ? '✅ Found' : '❌ Missing'}`);
        console.log(`   - Submit button: ${submitBtn ? '✅ Found' : '❌ Missing'}`);
        console.log(`   - Food input field: ${foodInput ? '✅ Found' : '❌ Missing'}`);
        
        console.log('✅ NutrifyU application initialized successfully!');
        console.log('💡 Instructions:');
        console.log('   - DEFAULT: Beautiful vibrant blue/yellow themes with animations');
        console.log('   - FOOD MATCHING: Click "Foods Consumed" → Enter foods → COMPLETE red/green override');
        console.log('   - Click "Activity" to toggle activity level (button color matches card)');
        console.log('   - Click "Stress" to toggle stress level (button color matches card)');
        console.log('🌰 Updated terminology: "DryFruits & Seeds"');
        console.log('🎨 Button-card color synchronization: Activity=RED, Stress=GREEN initially');
        console.log('🔵 DEFAULT THEME: Water-soluble vitamins = Vibrant blue with animations');
        console.log('🟡 DEFAULT THEME: Fat-soluble vitamins = Vibrant yellow with animations');
        console.log('🟢🔴 MATCHING ACTIVE: Solid green/red COMPLETELY overrides blue/yellow');
        
    } catch (error) {
        console.error('❌ Error initializing application:', error);
    }
}

// ================================
// APPLICATION STARTUP
// ================================

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', initializeApp);

// Optional: Add some debugging helpers for development
window.NutrifyU = {
    // Expose some functions for debugging
    resetCards: resetVitaminCardColors,
    state: appState,
    testFoods: (foods) => updateVitaminCardColors(parseFoodInput(foods)),
    toggleFood: toggleFoodInput,
    toggleStress: toggleStressIndicator,
    toggleActivity: toggleActivityIndicator,
    // Button-card synchronization helpers
    updateActivityBtn: updateActivityButtonColor,
    updateStressBtn: updateStressButtonColor,
    initWellness: initializeWellnessCardStates,
    // Color override system helpers
    renderCards: renderVitaminCards,
    forceMatchColors: updateVitaminCardColors,
    restoreDefault: resetVitaminCardColors,
    checkSolubility: (vitaminName) => {
        const vitamin = appState.vitamins.find(v => v.name.includes(vitaminName));
        return vitamin ? vitamin.type : 'Not found';
    }
};