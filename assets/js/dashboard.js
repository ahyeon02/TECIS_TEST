$(function () {


  // =====================================
  // Profit
  // =====================================
  var chart = {
    series: [
      { name: "Earnings this month:", data: [355, 390, 300, 350, 390, 180, 355, 390] },
      { name: "Expense this month:", data: [280, 250, 325, 215, 250, 310, 280, 250] },
    ],

    chart: {
      type: "bar",
      height: 345,
      offsetX: -15,
      toolbar: { show: true },
      foreColor: "#adb0bb",
      fontFamily: 'inherit',
      sparkline: { enabled: false },
    },


    colors: ["#5D87FF", "#49BEFF"],


    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "35%",
        borderRadius: [6],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all'
      },
    },
    markers: { size: 0 },

    dataLabels: {
      enabled: false,
    },


    legend: {
      show: false,
    },


    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },

    xaxis: {
      type: "category",
      categories: ["16/08", "17/08", "18/08", "19/08", "20/08", "21/08", "22/08", "23/08"],
      labels: {
        style: { cssClass: "grey--text lighten-2--text fill-color" },
      },
    },


    yaxis: {
      show: true,
      min: 0,
      max: 400,
      tickAmount: 4,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    stroke: {
      show: true,
      width: 3,
      lineCap: "butt",
      colors: ["transparent"],
    },


    tooltip: { theme: "light" },

    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 3,
            }
          },
        }
      }
    ]


  };

  var chart = new ApexCharts(document.querySelector("#chart"), chart);
  chart.render();


  // =====================================
  // Breakup
  // =====================================
  var breakup = {
    color: "#adb5bd",
    series: [38, 40, 25],
    labels: ["2022", "2021", "2020"],
    chart: {
      width: 180,
      type: "donut",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
        },
      },
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors: ["#5D87FF", "#ecf2ff", "#F9F9FD"],

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 150,
          },
        },
      },
    ],
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };

  var chart = new ApexCharts(document.querySelector("#breakup"), breakup);
  chart.render();



  // =====================================
  // Earning
  // =====================================
  var earning = {
    chart: {
      id: "sparkline3",
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "Earnings",
        color: "#49BEFF",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#f3feff"],
      type: "solid",
      opacity: 0.05,
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#earning"), earning).render();
})


const itemsPerPage = 5;
let currentPage = 1;
  
// 페이지네이션 생성
function setupPagination() {
  const totalItems = document.querySelectorAll('.student-item').length;
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
  
// 공지사항 표시
function displayNotices(page) {
  const noticeItems = document.querySelectorAll('.student-item');
  noticeItems.forEach(item => {
    item.style.display = item.getAttribute('data-page') == page ? '' : 'none';
  });
}
  
// 페이지네이션 상태 업데이트
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

  //학생 데이터
const posts = [
  { id: 1, title: "Sunil Joshi", assigned: "Web Designer", session: "$3.9", status: "Low", files: [
      { name: "sunil_profile.pdf", path: "path/to/sunil_profile.pdf" },
      { name: "portfolio.docx", path: "path/to/portfolio.docx" }
  ]},
  { id: 2, title: "Andrew McDownland", assigned: "Project Manager", session: "$24.5k", status: "Medium", files: [
      { name: "andrew_report.pdf", path: "path/to/andrew_report.pdf" },
      { name: "andrew_resume.docx", path: "path/to/andrew_resume.docx" },
      { name: "project_details.xlsx", path: "path/to/project_details.xlsx" }
  ]},
  { id: 3, title: "Christopher Jamil", assigned: "Project Manager", session: "$12.8k", status: "High", files: [
      { name: "christopher_plan.pdf", path: "path/to/christopher_plan.pdf" },
      { name: "jamil_notes.txt", path: "path/to/jamil_notes.txt" }
  ]},
  { id: 4, title: "Nirav Joshi", assigned: "Frontend Engineer", session: "$2.4k", status: "Critical", files: [
      { name: "nirav_code.pdf", path: "path/to/nirav_code.pdf" },
      { name: "frontend_design.docx", path: "path/to/frontend_design.docx" }
  ]}
];

// 검색 필터 함수
function searchPosts() {
  const query = document.getElementById("search-input").value.toLowerCase();
  const filter = document.getElementById("filter-select").value;

  posts.forEach(post => {
      post.isVisible = (filter === "title" ? post.title : post.id.toString()).toLowerCase().includes(query);
  });

  currentPage = 1;
  displayPosts();
}