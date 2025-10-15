// Tabkha Platform - Enhanced Main JavaScript
// Premium interactive components and advanced animations

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializePremiumAnimations();
    initializeEnhancedComponents();
    initializeScrollEffects();
    initializeNavigation();
    initializePremiumFeatures();
});

// Premium Animation initialization
function initializePremiumAnimations() {
    // Typed.js for hero text animation with enhanced styling
    if (document.querySelector('.hero-text-animation')) {
        new Typed('.hero-text-animation', {
            strings: [
                'وجبات منزلية من قلب المطبخ إلى طاولتك',
                'طعم البيت في كل لقمة',
                'مكونات طازجة، طبخ بحب',
                'سهولة الطلب، جودة الطبخ'
            ],
            typeSpeed: 60,
            backSpeed: 40,
            backDelay: 3000,
            loop: true,
            showCursor: true,
            cursorChar: '|',
            onComplete: function() {
                // Add premium glow effect after typing
                document.querySelector('.hero-text-animation').classList.add('glow-effect');
            }
        });
    }

    // Enhanced entrance animations with stagger
    anime({
        targets: '.fade-in-up',
        translateY: [80, 0],
        opacity: [0, 1],
        duration: 1000,
        delay: anime.stagger(150),
        easing: 'easeOutExpo'
    });

    // Premium floating animations
    anime({
        targets: '.floating-element',
        translateY: [-20, 20],
        duration: 4000,
        direction: 'alternate',
        loop: true,
        easing: 'easeInOutSine',
        delay: function(el, i) { return i * 250; }
    });

    // Premium pulse glow effects
    anime({
        targets: '.pulse-glow',
        boxShadow: [
            '0 0 20px rgba(232, 168, 124, 0.3)',
            '0 0 40px rgba(232, 168, 124, 0.6)',
            '0 0 20px rgba(232, 168, 124, 0.3)'
        ],
        duration: 3000,
        loop: true,
        easing: 'easeInOutSine'
    });
}

// Enhanced Interactive Components
function initializeEnhancedComponents() {
    initializeMealCategories();
    initializeChefQuiz();
    initializeSubscriptionBuilder();
    initializeChefProfiles();
    initializePremiumFeatures();
}

// Component 1: Enhanced Meal Category Selector
function initializeMealCategories() {
    const categories = [
        {
            id: 'traditional',
            name: 'أطباق تقليدية',
            image: 'https://kimi-web-img.moonshot.cn/img/chefindisguise.com/5ac0e250924a6a0cea18d366d285128621d48c4f.jpg',
            count: 45,
            chefs: 12,
            description: 'أصالة الطعم، روعة المذاق',
            popular: ['كبسة', 'مندي', 'هريس', 'ثريد']
        },
        {
            id: 'healthy',
            name: 'وجبات صحية',
            image: 'https://kimi-web-img.moonshot.cn/img/dashofmandi.com/a6b69136ee052ded156d31da994ff29272198c59.jpg',
            count: 32,
            chefs: 8,
            description: 'صحة وجمال في كل لقمة',
            popular: ['سلطات', 'سمك مشوي', 'أرز بني', 'شوربات']
        },
        {
            id: 'international',
            name: 'أطباق عالمية',
            image: 'https://kimi-web-img.moonshot.cn/img/www.thehealthymaven.com/2cfa7df475984d89e5ca72a6698c8421f89784fb.jpg',
            count: 28,
            chefs: 6,
            description: 'رحلة حول العالم من مطبخك',
            popular: ['باستا', 'بيتزا', 'ستيك', 'سوشي']
        },
        {
            id: 'family',
            name: 'وجبات عائلية',
            image: 'https://kimi-web-img.moonshot.cn/img/t4.ftcdn.net/82242e7f24fa64819ef260a6b2ced72cb8aca835.jpg',
            count: 38,
            chefs: 10,
            description: 'للجميع حول المائدة',
            popular: ['مندي كبير', 'كبسة عائلية', 'مشاوي مشكلة']
        },
        {
            id: 'desserts',
            name: 'حلويات منزلية',
            image: 'https://kimi-web-img.moonshot.cn/img/www.allrecipes.com/59bc20303074c5f85b068118108ddf0dcf10fab2.jpg',
            count: 25,
            chefs: 7,
            description: 'حلاوة الحياة في كل قضمة',
            popular: ['كيك', 'تشيز كيك', 'بسبوسة', 'معجنات']
        },
        {
            id: 'seasonal',
            name: 'أطباق موسمية',
            image: 'https://kimi-web-img.moonshot.cn/img/miakouppa.com/23e4327337f81093b0563a1baa5ee9a37c95c4d7.jpg',
            count: 18,
            chefs: 5,
            description: 'نكهات الموسم الطازجة',
            popular: ['شوربة العدس', 'هريس رمضان', 'معجنات العيد']
        }
    ];

    const container = document.getElementById('meal-categories');
    if (container) {
        categories.forEach(category => {
            const card = createMealCategoryCard(category);
            container.appendChild(card);
        });
    }
}

function createMealCategoryCard(category) {
    const card = document.createElement('div');
    card.className = 'meal-category-card bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group';
    card.onclick = () => filterMealsByCategory(category.id);
    
    card.innerHTML = `
        <div class="relative h-48 overflow-hidden">
            <img src="${category.image}" alt="${category.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            <div class="absolute bottom-4 right-4 text-white">
                <h3 class="text-xl font-bold mb-1">${category.name}</h3>
                <p class="text-sm opacity-90">${category.description}</p>
            </div>
            <div class="absolute top-4 left-4">
                <span class="bg-warm-orange text-white px-3 py-1 rounded-full text-xs font-medium">
                    ${category.chefs} طباخات
                </span>
            </div>
        </div>
        <div class="p-4">
            <div class="flex justify-between items-center text-sm text-gray-600 mb-3">
                <span>${category.count} وجبة متاحة</span>
                <span class="text-warm-orange font-medium">اكتشفي المزيد →</span>
            </div>
            <div class="flex flex-wrap gap-1">
                ${category.popular.slice(0, 3).map(dish => 
                    `<span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">${dish}</span>`
                ).join('')}
            </div>
        </div>
    `;
    
    return card;
}

// Component 2: Enhanced Chef Discovery Quiz
function initializeChefQuiz() {
    const quizData = {
        currentStep: 0,
        answers: {},
        questions: [
            {
                id: 'cuisine',
                question: 'ما نوع المطبخ المفضل لديك؟',
                subtitle: 'اختاري الأطباق التي تفضلينها لتحصلي على توصيات مخصصة',
                options: [
                    { value: 'traditional', text: 'مطبخ عربي تقليدي', icon: '🏠', description: 'كبسة، مندي، هريس' },
                    { value: 'healthy', text: 'أطباق صحية ودايت', icon: '🥗', description: 'قليلة السعرات، مغذية' },
                    { value: 'international', text: 'مأكولات عالمية', icon: '🌍', description: 'باستا، بيتزا، سوشي' },
                    { value: 'mixed', text: 'تنوع بين الأنواع', icon: '🔄', description: 'كل شيء حسب المزاج' }
                ]
            },
            {
                id: 'dietary',
                question: 'هل لديك أي قيود غذائية؟',
                subtitle: 'سنساعدك في العثور على طباخات تناسب احتياجاتك الغذائية',
                options: [
                    { value: 'none', text: 'لا يوجد قيود', icon: '✅', description: 'آكل كل شيء' },
                    { value: 'vegetarian', text: 'نباتي', icon: '🌱', description: 'بدون لحوم أو دجاج' },
                    { value: 'gluten-free', text: 'خالي من الغلوتين', icon: '🌾', description: 'لحساسية القمح' },
                    { value: 'low-sodium', text: 'منخفض الصوديوم', icon: '🧂', description: 'لمرضى الضغط' }
                ]
            },
            {
                id: 'schedule',
                question: 'ما هو جدول الوجبات المفضل؟',
                subtitle: 'حددي عدد الوجبات ومواعيدها المناسبة لك',
                options: [
                    { value: 'daily', text: 'وجبات يومية كاملة', icon: '📅', description: '3 وجبات يومياً' },
                    { value: 'lunch-only', text: 'غداء فقط', icon: '☀️', description: 'وجبة الغداء فقط' },
                    { value: 'dinner-only', text: 'عشاء فقط', icon: '🌙', description: 'وجبة العشاء فقط' },
                    { value: 'weekends', text: 'نهاية الأسبوع فقط', icon: '🎉', description: 'الجمعة والسبت' }
                ]
            },
            {
                id: 'budget',
                question: 'ما هو نطاق الميزانية الشهرية؟',
                subtitle: 'سنساعدك في العثور على خطة تناسب ميزانيتك',
                options: [
                    { value: 'economy', text: 'اقتصادي', icon: '💰', description: '200-400 ريال شهرياً' },
                    { value: 'standard', text: 'معتدل', icon: '💳', description: '400-600 ريال شهرياً' },
                    { value: 'premium', text: 'ممتاز', icon: '💎', description: '600-800 ريال شهرياً' },
                    { value: 'luxury', text: 'فاخر', icon: '👑', description: '800+ ريال شهرياً' }
                ]
            }
        ]
    };

    window.chefQuiz = quizData;
    renderQuizStep();
}

function renderQuizStep() {
    const quiz = window.chefQuiz;
    const container = document.getElementById('quiz-container');
    
    if (!container || quiz.currentStep >= quiz.questions.length) {
        showQuizResults();
        return;
    }

    const question = quiz.questions[quiz.currentStep];
    
    container.innerHTML = `
        <div class="quiz-step bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
            <!-- Progress Bar -->
            <div class="quiz-progress mb-8">
                <div class="flex justify-between items-center mb-3">
                    <span class="text-sm font-medium text-gray-600">السؤال ${quiz.currentStep + 1} من ${quiz.questions.length}</span>
                    <span class="text-sm font-medium text-warm-orange">${Math.round(((quiz.currentStep) / quiz.questions.length) * 100)}%</span>
                </div>
                <div class="w-full bg-gray-200 rounded-full h-3">
                    <div class="bg-gradient-to-r from-warm-orange to-orange-400 h-3 rounded-full transition-all duration-500" style="width: ${((quiz.currentStep) / quiz.questions.length) * 100}%"></div>
                </div>
            </div>
            
            <!-- Question -->
            <div class="text-center mb-8">
                <h3 class="text-2xl md:text-3xl font-bold text-text-dark mb-3">${question.question}</h3>
                <p class="text-gray-600 text-lg">${question.subtitle}</p>
            </div>
            
            <!-- Options -->
            <div class="quiz-options grid grid-cols-1 md:grid-cols-2 gap-4">
                ${question.options.map(option => `
                    <button onclick="selectQuizAnswer('${question.id}', '${option.value}')" 
                            class="quiz-option p-6 text-right bg-gray-50 hover:bg-orange-50 rounded-xl border-2 border-transparent hover:border-warm-orange transition-all duration-300 group">
                        <div class="flex items-start space-x-4">
                            <div class="text-3xl group-hover:scale-110 transition-transform">${option.icon}</div>
                            <div class="flex-1">
                                <div class="font-semibold text-lg text-text-dark mb-2">${option.text}</div>
                                <div class="text-gray-600 text-sm">${option.description}</div>
                            </div>
                        </div>
                    </button>
                `).join('')}
            </div>
        </div>
    `;
}

function selectQuizAnswer(questionId, answer) {
    window.chefQuiz.answers[questionId] = answer;
    window.chefQuiz.currentStep++;
    
    // Animate transition
    anime({
        targets: '.quiz-step',
        translateX: [-300, 0],
        opacity: [0, 1],
        duration: 500,
        complete: () => {
            setTimeout(renderQuizStep, 200);
        }
    });
}

function showQuizResults() {
    const recommendations = generateChefRecommendations(window.chefQuiz.answers);
    const container = document.getElementById('quiz-container');
    
    container.innerHTML = `
        <div class="quiz-results bg-white rounded-xl p-8 shadow-lg max-w-5xl mx-auto">
            <!-- Success Header -->
            <div class="text-center mb-8">
                <div class="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span class="text-4xl">✨</span>
                </div>
                <h3 class="text-3xl font-bold text-text-dark mb-3">مبروك! وجدنا لك الطباخات المثالية</h3>
                <p class="text-lg text-gray-600">بناءً على تفضيلاتك، نوصي بهؤلاء الطباخات المميزات</p>
            </div>
            
            <!-- Recommendations -->
            <div class="recommended-chefs space-y-6">
                ${recommendations.map((chef, index) => `
                    <div class="chef-recommendation p-6 bg-gradient-to-r from-orange-50 to-white rounded-xl border border-orange-200 transform transition-all duration-300 hover:shadow-lg" style="animation-delay: ${index * 200}ms">
                        <div class="flex items-center space-x-6">
                            <div class="relative">
                                <img src="${chef.image}" alt="${chef.name}" class="w-24 h-24 rounded-full object-cover">
                                <div class="absolute -top-2 -right-2 w-8 h-8 bg-warm-orange rounded-full flex items-center justify-center text-white text-sm font-bold">
                                    ${chef.match}%
                                </div>
                            </div>
                            <div class="flex-1">
                                <h4 class="text-2xl font-bold text-text-dark mb-2">${chef.name}</h4>
                                <p class="text-gray-600 mb-3">${chef.specialty}</p>
                                <div class="flex items-center space-x-4 mb-3">
                                    <div class="flex items-center">
                                        <span class="text-yellow-400">★★★★★</span>
                                        <span class="text-sm text-gray-600 mr-2">${chef.rating}</span>
                                    </div>
                                    <span class="text-sm text-green-600 font-medium">• متاحة الآن</span>
                                </div>
                                <div class="flex flex-wrap gap-2">
                                    ${chef.highlights.map(highlight => 
                                        `<span class="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">${highlight}</span>`
                                    ).join('')}
                                </div>
                            </div>
                            <div class="text-center">
                                <div class="text-2xl font-bold text-warm-orange mb-1">${chef.priceRange}</div>
                                <div class="text-sm text-gray-600 mb-4">لكل وجبة</div>
                                <button onclick="bookChef('${chef.id}')" 
                                        class="px-6 py-3 bg-warm-orange text-white rounded-lg hover:bg-orange-500 transition-colors font-medium">
                                    اختيار الطباخة
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
            
            <!-- Action Buttons -->
            <div class="text-center mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button onclick="resetQuiz()" 
                        class="px-8 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                    إعادة الاختبار
                </button>
                <button onclick="window.location.href='chefs.html'" 
                        class="px-8 py-3 bg-olive-green text-white rounded-lg hover:bg-green-600 transition-colors font-medium">
                    تصفح جميع الطباخات
                </button>
            </div>
        </div>
    `;
    
    // Animate results
    anime({
        targets: '.chef-recommendation',
        translateY: [50, 0],
        opacity: [0, 1],
        duration: 800,
        delay: anime.stagger(200)
    });
}

function generateChefRecommendations(answers) {
    const chefs = [
        {
            id: 'amal',
            name: 'أمل محمد',
            specialty: 'أطباق تقليدية ومناسبات',
            image: 'resources/chef-amal.jpg',
            rating: '4.9 (127 تقييم)',
            priceRange: '25-35 ريال',
            match: 95,
            highlights: ['خبرة 15 سنة', 'أطباق سعودية أصيلة', 'مناسبات واحتفالات']
        },
        {
            id: 'sara',
            name: 'سارة أحمد',
            specialty: 'أطباق صحية ودايت',
            image: 'resources/chef-sara.jpg',
            rating: '4.8 (89 تقييم)',
            priceRange: '20-30 ريال',
            match: 88,
            highlights: ['شهادة تغذية', 'أطباق دايت', 'نباتي متاح']
        },
        {
            id: 'fatima',
            name: 'فاطمة عبدالله',
            specialty: 'وصفات منزلية أصيلة',
            image: 'resources/chef-fatima.jpg',
            rating: '4.9 (156 تقييم)',
            priceRange: '20-25 ريال',
            match: 92,
            highlights: ['خبرة 25 سنة', 'وصفات شعبية', 'حلويات تقليدية']
        }
    ];
    
    return chefs.sort((a, b) => b.match - a.match).slice(0, 3);
}

// Component 3: Advanced Subscription Plan Builder
function initializeSubscriptionBuilder() {
    const planData = {
        frequency: 'weekly',
        mealsPerDay: 1,
        portionSize: 'regular',
        dietary: [],
        deliveryTime: 'lunch',
        addons: []
    };
    
    window.subscriptionPlan = planData;
    updatePricing();
    initializeAddons();
}

function initializeAddons() {
    const addons = [
        { id: 'dessert', name: 'حلوى يومية', price: 8, description: 'حلوى منزلية مع كل وجبة' },
        { id: 'soup', name: 'شوربة', price: 5, description: 'شوربة طازجة يومياً' },
        { id: 'salad', name: 'سلطة', price: 7, description: 'سلطة خضراء متنوعة' },
        { id: 'drinks', name: 'مشروبات', price: 4, description: 'عصائر طازجة و مشروبات' }
    ];
    
    const container = document.getElementById('addons-container');
    if (container) {
        addons.forEach(addon => {
            const addonElement = createAddonElement(addon);
            container.appendChild(addonElement);
        });
    }
}

function createAddonElement(addon) {
    const element = document.createElement('div');
    element.className = 'addon-item p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-warm-orange transition-colors cursor-pointer';
    element.onclick = () => toggleAddon(addon.id);
    
    element.innerHTML = `
        <div class="flex justify-between items-center">
            <div>
                <h4 class="font-medium text-text-dark">${addon.name}</h4>
                <p class="text-sm text-gray-600">${addon.description}</p>
            </div>
            <div class="text-right">
                <div class="text-lg font-bold text-warm-orange">+${addon.price} ريال</div>
                <input type="checkbox" class="addon-checkbox mt-2" data-addon="${addon.id}">
            </div>
        </div>
    `;
    
    return element;
}

function toggleAddon(addonId) {
    const checkbox = document.querySelector(`input[data-addon="${addonId}"]`);
    const addonItem = checkbox.closest('.addon-item');
    
    if (checkbox.checked) {
        checkbox.checked = false;
        addonItem.classList.remove('border-warm-orange', 'bg-orange-50');
        window.subscriptionPlan.addons = window.subscriptionPlan.addons.filter(id => id !== addonId);
    } else {
        checkbox.checked = true;
        addonItem.classList.add('border-warm-orange', 'bg-orange-50');
        window.subscriptionPlan.addons.push(addonId);
    }
    
    updatePricing();
}

function updatePricing() {
    const plan = window.subscriptionPlan;
    let basePrice = 25; // Base price per meal
    
    // Calculate based on frequency
    const frequencyMultiplier = {
        'daily': 1,
        'weekly': 0.9,
        'monthly': 0.8
    };
    
    // Calculate based on portion size
    const portionMultiplier = {
        'small': 0.8,
        'regular': 1,
        'large': 1.3
    };
    
    // Addon prices
    const addonPrices = {
        'dessert': 8,
        'soup': 5,
        'salad': 7,
        'drinks': 4
    };
    
    const addonTotal = plan.addons.reduce((total, addonId) => total + (addonPrices[addonId] || 0), 0);
    const mealsPerWeek = plan.frequency === 'daily' ? 7 : plan.frequency === 'weekly' ? 1 : 4;
    const totalMeals = mealsPerWeek * plan.mealsPerDay;
    
    const pricePerMeal = (basePrice * frequencyMultiplier[plan.frequency] * portionMultiplier[plan.portionSize]);
    const totalPricePerMeal = pricePerMeal + addonTotal;
    const weeklyTotal = totalPricePerMeal * totalMeals;
    const monthlyTotal = weeklyTotal * 4;
    
    // Update display
    const pricingDisplay = document.getElementById('pricing-display');
    if (pricingDisplay) {
        pricingDisplay.innerHTML = `
            <div class="pricing-breakdown">
                <div class="text-center mb-6">
                    <div class="text-4xl font-bold text-warm-orange mb-2">${totalPricePerMeal.toFixed(0)} ريال</div>
                    <div class="text-gray-600">لكل وجبة</div>
                    ${addonTotal > 0 ? `<div class="text-sm text-green-600 mt-1">شاملة الإضافات</div>` : ''}
                </div>
                <div class="space-y-3 text-sm">
                    <div class="flex justify-between">
                        <span>الإجمالي الأسبوعي:</span>
                        <span class="font-bold">${weeklyTotal.toFixed(0)} ريال</span>
                    </div>
                    <div class="flex justify-between">
                        <span>الإجمالي الشهري:</span>
                        <span class="font-bold">${monthlyTotal.toFixed(0)} ريال</span>
                    </div>
                    ${plan.frequency !== 'daily' ? `
                        <div class="bg-green-50 p-3 rounded-lg mt-4">
                            <div class="text-green-600 text-sm font-medium">
                                ✅ توفير ${Math.round((1 - frequencyMultiplier[plan.frequency]) * 100)}% مقارنة بالحجز اليومي
                            </div>
                            <div class="text-green-500 text-xs mt-1">توفير شهري: ${Math.round((basePrice - pricePerMeal) * totalMeals * 4)} ريال</div>
                        </div>
                    ` : ''}
                </div>
            </div>
        `;
    }
}

// Component 4: Enhanced Chef Profiles
function initializeChefProfiles() {
    const chefs = [
        {
            id: 'amal',
            name: 'أمل محمد',
            specialty: 'أطباق تقليدية ومناسبات',
            image: 'resources/chef-amal.jpg',
            rating: 4.9,
            reviews: 127,
            status: 'available',
            experience: '15 سنة',
            specialties: ['كبسة', 'مندي', 'هريس', 'ثريد', 'مرقوق'],
            priceRange: '25-35 ريال',
            description: 'طباخة منزلية متمرسة، متخصصة في الأطباق التقليدية السعودية مع خبرة 15 عام في الطبخ المنزلي. أقدم وجبات لذيذة وصحية بمكونات طازجة.',
            cuisine: ['traditional', 'family'],
            location: 'الرياض - حي النسيم',
            delivery: 'متاح في جميع الأوقات',
            phone: '0500 123 456',
            sampleMenu: [
                'كبسة لحم أو دجاج',
                'مندي باللحم',
                'هريس لذيذ',
                'ثريد بالدجاج',
                'مرقوق تقليدي'
            ],
            achievements: ['أفضل طباخة 2023', '5 نجوم من 127 عميل', 'خبرة 15 سنة'],
            badges: ['verified', 'premium', 'top-rated']
        },
        {
            id: 'sara',
            name: 'سارة أحمد',
            specialty: 'أطباق صحية ودايت',
            image: 'resources/chef-sara.jpg',
            rating: 4.8,
            reviews: 89,
            status: 'available',
            experience: '8 سنوات',
            specialties: ['سلطات', 'وجبات دايت', 'أكلات نباتية', 'سمك مشوي', 'شوربات'],
            priceRange: '20-30 ريال',
            description: 'شيف صحية متخصصة في الأطعمة الخفيفة والدايت، حاصلة على شهادة تغذية صحية. أقدم وجبات متوازنة غذائياً مع مراعاة السعرات الحرارية.',
            cuisine: ['healthy', 'international'],
            location: 'الرياض - حي العليا',
            delivery: 'متاح صباحاً ومساءً',
            phone: '0500 234 567',
            sampleMenu: [
                'سلطة سيزر بالدجاج المشوي',
                'سمك مشوي مع خضار',
                'شوربة خضار صحية',
                'أرز بني مع دجاج',
                'معكرونة نباتية'
            ],
            achievements: ['شهادة تغذية صحية', 'متخصصة دايت', '4.8 نجوم'],
            badges: ['verified', 'healthy', 'nutrition-expert']
        },
        {
            id: 'fatima',
            name: 'فاطمة عبدالله',
            specialty: 'وصفات منزلية أصيلة',
            image: 'resources/chef-fatima.jpg',
            rating: 4.9,
            reviews: 156,
            status: 'busy',
            experience: '25 سنة',
            specialties: ['مرقوق', 'عريكة', 'مشاوي', 'حلويات تقليدية', 'معجنات'],
            priceRange: '20-25 ريال',
            description: 'أم وطباخة منزلية، متخصصة في الوصفات الشعبية الأصيلة التي توارثتها عن أجدادها. أطبخ بكل حب واهتمام كأم لكل عائلة.',
            cuisine: ['traditional', 'desserts'],
            location: 'الرياض - حي الروضة',
            delivery: 'متاح في أوقات محددة',
            phone: '0500 345 678',
            sampleMenu: [
                'مرقوق باللحم',
                'عريكة حجازية',
                'مشاوي متنوعة',
                'بسبوسة محشية',
                'معجنات منزلية'
            ],
            achievements: ['خبرة 25 سنة', 'وصفات شعبية أصيلة', 'أم مميزة'],
            badges: ['verified', 'traditional', 'experienced']
        }
    ];

    const container = document.getElementById('chef-profiles');
    if (container) {
        chefs.forEach(chef => {
            const card = createChefProfileCard(chef);
            container.appendChild(card);
        });
    }
}

function createChefProfileCard(chef) {
    const card = document.createElement('div');
    card.className = 'chef-profile-card bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl';
    
    const statusColors = {
        'available': 'bg-green-100 text-green-800',
        'busy': 'bg-red-100 text-red-800',
        'preorder': 'bg-yellow-100 text-yellow-800'
    };
    
    const statusText = {
        'available': 'متاحة الآن',
        'busy': 'مشغولة',
        'preorder': 'حجز مسبق'
    };
    
    const badgeIcons = {
        'verified': '✅',
        'premium': '💎',
        'top-rated': '⭐',
        'healthy': '🥗',
        'nutrition-expert': '📋',
        'traditional': '🏠',
        'experienced': '👑'
    };
    
    card.innerHTML = `
        <div class="relative">
            <img src="${chef.image}" alt="${chef.name}" class="w-full h-48 object-cover">
            <div class="absolute top-4 left-4">
                <span class="px-3 py-1 rounded-full text-xs font-medium ${statusColors[chef.status]}">
                    ${statusText[chef.status]}
                </span>
            </div>
            <div class="absolute top-4 right-4 flex flex-col space-y-2">
                ${chef.badges.slice(0, 2).map(badge => 
                    `<div class="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-xs" title="${badge}">
                        ${badgeIcons[badge] || '⭐'}
                    </div>`
                ).join('')}
            </div>
            <div class="absolute bottom-4 left-4 right-4">
                <div class="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                    <div class="flex justify-between items-center">
                        <div>
                            <h3 class="text-lg font-bold text-text-dark">${chef.name}</h3>
                            <p class="text-sm text-gray-600">${chef.specialty}</p>
                        </div>
                        <div class="text-right">
                            <div class="flex items-center">
                                <span class="text-yellow-400">★</span>
                                <span class="text-sm font-bold text-text-dark">${chef.rating}</span>
                            </div>
                            <p class="text-xs text-gray-500">${chef.reviews} تقييم</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="p-6">
            <p class="text-sm text-gray-700 mb-4 leading-relaxed">${chef.description}</p>
            
            <!-- Achievements -->
            <div class="mb-4">
                <div class="flex flex-wrap gap-2">
                    ${chef.achievements.map(achievement => 
                        `<span class="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center">
                            <span class="ml-1">🏆</span>
                            ${achievement}
                        </span>`
                    ).join('')}
                </div>
            </div>
            
            <div class="space-y-3 mb-4">
                <div class="flex justify-between text-sm">
                    <span class="text-gray-600">الخبرة:</span>
                    <span class="font-medium">${chef.experience}</span>
                </div>
                <div class="flex justify-between text-sm">
                    <span class="text-gray-600">السعر:</span>
                    <span class="font-medium text-warm-orange">${chef.priceRange}</span>
                </div>
                <div class="flex justify-between text-sm">
                    <span class="text-gray-600">التوصيل:</span>
                    <span class="font-medium">${chef.delivery}</span>
                </div>
            </div>
            
            <div class="mb-4">
                <p class="text-xs text-gray-600 mb-2">التخصصات:</p>
                <div class="flex flex-wrap gap-1">
                    ${chef.specialties.slice(0, 4).map(specialty => 
                        `<span class="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">${specialty}</span>`
                    ).join('')}
                    ${chef.specialties.length > 4 ? `<span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">+${chef.specialties.length - 4}</span>` : ''}
                </div>
            </div>
            
            <div class="flex space-x-2">
                <button onclick="viewChefDetails('${chef.id}')" 
                        class="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                    عرض التفاصيل
                </button>
                <button onclick="bookChef('${chef.id}')" 
                        class="flex-1 px-4 py-2 bg-warm-orange text-white rounded-lg hover:bg-orange-500 transition-colors text-sm font-medium">
                    اختيار الطباخة
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Premium Features
function initializePremiumFeatures() {
    initializeLiveChat();
    initializeNotifications();
    initializeWishlist();
}

function initializeLiveChat() {
    // Add floating chat button
    const chatButton = document.createElement('div');
    chatButton.className = 'fixed bottom-6 left-6 w-16 h-16 bg-warm-orange rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform z-50 floating-element';
    chatButton.innerHTML = `
        <div class="w-full h-full flex items-center justify-center text-white">
            <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5zM15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"></path>
            </svg>
        </div>
    `;
    chatButton.onclick = () => showNotification('خدمة العملاء متاحة من 8 ص إلى 10 م', 'info');
    
    document.body.appendChild(chatButton);
}

function initializeNotifications() {
    // Add notification system
    window.notificationSystem = {
        show: function(message, type = 'info', duration = 3000) {
            showNotification(message, type, duration);
        }
    };
}

function initializeWishlist() {
    // Add wishlist functionality
    window.wishlist = [];
    
    window.toggleWishlist = function(itemId, itemType) {
        const index = window.wishlist.findIndex(item => item.id === itemId && item.type === itemType);
        
        if (index > -1) {
            window.wishlist.splice(index, 1);
            showNotification('تمت إزالة العنصر من المفضلة', 'info');
        } else {
            window.wishlist.push({ id: itemId, type: itemType, addedAt: new Date() });
            showNotification('تمت إضافة العنصر إلى المفضلة', 'success');
        }
        
        updateWishlistUI();
    };
}

function updateWishlistUI() {
    const wishlistCount = window.wishlist.length;
    // Update wishlist counter in navigation if exists
    const counter = document.getElementById('wishlist-counter');
    if (counter) {
        counter.textContent = wishlistCount;
        counter.style.display = wishlistCount > 0 ? 'block' : 'none';
    }
}

// Enhanced Scroll Effects
function initializeScrollEffects() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Trigger specific animations based on element type
                if (entry.target.classList.contains('meal-category-card')) {
                    anime({
                        targets: entry.target,
                        translateY: [50, 0],
                        opacity: [0, 1],
                        duration: 800,
                        easing: 'easeOutQuart'
                    });
                }
                
                if (entry.target.classList.contains('chef-card')) {
                    anime({
                        targets: entry.target,
                        scale: [0.9, 1],
                        opacity: [0, 1],
                        duration: 600,
                        easing: 'easeOutQuart'
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe all animatable elements
    document.querySelectorAll('.animate-on-scroll, .meal-category-card, .chef-card').forEach(el => {
        observer.observe(el);
    });
}

// Enhanced Navigation
function initializeNavigation() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to navigation
    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 100) {
            nav.classList.add('bg-white/98');
            nav.classList.remove('bg-white/95');
        } else {
            nav.classList.add('bg-white/95');
            nav.classList.remove('bg-white/98');
        }
    });
}

// Enhanced Utility Functions
function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 transition-all duration-300 max-w-sm ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        type === 'warning' ? 'bg-yellow-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    notification.innerHTML = `
        <div class="flex items-center justify-between">
            <span class="flex-1">${message}</span>
            <button onclick="this.parentElement.parentElement.remove()" class="ml-4 text-white hover:text-gray-200">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    anime({
        targets: notification,
        translateX: [300, 0],
        opacity: [0, 1],
        duration: 300
    });
    
    // Remove after duration
    setTimeout(() => {
        anime({
            targets: notification,
            translateX: [0, 300],
            opacity: [1, 0],
            duration: 300,
            complete: () => notification.remove()
        });
    }, duration);
}

function getCategoryName(categoryId) {
    const names = {
        'traditional': 'الأطباق التقليدية',
        'healthy': 'الوجبات الصحية',
        'international': 'الأطباق العالمية',
        'family': 'الوجبات العائلية',
        'desserts': 'الحلويات',
        'seasonal': 'الأطباق الموسمية'
    };
    return names[categoryId] || 'الوجبات';
}

function getCategoryMealCount(categoryId) {
    const counts = {
        'traditional': 45,
        'healthy': 32,
        'international': 28,
        'family': 38,
        'desserts': 25,
        'seasonal': 18
    };
    return counts[categoryId] || 0;
}

function resetQuiz() {
    window.chefQuiz = {
        currentStep: 0,
        answers: {},
        questions: window.chefQuiz.questions
    };
    renderQuizStep();
}

function bookChef(chefId) {
    showNotification(`تم اختيار الطباخة بنجاح! سيتم التواصل معك قريباً لتحديد التفاصيل`, 'success');
}

function viewChefDetails(chefId) {
    showNotification(`جاري تحميل تفاصيل الطباخة...`, 'info');
}

function filterMealsByCategory(categoryId) {
    showNotification(`جاري عرض وجبات ${getCategoryName(categoryId)}...`, 'info');
    
    // Simulate filtering with premium animation
    anime({
        targets: '.meal-category-card',
        scale: [1, 0.95, 1],
        duration: 400,
        complete: () => {
            setTimeout(() => {
                showNotification(`تم العثور على ${getCategoryMealCount(categoryId)} وجبة! اختر طباختك المفضلة`, 'success');
            }, 500);
        }
    });
}

// Initialize carousel if Splide is available
if (typeof Splide !== 'undefined') {
    document.addEventListener('DOMContentLoaded', function() {
        const heroCarousel = document.querySelector('.hero-carousel');
        if (heroCarousel) {
            new Splide(heroCarousel, {
                type: 'loop',
                autoplay: true,
                interval: 5000,
                arrows: false,
                pagination: false,
                pauseOnHover: true
            }).mount();
        }
    });
}