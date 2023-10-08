<script setup>
import Vue from 'vue'; // Change to './vue' or '../vue' if needed
const selectedSlideIndex = ref(0),
showAbout = ref(false);

const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
    rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

const handleScroll = () => {
    const pencilImage = document.querySelector('.pencilImage'),
    pencilTitle = document.querySelector('.pencilTitle'),
    pencilSubTitle = document.querySelector('.pencilSubTitle'),
    pencilList = document.querySelector('.pencilList'),
    qualificationGrid = document.querySelector('.qualificationGrid'),
    gridItems = document.querySelectorAll('.gridItems'),
    qualificationTitle = document.querySelector('.qualificationTitle'),
    elementsToAnimate = [pencilImage, pencilTitle, pencilSubTitle, pencilList];
    
    elementsToAnimate.forEach((element) => {
        if (isElementInViewport(element)) {
            element.classList.replace('opacity-0', 'opacity-100');
        }
    });
    
    if (isElementInViewport(qualificationGrid)) {
        qualificationTitle.classList.replace('opacity-0', 'opacity-100');
        
        gridItems.forEach((item, i) => setTimeout(() => {
            item.style.opacity = '1';
            item.style.transition = 'opacity 0.5s';
        }, i * 100));
    }
}

const slidesClick = (index) => {
    const slideToScroll = document.querySelector(`.slidecontent${index}`),
    gridContainer = document.querySelector('.grid-Container');
    
    selectedSlideIndex.value = index;
    
    gridContainer.scrollTo({
        top: slideToScroll.offsetTop - 10,
        behavior: 'smooth'
    });
}

const qualificationClick = (index) => {
    const griditems = document.querySelectorAll('.gridItems');
    
    griditems.forEach((item, i) => {
        const title = item.querySelector('.title'),
        content = item.querySelector('.content');
        
        if (i === index) {
            item.style.opacity = '1';
            item.style.height = 'unset';
            title.style.display = 'none';
            content.style.display = 'block';
        }
    });
}

window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav'),
    navButtons = document.querySelector('.navButtons');
    
    window.scrollY > 1 ? ( navButtons.classList.replace('gap-8', 'gap-2'), navButtons.classList.replace('mr-12', 'mr-6'), nav.classList.add('bg-[#111111bc]')) : ( navButtons.classList.replace('gap-2', 'gap-8'), navButtons.classList.replace('mr-6', 'mr-12'), nav.classList.remove('bg-[#111111bc]'));
});

onMounted(() => {
    const slides = document.querySelectorAll('.slide'),
    slidecontent = document.querySelectorAll('.gridItem');
    
    slides.forEach((slide, i) => {
        slidecontent[i].classList.add(`slidecontent${i}`);
    });
    
    window.addEventListener("scroll", handleScroll);
    
    handleScroll();
});
</script>

<template>
    <div id="app" class="h-full w-full">
        <header class="text-white h-full header">
            <nav class="w-full h-10 md:h-12 text-white gap-12 text-sm z-20 fixed duration-300 backdrop-blur-sm">
                <div class="h-full flex items-center float-left md:ml-6 ml-3 text-sm font-bold md:text-lg">
                    <a href="">JacksWeb</a>
                </div>
                
                <div class="float-right flex items-center duration-500 h-full md:mr-8 mr-2 gap-4 text-xs md:text-sm z-20 navButtons">
                    <a href="#app">home</a>
                    <a href="#ScrollToExpand">about</a>
                    <a href="#ScrollToContact">contact</a>
                    
                    <button @click="showAbout = !showAbout" class="w-4 hover:scale-150 duration-200">
                        <img src="../assets/icons/question.png" alt="image of a question mark" title="image of a question mark">
                    </button>
                </div>
            </nav>
            
            <section class="md:ml-10 ml-4 md:mt-32 mt-20 inline-block md:w-[60%] w-[95%]">
                <h1 class="md:text-[30px] text-xl font-bold uppercase">Bring your ideas to life</h1>
                <p class="mt-2 opacity-50 text-sm md:text-sm">Why settle for an average website when you have an exceptional idea?</p>
                <p class="opacity-50 text-xs md:text-sm">Let me build you that <span class="headerWords">exceptional</span>, hand coded website <span class="headerWords">today</span>.</p>
                
                <a class="mr-4 startButtons" href="#ScrollToContact">Contact me
                    <img class="w-8 sm:ml-4 ml-2 inline-block" src="../assets/icons/arrow.png" alt="image of an arrow" title="image of an arrow">
                </a>
                <a class="startButtons" href="#ScrollToExpand">See more
                    <img class="w-8 sm:ml-4 ml-2 inline-block" src="../assets/icons/arrow.png" alt="image of an arrow" title="image of an arrow">
                </a>
            </section>
            
            <section id="ScrollToExpand" class="absolute md:mt-auto md:h-auto md:flex-row md:p-20 md:pb-10 bottom-0 mt-10 w-full flex flex-col justify-center pb-20 items-center backdrop-blur-sm p-0 bg-[#111111ac] section1">
                
                <section class="flex md:flex-col flex-wrap md:w-[250px] pb-10 md:pb-0 p-10 md:p-0 items-center justify-center duration-200 gap-2 md:gap-0 slidesContainer">
                    <div @click="() => slidesClick(0)" class="slide0 slide md:w-[70%]">
                        <img class="slideimage" src="../assets/icons/content.png" alt="Image to represent the content slide" title="Image to represent the content slide">
                        <h2>Content</h2>
                    </div>
                    <div @click="() => slidesClick(1)" class="slide1 slide z-[2] md:w-[80%]">
                        <img class="slideimage" src="../assets/icons/pricing.png" alt="Image to represent the pricing slide" title="Image to represent the pricing slide">
                        <h2>Pricing</h2>
                    </div>
                    <div @click="() => slidesClick(2)" class="slide2 slide z-[3] md:w-[90%]" >
                        <img class="slideimage" src="../assets/icons/code.png" alt="Image to represent the code slide" title="Image to represent the code slide">
                        <h2>Code</h2>
                    </div>
                    <div @click="() => slidesClick(3)" class="slide3 slide z-[4] md:w-full swiperslideload hover:!opacity-100" >
                        <img class="slideimage" src="../assets/icons/tech.png" alt="Image to represent the tech slide" title="Image to represent the tech slide">
                        <h2 class="ml-2">Technologies</h2>
                    </div>
                    <div @click="() => slidesClick(4)" class="slide4 slide z-[3] md:w-[90%]" >
                        <img class="slideimage" src="../assets/icons/seo.png" alt="Image to represent the seo slide" title="Image to represent the seo slide">
                        <h2>SEO</h2>
                    </div>
                    <div @click="() => slidesClick(5)" class="slide5 slide z-[2] md:w-[80%]">
                        <img class="slideimage" src="../assets/icons/performance.png" alt="Image to represent the performance slide" title="Image to represent the performance slide">
                        <h2>Performance</h2>
                    </div>
                    <div @click="() => slidesClick(6)" class="slide6 slide md:w-[70%]">
                        <img class="slideimage" src="../assets/icons/success.png" alt="Image to represent the success slide" title="Image to represent the success slide">
                        <h2>Success</h2>
                    </div>
                </section>
                
                <p class="p-2 text-sm opacity-60">Scroll down to see all or click buttons!</p>
                <section class="overflow-y-scroll overflow-x-hidden md:ml-20 gap-10 p-3 border-[1px] shadow-2xl max-h-[210px] rounded-lg bg-[#11111167] grid grid-Container justify-center">
                    <div class="gridItem">
                        <img class="gridImage" src="../assets/icons/content.png" alt="Smaller image to represent the content slide" title="Smaller image to represent the content slide">
                        <h3 class="subtitle">Content</h3>
                        
                        <h2 class="title">What content is your site made up of?</h2>
                        <p class="text">The content that makes up your website, you get to choose. I work closely alongside you to ensure your website has the best content possible.<br><br>
                            I will ask you a series of questions, either on a call or over email (whichever you prefer), to get a good understanding of what you want your website to look like.<br><br>
                            I will then create a design of your website and send it over to you for approval. If you're happy with it, then I will start coding it. If you're not happy with it, then I will make the necessary changes until you are happy.<br><br>
                            Once the website is coded, I will send it over to you for approval. If you're happy with it, then I will make it live. If you're not happy with it, then I will make the necessary changes until you are happy.<br><br>
                            I make sure to stay well connected with you throughout the whole process to ensure you are happy with the website.<br><br>
                        </p>
                    </div>
                    
                    <div class="gridItem">
                        <img class="gridImage" src="../assets/icons/pricing.png" alt="Smaller image to represent the pricing slide" title="Smaller image to represent the pricing slide">
                        <h3 class="subtitle">Pricing</h3>
                        
                        <h2 class="title">How how much will it cost?</h2>
                        <p class="text">My pricing depends on the a variety of factors such as the size of the website, the complexity of the website and the time it takes to build the website.<br><br>
                            The good thing about only me building your website is I get to to choose the prices, and I like to choose fair. I understand times are tough, but starting a website is important and not all of us can afford a big company.<br><br>
                            Instead of it costing £1000+ with many strings attached, my pricing will be NO where near that.
                        </p>
                    </div>
                    
                    <div class="gridItem">
                        <img class="gridImage" src="../assets/icons/code.png" alt="Smaller image to represent the code slide" title="Smaller image to represent the code slide">
                        <h3 class="subtitle">Code</h3>
                        
                        <h2 class="title">Lets learn a bit about the code I use.</h2>
                        <p class="text">I use the most modern coding languages and frameworks to ensure it is as fast and efficient as possible.<br><br>
                            I explained about the technologies I use when coding your websites but lets explore more about what that involves.<br><br>
                            For anyone that knows about website code, you're probably most familiar with HTML, CSS and JavaScript. These are the core languages that make up any website.<br><br>
                            If you're a more advanced and experienced developer, the use of frameworks and libraries would be used to make the coding process faster and more efficient.<br><br>
                        </p>
                    </div>
                    
                    <div class="gridItem">
                        <img class="gridImage" src="../assets/icons/tech.png" alt="Smaller image to represent the tech slide" title="Smaller image to represent the tech slide">
                        <h3 class="subtitle">Technologies</h3>
                        
                        <h2 class="title">Technologies we use to build your website.</h2>
                        <p class="text">Web technologies are constantly evolving and I am always keeping up to date with the latest technologies.<br><br>
                            Before building your website I evaluate everything you want and work out the best, fastest, and most secure way of coding your website.<br><br>
                            I will most definitely use Tailwind when coding your website. This is an industry standard and is a super fast way of styling your website.<br><br>
                            Depending on the circumstances, I will use Vue js. This is a modern JavaScript framework that allows me to build your website in a super fast and efficient way.<br><br>
                            In the case in which a lot of CSS/Tailwind code is being used in separate style tags then I will use SCSS to keep the code as clean as possible.<br><br>
                            Another industry standard is Git and Github. This is a version control system that allows me to keep track of all the changes I make to your website. This is super useful as it allows me to revert back to previous versions of your website if needed, and also makes sure I don't lose any code.<br><br>
                            Of course, I will use HTML, CSS and JavaScript to build your website. These are the core languages that make up any website.
                        </p>
                    </div>
                    
                    <div class="gridItem">
                        <img class="gridImage" src="../assets/icons/seo.png" alt="Smaller image to represent the seo slide" title="Smaller image to represent the seo slide">
                        <h3 class="subtitle">SEO</h3>
                        
                        <h2 class="title">Search Engine Optimisation is important.</h2>
                        <p class="text">We make sure search engines understand your website and rank it highly. This means using the right keywords, optimising images, having a user friendly design, and making sure your site loads fast.<br><br>
                            We also make sure your website is accessible to people with visual and hearing impairments by following industry standards.<br><br>
                        </p>
                    </div>
                    
                    <div class="gridItem">
                        <img class="gridImage" src="../assets/icons/performance.png" alt="Smaller image to represent the performance slide" title="Smaller image to represent the performance slide">
                        <h3 class="subtitle">Performance</h3>
                        
                        <h2 class="title">Ultra-fast performance is key.</h2>
                        <p class="text">We optimise your website performance for lighting-fast loading. We do this by optimising every possible aspect of your site.
                        </p>
                    </div>
                    
                    <div class="gridItem">
                        <img class="gridImage" src="../assets/icons/success.png" alt="Smaller image to represent the success slide" title="Smaller image to represent the success slide">
                        <h3 class="subtitle">Success</h3>
                        
                        <h2 class="title">I want success for your website.</h2>
                        <p class="text">We work closely with you to define clear objectives and goals before the coding starts. This helps reduce the amount of time it takes to make, thus reducing the price.</p>
                    </div>
                </section>
            </section>
        </header>
        
        <aside v-if="showAbout" class="absolute top-20 right-8 z-20 font-[system-ui] bg-[#77777737] backdrop-blur-sm text-white w-[350px] p-4 rounded-md border-[1px]">
            <h2 class="font-semibold text-xl p-2 rounded">Information about this website.</h2>
            <ul class="list-disc ml-2">
                <li class="informationtext">This website was fully hand coded by me (Jack) using <a href="https://vuejs.org/" target="_blank" class="underline font-bold">Vue JS</a> and <a href="https://tailwindcss.com/" target="_blank" class="underline font-bold">Tailwind</a>, accompanied by <a href="https://sass-lang.com/" target="_blank" class="underline font-bold">SCSS.</a></li>
                <li class="informationtext">I coded it on my Mac using visual studio code.</li>
                <li class="informationtext">This website is accessible to people with visual and hearing impairments by following industry standards.</li>
                <li class="informationtext">This website is fully responsive and works on all devices.</li>
                <li class="informationtext">This website is optmimised as best as possible to promote as quick as possible loading speeds.</li>
                <li class="informationtext">If you're viewing on a big enough screen (it wont affect your experience if you aren't), then you may be curious as to why there is a random women as the background... Well, its aesthetic and is a nice, high quality picture!</li>
            </ul>
        </aside>
        
        <main class="text-white w-full">
            <section class="w-full md:py-20 pb-10 flex items-center pl-2 section2" id="section2">
                <div class="md:w-[80%] w-[95%] flex flex-row items-center justify-center md:gap-20 gap-10 mx-auto">
                    
                    <img class="opacity-0 duration-1000 pencilImage" src="../assets/images/pencil.png" alt="Image of a pencil" title="Image of a pencil">
                    
                    <div class="pt-10">
                        <h2 class="md:text-5xl text-3xl text-white pencilTitle opacity-0 duration-1000">But why choose me...</h2>
                        <p class="md:text-lg text-md mt-2 text-white pencilSubTitle opacity-0 duration-1000">I get it, there are many other website companies around, let me do our best to convince you to pick me...</p>
                        
                        <ul class="list-disc md:ml-10 ml-2 mt-12 md:text-lg text-sm text-customgreen pencilList opacity-0 duration-1000">
                            <li class="mt-1 text-md">It is just me, Jack. Take comfort in knowing you won't have to dabble in large company issues.</li>
                            <li class="mt-1 text-md">I always keeping up to date with the latest technologies.</li>
                            <li class="mt-1 text-md">I am a perfectionist and will make sure your website is perfect.</li>
                            <li class="mt-1 text-md">I am a very friendly and approachable person.</li>
                            <li class="mt-1 text-md">I am very affordable and will work with you to find a price that suits you.</li>
                        </ul>
                    </div>
                </div>
            </section>
            
            <section class="md:p-10 p-2 bg-black">
                <h2 class="md:text-2xl text-lg font-semibold text-center duration-200 opacity-0 qualificationTitle">Why am I qualified to make you a website?</h2>
                
                <div class="flex flex-wrap gap-4 justify-center pt-10 duration-200 qualificationGrid">
                    <div @click="qualificationClick(0)" class="w-[200px] gridItems grid-Item1">
                        <div class="nav-Container">
                            <h3 class="title">Experience</h3>
                            
                            <div class="content font-[system-ui] text-xs hidden p-4 pl-8">
                                <ul class="list-disc">
                                    <li>4 years as a web developer</li>
                                    <li>2 years as a freelancer</li>
                                    <li>Third year cybersecurity undergraduate</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div @click="qualificationClick(1)" class="w-[350px] gridItems grid-Item2">
                        <div class="nav-Container">
                            <h3 class="title">Education</h3>
                            
                            <div class="content font-[system-ui] text-xs hidden p-4 pl-8">
                                <ul class="list-disc">
                                    <li>Third year cybersecurity undergraduate.</li>
                                    <li>Passed with a first in both web developing modules.</li>
                                    <li>Taught the university web developer module to the first years whilst studying as a student myself.</li>
                                    <li>Completed a web developer internship.</li>
                                    <li>Worked with large company projects and smaller personal projects.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div @click="qualificationClick(2)" class="w-[350px] gridItems grid-Item3">
                        <div class="nav-Container">
                            <h3 class="title">About</h3>
                            
                            <div class="content font-[system-ui] text-xs hidden p-4 pl-8">
                                <ul class="list-disc">
                                    <li>My name is Jack</li>
                                    <li>I am 20 years old</li>
                                    <li>Coding is my passion and i have spent the past 4 years building and perfecting my skills</li>
                                    <li>I love music and guitar and studied at a music college for 2 years</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div @click="qualificationClick(3)" class="w-[300px] gridItems grid-Item4">
                        <div class="nav-Container">
                            <h3 class="title">Skills</h3>
                            
                            <div class="content font-[system-ui] text-xs hidden p-4 pl-8">
                                <ul class="list-disc">
                                    <li>HTML, CSS, JavaScript</li>
                                    <li>Vue JS, Tailwind, SCSS</li>
                                    <li>Responsive and interactive design</li>
                                    <li>SEO and performance optimisation</li>
                                    <li>Git and Github</li>
                                    <li>Knowledge in colour theory</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="ScrollToContact" class="font-[system-ui] contactSection flex flex-col items-center">
                <h2 class="md:text-2xl font-semibold mt-20 text-center md:px-10 text-md">Get in contact with me to discuss further!</h2>
                <p class="opacity-60 text-[10px] md:text-[12px] text-center md:px-10">Please drop me an email, I would love to hear from you! 
                    <br>Ask any questions you like!
                </p>
                
                <form class="md:w-1/2 w-full md:p-10 p-2 pt-6 font-[system-ui] text-sm pb-20 flex items-center flex-col" action="https://api.staticforms.xyz/submit" method="post">
                    <input class="text-white outline-none bg-[#9aaaad31] rounded pr-10 pl-2 py-1 shadow-customgreen" type="text" name="name" placeholder="Your Name">
                    <input class="text-white outline-none bg-[#9aaaad31] mt-2 rounded pr-10 pl-2 py-1 shadow-customgreen" type="text" name="email" placeholder="Your Email" />
                    <textarea placeholder="Hey there! I am interested in a website, how can we go about doing it? Thanks :)" class="text-white p-2 outline-none bg-[#9aaaad31] mt-6 resize-none w-[90%] h-24 rounded shadow-customgreen" name="message"></textarea>
                    <input type="text" name="honeypot" style="display:none">
                    <input type="hidden" name="accessKey" value="aaaaaaaa-bbbb-cccc-dddd-eeee6666kkkk">
                    <input type="hidden" name="subject" value="Contact us from - example.com" />
                    <input type="hidden" name="replyTo" value="@">
                    <input type="hidden" name="redirectTo" value="https://example.com/contact/success">
                    <input class="cursor-pointer mt-3 bg-customgreen px-4 py-1 rounded duration-200 hover:bg-[#08985e31]" type="submit" value="Submit" />
                </form>
            </section>
        </main>
        
        <footer class="bg-[#08985e40] flex items-center justify-center text-[#ffffffaa] font-[system-ui] text-xs gap-10 md:p-10 p-4 bg-black">
            <p>Copyright 2023 JacksWeb</p>
            <p>Icons by <a class="underline cursor-pointer" target="_blank" href="https://icons8.com">Icons8</a></p>
        </footer>
    </div>
</template>

<style lang="postcss">
@font-face {
    font-family: 'Exo 2';
    src: url('../assets/fonts/exo2.ttf');
    font-weight: 500;
}

@font-face {
    font-family: 'Cabin Sketch';
    src: url('../assets/fonts/cabinsketch.ttf');
    font-weight: 500;
}

html {
    scroll-behavior: smooth;
    
    #app {
        font-family: 'Exo 2', sans-serif;
        
        .informationtext {
            @apply text-sm mt-3 opacity-60;
        }
        
        .header {
            background-image: url('../assets/images/women.jpg');
            background-repeat: no-repeat;
            height: 100%;
            background-size: cover;
            
            .headerWords {
                @apply underline text-customgreen;
            }
            
            .startButtons {
                @apply inline-block pr-4 cursor-pointer pl-3 text-left rounded-md mt-4 shadow-2xl font-[system-ui] text-sm duration-200 bg-customgreen hover:bg-customgreen/50;
            }
            
            .section1 {
                
                .grid-Container {
                    grid-template-rows: repeat(7, 1fr);
                    backdrop-filter: blur(10px);
                    
                    &::-webkit-scrollbar {
                        width: 10px;
                    }
                    &::-webkit-scrollbar-track {
                        background-color: #1a2026;
                    }
                    &::-webkit-scrollbar-thumb {
                        background-color: #4b5563;
                        border-radius: 10px;
                    }
                    
                    .gridItem {
                        .gridImage {
                            @apply rounded w-4 h-4 inline-block;
                        }
                        .subtitle {
                            @apply inline-block text-xs ml-1;
                        }
                        .title {
                            @apply text-2xl font-semibold mt-2 font-[system-ui];
                        }
                        .text {
                            @apply font-[system-ui] text-xs mt-4 opacity-60 w-[250px];
                        }
                    }
                }
                
                .slidesContainer {
                    @media (min-width: 767px) {
                        &:hover .slide {
                            animation: expandSlides 0.3s ease-in-out forwards;
                        }
                    }
                    
                    @media (min-width: 767px) {
                        &:not(:hover) .slide {
                            animation: shrinkSlides 0.3s ease-in-out forwards;
                        }
                    }
                    
                    .slide {
                        @apply bg-gray-600/50 md:rounded-xl rounded md:-mt-6 md:h-14 h-10 pr-2 md:pr-0 max-h-14 duration-200 cursor-pointer flex items-center backdrop-blur-sm;
                        
                        &:hover {
                            @apply scale-105;
                        }
                        
                        .slideimage {
                            @apply p-2 lg:w-14 md:w-12 w-10 md:rounded-2xl rounded-xl;
                        }
                        
                        h2 {
                            @apply text-xs lg:text-base;
                        }
                    }
                }
            }
        }
        
        .section2 {
            font-family: 'Cabin Sketch';
            background: linear-gradient(to bottom, #0a0d0d, black);
        }
        
        .contactSection {
            background: linear-gradient(to top, #08985e40, black 80%);
        }
        
        .qualificationGrid {          
            .gridItems {
                background-size: cover;
                background-position: center;
                @apply cursor-pointer h-[100px] rounded duration-200 opacity-0;
                
                .nav-Container {
                    @apply w-full flex items-center justify-center h-full duration-200 bg-[#222925aa] backdrop-blur-sm rounded-t-sm;
                    
                    .title {
                        @apply text-sm bg-[#111111aa] p-2 rounded-md font-[system-ui] text-[#ffffffaa] duration-200;
                    }
                }
                
                &:hover .title {
                    @apply text-xs bg-transparent p-0;
                }
            }
            .grid-Item1 {
                background-image: url('../assets/images/experience.jpg');
            }
            .grid-Item2 {
                background-image: url('../assets/images/education.jpg');
            }
            .grid-Item3 {
                background-image: url('../assets/images/about.jpg');
            }
            .grid-Item4 {
                background-image: url('../assets/images/skills.jpg');
            }
        }
    }    
}

@keyframes expandSlides {
    0% {
        margin-top: -24px;
    }
    
    100% {
        margin-top: 8px;
    }
}

@keyframes shrinkSlides {
    0% {
        margin-top: 8px;
    }
    
    100% {
        margin-top: -24px;
    }
}
</style>



<!-- 
    To do:
    - Make hero page buttons work ✅
    - fix resonsiveness for bottom of blue in hero section when smaller screen size ✅
    - download fonts instead of using import ✅
    - make expand slides button work ✅
    - make sure responsiveness works for all sizes ✅
    - add correct content on each slide content ✅
    - add correct content on why choose me section ✅
    - make sure content is correct for grid section ✅
    - make sure responsiveness is correct for grid ✅
    - make sure responsiveness is correct for contact section ✅
    - camel case variables and functions ✅
    - make sure all images are optimised ✅
    - add utility colours into tailwind config ✅
    - optimise code as much as possible ✅
    - add copyright for icons8 ✅
    - fix responsiveness on content slides ✅
    - buy domain ✅
    
    - prepare tailwind and vue for release 
-->
