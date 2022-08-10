const show = document.querySelector('.show');
const par = document.querySelector('#par');

const aries = document.querySelector('#aries');
const taurus = document.querySelector('#taurus');
const gemini = document.querySelector('#gemini');
const cancer = document.querySelector('#cancer');
const leo = document.querySelector('#leo');
const virgo = document.querySelector('#virgo');
const libra = document.querySelector('#libra');
const scorpio = document.querySelector('#scorpio');
const sagittarius = document.querySelector('#sagittarius');
const capricorn = document.querySelector('#capricorn');
const aquarius = document.querySelector('#aquarius');
const pisces = document.querySelector('#pisces');

const predictionsAries = ["ARIES. Use 2022 to release old belief systems and finally see the world as a blank canvas.",
    "ARIES. You are not the things that have happened to you—you are a being worthy of love and abundance beyond your wildest dreams.",
    "ARIES. Start by dedicating yourself to passion projects and people who light your soul on fire.",
    "ARIES. You may start to find that it’s easier to spend your time alone than surrounded by the wrong company this year. That realization alone will make you realize how special the people who you do align with are.",
    "ARIES. You are on the right path, but gratitude will get you to your goals much more quickly."];

const predictionsTaurus = ["TAURUS. 2022 is sure to be a transformative year with the nodal shift and eclipse season occupying your sign throughout the year.",
    "TAURUS. If you’ve been sitting in the background of your own life, this will be the year when your position finally changes and you start to see yourself as the main character that you always have been.",
    "TAURUS. Expect the unexpected when it comes to love, whether this is a surprise upgrade or completion of your existing relationship.",
    "TAURUS. You will be pleasantly surprised with the options you’ll have in the year ahead.",
    "TAURUS. There is nothing that can get in your way, besides yourself. So step out of self-doubt and start to truly believe in the power you hold."];

const predictionsGemini = ["GEMINI. This year will ask you to create a new level of stability and balance in your life.",
    "GEMINI. Try to invite yourself to find comfort in the quiet.",
    "GEMINI. You could be slowing down on travel, responsibilities, obligatory relationships, and chaos into a much simpler lifestyle. Your nervous system will surely thank you.",
    "GEMINI. When it comes to love, make sure you’re investing in the right people for the right reasons. Don’t keep someone around just to fill a void.",
    "GEMINI. Get comfortable with your own company—whether you’re in a relationship or not. A healthy partner will admire your dedication to yourself, so make this a top priority in 2022."];

const predictionsCancer = ["CANCER. This year is going to be full of social events and opportunities for you to connect deeply with others.",
    "CANCER. Make sure that you’re taking proper care of your mental and emotional health along the way and that you're giving yourself permission to intertwine rest into your daily experience, rather than waiting until you’re burnt out!",
    "CANCER. This year illuminates a clear path to connect with a soulmate.",
    "CANCER. Ask yourself whether you’re looking for noncommittal fun or dedication and longevity. Either path is yours once you choose what works best for you.",
    "CANCER. Set yourself free of mental rigidity in 2022."];

const predictionsLeo = ["LEO. This year is sure to be full of joy and celebration for you—and you are reliably ready to soak up life’s pleasures.",
    "LEO. You are sure to be surrounded by love, success, and good fortune this year.",
    "LEO. The lesson is to find peace in the midst of chaos.",
    "LEO. Your love life will prosper if you can dedicate rather than run.",
    "LEO. Let go of the timeline you had for how your life was “meant” to pan out, and start to see the beauty in life’s uncontrollable unfolding."];

const predictionsVirgo = ["VIRGO. 2022 is about to be a year of deep transformational change.",
    "VIRGO. Whether you’ve been stagnant in love, professional life, finances, your living space, or your friend circle—discontent will be a thing of the past.",
    "VIRGO. You are about to be blessed with expansion and ascension, and I see many of you stepping into the limelight with your career.",
    "VIRGO. Start to get comfortable with your wants and needs by setting strong boundaries around your precious time, and ultimately start to view your energetic well-being as a top priority.",
    "VIRGO. The term “power couple” is coming through strongly."];

const predictionsLibra = ["LIBRA. You are finally in a place where you can see how much of an obstacle your nagging thoughts can be, and will finally be ready to leave this behavior in the past.",
    "LIBRA. Treat this year as an opportunity for you to get to know yourself on a deeper and more intimate level than ever before.",
    "LIBRA. Allow your fear of loving yourself to dissolve.",
    "LIBRA. You are more than your outer shell, and you will start to discover parts of yourself that had remained unseen this year.", 
    "LIBRA. There is no limit to how lovely your life can be, and once you allow yourself to enjoy your own existence, every other aspect of your life will begin to flourish."];

const predictionsScorpio = ["SCORPIO. This year you are about to embark on a journey that wipes away all of the pain and misfortune that you’ve dealt with in the past.", 
    "SCORPIO. This will be a year of raising your cost of admission.", 
    "SCORPIO. A career upheaval happening for you this year that will change your life and lifestyle.", 
    "SCORPIO. Do not settle for less than what you deserve.", 
    "SCORPIO. Remember, if you have to perform for someone to see your worth, they were never worthy of your light to begin with."];

const predictionsSagittarius = ["SAGITTARIUS. Your spirit has been calling out to you for a while to revisit your childhood dreams and desires.", 
    "SAGITTARIUS. This will be the year for you to step outside of your daily routine and find new ways of enjoying the life that you’ve been gifted.", 
    "SAGITTARIUS. Your love life is about to become mellow in a truly beautiful way.", 
    "SAGITTARIUS. If you can find more work-life balance, your personal relationships will begin to thrive.", 
    "SAGITTARIUS. When you make an effort to sit in gratitude each day that you wake up and have a new chance, the universe will bless you for your thankful approach."];

const predictionsCapricorn = ["CAPRICORN. You gaining new perspective on your life this year and taking yourself off the hamster wheel of feeling, thinking, and behaving in the same ways you have for years.", 
    "CAPRICORN. If you are willing to take accountability to how you’ve held yourself back from receiving the blessings that you desire, you will be gifted with good fortune beyond your wildest dreams.", 
    "CAPRICORN. Start to step outside your comfort zone.", 
    "CAPRICORN. You are a gift to this earth, and once you start treating yourself more kindly and with more support, it being easier for you to accept support and kindness from others.", 
    "CAPRICORN. Expect your collaborations and close relationships to bloom in 2022 from your newfound open-heartedness."];

const predictionsAquarius = ["AQUARIUS. This year is going to be filled with opportunities for you to change the narrative that other people have about the meaning of life.", 
    "AQUARIUS. If you are able to reflect and share your experiences with empowerment, you can expect to turn your mess into your message in 2022.", 
    "AQUARIUS. You being in a great space with the community you have chosen to surround yourself with. Expect this to expand in the new year, welcoming even more pure-hearted people into your heart.", 
    "AQUARIUS. This year is about to blow your mind in the best of ways with what you have in store.", 
    "AQUARIUS. Use the pressure to turn your life into a diamond-encrusted masterpiece."];

const predictionsPisces = ["PISCES. You are about to embark on a journey of self-discovery.",
    "PISCES. Letting yourself savor your life a bit more will be the exact remedy your heart has been asking for all these years.", 
    "PISCES. Life does not need to feel loveless, love does not need to feel like work, and work does not need to consume your life.", 
    "PISCES. Let yourself step into true vulnerability this year to remind yourself. You are safe to open up to life and all of its endless possibilities.", 
    "PISCES. Opening your heart will lead you to joy and success that at one point you could have only ever dreamed of."];


aries.addEventListener('click', function() {
    let randomAries = predictionsAries [Math.floor (Math.random() * predictionsAries.length)];
    show.style.display = 'block'
    par.textContent = randomAries;
})

taurus.addEventListener('click', function() {
    let randomTaurus = predictionsTaurus [Math.floor (Math.random() * predictionsTaurus.length)];
    show.style.display = 'block'
    par.textContent = randomTaurus;
})

gemini.addEventListener('click', function() {
    let randomGemini = predictionsGemini [Math.floor (Math.random() * predictionsGemini.length)];
    show.style.display = 'block'
    par.textContent = randomGemini;
})

cancer.addEventListener('click', function() {
    let randomCancer = predictionsCancer [Math.floor (Math.random() * predictionsCancer.length)];
    show.style.display = 'block'
    par.textContent = randomCancer;
})

leo.addEventListener('click', function() {
    let randomLeo = predictionsLeo [Math.floor (Math.random() * predictionsLeo.length)];
    show.style.display = 'block'
    par.textContent = randomLeo;
})

virgo.addEventListener('click', function() {
    let randomVirgo = predictionsVirgo [Math.floor (Math.random() * predictionsVirgo.length)];
    show.style.display = 'block'
    par.textContent = randomVirgo;
})

libra.addEventListener('click', function() {
    let randomLibra = predictionsLibra [Math.floor (Math.random() * predictionsLibra.length)];
    show.style.display = 'block'
    par.textContent = randomLibra;
})

scorpio.addEventListener('click', function() {
    let randomScorpio = predictionsScorpio [Math.floor (Math.random() * predictionsScorpio.length)];
    show.style.display = 'block'
    par.textContent = randomScorpio;
})

sagittarius.addEventListener('click', function() {
    let randomSagittarius = predictionsSagittarius [Math.floor (Math.random() * predictionsSagittarius.length)];
    show.style.display = 'block'
    par.textContent = randomSagittarius;
})

capricorn.addEventListener('click', function() {
    let randomCapricorn = predictionsCapricorn [Math.floor (Math.random() * predictionsCapricorn.length)];
    show.style.display = 'block'
    par.textContent = randomCapricorn;
})

aquarius.addEventListener('click', function() {
    let randomAquarius = predictionsAquarius [Math.floor (Math.random() * predictionsAquarius.length)];
    show.style.display = 'block'
    par.textContent = randomAquarius;
})

pisces.addEventListener('click', function() {
    let randomPisces = predictionsPisces [Math.floor (Math.random() * predictionsPisces.length)];
    show.style.display = 'block'
    par.textContent = randomPisces;
})