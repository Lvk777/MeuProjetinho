// Preloader
$(document).ready(function () {
    setTimeout(function () {
        $('.wrapper').addClass('loaded');
    }, 2500);
});

// designer text rotation
const designerTexts = ["Designer", "Developer", "Freelancer"];
const designerSwapInterval = 4200;

function rotateDesignerText() {
    const label = document.querySelector('.designer');
    if (!label) return;

    let index = 0;
    label.textContent = designerTexts[index];

    setInterval(() => {
        index = (index + 1) % designerTexts.length;
        label.textContent = designerTexts[index];
    }, designerSwapInterval);
}

window.addEventListener('load', rotateDesignerText);
// designer text rotation end

// card Tabs
const tabs = document.getElementById('icetab-container')?.children || [];
const tabs2 = document.getElementById('icetab-container2')?.children || [];
const tabcontents = document.getElementById('icetab-content')?.children || [];

function handleTabClick() {
    const tabIndex = this.mynum;
    if (tabIndex === undefined) return;

    Array.from(tabcontents).forEach((content, idx) => {
        content.classList.toggle('tab-active', idx === tabIndex);
    });

    Array.from(tabs).forEach((tab, idx) => {
        tab.classList.toggle('current-tab', idx === tabIndex);
    });
}

function handleSecondaryTabClick() {
    const tabIndex = this.mynum;
    if (tabIndex === undefined) return;

    Array.from(tabcontents).forEach((content, idx) => {
        content.classList.toggle('tab-active', idx === tabIndex);
    });

    Array.from(tabs2).forEach((tab, idx) => {
        tab.classList.toggle('current-tab', idx === tabIndex);
    });
}

Array.from(tabs).forEach((tab, index) => {
    tab.mynum = index;
    tab.addEventListener('click', handleTabClick, false);
});

Array.from(tabs2).forEach((tab, index) => {
    tab.mynum = index;
    tab.addEventListener('click', handleSecondaryTabClick, false);
});
// card Tabs end

// circle Img my project click event
const elements = document.getElementById('portfolio');
const homeNavbar = document.getElementById('home');
const circularImgClick = document.getElementsByClassName('circular_text_main');

if (circularImgClick.length > 0 && elements && homeNavbar) {
    circularImgClick[0].addEventListener('click', () => {
        homeNavbar.classList.remove('tab-active');
        elements.classList.add('tab-active');
    });
}

// Dark/ Light Mode Toggle
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var sunIcon = document.getElementById("sunIcon");
    var moonIcon = document.getElementById("moonIcon");

    if (element.classList.contains("dark-mode")) {
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
        localStorage.setItem("mode", "dark");
    } else {
        moonIcon.classList.add("hidden");
        sunIcon.classList.remove("hidden");
        localStorage.setItem("mode", "light");
    }
}
document.addEventListener("DOMContentLoaded", function () {
    const storedMode = localStorage.getItem("mode");
    if (storedMode === "dark") {
        document.body.classList.add("dark-mode");
        var sunIcon = document.getElementById("sunIcon");
        var moonIcon = document.getElementById("moonIcon");
        sunIcon.classList.add("hidden");
        moonIcon.classList.remove("hidden");
    }
});
// Dark/ Light Mode Toggle end

// Portfolio Pop-up
$(".pop-up").on("click", function () {
    $(".overlay").addClass("is-on");
});

$("#close").on("click", function () {
    $(".overlay").removeClass("is-on");
});
// Portfolio Pop-up end

// Share Btn
$(document).ready(function () {
    $(".share-btn").click(function (e) {
        $('.networks-5').not($(this).next(".networks-5")).each(function () {
            $(this).removeClass("active");
        });
        $(this).next(".networks-5").toggleClass("active");
    });
});
// Share Btn End

// Testimonial Card Slider
$(function () {
    $('.testimonials_card').on('init', function (event, slick) {
        $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
        $('.current').text(slick.currentSlide + 1);
        $('.total').text(slick.slideCount);
    })
        .slick({
            autoplay: true,
            autoplaySpeed: 3000,
            infinite: true,
            arrows: true,
            prevArrow: '<span class="prev-arrow"><i class="ri-arrow-left-s-line"></i></span>',
            nextArrow: '<span class="next-arrow"><i class="ri-arrow-right-s-line"></i></span>',
        })
        .on('beforeChange', function (event, slick, currentSlide, nextSlide) {
            $('.current').text(nextSlide + 1);
        });
});
// Testimonial Card Slider End

// View More View Less btn
$(document).ready(function () {
    $("#toggle").click(function () {
        var elem = $("#toggle").text();
        if (elem == "View More") {
            $("#toggle").text("View Less");
            $("#text").slideDown();
        } else {
            $("#toggle").text("View More");
            $("#text").slideUp();
        }
    });
});
// View More View Less btn End

// blog Page Pop Up
$(document).ready(function () {
    $('.trigger').click(function () {
        $('.modal-wrapper').toggleClass('open');
        $('.page-wrapper').toggleClass('blur');
        return false;
    });
});
// blog Page Pop Up End

// blog_pop_up_slider
$(function () {
    $('.blog_pop_up_slider').slick({
        infinity: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        arrows: false,
        prevArrow: '<span class="prev-btn"><i class="fa-solid fa-arrow-left"></i> Prev </span>',
        nextArrow: '<span class="next-btn"> Next <i class="fa-solid fa-arrow-right"></i> </span>',
        responsive: [
            {
                breakpoint: 645,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    arrows: false,
                }
            }
        ]
    });
});
// blog_pop_up_slider end

// form focus styling
$(function () {
    const inputs = $('input, textarea');
    inputs.on('focus', function () {
        $(this).parent().addClass('active');
    });
    inputs.on('blur', function () {
        if ($(this).val()) {
            $(this).parent().addClass('active');
        } else {
            $(this).parent().removeClass('active');
        }
    });
});
// form focus styling end

// side Nav 
function openNav() {
    var side = document.getElementById("mySidenav");
    if (side.style.width == "300px") {
        side.style.width = "0px";
    } else {
        side.style.width = "300px";
    }
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

// cursor
let cursor = document.querySelector('.cursor');
let cursorScale = document.querySelectorAll('a,button,.pop-up,.trigger,.share,#close,.toggle,#vimeo,#youtube,.link,.gallery');
let mouseX = 0;
let mouseY = 0;

gsap.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        gsap.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY,
            }
        })
    }
});

window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
})
cursorScale.forEach(link => {
    link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        if (link.classList.contains('small')) {
            cursor.classList.remove('grow');
            cursor.classList.add('grow-small');
        }
    });

    link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
        cursor.classList.remove('grow-small');
    });
});

// Whole Page Scrolling Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.fade_up');
hiddenElements.forEach((el) => observer.observe(el));


// pop video
$(document).ready(function () {
    $('#vimeo').magnificPopup({
        items: {
            src: 'https://vimeo.com/259411563'
        },
        type: 'iframe'
    });

    $('#youtube').magnificPopup({
        items: {
            src: 'https://www.youtube.com/watch?v=OZzoAw9QHXY'
        },
        type: 'iframe'
    });

    $('.link').magnificPopup({
        type: 'soundcloud',
        items: {
            src: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/163522130&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true'
        },
        type: 'iframe',
    });

});

// gallary code
window.addEventListener("load", () => {
    for (let i of document.querySelectorAll(".gallery img")) {
        i.onclick = () => i.classList.toggle("full");
    }
});

// skill bar function
$(function () {
    $('.circlechart').circlechart();
});

// Hire Me button -> activate Contact tab and smooth scroll
document.addEventListener('DOMContentLoaded', function () {
    try {
        const hireBtn = document.querySelector('.hire_me');
        const contactSection = document.getElementById('contact');
        const tabContentWrap = document.getElementById('icetab-content');

        function activateContact() {
            if (!contactSection || !tabContentWrap) return;
            const current = tabContentWrap.querySelector('.tabcontent.tab-active');
            if (current) current.classList.remove('tab-active');
            contactSection.classList.add('tab-active');
            contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        if (hireBtn) {
            hireBtn.addEventListener('click', function (e) {
                e.preventDefault();
                activateContact();
            });
        }
    } catch (e) {
        // no-op
    }
});

// Send Message form -> EmailJS integration
document.addEventListener('DOMContentLoaded', function () {
    try {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;

        if (window.emailjs) {
            emailjs.init('OMi80vFzhCEWJH5UB');
        }

        const statusNode = document.getElementById('contactStatus');
        const submitBtn = document.getElementById('contactSubmit');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        contactForm.addEventListener('submit', async function (event) {
            event.preventDefault();

            if (!window.emailjs) {
                if (statusNode) {
                    statusNode.textContent = 'Não foi possível carregar o EmailJS no momento.';
                }
                return;
            }

            const serviceId = contactForm.dataset.emailjsService || 'service_portfolio';
            const templateId = contactForm.dataset.emailjsTemplate || 'template_contact';

            if (statusNode) {
                statusNode.textContent = '';
            }

            const templateParams = {
                from_name: (document.getElementById('name')?.value || '').trim(),
                reply_to: (document.getElementById('email')?.value || '').trim(),
                phone: (document.getElementById('phone')?.value || '').trim(),
                subject: (document.getElementById('subject')?.value || '').trim(),
                project: (document.getElementById('project')?.value || '').trim(),
            };

            const missingField = Object.entries(templateParams).find(([, value]) => value.length === 0);
            if (missingField) {
                if (statusNode) {
                    statusNode.textContent = 'Preencha todos os campos obrigatorios antes de enviar.';
                }
                return;
            }

            const numericPhone = templateParams.phone.replace(/\D/g, '');
            if (numericPhone.length < 10 || numericPhone.length > 15) {
                if (statusNode) {
                    statusNode.textContent = 'Informe um telefone valido com DDD (apenas numeros).';
                }
                document.getElementById('phone')?.focus();
                return;
            }

            if (!emailRegex.test(templateParams.reply_to)) {
                if (statusNode) {
                    statusNode.textContent = 'Informe um e-mail valido para contato.';
                }
                document.getElementById('email')?.focus();
                return;
            }

            try {
                if (statusNode) {
                    statusNode.textContent = 'Enviando mensagem...';
                }
                if (submitBtn) {
                    submitBtn.disabled = true;
                }

                await emailjs.send(serviceId, templateId, templateParams);

                contactForm.reset();
                contactForm.querySelectorAll('.form').forEach((wrapper) => wrapper.classList.remove('active'));

                if (statusNode) {
                    statusNode.textContent = 'Mensagem enviada com sucesso!';
                }
            } catch (error) {
                if (statusNode) {
                    const details = error?.text || error?.message || `status ${error?.status ?? 'desconhecido'}`;
                    statusNode.textContent = `Nao foi possivel enviar a mensagem. Verifique as configuracoes do EmailJS e tente novamente. (Detalhes: ${details})`;
                }
                console.error('EmailJS error:', error);
            } finally {
                if (submitBtn) {
                    submitBtn.disabled = false;
                }
            }
        });
    } catch (e) {
        // no-op
    }
});
