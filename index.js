window.onload = function() {
    // --- ЕЛЕМЕНТИ ЕКРАНІВ ---
    const startScreen = document.getElementById('start-screen');
    const introScreen = document.getElementById('intro-screen');
    const galleryScreen = document.getElementById('gallery-screen');
    const endScreen = document.getElementById('end-screen');
    const quizScreen = document.getElementById('quiz-screen');
    
    // --- КНОПКИ СТАРТУ ТА ІНТРО ---
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const introPrevBtn = document.getElementById('introPrevBtn');
    const introNextBtn = document.getElementById('introNextBtn');

    // --- КНОПКИ ТА ЕЛЕМЕНТИ ГАЛЕРЕЇ КАРТОК ---
    const cardImg = document.getElementById('card-img');
    const cardImgContainer = document.getElementById('card-img-container');
    const columnsContainer = document.getElementById('columns-container');
    const cardText = document.getElementById('card-text');
    const progressTag = document.getElementById('progress-tag');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn'); 
    const mainContentCard = document.getElementById('main-content-card');

    // --- КНОПКА НА ПРОМІЖНОМУ ЕКРАНІ ---
    const restartBtn = document.getElementById('restartBtn');

    // --- ЕЛЕМЕНТИ МОДУЛЯ ТЕСТУВАННЯ ---
    const quizQuestionText = document.getElementById('quiz-question-text');
    const quizOptions = document.querySelectorAll('.quiz-option-btn');
    const quizFeedback = document.getElementById('quiz-feedback');
    const quizNextBtn = document.getElementById('quizNextBtn');
    const quizProgressTag = document.getElementById('quiz-progress-tag');

    const denScreen = document.getElementById('den-screen');
    const denRestartBtn = document.getElementById('denRestartBtn');

    // --- ДАНІ КАРТОК ПОРАД (12 ШТУК) ---
    const cardsData = [
        { 
            text: `Перше, з чого ми почнемо - структуруємо типи наших клієнтів, з якими буває дещо складно. Мозок не любить невідомість, тому коли ми бачимо агресивну й звинувачувальну поведінку клієнтів, ми часом забуваємо деталі їх психології, що заводить чат "не туди" й призводить до наших негативних емоцій`, 
            img: "" 
        },
        { 
            img: "images/clock.jpg", 
            title: "Правило 30 секунд ⏱️",
            intro: "Коли клієнт дратує, пальці автоматично починають швидко й різко стукати по клавіатурі. Це лише посилює стрес та конфлікт.",
            body: `
                <div class="chat-container">
                    <div class="chat-bubble bubble-solution">Зроби паузу на <strong>30 секунд</strong> або навіть 1-2 хвилинки. Відволічись на щось інше. Нехай краще клієнт трішки зачекає, ніж розпочнеться конфлікт</div>
                </div>
            `,
            
        },
        { 
            img: "images/water.jpg", 
            title: "Трішки біології 🧠",
            intro: "Коли ресурс на нулі, тіло вмикає режим «бийся або біжи». Спокійно мислити чи співпереживати в такому стані фізично важче. Що допоможе тут і зараз?",
            body: `
                <div class="chat-container">
                    <div class="chat-bubble bubble-solution">Холодна вода. Доведено, що вмивання обличчя може активувати так званий mammalian dive reflex (“рефлекс занурення”), який сповільнює серцебиття та допомагає трішки знизити градус негативних емоцій.</div>
                </div>
            `
        },
        { 
            img: "images/stiv.jpg", 
            title: "Уникайте захисної позиції 🛡️",
            intro: "Коли нас звинувачують у помилках системи чи сервісу, перша природна реакція - почати виправдовувати себе й репутацію компанії",
            body: `
                <div class="chat-container">
                    <div class="chat-bubble bubble-solution"> Вибачаємось не більше ніж <strong>1 раз за чат</strong>. Уникаємо звинувачень клієнта або натяків на це, навіть якщо він абсолютно неправий. Замість цього нейтрально подаємо вірну інформацію </div>
                </div>
            `
        },
        { 
             img: "images/spider.jpg", 
            title: "Пошук спільного 🫂",
            intro: "Коли клієнт позитивний чи нейтральний, допоможе прийом пошуку спільного. Будь-яка увага на психологічному рівні зробить клієнта трішки лояльнішим.",
            body: `
                <div class="card-step-body" style="text-align: center; margin-bottom: 1rem;">
                    Перегляньте, що саме замовив клієнт та "зачипляйтесь" за будь-що :)
                </div>
                <div class="chat-container">
                    <div class="chat-bubble bubble-pure-chat">Переглянув ваше замовлення, і ви знаєте, також обожнюю цю піцу. Дуже хороший вибір😉</div>
                    <div class="chat-bubble bubble-pure-chat">У вас в замовленні є миючий засіб, підкажіть, хороший? Я досі в пошуку того самого ідеального😅</div>
                </div>
            `
        },
        { 
            img: "images/shreck.jpg", 
            title: "Похвала 🤍",
            intro: "Похвала - це потужний інструмент. Почувши добрі слова про себе, люди на психологічному рівні бажають їм відповідати. Навіть якщо клієнт злиться - ви все одно похваліть. Це перевірено та працює",
            body: `
                <div class="chat-container">
                    <div class="chat-bubble bubble-pure-chat">Дуже дякую вам, що виразили свої справжні емоції щодо ситуації, але залишаєтесь ввічливим до мене (коли клієнт дуже злий)</div>
                    <div class="chat-bubble bubble-pure-chat">Визнаю, що така затримка дійсно не є нормою. Але дякую вам, що навіть попри цю ситуацію ви ввічливі до мене. Зараз обов'язково допоможу вам💛</div>
                </div>
            `
        },
        { 
            img: "images/goodday.jpg", 
            title: "Закінчуйте діалог “м’яко” 🌤️",
            intro: "Останні 1–2 повідомлення дуже сильно впливають на те, як користувач оцінить весь чат.",
            body: `
                <div class="chat-container">
                    <div class="chat-bubble bubble-pure-chat">Дякую вам за терпіння</div>
                    <div class="chat-bubble bubble-pure-chat">Бажаю, щоб настрій після цієї ситуації швидше піднявся й ви гарно провели день💛</div>
                </div>
            `
        },
        { 
            img: "images/jerry.jpg", 
            title: "Розминочка 🏃‍♂️",
            intro: "Сидяча робота виснажує не лише голову, а й тіло.",
            body: `
                <div class="chat-container">
                    <div class="chat-bubble bubble-solution">Навіть коротка прогулянка або 10-15 хвилин розминки (та навіть 5 хвилин, аби зробили😉) можуть реально впливати на ваш настрій, рівень тривоги та емоційну стійкість </div>
                </div>
            `
        },
        { 
             img: "images/hobbi.jpg", 
            title: "Інвестуйте в ваш вільний час",
            intro: "Зміна діяльності між роботою та хобі - це науково обґрунтований спосіб профілактики вигорання. Тобто робота - це не єдине, що має бути у вашому житті",
                body: `
                <div class="chat-container">
                    <div class="chat-bubble bubble-solution">Обов'язково інвестуйте час у власні захоплення й якісні хобі, щоб підтримувати високий рівень продуктивності без шкоди для ментального здоров'я.</div>
                </div>
            `
        },
        { 
            img: "images/rayan.jpg", 
            title: "Прибираємо почуття провини🌺",
            intro: "Невдалі дні - це не привід для почуття провини. Карати себе за це лише виснажує нервову систему, яку нам важливо тримати в тонусі. Не опускайте руки через тимчасові труднощі, будьте добрішими до себе.",
              body: `
                <div class="chat-container">
                    <div class="chat-bubble bubble-solution">Один невдалий день не перекреслює ваших загальних успіхів. Головне - прийняти цей день, проаналізувати помилку й рухатися далі💛</div>
                </div>
            `
        },
        { 
            img: "images/hero.jpg", 
            title: "Шукаємо приклад⭐️",
            intro: "Попросіть у ТЛ вигрузку чатів топ-перформера на ваш вибір (їх щотижня публікують у Heroshub).",
            body: `
                <div class="chat-container">
                    <div class="chat-bubble bubble-solution">Не обо'язково читати по 100 кейсів. Читайте скільки зручно, аби ви вловили вайб агента та вивели для себе якийсь патерн</div>
                </div>
            `
        },
        { 
            img: "images/vtom.jpg", 
            title: "Перерви☘️",
            intro: "Робити переври після кожної години-півтори роботи потрібно обов'язково, навіть якщо ви ще не відчуваєте втоми",
            body: `
                <div class="chat-container">
                    <div class="chat-bubble bubble-solution">Ставте таймер на 60–90 хвилин і безкомпромісно йдіть на перерву (або в найближчий можливий час). Усіх грошей на світі не заробиш, а за своїм моральним станом у нашій роботі треба стежити в першу чергу.</div>
                </div>
            `
        }
    ];

    let currentIndex = 0;

    // --- ЛОГІКА СТАРТОВОГО ЕКРАНА ---
    noBtn.addEventListener('mouseover', () => {
        const maxX = window.innerWidth - noBtn.offsetWidth - 20;
        const maxY = window.innerHeight - noBtn.offsetHeight - 20;
        const randomX = Math.max(20, Math.floor(Math.random() * maxX));
        const randomY = Math.max(20, Math.floor(Math.random() * maxY));
        noBtn.style.position = 'fixed';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
    });

    yesBtn.addEventListener('click', () => {
        startScreen.classList.add('hidden'); 
        introScreen.classList.remove('hidden');
    });

    // --- ЛОГІКА ІНТРО-ЕКРАНА ---
    introPrevBtn.addEventListener('click', () => {
        introScreen.classList.add('hidden');
        startScreen.classList.remove('hidden');
        noBtn.style.position = 'static';
    });

    introNextBtn.addEventListener('click', () => {
        introScreen.classList.add('hidden');
        galleryScreen.classList.remove('hidden');
        currentIndex = 0; 
        renderCard();
    });

    // --- ЛОГІКА ВІДМАЛЬОВКИ КАРТОК ПOРАД ---
    function renderCard() {
        mainContentCard.classList.remove('fade-in');
        void mainContentCard.offsetWidth; 
        mainContentCard.classList.add('fade-in');
    
        const currentCard = cardsData[currentIndex];
        const cardTitle = document.getElementById('card-title');
        const cardIntro = document.getElementById('card-intro');
        
        progressTag.innerText = `Порада ${currentIndex + 1} із ${cardsData.length}`;

        // Специфічна логіка для першої широкої картки (з 5 колонками)
        if (currentIndex === 0) {
            mainContentCard.classList.add('card-wide'); 
            cardText.innerHTML = currentCard.text;
            if(cardTitle) cardTitle.style.display = 'none';
            if(cardIntro) cardIntro.style.display = 'none';
            
            cardImgContainer.style.display = 'none';
            cardImgContainer.classList.add('hidden');
            
            columnsContainer.classList.remove('hidden');
            columnsContainer.style.maxHeight = '390px'; 
            columnsContainer.style.overflowY = 'auto';  
            columnsContainer.style.paddingRight = '8px'; 
        } else {
            mainContentCard.classList.remove('card-wide'); 
            
            if(cardTitle) {
                cardTitle.style.display = 'block';
                cardTitle.innerHTML = currentCard.title || '';
            }
            if(cardIntro) {
                cardIntro.style.display = 'block';
                cardIntro.innerHTML = currentCard.intro || '';
            }
            cardText.innerHTML = currentCard.body || ''; 
            
            cardImgContainer.style.display = 'block';
            cardImgContainer.classList.remove('hidden');
            cardImg.src = currentCard.img;
            
            columnsContainer.classList.add('hidden');
            columnsContainer.style.maxHeight = 'none';
            columnsContainer.style.overflowY = 'visible';
            columnsContainer.style.paddingRight = '0';
        }
        
        prevBtn.disabled = false;
        prevBtn.style.opacity = '1';
        prevBtn.style.cursor = 'pointer';
    }

    // Кнопки перемикання карток
    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex < cardsData.length) {
            renderCard();
        } else {
            // Картки скінчилися -> переходимо на проміжний екран (запрошення до тесту)
            galleryScreen.classList.add('hidden');
            endScreen.classList.remove('hidden');
            mainContentCard.classList.remove('card-wide');
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            renderCard();
        } else if (currentIndex === 0) {
            galleryScreen.classList.add('hidden');
            introScreen.classList.remove('hidden');
            mainContentCard.classList.remove('card-wide');
        }
    });

    // --- КНОПКА «ДАЛІ» НА ПРОМІЖНОМУ ЕКРАНІ ЗАПУСКАЄ ТЕСТ ---
    restartBtn.addEventListener('click', () => {
        endScreen.classList.add('hidden'); 
        quizScreen.classList.remove('hidden'); 
        initQuiz(); 
    });

    // ==========================================================================
    // ЛОГІКА МОДУЛЯ ТЕСТУВАННЯ (QUIZ)
    // ==========================================================================
    const quizData = [
        {
            question: "Клієнт у чаті дуже злиться, спамить та пише капсом (кошти довго не повертаються) Як би ви відповіли? ",
            options: [
                "Ой, так прикро, що ви досі чекаєте! 🥺💔 Пробачте, будь ласочка, за це! Гроші обов'язково повернуться, але терміни залежать від банку. Дякуємо за терпіння! 🙏✨",
                "Перевірив інформацію, бачу, що кошти надійдуть на ваш рахунок у терміни банку🙏🏻",
                "Неймовірно перепрошую! 😭 Дуже шкода, що так вийшло. Кошти зарахуються у терміни, встановлені банком. Обіймаю та дякую за розуміння! Переживаємо разом із вами🫂"
            ],
            correct: 1,
            hint: "Це імпульсивний клієнт. У стані емоційного напруження він сприймає лише лаконічну комунікацію, а довгі повідомлення будуть ігноруватися. Надмірна емпатія й купа смайликів також розлютять"
        },
        {
            question: "Ситуація: ми відмовили у рефі за холодну їжу. Клієнт повідомляє, що викладе пост в Інстраграм та Тредс. Що ви відповісте?",
            options: [
                "Я перевірив усі можливі варіанти, але, на жаль, згідно з правилами компанії, не можу оформити повернення коштів",
                "Мені насправді дуже прикро це чути😭 Я зробила для вас дійсно все, що могла. Я б дуже хотіла повернути вам кошти, але не можу цього зробити. Сподіваюсь, ми зможемо уникнути публікацій та дійти до компромісу🤍",
                "Я сам дійсно просто у розпачі через це. У нас так працює просто система, тому я як агент, на жаль, не можу ніяк виконати повернення. Якби рішення залежало від мене - я б відразу повернув вам кошти🙏🙏"
            ],
            correct: 0,
            hint: "Це клієнт-маніпулятор. Уникаємо виправдань та не піддаємося на шантаж"
        },
        {
            question: "Ситуація: Клієнт невірно вказав адресу доставки. Ми її змінили на вірну, проіформували, але клієнт у відповідь обурюється, що все влаштовано дуже незручно, раніше було краще. Що будемо робити?",
            options: [
                "Розумію повністю ваші почуття, ви праві, але не турбуйтесь, я вже все замінив🤍",
                "Адресу вже було змінено, сподіваюсь, надалі у вас не виникне подібних труднощів🙏",
                "Я вже все змінив, але давайте додатково покажу, де можна перевірити адресу перед оформленням замовлення (додаєте скріни)"
            ],
            correct: 2,
            hint: "Це заплутаний клієнт. Якщо він щось не знає чи не розуміє - пояснюємо, показуємо. Так він буде відчувати, що до його проблеми дослухались"
        },
        {
            question: "Клієнт звертається щодо пошкодженого замовлення. Ми повернули кошти, клієнт повідомляє, що йому вибачення не треба й запитує терміни повернення",
            options: [
                "Повернення відбувається у терміни, встановлені банком (зазвичай миттєво, але іноді бувають затримки). Якщо буде затримка - не турбуйтесь, кошти точно повернуться, як тільки банк обробить платіж🙏",
                "Повернення коштів уже ініційоване 💳 і надійде у строки, визначені вашим банком ⏳🏦 Ще раз перепрошую за незручності 🙏",
                "Мені щиро дуже шкода за цю ситуацію 😔💔 Розумію, наскільки це неприємно🙏 Повернення коштів уже ініційоване з нашого боку 💳✅ Іноді просто потрібно трішечки зачекати, але не турбуйтесь - кошти сто відсотків повернуться"
            ],
            correct: 0,
            hint: "Це клієнт-прагматик. Уникаємо вибачень більше, ніж 1 раз за чат, великих текстів й надмірної емпатії - це тільки розізлить."
        },
        {
            question: `Ми проінформували клієнта, що списання за погоду (спека) здійснюється системою. Клієнт протестує: "Я вже не один рік користуюсь подібними сервісами. Я знаю, як це все працює" Що скажемо?`,
            options: [
                "Якщо у вас є досвід користування подібними сервісами, ви, ймовірно, знайомі з тим, як працюють автоматичні списання. На жаль, я тут не поверну вам кошти, вибачте, будь ласка🙏",
                "Хотіла б додати, що такі списання система отримує від провайдера метеорологічної інформації, і оплата додається до чеку відповідно до цих даних. Наразі температура вища, ніж для комфортної праці кур'єрів згідно правил безпеки, тому відбувається списання🙏",
                "Підкажіть, що саме ви маєте на увазі? Зараз швиденько поясню, як у нас це насправді працює💞"
            ],
            correct: 1,
            hint: "Це клієнт-експерт. Цінує чіткість, професійну термінологію й коли дослухаються до його слів. Не вказуємо, що клієнт неправий - це лише розізлить"
        }
    ];

    let currentQuestionIndex = 0;
    let lives = 3;
    let hasAnswered = false;

    function initQuiz() {
        currentQuestionIndex = 0;
        lives = 3;
        updateHearts();
        showQuestion();
    }

    function updateHearts() {
        for (let i = 1; i <= 3; i++) {
            const heartEl = document.getElementById(`heart-${i}`);
            if (heartEl) {
                if (i <= lives) {
                    heartEl.classList.remove('heart-dead'); 
                } else {
                    heartEl.classList.add('heart-dead');    
                }
            }
        }
    }

    function showQuestion() {
        hasAnswered = false;
        quizFeedback.classList.add('hidden');
        quizNextBtn.disabled = true;
        quizNextBtn.style.opacity = '0.5';
        quizNextBtn.style.cursor = 'not-allowed';

        const currentQuestion = quizData[currentQuestionIndex];
        quizProgressTag.innerText = `Питання ${currentQuestionIndex + 1} із ${quizData.length}`;
        quizQuestionText.innerText = currentQuestion.question;

        quizOptions.forEach((button, index) => {
            button.innerText = currentQuestion.options[index];
            button.className = "quiz-option-btn"; 
            button.disabled = false;
            button.style.cursor = "pointer";
        });
    }

   quizOptions.forEach(button => {
        button.addEventListener('click', (e) => {
            if (hasAnswered) return; 
            
            hasAnswered = true;
            const selectedIndex = parseInt(e.target.getAttribute('data-index'));
            const currentQuestion = quizData[currentQuestionIndex];

            quizOptions.forEach(btn => btn.disabled = true);

            if (selectedIndex === currentQuestion.correct) {
                // Відповідь ПРАВИЛЬНА
                e.target.classList.add('option-correct');
                quizFeedback.innerText = `🎉 Правильно! ${currentQuestion.hint}`;
                quizFeedback.className = "quiz-feedback-box feedback-correct";
            } else {
                // Відповідь НЕПРАВИЛЬНА
                e.target.classList.add('option-wrong');
                quizOptions[currentQuestion.correct].classList.add('option-correct');
                
                lives--;
                updateHearts();

                quizFeedback.innerText = `❌ Неправильно. ${currentQuestion.hint}`;
                quizFeedback.className = "quiz-feedback-box feedback-wrong";
            }

            quizFeedback.classList.remove('hidden');
            quizNextBtn.disabled = false;
            quizNextBtn.style.opacity = '1';
            quizNextBtn.style.cursor = 'pointer';

            // --- ДОДАНО ТУТ: ЛОГІКА ДЛЯ ЗАВАЛЕНОГО ТЕСТУ ---
            if (lives <= 0) {
                // Життя закінчилися! Ховаємо квіз і показуємо злісну картинку
                quizScreen.classList.add('hidden');
                denScreen.classList.remove('hidden');
                
                // Також варто прибрати квіти з фону, щоб не відволікали
                const flowersContainer = document.getElementById('flowers-background');
                if (flowersContainer) flowersContainer.style.display = 'none';

                return; // Не продовжуємо логіку кнопки "Далі"
            }
            // ---------------------------------------------

            // Оновлюємо текст кнопки "Далі" (вже є у вашому коді)
            if (currentQuestionIndex === quizData.length - 1) {
                quizNextBtn.innerText = "Перейти до фіналу 🏁";
            } else {
                quizNextBtn.innerText = "Далі ➡️";
            }
        });
    });

    // ТУТ ВИПРАВЛЕНО: прибрано зайву літеру 'q' на початку
    quizNextBtn.addEventListener('click', () => {
        if (lives <= 0) {
            initQuiz();
        } else {
            currentQuestionIndex++;
            if (currentQuestionIndex < quizData.length) {
                showQuestion();
            } else {
                quizScreen.classList.add('hidden');
                galleryScreen.classList.remove('hidden');
                
                progressTag.innerText = "ФІНАЛ 🏁";
                
                if(document.getElementById('card-title')) document.getElementById('card-title').style.display = 'none';
                if(document.getElementById('card-intro')) document.getElementById('card-intro').style.display = 'none';
                cardImgContainer.style.display = 'none';
                
                cardText.innerHTML = `
                    <div style="text-align: center; padding: 2rem 0;">
                        <h2 style="color: #0f2d59; font-size: 1.6rem; margin-bottom: 1rem; font-weight: 700;">Вітаємо! Тест пройдено 🎉</h2>
                        <p style="color: #475569; font-size: 1rem; line-height: 1.6; margin-bottom: 2rem;">
                            Тепер ти ідеально знаєш, як працювати з емоціями клієнтів і зберігати свій ресурс. <br>
                            Пам'ятай, що кожен день не може бути неймовірним. Але ти неймовірний кожен день🫶
                        </p>
                        <button onclick="window.location.reload();" class="btn btn-yes" style="padding: 12px 30px; font-size: 1rem;">
                            Пройти знову
                        </button>
                    </div>
                `;
                
                const galleryNav = document.querySelector('#gallery-screen .navigation-container');
                if (galleryNav) galleryNav.style.display = 'none';
            }
        }
    }); 


    denRestartBtn.addEventListener('click', () => {
        // Ховаємо злісну картинку
        denScreen.classList.add('hidden');
        
        // Повертаємо квіти на фон
        const flowersContainer = document.getElementById('flowers-background');
        if (flowersContainer) flowersContainer.style.display = 'block';

        // Запускаємо квіз заново
        quizScreen.classList.remove('hidden'); 
        initQuiz(); 
    });
}; // <--- ТУТ ТЕПЕР ПРАВИЛЬНО ЗАКРИВАЄТЬСЯ window.onload


function createChaoticFlowers() {
    const container = document.getElementById('flowers-background');
    if (!container) return;

    // Очищаємо контейнер перед створенням
    container.innerHTML = '';

    // Вкажи, скільки всього квіточок ти хочеш бачити на екрані
    const totalFlowers = 45; 

    for (let i = 0; i < totalFlowers; i++) {
        const flower = document.createElement('div');
        flower.className = 'flower-emoji';
        flower.innerText = '🌸';

        // Генеруємо випадкове положення у відсотках від екрана (від 0% до 100%)
        const randomX = Math.random() * 100;
        const randomY = Math.random() * 100;

        flower.style.left = `${randomX}%`;
        flower.style.top = `${randomY}%`;

        // Додаємо випадкову затримку для анімації (від 0 до 5 секунд),
        // щоб кожна квіточка рухалася у своєму власному темпі
        const randomDelay = Math.random() * 5;
        flower.style.animationDelay = `${randomDelay}s, ${randomDelay * 0.5}s`;

        // Можна навіть трішки урізноманітнити розмір (від 12px до 20px)
        const randomSize = 12 + Math.random() * 8;
        flower.style.fontSize = `${randomSize}px`;

        container.appendChild(flower);
    }
}

// Запускаємо генерацію хаотичного фону
createChaoticFlowers();

// Якщо вікно браузера змінюється — перераховуємо їх, щоб не вилазили за межі
window.addEventListener('resize', createChaoticFlowers);

function makeNoButtonFlee() {
    const noBtn = document.querySelector('.btn-no');
    const card = document.querySelector('.card');
    
    if (!noBtn || !card) return;

    // Перевіряємо, чи це мобільний пристрій (ширина екрана менше 500px)
    if (window.innerWidth <= 500) {
        // Обов'язково ставимо абсолютне позиціонування, щоб кнопка могла вільно рухатися
        noBtn.style.position = 'absolute';

        // Рахуємо доступні межі всередині картки з урахуванням розмірів кнопки
        const padding = 20; // щоб кнопка не вилітала на самі краї
        const maxX = card.clientWidth - noBtn.clientWidth - padding;
        const maxY = card.clientHeight - noBtn.clientHeight - padding;

        // Генеруємо випадкові координати
        const randomX = Math.max(padding, Math.floor(Math.random() * maxX));
        const randomY = Math.max(padding, Math.floor(Math.random() * maxY));

        // Рухаємо кнопку
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    }
}

// Слухач події для мобільних телефонів (спрацьовує в момент торкання пальцем)
document.addEventListener('touchstart', function(e) {
    if (e.target && e.target.classList.contains('btn-no')) {
        e.preventDefault(); // Скасовує звичайне натискання
        makeNoButtonFlee();
    }
});