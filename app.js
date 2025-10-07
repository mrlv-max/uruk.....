// Enhanced Uruk Health & Fitness Application JavaScript with Comprehensive Gym Features
class UrukHealthApp {
    constructor() {
        this.currentPage = 'dashboard';
        this.userData = {
            name: "Dr. Rajesh Kumar", 
            age: 45,
            medicalId: "URK-2024-1001",
            phone: "+91 9876543210",
            email: "rajesh.kumar@email.com",
            emergencyContact: "Sunita Kumar - +91 9876543211",
            role: "patient",
            blockchainId: "0x1a2b3c4d5e6f7890abcdef1234567890abcdef12",
            healthScore: 85,
            aiInsights: ["Blood pressure trending upward", "Exercise routine needs improvement", "Medication adherence excellent"],
            loyaltyPoints: 1250,
            insuranceId: "LIC-HEALTH-7894561230",
            defaultAddress: "123, Health Colony, Mumbai, Maharashtra 400001"
        };

        // Fitness data from provided JSON
        this.fitnessProfile = {
            fitnessLevel: "Intermediate",
            primaryGoals: ["Muscle Gain", "Strength Building"],
            workoutDays: 5,
            preferredWorkoutTime: "Morning",
            gymMembership: "Gold's Gym Mumbai",
            membershipExpiry: "2025-03-15",
            personalTrainer: "Vikash Sharma"
        };

        this.bodyStats = {
            currentWeight: "75 kg",
            targetWeight: "80 kg",
            height: "175 cm",
            bodyFat: "12%",
            muscleMass: "65%",
            bmi: 24.5
        };

        this.workoutHistory = [
            {
                date: "2024-10-07",
                workoutType: "Upper Body Strength",
                duration: "75 minutes",
                caloriesBurned: 450,
                exercises: [
                    {"name": "Bench Press", "sets": 4, "reps": [12, 10, 8, 6], "weight": "70kg"},
                    {"name": "Pull-ups", "sets": 3, "reps": [8, 7, 6], "weight": "bodyweight"},
                    {"name": "Shoulder Press", "sets": 4, "reps": [12, 10, 10, 8], "weight": "25kg"}
                ],
                personalRecords: ["Bench Press - 75kg (1RM)"]
            },
            {
                date: "2024-10-05",
                workoutType: "Lower Body Power",
                duration: "80 minutes",
                caloriesBurned: 520,
                exercises: [
                    {"name": "Squats", "sets": 5, "reps": [12, 10, 8, 6, 4], "weight": "90kg"},
                    {"name": "Deadlifts", "sets": 4, "reps": [8, 6, 5, 3], "weight": "100kg"},
                    {"name": "Leg Press", "sets": 3, "reps": [15, 12, 10], "weight": "120kg"}
                ],
                personalRecords: ["Deadlift - 105kg (1RM)"]
            }
        ];

        this.fitnessGoals = [
            {
                type: "Strength",
                target: "Bench Press 80kg",
                current: "75kg",
                progress: 94,
                deadline: "2024-12-31"
            },
            {
                type: "Body Composition", 
                target: "Gain 5kg muscle mass",
                current: "3kg gained",
                progress: 60,
                deadline: "2025-03-01"
            },
            {
                type: "Endurance",
                target: "Run 5km under 25 minutes",
                current: "26:30 minutes",
                progress: 85,
                deadline: "2024-11-30"
            }
        ];

        this.workoutRoutines = [
            {
                name: "Upper Body Strength",
                exercises: [
                    {"name": "Bench Press", "sets": 4, "reps": "8-12", "restTime": "2-3 min"},
                    {"name": "Pull-ups", "sets": 3, "reps": "6-10", "restTime": "2 min"},
                    {"name": "Shoulder Press", "sets": 4, "reps": "10-12", "restTime": "90 sec"},
                    {"name": "Barbell Rows", "sets": 3, "reps": "8-10", "restTime": "2 min"},
                    {"name": "Tricep Dips", "sets": 3, "reps": "10-15", "restTime": "90 sec"}
                ],
                duration: "60-75 minutes",
                difficulty: "Intermediate"
            },
            {
                name: "Lower Body Power",
                exercises: [
                    {"name": "Squats", "sets": 5, "reps": "4-8", "restTime": "3 min"},
                    {"name": "Deadlifts", "sets": 4, "reps": "3-6", "restTime": "3-4 min"},
                    {"name": "Leg Press", "sets": 3, "reps": "12-15", "restTime": "2 min"},
                    {"name": "Calf Raises", "sets": 4, "reps": "15-20", "restTime": "1 min"},
                    {"name": "Leg Curls", "sets": 3, "reps": "10-12", "restTime": "90 sec"}
                ],
                duration: "75-90 minutes",
                difficulty: "Advanced"
            }
        ];

        this.trainers = [
            {
                name: "Vikash Sharma",
                specialization: ["Strength Training", "Bodybuilding", "Nutrition"],
                rating: 4.9,
                experience: "8 years",
                hourlyRate: 1500,
                availability: ["Mon-Fri 6AM-10AM", "Mon-Wed-Fri 6PM-8PM"],
                certifications: ["ACSM Certified", "Nutrition Specialist"],
                phone: "+91 9876543500"
            },
            {
                name: "Priya Fitness",
                specialization: ["HIIT", "Weight Loss", "Functional Training"],
                rating: 4.7,
                experience: "5 years", 
                hourlyRate: 1200,
                availability: ["Tue-Thu-Sat 7AM-11AM", "Mon-Wed-Fri 5PM-7PM"],
                certifications: ["ACE Certified", "Group Fitness"],
                phone: "+91 9876543501"
            }
        ];

        this.gymFacilities = [
            {
                name: "Gold's Gym Mumbai",
                location: "Bandra West",
                distance: "2.1 km",
                rating: 4.6,
                amenities: ["Cardio Equipment", "Free Weights", "Group Classes", "Swimming Pool", "Steam Room"],
                peakHours: "6PM-9PM",
                equipment: [
                    {"name": "Treadmill", "available": 8, "total": 12},
                    {"name": "Bench Press", "available": 2, "total": 4},
                    {"name": "Squat Rack", "available": 1, "total": 3}
                ]
            },
            {
                name: "Fitness First",
                location: "Linking Road",
                distance: "3.5 km",
                rating: 4.4,
                amenities: ["Modern Equipment", "Personal Training", "Yoga Studio", "Sauna"],
                peakHours: "7AM-9AM, 6PM-8PM",
                equipment: [
                    {"name": "Treadmill", "available": 12, "total": 15},
                    {"name": "Bench Press", "available": 3, "total": 5},
                    {"name": "Squat Rack", "available": 2, "total": 4}
                ]
            }
        ];

        this.nutrition = {
            dailyTargets: {
                calories: 2800,
                protein: "140g",
                carbs: "350g", 
                fats: "93g",
                water: "3.5L"
            },
            currentIntake: {
                calories: 2450,
                protein: "125g",
                carbs: "320g",
                fats: "78g",
                water: "2.8L"
            },
            mealPlan: [
                {"meal": "Breakfast", "calories": 650, "protein": "35g", "time": "7:00 AM"},
                {"meal": "Pre-Workout", "calories": 200, "protein": "15g", "time": "9:30 AM"},
                {"meal": "Post-Workout", "calories": 400, "protein": "30g", "time": "11:30 AM"},
                {"meal": "Lunch", "calories": 750, "protein": "40g", "time": "1:00 PM"},
                {"meal": "Snack", "calories": 300, "protein": "20g", "time": "4:00 PM"},
                {"meal": "Dinner", "calories": 500, "protein": "35g", "time": "7:30 PM"}
            ]
        };

        this.achievements = [
            {"title": "First 100kg Deadlift", "date": "2024-09-15", "badge": "🏆"},
            {"title": "30-Day Streak", "date": "2024-09-30", "badge": "🔥"},
            {"title": "Bench Press Master", "date": "2024-08-20", "badge": "💪"},
            {"title": "Cardio Champion", "date": "2024-07-10", "badge": "🏃"}
        ];

        this.challenges = [
            {
                name: "October Strength Challenge", 
                description: "Increase total lifting volume by 20%",
                progress: 65,
                participants: 145,
                endDate: "2024-10-31",
                prize: "Protein Supplement Pack"
            },
            {
                name: "Cardio Miles Challenge",
                description: "Complete 50 miles this month",
                progress: 32,
                participants: 89,
                endDate: "2024-10-31", 
                prize: "Fitness Tracker"
            }
        ];

        // Medical buy data (existing)
        this.medicines = [
            {
                id: 1,
                name: "Paracetamol 500mg",
                brand: "Crocin",
                genericName: "Acetaminophen",
                price: 25,
                discountPrice: 22,
                prescription: false,
                category: "Pain Relief",
                composition: "Paracetamol 500mg",
                manufacturer: "GSK",
                inStock: true,
                stockCount: 150,
                rating: 4.5,
                reviews: 1250,
                image: "https://via.placeholder.com/100x100/22c55e/ffffff?text=CROCIN",
                uses: ["Fever", "Headache", "Body pain"],
                sideEffects: ["Nausea", "Stomach upset"],
                dosage: "1-2 tablets every 4-6 hours"
            },
            {
                id: 2,
                name: "Amoxicillin 250mg",
                brand: "Novamox",
                genericName: "Amoxicillin",
                price: 85,
                discountPrice: 78,
                prescription: true,
                category: "Antibiotics",
                composition: "Amoxicillin 250mg",
                manufacturer: "Cipla",
                inStock: true,
                stockCount: 75,
                rating: 4.7,
                reviews: 890,
                image: "https://via.placeholder.com/100x100/dc2626/ffffff?text=NOVAMOX",
                uses: ["Bacterial infections", "Respiratory infections"],
                sideEffects: ["Diarrhea", "Nausea", "Skin rash"],
                dosage: "As prescribed by doctor"
            },
            {
                id: 3,
                name: "Omeprazole 20mg",
                brand: "Omez",
                genericName: "Omeprazole",
                price: 68,
                discountPrice: 61,
                prescription: false,
                category: "Heart Care",
                composition: "Omeprazole 20mg",
                manufacturer: "Dr. Reddy's",
                inStock: true,
                stockCount: 200,
                rating: 4.6,
                reviews: 750,
                image: "https://via.placeholder.com/100x100/0ea5e9/ffffff?text=OMEZ",
                uses: ["Acidity", "GERD", "Stomach ulcers"],
                sideEffects: ["Headache", "Constipation"],
                dosage: "1 tablet daily before meals"
            }
        ];

        this.categories = [
            {"name": "Pain Relief", "icon": "💊", "count": 45},
            {"name": "Antibiotics", "icon": "🦠", "count": 28},
            {"name": "Vitamins", "icon": "🌟", "count": 67},
            {"name": "Heart Care", "icon": "❤️", "count": 34}
        ];

        this.cart = {
            items: [
                {
                    medicineId: 1,
                    quantity: 2,
                    pharmacy: "Apollo Pharmacy",
                    price: 22,
                    total: 44
                }
            ],
            subtotal: 44,
            deliveryFee: 0,
            discount: 4,
            total: 40
        };

        this.vitalsData = [
            {
                date: "2024-10-07",
                heartRate: 72,
                bloodPressure: "120/80",
                temperature: 98.6,
                oxygenSat: 98,
                aiAnalysis: "Vitals are within normal range. Consider monitoring blood pressure trend.",
                blockchainHash: "0xabc123def456",
                riskLevel: "low"
            }
        ];

        this.emergencyContacts = [
            {name: "Uruk Emergency", number: "1800-URUK-911", type: "primary"},
            {name: "Local Ambulance", number: "102", type: "emergency"},
            {name: "Family Contact", number: "+91 9876543211", type: "personal"}
        ];

        this.notifications = [
            {
                id: 1,
                type: "fitness_achievement",
                message: "Congratulations! You've completed your workout streak!",
                priority: "high",
                time: "1 hour ago"
            },
            {
                id: 2,
                type: "nutrition_reminder",
                message: "Time for your post-workout protein shake",
                priority: "medium",
                time: "2 hours ago"
            },
            {
                id: 3,
                type: "ai_insight",
                message: "AI detected potential health improvement opportunity",
                priority: "medium",
                time: "3 hours ago"
            }
        ];

        this.charts = {};
        this.currentSort = 'popularity';
        this.searchQuery = '';
        this.selectedCategory = null;
        this.currentWorkout = null;
        this.workoutTimer = null;
        this.exerciseTimer = null;
        this.currentExerciseIndex = 0;
        this.init();
    }

    init() {
        this.showLoadingScreen();
        setTimeout(() => {
            this.hideLoadingScreen();
            this.setupEventListeners();
            this.initializeDashboard();
            this.setupCharts();
            this.renderVitalsHistory();
            this.renderEmergencyContacts();
            this.renderNotifications();
            this.updateActivityFeed();
            this.updateCartCount();
            this.renderMedicalBuyContent();
            this.renderFitnessContent();
        }, 2000);
    }

    showLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.classList.remove('hidden');
    }

    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        const app = document.getElementById('app');
        
        loadingScreen.classList.add('hidden');
        app.classList.add('loaded');
    }

    setupEventListeners() {
        // Navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.addEventListener('click', (e) => {
                const page = e.currentTarget.getAttribute('data-page');
                this.navigateToPage(page);
            });
        });

        // Quick actions
        document.getElementById('gymFitnessBtn')?.addEventListener('click', () => {
            this.navigateToPage('gym-fitness');
        });

        document.getElementById('medicalBuyBtn')?.addEventListener('click', () => {
            this.navigateToPage('medical-buy');
        });

        document.getElementById('emergencyBtn')?.addEventListener('click', () => {
            this.navigateToPage('emergency');
        });

        document.getElementById('aiChatBtn')?.addEventListener('click', () => {
            this.navigateToPage('ai-assistant');
        });

        // Floating buttons
        document.getElementById('floatingFitness')?.addEventListener('click', () => {
            this.navigateToPage('gym-fitness');
        });

        document.getElementById('floatingEmergency')?.addEventListener('click', () => {
            this.navigateToPage('emergency');
        });

        // Fitness actions
        document.getElementById('startWorkoutBtn')?.addEventListener('click', () => {
            this.showWorkoutModal();
        });

        document.getElementById('logMealBtn')?.addEventListener('click', () => {
            this.showModal('nutritionModal');
        });

        document.getElementById('findTrainerBtn')?.addEventListener('click', () => {
            this.showModal('trainerBookingModal');
        });

        // Cart functionality
        document.getElementById('cartIcon')?.addEventListener('click', () => {
            this.showModal('cartModal');
        });

        // Medical Buy Search
        document.getElementById('searchBtn')?.addEventListener('click', () => {
            this.searchMedicines();
        });

        document.getElementById('medicineSearch')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.searchMedicines();
            }
        });

        // Sort and filter
        document.getElementById('sortFilter')?.addEventListener('change', (e) => {
            this.currentSort = e.target.value;
            this.renderMedicines();
        });

        // Vitals form
        document.getElementById('vitalsForm')?.addEventListener('submit', (e) => {
            e.preventDefault();
            this.saveVitals();
        });

        // Emergency buttons
        document.getElementById('callEmergencyBtn')?.addEventListener('click', () => {
            this.callEmergency();
        });

        document.getElementById('shareLocationBtn')?.addEventListener('click', () => {
            this.shareLocation();
        });

        // AI features
        document.querySelectorAll('.feature-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const feature = e.currentTarget.getAttribute('data-feature');
                this.activateAIFeature(feature);
            });
        });

        // Chat functionality
        document.getElementById('sendChatBtn')?.addEventListener('click', () => {
            this.sendChatMessage();
        });

        document.getElementById('chatInput')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.sendChatMessage();
            }
        });

        // Modal controls
        this.setupModalListeners();

        // Notifications
        document.getElementById('notificationBtn')?.addEventListener('click', () => {
            this.showModal('notificationModal');
        });

        // Theme toggle
        document.getElementById('themeToggle')?.addEventListener('click', () => {
            this.toggleTheme();
        });

        // Sidebar toggle
        document.getElementById('sidebarToggle')?.addEventListener('click', () => {
            this.toggleSidebar();
        });
    }

    setupModalListeners() {
        const modals = ['workoutModal', 'exerciseTimerModal', 'nutritionModal', 'trainerBookingModal', 'cartModal', 'notificationModal'];
        
        modals.forEach(modalId => {
            const closeBtn = document.getElementById(`close${modalId.charAt(0).toUpperCase() + modalId.slice(1, -5)}Modal`);
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    this.hideModal(modalId);
                });
            }
        });

        // Click outside to close
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('modal')) {
                this.hideModal(e.target.id);
            }
        });
    }

    navigateToPage(pageName) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Show selected page
        const selectedPage = document.getElementById(pageName);
        if (selectedPage) {
            selectedPage.classList.add('active');
        }

        // Update navigation
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });

        const navItem = document.querySelector(`[data-page="${pageName}"]`);
        if (navItem) {
            navItem.classList.add('active');
        }

        // Update page title and breadcrumb
        const titles = {
            'dashboard': 'Health Dashboard',
            'gym-fitness': 'Gym & Fitness Center',
            'medical-buy': 'Medical Purchase Center',
            'vitals': 'Health Vitals',
            'ai-assistant': 'AI Health & Fitness Assistant',
            'medical-records': 'Medical Records',
            'appointments': 'Appointments',
            'pharmacy': 'Pharmacy',
            'doctor-portal': 'Doctor Portal',
            'blockchain': 'Blockchain Security',
            'emergency': 'Emergency Services'
        };

        document.getElementById('pageTitle').textContent = titles[pageName] || 'Uruk Health';
        document.getElementById('currentPage').textContent = titles[pageName] || 'Dashboard';

        this.currentPage = pageName;

        // Initialize page-specific functionality
        if (pageName === 'gym-fitness') {
            this.initializeFitnessPage();
        } else if (pageName === 'medical-buy') {
            this.renderMedicalBuyContent();
        }
    }

    initializeFitnessPage() {
        this.renderFitnessContent();
        this.setupWorkoutChart();
    }

    renderFitnessContent() {
        this.renderFitnessOverview();
        this.renderTodayWorkout();
        this.renderFitnessGoals();
        this.renderNutritionOverview();
        this.renderGymFacilities();
        this.renderTrainers();
        this.renderAchievements();
        this.renderChallenges();
    }

    renderFitnessOverview() {
        const fitnessOverview = document.getElementById('fitnessOverview');
        if (!fitnessOverview) return;

        const stats = [
            {
                icon: 'fas fa-fire',
                value: '450',
                label: 'Calories Burned Today'
            },
            {
                icon: 'fas fa-dumbbell',
                value: '5',
                label: 'Workouts This Week'
            },
            {
                icon: 'fas fa-trophy',
                value: '94%',
                label: 'Goal Progress'
            },
            {
                icon: 'fas fa-chart-line',
                value: '12%',
                label: 'Body Fat'
            }
        ];

        fitnessOverview.innerHTML = '';
        
        stats.forEach((stat, index) => {
            const statElement = document.createElement('div');
            statElement.className = 'fitness-stat';
            statElement.style.animationDelay = `${index * 0.1}s`;
            statElement.style.animation = 'fadeInUp 0.5s ease forwards';
            statElement.style.opacity = '0';
            
            statElement.innerHTML = `
                <div class="fitness-stat-icon">
                    <i class="${stat.icon}"></i>
                </div>
                <div class="fitness-stat-value">${stat.value}</div>
                <div class="fitness-stat-label">${stat.label}</div>
            `;
            
            fitnessOverview.appendChild(statElement);
        });
    }

    renderTodayWorkout() {
        const todayWorkout = document.getElementById('todayWorkout');
        if (!todayWorkout) return;

        const todayRoutine = this.workoutRoutines[0];
        
        todayWorkout.innerHTML = `
            <div class="workout-info">
                <h4>${todayRoutine.name}</h4>
                <div class="workout-details">
                    <span><i class="fas fa-clock"></i> ${todayRoutine.duration}</span>
                    <span><i class="fas fa-signal"></i> ${todayRoutine.difficulty}</span>
                </div>
            </div>
            <div class="workout-exercises">
                ${todayRoutine.exercises.slice(0, 3).map(exercise => `
                    <div class="workout-item">
                        <div class="exercise-info">
                            <div class="exercise-name">${exercise.name}</div>
                            <div class="exercise-details">${exercise.sets} sets • ${exercise.reps} reps</div>
                        </div>
                        <div class="exercise-rest">${exercise.restTime}</div>
                    </div>
                `).join('')}
                ${todayRoutine.exercises.length > 3 ? `<div class="more-exercises">+${todayRoutine.exercises.length - 3} more exercises</div>` : ''}
            </div>
        `;
    }

    renderFitnessGoals() {
        const fitnessGoalsList = document.getElementById('fitnessGoalsList');
        if (!fitnessGoalsList) return;

        fitnessGoalsList.innerHTML = '';
        
        this.fitnessGoals.forEach((goal, index) => {
            const goalElement = document.createElement('div');
            goalElement.className = 'goal-item';
            goalElement.style.animationDelay = `${index * 0.1}s`;
            goalElement.style.animation = 'fadeInUp 0.5s ease forwards';
            goalElement.style.opacity = '0';
            
            goalElement.innerHTML = `
                <div class="goal-header">
                    <div class="goal-name">${goal.target}</div>
                    <div class="goal-progress-value">${goal.progress}%</div>
                </div>
                <div class="goal-progress-bar">
                    <div class="goal-progress-fill" style="width: ${goal.progress}%"></div>
                </div>
                <div class="goal-target">Current: ${goal.current} • Deadline: ${new Date(goal.deadline).toLocaleDateString()}</div>
            `;
            
            fitnessGoalsList.appendChild(goalElement);
        });
    }

    renderNutritionOverview() {
        const nutritionOverview = document.getElementById('nutritionOverview');
        if (!nutritionOverview) return;

        const macros = [
            {
                name: 'Calories',
                current: this.nutrition.currentIntake.calories,
                target: this.nutrition.dailyTargets.calories,
                unit: '',
                type: 'calories'
            },
            {
                name: 'Protein',
                current: parseInt(this.nutrition.currentIntake.protein),
                target: parseInt(this.nutrition.dailyTargets.protein),
                unit: 'g',
                type: 'protein'
            },
            {
                name: 'Carbs',
                current: parseInt(this.nutrition.currentIntake.carbs),
                target: parseInt(this.nutrition.dailyTargets.carbs),
                unit: 'g',
                type: 'carbs'
            },
            {
                name: 'Fats',
                current: parseInt(this.nutrition.currentIntake.fats),
                target: parseInt(this.nutrition.dailyTargets.fats),
                unit: 'g',
                type: 'fats'
            }
        ];

        nutritionOverview.innerHTML = '';
        
        macros.forEach(macro => {
            const progressPercent = Math.min((macro.current / macro.target) * 100, 100);
            
            const macroElement = document.createElement('div');
            macroElement.className = 'macro-item';
            
            macroElement.innerHTML = `
                <div class="macro-name">${macro.name}</div>
                <div class="macro-values">
                    <div class="macro-current">${macro.current}${macro.unit}</div>
                    <div class="macro-target">/ ${macro.target}${macro.unit}</div>
                </div>
                <div class="macro-progress">
                    <div class="macro-progress-fill ${macro.type}" style="width: ${progressPercent}%"></div>
                </div>
            `;
            
            nutritionOverview.appendChild(macroElement);
        });
    }

    renderGymFacilities() {
        const gymFacilitiesList = document.getElementById('gymFacilitiesList');
        if (!gymFacilitiesList) return;

        gymFacilitiesList.innerHTML = '';
        
        this.gymFacilities.forEach((gym, index) => {
            const gymElement = document.createElement('div');
            gymElement.className = 'gym-item';
            gymElement.style.animationDelay = `${index * 0.1}s`;
            gymElement.style.animation = 'fadeInUp 0.5s ease forwards';
            gymElement.style.opacity = '0';
            
            gymElement.innerHTML = `
                <div class="gym-header">
                    <div class="gym-name">${gym.name}</div>
                    <div class="gym-rating">
                        <span class="rating-stars">${'★'.repeat(Math.floor(gym.rating))}</span>
                        <span>${gym.rating}</span>
                    </div>
                </div>
                <div class="gym-info">
                    <div><i class="fas fa-map-marker-alt"></i> ${gym.location} • ${gym.distance}</div>
                    <div><i class="fas fa-clock"></i> Peak: ${gym.peakHours}</div>
                </div>
                <div class="equipment-status">
                    ${gym.equipment.map(eq => {
                        const availability = eq.available > eq.total * 0.7 ? 'available' : 'limited';
                        return `
                            <div class="equipment-item">
                                <span>${eq.name}:</span>
                                <span class="equipment-availability ${availability}">${eq.available}/${eq.total}</span>
                            </div>
                        `;
                    }).join('')}
                </div>
            `;
            
            gymFacilitiesList.appendChild(gymElement);
        });
    }

    renderTrainers() {
        const trainersList = document.getElementById('trainersList');
        if (!trainersList) return;

        trainersList.innerHTML = '';
        
        this.trainers.forEach((trainer, index) => {
            const trainerElement = document.createElement('div');
            trainerElement.className = 'trainer-item';
            trainerElement.style.animationDelay = `${index * 0.1}s`;
            trainerElement.style.animation = 'fadeInUp 0.5s ease forwards';
            trainerElement.style.opacity = '0';
            
            trainerElement.innerHTML = `
                <div class="trainer-header">
                    <div class="trainer-name">${trainer.name}</div>
                    <div class="trainer-rating">
                        <span class="rating-stars">${'★'.repeat(Math.floor(trainer.rating))}</span>
                        <span>${trainer.rating}</span>
                    </div>
                </div>
                <div class="trainer-specializations">
                    ${trainer.specialization.map(spec => `
                        <span class="specialization-tag">${spec}</span>
                    `).join('')}
                </div>
                <div class="trainer-rate">₹${trainer.hourlyRate}/hour • ${trainer.experience}</div>
                <button class="book-trainer-btn" onclick="app.bookTrainer('${trainer.name}')">
                    <i class="fas fa-calendar-plus"></i>
                    Book Session
                </button>
            `;
            
            trainersList.appendChild(trainerElement);
        });
    }

    renderAchievements() {
        const achievementsList = document.getElementById('achievementsList');
        if (!achievementsList) return;

        achievementsList.innerHTML = '';
        
        this.achievements.forEach((achievement, index) => {
            const achievementElement = document.createElement('div');
            achievementElement.className = 'achievement-item';
            achievementElement.style.animationDelay = `${index * 0.1}s`;
            achievementElement.style.animation = 'fadeInUp 0.5s ease forwards';
            achievementElement.style.opacity = '0';
            
            achievementElement.innerHTML = `
                <div class="achievement-badge">${achievement.badge}</div>
                <div class="achievement-title">${achievement.title}</div>
                <div class="achievement-date">${new Date(achievement.date).toLocaleDateString()}</div>
            `;
            
            achievementsList.appendChild(achievementElement);
        });
    }

    renderChallenges() {
        const challengesList = document.getElementById('challengesList');
        if (!challengesList) return;

        challengesList.innerHTML = '';
        
        this.challenges.forEach((challenge, index) => {
            const challengeElement = document.createElement('div');
            challengeElement.className = 'challenge-item';
            challengeElement.style.animationDelay = `${index * 0.1}s`;
            challengeElement.style.animation = 'fadeInUp 0.5s ease forwards';
            challengeElement.style.opacity = '0';
            
            challengeElement.innerHTML = `
                <div class="challenge-header">
                    <div class="challenge-name">${challenge.name}</div>
                    <div class="challenge-participants">${challenge.participants} participants</div>
                </div>
                <div class="challenge-description">${challenge.description}</div>
                <div class="challenge-progress">
                    <div class="challenge-progress-bar">
                        <div class="challenge-progress-fill" style="width: ${challenge.progress}%"></div>
                    </div>
                </div>
                <div class="challenge-info">
                    <span>${challenge.progress}% complete</span>
                    <span>Ends: ${new Date(challenge.endDate).toLocaleDateString()}</span>
                </div>
                <div class="challenge-prize">
                    <i class="fas fa-gift"></i> Prize: ${challenge.prize}
                </div>
            `;
            
            challengeElement.appendChild(challengeElement);
        });
    }

    showWorkoutModal() {
        const workoutSelection = document.getElementById('workoutSelection');
        if (!workoutSelection) return;

        workoutSelection.innerHTML = '';
        
        this.workoutRoutines.forEach((routine, index) => {
            const routineElement = document.createElement('div');
            routineElement.className = 'routine-option';
            routineElement.onclick = () => this.startWorkout(routine);
            
            routineElement.innerHTML = `
                <div class="routine-name">${routine.name}</div>
                <div class="routine-details">
                    <span><i class="fas fa-clock"></i> ${routine.duration}</span>
                    <span><i class="fas fa-signal"></i> ${routine.difficulty}</span>
                    <span><i class="fas fa-list"></i> ${routine.exercises.length} exercises</span>
                </div>
                <div class="routine-exercises">
                    ${routine.exercises.slice(0, 3).map(ex => ex.name).join(' • ')}
                    ${routine.exercises.length > 3 ? ` • +${routine.exercises.length - 3} more` : ''}
                </div>
            `;
            
            workoutSelection.appendChild(routineElement);
        });

        this.showModal('workoutModal');
    }

    startWorkout(routine) {
        this.currentWorkout = routine;
        this.currentExerciseIndex = 0;
        this.hideModal('workoutModal');
        this.showExerciseTimer();
        this.showToast(`Starting ${routine.name} workout!`, 'success');
    }

    showExerciseTimer() {
        const exerciseTimer = document.getElementById('exerciseTimer');
        const exerciseTimerTitle = document.getElementById('exerciseTimerTitle');
        
        if (!this.currentWorkout || !exerciseTimer) return;

        const currentExercise = this.currentWorkout.exercises[this.currentExerciseIndex];
        
        exerciseTimerTitle.textContent = currentExercise.name;
        
        exerciseTimer.innerHTML = `
            <div class="exercise-info">
                <h4>${currentExercise.name}</h4>
                <p>Sets: ${currentExercise.sets} • Reps: ${currentExercise.reps} • Rest: ${currentExercise.restTime}</p>
            </div>
            <div class="timer-display">00:00</div>
            <div class="timer-controls">
                <button class="timer-btn start" onclick="app.startExerciseTimer()">
                    <i class="fas fa-play"></i> Start
                </button>
                <button class="timer-btn pause" onclick="app.pauseExerciseTimer()">
                    <i class="fas fa-pause"></i> Pause
                </button>
                <button class="timer-btn stop" onclick="app.completeExercise()">
                    <i class="fas fa-check"></i> Complete
                </button>
            </div>
            <div class="exercise-progress">
                Exercise ${this.currentExerciseIndex + 1} of ${this.currentWorkout.exercises.length}
            </div>
        `;

        this.showModal('exerciseTimerModal');
    }

    startExerciseTimer() {
        let seconds = 0;
        const timerDisplay = document.querySelector('.timer-display');
        
        this.exerciseTimer = setInterval(() => {
            seconds++;
            const minutes = Math.floor(seconds / 60);
            const remainingSeconds = seconds % 60;
            timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    pauseExerciseTimer() {
        if (this.exerciseTimer) {
            clearInterval(this.exerciseTimer);
            this.exerciseTimer = null;
        }
    }

    completeExercise() {
        if (this.exerciseTimer) {
            clearInterval(this.exerciseTimer);
            this.exerciseTimer = null;
        }

        this.currentExerciseIndex++;
        
        if (this.currentExerciseIndex < this.currentWorkout.exercises.length) {
            this.showExerciseTimer();
        } else {
            this.completeWorkout();
        }
    }

    completeWorkout() {
        this.hideModal('exerciseTimerModal');
        this.showToast(`Workout completed! Great job!`, 'success');
        
        // Add to workout history
        const newWorkout = {
            date: new Date().toISOString().split('T')[0],
            workoutType: this.currentWorkout.name,
            duration: "Completed",
            caloriesBurned: 400,
            exercises: this.currentWorkout.exercises.map(ex => ({
                name: ex.name,
                sets: ex.sets,
                reps: ex.reps,
                weight: "bodyweight"
            })),
            personalRecords: []
        };
        
        this.workoutHistory.unshift(newWorkout);
        this.currentWorkout = null;
        this.currentExerciseIndex = 0;
        
        // Update activity feed
        this.updateActivityFeed();
    }

    bookTrainer(trainerName) {
        this.showToast(`Booking session with ${trainerName}...`, 'info');
        
        setTimeout(() => {
            this.showToast(`Session booked with ${trainerName} for tomorrow 9:00 AM!`, 'success');
        }, 1500);
    }

    setupWorkoutChart() {
        const ctx = document.getElementById('workoutChart');
        if (!ctx) return;

        const last7Days = this.getLast7Days();
        const workoutData = last7Days.map(() => Math.floor(Math.random() * 60) + 30); // Sample data

        this.charts.workout = new Chart(ctx, {
            type: 'line',
            data: {
                labels: last7Days,
                datasets: [{
                    label: 'Workout Duration (minutes)',
                    data: workoutData,
                    borderColor: '#f59e0b',
                    backgroundColor: 'rgba(245, 158, 11, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Minutes'
                        }
                    }
                }
            }
        });
    }

    getLast7Days() {
        const days = [];
        for (let i = 6; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            days.push(date.toLocaleDateString('en-US', { weekday: 'short' }));
        }
        return days;
    }

    // Medical Buy functionality (existing methods)
    renderMedicalBuyContent() {
        this.renderCategories();
        this.renderMedicines();
    }

    renderCategories() {
        const categoriesGrid = document.getElementById('categoriesGrid');
        if (!categoriesGrid) return;

        categoriesGrid.innerHTML = '';
        
        this.categories.forEach((category, index) => {
            const categoryCard = document.createElement('div');
            categoryCard.className = 'category-card';
            categoryCard.style.animationDelay = `${index * 0.1}s`;
            categoryCard.style.animation = 'fadeInUp 0.5s ease forwards';
            categoryCard.style.opacity = '0';
            
            categoryCard.innerHTML = `
                <div class="category-icon">${category.icon}</div>
                <div class="category-name">${category.name}</div>
                <div class="category-count">${category.count} items</div>
            `;
            
            categoryCard.addEventListener('click', () => {
                this.filterByCategory(category.name);
            });
            
            categoriesGrid.appendChild(categoryCard);
        });
    }

    renderMedicines() {
        const medicinesGrid = document.getElementById('medicinesGrid');
        if (!medicinesGrid) return;

        let filteredMedicines = [...this.medicines];

        // Apply search filter
        if (this.searchQuery) {
            filteredMedicines = filteredMedicines.filter(medicine =>
                medicine.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                medicine.brand.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }

        // Apply category filter
        if (this.selectedCategory) {
            filteredMedicines = filteredMedicines.filter(medicine =>
                medicine.category === this.selectedCategory
            );
        }

        medicinesGrid.innerHTML = '';
        
        filteredMedicines.forEach((medicine, index) => {
            const medicineCard = document.createElement('div');
            medicineCard.className = 'medicine-card';
            medicineCard.style.animationDelay = `${index * 0.1}s`;
            medicineCard.style.animation = 'fadeInUp 0.5s ease forwards';
            medicineCard.style.opacity = '0';
            
            const discount = Math.round((1 - medicine.discountPrice / medicine.price) * 100);
            
            medicineCard.innerHTML = `
                <div class="medicine-image" style="background-image: url('${medicine.image}')">
                    ${medicine.prescription ? '<div class="prescription-required">Rx</div>' : ''}
                </div>
                <div class="medicine-info">
                    <div class="medicine-header">
                        <div>
                            <div class="medicine-name">${medicine.name}</div>
                            <div class="medicine-brand">${medicine.brand}</div>
                        </div>
                        <div class="medicine-rating">
                            <div class="rating-stars">
                                ${'★'.repeat(Math.floor(medicine.rating))}${'☆'.repeat(5 - Math.floor(medicine.rating))}
                            </div>
                            <div class="rating-count">(${medicine.reviews})</div>
                        </div>
                    </div>
                    <div class="medicine-price">
                        <span class="current-price">₹${medicine.discountPrice}</span>
                        <span class="original-price">₹${medicine.price}</span>
                        <span class="discount-badge">${discount}% OFF</span>
                    </div>
                    <div class="medicine-actions">
                        <button class="add-to-cart-btn" onclick="app.addToCart(${medicine.id})" ${!medicine.inStock ? 'disabled' : ''}>
                            <i class="fas fa-cart-plus"></i>
                            Add to Cart
                        </button>
                    </div>
                </div>
            `;
            
            medicinesGrid.appendChild(medicineCard);
        });
    }

    searchMedicines() {
        const searchInput = document.getElementById('medicineSearch');
        const query = searchInput.value.trim();
        
        this.searchQuery = query;
        this.renderMedicines();
        
        if (query) {
            this.showToast(`Searching for "${query}"...`, 'info');
        }
    }

    filterByCategory(category) {
        this.selectedCategory = this.selectedCategory === category ? null : category;
        this.renderMedicines();
        
        if (this.selectedCategory) {
            this.showToast(`Filtering by ${category}`, 'info');
        } else {
            this.showToast('Showing all categories', 'info');
        }
    }

    addToCart(medicineId) {
        const medicine = this.medicines.find(m => m.id === medicineId);
        if (!medicine || !medicine.inStock) {
            this.showToast('Medicine is out of stock', 'error');
            return;
        }

        const existingItem = this.cart.items.find(item => item.medicineId === medicineId);
        
        if (existingItem) {
            existingItem.quantity += 1;
            existingItem.total = existingItem.quantity * existingItem.price;
        } else {
            this.cart.items.push({
                medicineId: medicineId,
                quantity: 1,
                pharmacy: "Apollo Pharmacy",
                price: medicine.discountPrice,
                total: medicine.discountPrice
            });
        }

        this.updateCartTotals();
        this.updateCartCount();
        this.showToast(`${medicine.name} added to cart!`, 'success');
    }

    updateCartTotals() {
        this.cart.subtotal = this.cart.items.reduce((sum, item) => sum + item.total, 0);
        this.cart.discount = Math.floor(this.cart.subtotal * 0.1);
        this.cart.deliveryFee = this.cart.subtotal > 200 ? 0 : 25;
        this.cart.total = this.cart.subtotal - this.cart.discount + this.cart.deliveryFee;
    }

    updateCartCount() {
        const cartCount = document.getElementById('cartCount');
        const totalItems = this.cart.items.reduce((sum, item) => sum + item.quantity, 0);
        
        if (cartCount) {
            cartCount.textContent = totalItems;
            cartCount.style.display = totalItems > 0 ? 'flex' : 'none';
        }
    }

    // Health & AI functionality (existing methods)
    initializeDashboard() {
        this.animateHealthScore();
        this.updateAIInsights();
        this.setupQuickActions();
        this.renderFitnessOverview();
    }

    animateHealthScore() {
        const circle = document.querySelector('.progress-ring-circle');
        const scoreNumber = document.querySelector('.score-number');
        
        if (circle && scoreNumber) {
            const svg = document.querySelector('.progress-ring');
            if (svg && !svg.querySelector('defs')) {
                const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
                const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
                gradient.setAttribute('id', 'healthGradient');
                
                const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
                stop1.setAttribute('offset', '0%');
                stop1.setAttribute('stop-color', '#dc2626');
                
                const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
                stop2.setAttribute('offset', '100%');
                stop2.setAttribute('stop-color', '#16a34a');
                
                gradient.appendChild(stop1);
                gradient.appendChild(stop2);
                defs.appendChild(gradient);
                svg.appendChild(defs);
            }

            setTimeout(() => {
                circle.classList.add('animate');
                let currentScore = 0;
                const targetScore = this.userData.healthScore;
                const increment = targetScore / 50;
                
                const countUp = setInterval(() => {
                    currentScore += increment;
                    if (currentScore >= targetScore) {
                        currentScore = targetScore;
                        clearInterval(countUp);
                    }
                    scoreNumber.textContent = Math.round(currentScore);
                }, 30);
            }, 500);
        }
    }

    updateAIInsights() {
        const insightsList = document.getElementById('aiInsightsList');
        if (insightsList) {
            insightsList.innerHTML = '';
            this.userData.aiInsights.forEach((insight, index) => {
                const li = document.createElement('li');
                li.textContent = insight;
                li.style.animationDelay = `${index * 0.2}s`;
                li.style.animation = 'fadeInUp 0.5s ease forwards';
                li.style.opacity = '0';
                insightsList.appendChild(li);
            });
        }
    }

    setupQuickActions() {
        const actionButtons = document.querySelectorAll('.action-btn');
        actionButtons.forEach((btn, index) => {
            btn.style.animationDelay = `${index * 0.1}s`;
            btn.style.animation = 'fadeInUp 0.5s ease forwards';
        });
    }

    setupCharts() {
        this.createVitalsChart();
    }

    createVitalsChart() {
        const ctx = document.getElementById('vitalsChart');
        if (!ctx) return;

        const dates = this.vitalsData.map(v => new Date(v.date).toLocaleDateString());
        const heartRates = this.vitalsData.map(v => v.heartRate);

        this.charts.vitals = new Chart(ctx, {
            type: 'line',
            data: {
                labels: dates.reverse(),
                datasets: [{
                    label: 'Heart Rate (bpm)',
                    data: heartRates.reverse(),
                    borderColor: '#1FB8CD',
                    backgroundColor: 'rgba(31, 184, 205, 0.1)',
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Heart Rate (bpm)'
                        }
                    }
                }
            }
        });
    }

    saveVitals() {
        const heartRate = document.getElementById('heartRate').value;
        const bloodPressure = document.getElementById('bloodPressure').value;
        const temperature = document.getElementById('temperature').value;
        const oxygenSat = document.getElementById('oxygenSat').value;

        if (!heartRate || !bloodPressure || !temperature || !oxygenSat) {
            this.showToast('Please fill in all vital signs', 'error');
            return;
        }

        this.showToast('Saving vitals...', 'info');
        
        setTimeout(() => {
            const newVital = {
                date: new Date().toISOString().split('T')[0],
                heartRate: parseInt(heartRate),
                bloodPressure: bloodPressure,
                temperature: parseFloat(temperature),
                oxygenSat: parseInt(oxygenSat),
                aiAnalysis: this.generateAIAnalysis(heartRate, bloodPressure, temperature, oxygenSat),
                blockchainHash: this.generateBlockchainHash(),
                riskLevel: 'low'
            };

            this.vitalsData.unshift(newVital);
            document.getElementById('vitalsForm').reset();
            this.showToast('Vitals saved successfully!', 'success');
            this.updateActivityFeed();
        }, 1500);
    }

    generateAIAnalysis(heartRate, bloodPressure, temperature, oxygenSat) {
        const analyses = [
            "Vitals are within normal range. Great job maintaining your health!",
            "Consider consulting with your doctor about the blood pressure trend.",
            "Excellent readings. Your fitness routine is showing positive results!",
            "Temperature is normal. Continue monitoring for any changes.",
            "Heart rate shows improvement. Your cardio training is working!"
        ];
        
        return analyses[Math.floor(Math.random() * analyses.length)];
    }

    generateBlockchainHash() {
        const chars = '0123456789abcdef';
        let hash = '0x';
        for (let i = 0; i < 12; i++) {
            hash += chars[Math.floor(Math.random() * chars.length)];
        }
        return hash;
    }

    renderVitalsHistory() {
        const historyContainer = document.getElementById('vitalsHistory');
        if (!historyContainer) return;

        historyContainer.innerHTML = '';
        
        this.vitalsData.forEach((vital, index) => {
            const vitalElement = document.createElement('div');
            vitalElement.className = 'vital-record';
            vitalElement.style.animationDelay = `${index * 0.1}s`;
            vitalElement.style.animation = 'fadeInUp 0.5s ease forwards';
            vitalElement.style.opacity = '0';
            
            vitalElement.innerHTML = `
                <div class="vital-date">${new Date(vital.date).toLocaleDateString()}</div>
                <div class="vital-metrics">
                    <div class="vital-metric">
                        <span class="metric-label">Heart Rate:</span>
                        <span class="metric-value">${vital.heartRate} bpm</span>
                    </div>
                    <div class="vital-metric">
                        <span class="metric-label">Blood Pressure:</span>
                        <span class="metric-value">${vital.bloodPressure} mmHg</span>
                    </div>
                </div>
                <div class="ai-analysis-text">
                    <i class="fas fa-brain"></i> AI Analysis: ${vital.aiAnalysis}
                </div>
            `;
            
            historyContainer.appendChild(vitalElement);
        });
    }

    activateAIFeature(feature) {
        const responses = {
            'workout-plan': "I can create a personalized workout plan based on your fitness goals and current level. What specific areas would you like to focus on?",
            'nutrition-advice': "Based on your current nutrition intake, I recommend increasing your protein to reach your muscle gain goals. Would you like specific meal suggestions?",
            'form-analysis': "Great form analysis feature! Upload a video of your exercise, and I'll provide real-time feedback on your technique.",
            'recovery-tips': "Your recent workout intensity suggests you need 48-72 hours recovery for optimal muscle growth. Consider active recovery with light cardio or yoga."
        };

        this.addChatMessage('ai', responses[feature] || "Feature activated. How can I help with your fitness journey?");
    }

    sendChatMessage() {
        const chatInput = document.getElementById('chatInput');
        const message = chatInput.value.trim();
        
        if (!message) return;

        this.addChatMessage('user', message);
        chatInput.value = '';

        setTimeout(() => {
            const aiResponse = this.generateAIResponse(message);
            this.addChatMessage('ai', aiResponse);
        }, 1000);
    }

    addChatMessage(sender, message) {
        const chatMessages = document.getElementById('chatMessages');
        if (!chatMessages) return;

        const messageElement = document.createElement('div');
        messageElement.className = `chat-message ${sender}`;
        messageElement.innerHTML = `
            <div class="message-content">
                <div class="message-avatar">
                    <i class="fas fa-${sender === 'ai' ? 'robot' : 'user'}"></i>
                </div>
                <div class="message-text">${message}</div>
            </div>
            <div class="message-time">${new Date().toLocaleTimeString()}</div>
        `;

        chatMessages.appendChild(messageElement);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    generateAIResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        if (lowerMessage.includes('workout') || lowerMessage.includes('exercise')) {
            return "I can help you with personalized workout plans! Based on your current fitness level and goals, I recommend focusing on strength training 3-4 times per week with progressive overload.";
        }
        if (lowerMessage.includes('nutrition') || lowerMessage.includes('diet')) {
            return "For your muscle gain goals, aim for 1.6-2.2g protein per kg body weight. Your current intake is good, but try adding a post-workout protein shake to optimize recovery.";
        }
        if (lowerMessage.includes('weight') || lowerMessage.includes('muscle')) {
            return "Great progress on your muscle gain journey! You're 60% towards your 5kg goal. Consistency with both training and nutrition will help you reach your target by March 2025.";
        }
        if (lowerMessage.includes('medicine') || lowerMessage.includes('drug')) {
            return "I can help you find medicines! You can search for medicines in our Medical Buy section, compare prices, and even get prescription verification.";
        }
        
        return "I'm here to help with your health and fitness journey! Whether you need workout advice, nutrition guidance, or health insights, I'm ready to assist you.";
    }

    renderEmergencyContacts() {
        const contactsList = document.getElementById('emergencyContactsList');
        if (!contactsList) return;

        contactsList.innerHTML = '';
        
        this.emergencyContacts.forEach((contact, index) => {
            const contactElement = document.createElement('div');
            contactElement.className = 'contact-item';
            contactElement.style.animationDelay = `${index * 0.1}s`;
            contactElement.style.animation = 'fadeInUp 0.5s ease forwards';
            contactElement.style.opacity = '0';
            
            contactElement.innerHTML = `
                <div class="contact-info">
                    <div class="contact-name">${contact.name}</div>
                    <div class="contact-number">${contact.number}</div>
                </div>
                <span class="contact-type ${contact.type}">${contact.type}</span>
            `;
            
            contactsList.appendChild(contactElement);
        });
    }

    renderNotifications() {
        const notificationsList = document.getElementById('notificationsList');
        if (!notificationsList) return;

        notificationsList.innerHTML = '';
        
        this.notifications.forEach((notification, index) => {
            const notificationElement = document.createElement('div');
            notificationElement.className = `notification-item ${notification.type}`;
            notificationElement.style.animationDelay = `${index * 0.1}s`;
            notificationElement.style.animation = 'fadeInUp 0.5s ease forwards';
            notificationElement.style.opacity = '0';
            
            notificationElement.innerHTML = `
                <div class="notification-title">${notification.message}</div>
                <div class="notification-time">${notification.time}</div>
            `;
            
            notificationsList.appendChild(notificationElement);
        });
    }

    updateActivityFeed() {
        const activityList = document.getElementById('activityList');
        if (!activityList) return;

        const activities = [
            {
                icon: 'workout',
                title: 'Completed Upper Body Strength workout',
                time: '1 hour ago',
                type: 'workout'
            },
            {
                icon: 'vitals',
                title: 'Vitals recorded',
                time: '2 hours ago',
                type: 'vitals'
            },
            {
                icon: 'ai',
                title: 'AI fitness insight generated',
                time: '3 hours ago',
                type: 'ai'
            },
            {
                icon: 'blockchain',
                title: 'Medical record secured on blockchain',
                time: '4 hours ago',
                type: 'blockchain'
            }
        ];

        activityList.innerHTML = '';
        
        activities.forEach((activity, index) => {
            const activityElement = document.createElement('div');
            activityElement.className = 'activity-item';
            activityElement.style.animationDelay = `${index * 0.1}s`;
            activityElement.style.animation = 'fadeInUp 0.5s ease forwards';
            activityElement.style.opacity = '0';
            
            const iconClass = activity.icon === 'workout' ? 'dumbbell' : 
                            activity.icon === 'vitals' ? 'heartbeat' : 
                            activity.icon === 'ai' ? 'brain' : 'cube';
            
            activityElement.innerHTML = `
                <div class="activity-icon ${activity.type}">
                    <i class="fas fa-${iconClass}"></i>
                </div>
                <div class="activity-content">
                    <div class="activity-title">${activity.title}</div>
                    <div class="activity-time">${activity.time}</div>
                </div>
            `;
            
            activityList.appendChild(activityElement);
        });
    }

    callEmergency() {
        this.showToast('Connecting to emergency services...', 'info');
        
        setTimeout(() => {
            this.showToast('Emergency call initiated. Help is on the way!', 'success');
        }, 2000);
    }

    shareLocation() {
        this.showToast('Sharing location with Uruk emergency team...', 'info');
        
        setTimeout(() => {
            this.showToast('Location shared successfully. Emergency team has been notified.', 'success');
        }, 1500);
    }

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.remove('hidden');
            
            if (modalId === 'cartModal') {
                this.renderCartContent();
            }
        }
    }

    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.classList.add('hidden');
        }
    }

    renderCartContent() {
        const cartContent = document.getElementById('cartContent');
        
        if (!cartContent) return;

        cartContent.innerHTML = '';
        
        if (this.cart.items.length === 0) {
            cartContent.innerHTML = `
                <div style="text-align: center; padding: 40px; color: var(--color-text-secondary);">
                    <i class="fas fa-shopping-cart" style="font-size: 48px; margin-bottom: 16px;"></i>
                    <p>Your cart is empty</p>
                </div>
            `;
        } else {
            this.cart.items.forEach(item => {
                const medicine = this.medicines.find(m => m.id === item.medicineId);
                if (!medicine) return;

                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <div class="cart-item-image" style="background-image: url('${medicine.image}')"></div>
                    <div class="cart-item-info">
                        <div class="cart-item-name">${medicine.name}</div>
                        <div class="cart-item-pharmacy">${item.pharmacy}</div>
                    </div>
                    <div class="cart-item-price">₹${item.total}</div>
                `;
                cartContent.appendChild(cartItem);
            });
        }
    }

    toggleTheme() {
        const body = document.body;
        const themeToggle = document.getElementById('themeToggle');
        
        if (body.hasAttribute('data-color-scheme')) {
            const currentTheme = body.getAttribute('data-color-scheme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            body.setAttribute('data-color-scheme', newTheme);
            
            themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        } else {
            body.setAttribute('data-color-scheme', 'dark');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        this.showToast('Theme updated!', 'success');
    }

    toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.toggle('open');
        }
    }

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <div class="toast-content">
                <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
                <span>${message}</span>
            </div>
        `;
        
        if (!document.querySelector('.toast-styles')) {
            const style = document.createElement('style');
            style.className = 'toast-styles';
            style.textContent = `
                .toast {
                    position: fixed;
                    top: 20px;
                    right: 20px;
                    background: rgba(255, 255, 255, 0.95);
                    backdrop-filter: blur(20px);
                    border-radius: 8px;
                    padding: 16px;
                    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
                    z-index: 3000;
                    transform: translateX(400px);
                    transition: transform 0.3s ease;
                    border-left: 4px solid;
                }
                .toast-success { border-left-color: #16a34a; }
                .toast-error { border-left-color: #dc2626; }
                .toast-info { border-left-color: #0ea5e9; }
                .toast.show { transform: translateX(0); }
                .toast-content {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .toast-success i { color: #16a34a; }
                .toast-error i { color: #dc2626; }
                .toast-info i { color: #0ea5e9; }
            `;
            document.head.appendChild(style);
        }
        
        document.body.appendChild(toast);
        
        setTimeout(() => toast.classList.add('show'), 100);
        
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
}

// Initialize the application
const app = new UrukHealthApp();

// Add CSS for chat messages
const chatStyles = document.createElement('style');
chatStyles.textContent = `
    .chat-message {
        margin-bottom: 16px;
        animation: fadeInUp 0.3s ease;
    }
    .message-content {
        display: flex;
        gap: 12px;
        align-items: flex-start;
    }
    .message-avatar {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: white;
    }
    .chat-message.ai .message-avatar {
        background: linear-gradient(135deg, #8b5cf6, #a855f7);
    }
    .chat-message.user .message-avatar {
        background: linear-gradient(135deg, #0ea5e9, #3b82f6);
    }
    .message-text {
        flex: 1;
        padding: 12px 16px;
        border-radius: 12px;
        background: var(--color-bg-1);
        font-size: 14px;
        line-height: 1.5;
    }
    .message-time {
        font-size: 11px;
        color: var(--color-text-secondary);
        margin-left: 44px;
        margin-top: 4px;
    }
`;
document.head.appendChild(chatStyles);