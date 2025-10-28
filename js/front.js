

// header menu
document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector(".burger-menu");
  const mobileMenu = document.querySelector(".mobile-menu");
  const closeButton = document.querySelector(".burger-menu-close");
  
  // Проверяем, существуют ли необходимые элементы
  if (!burgerMenu || !mobileMenu) {
    console.error("Не найдены необходимые элементы для бургер-меню");
    return;
  }

  // Функция закрытия меню
  const closeMenu = () => {
    mobileMenu.classList.remove("active");
  };

  // Функция открытия/закрытия меню
  const toggleMenu = () => {
    mobileMenu.classList.toggle("active");
  };

  // Открытие/закрытие по клику на бургер
  burgerMenu.addEventListener("click", toggleMenu);

  // Закрытие по клику на кнопку закрытия
  if (closeButton) {
    closeButton.addEventListener("click", closeMenu);
  }

  // Закрытие меню при клике вне его
  document.addEventListener("click", (e) => {
    if (!burgerMenu.contains(e.target) && 
        !mobileMenu.contains(e.target) && 
        (!closeButton || !closeButton.contains(e.target))) {
      closeMenu();
    }
  });

  // Закрытие меню при нажатии Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMenu();
    }
  });
});

// sticky header
document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector('.header');
    const mainContent = document.querySelector('.main');
    let lastScrollY = window.scrollY;
    let ticking = false;

    // Вычисляем высоту шапки
    const headerHeight = header.offsetHeight;
    
    // Устанавливаем начальный отступ для контента
    mainContent.style.paddingTop = `${headerHeight}px`;

    function updateHeader() {
        const currentScrollY = window.scrollY;

        // Логика для sticky header
        if (currentScrollY > 300) {
            if (currentScrollY < lastScrollY) {
                // Скроллим вверх - показываем шапку
                header.classList.add('sticky');
            } else {
                // Скроллим вниз - скрываем шапку
                header.classList.remove('sticky');
            }
        } else {
            // Вверху страницы - скрываем шапку
            header.classList.remove('sticky');
        }

        // Логика для active класса (когда проскроллили высоту шапки)
        if (currentScrollY > headerHeight) {
            header.classList.add('active');
        } else {
            header.classList.remove('active');
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }

    window.addEventListener('scroll', onScroll);
});




document.addEventListener('DOMContentLoaded', function() {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log('Element is visible:', entry.target);
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, 
        rootMargin: '0px', 
        threshold: 0.01
    });
  
    const sections = document.querySelectorAll('section');
    console.log('Sections found:', sections);  // Логирование выбранных элементов
  
    sections.forEach(section => {
        observer.observe(section);
    });
});



document.addEventListener('DOMContentLoaded', () => {
  const recentSlider = new Swiper('.recent-product__slider', {
    // modules: [Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    navigation: {
      nextEl: '.recent-product__next',
      prevEl: '.recent-product__prev',
    },
    breakpoints: {
      320: { slidesPerView: 1.2, spaceBetween: 16 },
      576: { slidesPerView: 2, spaceBetween: 20 },
      992: { slidesPerView: 3, spaceBetween: 24 },
      1280: { slidesPerView: 4, spaceBetween: 30 },
    },
  });
});



document.addEventListener('DOMContentLoaded', function() {
// Инициализация Swiper
    const swiper = new Swiper('.services-swiper__wrapper', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        speed: 600,
        navigation: {
            nextEl: '.services-swiper__button--next',
            prevEl: '.services-swiper__button--prev',
        },
        breakpoints: {
            1440: { slidesPerView: 4 },
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            567: { slidesPerView: 2 },
            480: { slidesPerView: 2 },
            367: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
        }
    });

    // FancyBox уже автоматически инициализируется на [data-fancybox="gallery"]
    // Можно добавить дополнительные опции:
    Fancybox.bind("[data-fancybox='gallery']", {
        Thumbs: false,
        Toolbar: true,
        animated: true,
        showClass: "fancybox-fadeIn",
        hideClass: "fancybox-fadeOut",
    });
});



document.addEventListener('DOMContentLoaded', () => {
  const resetBtn = document.querySelector('.catalog-filters__reset');
  resetBtn?.addEventListener('click', () => {
    document.querySelector('.catalog-filters').reset();
  });

  // Простая имитация пагинации
  const pages = document.querySelectorAll('.catalog-pagination__item');
  pages.forEach(page => {
    page.addEventListener('click', () => {
      pages.forEach(p => p.classList.remove('active'));
      page.classList.add('active');
    });
  });
});




  

document.addEventListener('DOMContentLoaded', () => {
  const cart = document.querySelector('.cart');

  cart.addEventListener('click', e => {
    if (e.target.closest('.cart-item__qty-btn')) {
      const btn = e.target.closest('.cart-item__qty-btn');
      const input = btn.parentElement.querySelector('.cart-item__qty-input');
      let value = parseInt(input.value);

      if (btn.dataset.action === 'increment') {
        value++;
      } else if (btn.dataset.action === 'decrement' && value > 1) {
        value--;
      }

      input.value = value;
    }

    if (e.target.closest('.cart-item__remove')) {
      const item = e.target.closest('.cart-item');
      item.remove();
    }
  });
});







document.addEventListener('DOMContentLoaded', () => {
  if (typeof Swiper === 'undefined') return;

  const heroSwiper = new Swiper('.hero__slider', {
    slidesPerView: 1,
    loop: true,
    speed: 800,
    navigation: {
      nextEl: '.hero__arrow--next',
      prevEl: '.hero__arrow--prev',
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  const navButtons = Array.from(document.querySelectorAll('.hero__nav-item'));

  // Обработчик для навигационных кнопок
  navButtons.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      heroSwiper.slideToLoop(i);
    });
  });

  // Обновление активного состояния навигации
  heroSwiper.on('slideChange', () => {
    updateNav(heroSwiper.realIndex);
  });

  heroSwiper.on('init', () => {
    updateNav(heroSwiper.realIndex);
  });

  function updateNav(activeIndex) {
    navButtons.forEach((btn, i) => {
      btn.classList.toggle('active', i === activeIndex);
      btn.setAttribute('aria-selected', i === activeIndex);
    });
  }
});