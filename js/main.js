(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Fixed Navbar
    $(window).scroll(function () {
        if ($(window).width() < 992) {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow');
            } else {
                $('.fixed-top').removeClass('bg-white shadow');
            }
        } else {
            if ($(this).scrollTop() > 45) {
                $('.fixed-top').addClass('bg-white shadow').css('top', -45);
            } else {
                $('.fixed-top').removeClass('bg-white shadow').css('top', 0);
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Project carousel
    $(".project-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        loop: true,
        center: true,
        dots: false,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
			0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
			576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });

    // Login Function
    $('#loginForm').on('submit', function(event) {
        event.preventDefault(); // 폼 제출을 막음

        const username = $('#username').val();
        const password = $('#password').val();
        const loginMessage = $('#loginMessage');

        // 총 56명
        const mockUsers = [
            { email: "test", password: "password123" },
            { email: "niiaa1222", password: "moon0314" },
            { email: "gunbeeya", password: "moon0314" },
            { email: "heung9", password: "moon0314" },
            { email: "jjmxc45661", password: "moon0314" },
            { email: "kim5804s", password: "moon0314" },
            { email: "성영창", password: "moon0314" },
            { email: "mjee_ee", password: "moon0314" },
            { email: "yu07", password: "moon0314" },
            { email: "yoshimoto-karesawa", password: "moon0314" },
            { email: "오세진", password: "moon0314" },
            { email: "지희", password: "moon0314" },
            { email: "rhdmswl3573", password: "moon0314" },
            { email: "hjjin1230", password: "moon0314" },
            { email: "pierrot5327", password: "moon0314" },
            { email: "장인서", password: "moon0314" },
            { email: "최정은", password: "moon0314" },
            { email: "gus9633", password: "moon0314" },
            { email: "tmisori", password: "moon0314" },
            { email: "jylee", password: "moon0314" },
            { email: "손기석", password: "moon0314" },
            { email: "김창운", password: "moon0314" },
            { email: "olyj04", password: "moon0314" },
            { email: "yeonbora1024", password: "moon0314" },
            { email: "nobacknobreakit", password: "moon0314" },
            { email: "gusgh503", password: "moon0314" },
            { email: "imflex", password: "moon0314" },
            { email: "ppsj0222", password: "moon0314" },
            { email: "구은혜", password: "moon0314" },
            { email: "alstjs906", password: "moon0314" },
            { email: "skqlsb17", password: "moon0314" },
            { email: "jury", password: "moon0314" },
            { email: "haedal", password: "moon0314" },
            { email: "이상아", password: "moon0314" },
            { email: "norangbora0514", password: "moon0314" },
            { email: "shj03033", password: "moon0314" },
            { email: "kej1018", password: "moon0314" },
            { email: "taemin7599", password: "moon0314" },
            { email: "hrlee0311", password: "moon0314" },
            { email: "sw.park", password: "moon0314" },
            { email: "scw0225", password: "moon0314" },
            { email: "nari1864", password: "moon0314" },
            { email: "hyoungj", password: "moon0314" },
            { email: "pangkyuzzang", password: "moon0314" },
            { email: "hyj119", password: "moon0314" },
            { email: "hye7219won", password: "moon0314" },
            { email: "vvjwvv", password: "moon0314" },
            { email: "naje0310", password: "moon0314" },
            { email: "yjin1014", password: "moon0314" },
            { email: "김민혁", password: "moon0314" },
            { email: "silver1226", password: "moon0314" },
            { email: "노유리", password: "moon0314" },
            { email: "alyssacow7", password: "moon0314" },
            { email: "kdh1a", password: "moon0314" },
            { email: "spark112", password: "moon0314" },
            { email: "jinho0346", password: "moon0314" },
            { email: "happyla1821", password: "moon0314" },
        ];

        // 입력된 아이디와 비밀번호가 mockUsers 배열의 사용자와 일치하는지 확인
        const user = mockUsers.find(user => user.email === username && user.password === password);

        if (user) {
            loginMessage.removeClass('text-danger').addClass('text-success');
            loginMessage.text(`컨설턴트님, 환영합니다.`);

            // 로그인 성공 시 리다이렉트 (1초 후)
            setTimeout(function() {
                window.location.href = "dashboard.html"; // 대시보드 페이지로 이동
            }, 1000);
        } else {
            loginMessage.removeClass('text-success').addClass('text-danger');
            loginMessage.text("Invalid username or password.");
        }
    });


    // 로그인 여부 확인 (비회원 상태로 설정)
    const isLoggedIn = false;

    // 공지사항 클릭 시 이동 또는 알림
    function viewNotice(noticeId) {
        if (isLoggedIn) {
            window.location.href = `notice_${noticeId}.html`;
        } else {
            alert("공지사항 조회는 회원만 가능합니다. 로그인 후 이용해 주세요.");
        }
    }

    // 한 페이지당 표시할 공지사항 수
    const itemsPerPage = 5;
    let currentPage = 1;

    // 페이지네이션 버튼을 생성하는 함수
    function setupPagination() {
        const totalItems = document.querySelectorAll('.notice-item').length;
        const pageCount = Math.ceil(totalItems / itemsPerPage);
        const pagination = document.getElementById('pagination');
        pagination.innerHTML = '';

        for (let i = 1; i <= pageCount; i++) {
            const pageItem = document.createElement('span');
            pageItem.classList.add('page-item');
            pageItem.textContent = i;
            pageItem.onclick = () => {
                currentPage = i;
                displayNotices(currentPage);
                updatePagination();
            };
            pagination.appendChild(pageItem);
        }
        updatePagination();
    }

    // 선택된 페이지에 맞는 공지사항만 표시하는 함수
    function displayNotices(page) {
        const noticeItems = document.querySelectorAll('.notice-item');
        noticeItems.forEach(item => {
            item.style.display = item.getAttribute('data-page') == page ? '' : 'none';
        });
    }

    // 페이지네이션 상태를 업데이트하는 함수
    function updatePagination() {
        const pageItems = document.querySelectorAll('.page-item');
        pageItems.forEach((item, index) => {
            if (index + 1 === currentPage) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // 초기 설정
    displayNotices(currentPage);
    setupPagination();


    
})(jQuery);

