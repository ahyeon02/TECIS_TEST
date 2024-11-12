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


const posts = [
  { id: 1, name: "윤서준", start: "2024-02-17", finish: "2024-10-23", status: "종결", files: [
      { name: "test.pdf", path: "pdf/lab0-setup.pdf" },
      { name: "portfolio.docx", path: "path/to/portfolio.docx" }
  ]},
  { id: 2, name: "김예진", start: "2024-04-22", finish: "-", status: "진행중", files: [
      { name: "andrew_report.pdf", path: "path/to/andrew_report.pdf" },
      { name: "andrew_resume.docx", path: "path/to/andrew_resume.docx" }
  ]},
  { id: 3, name: "서수현", start: "2024-04-25", finish: "2024-09-11", status: "종결", files: [
      { name: "christopher_plan.pdf", path: "path/to/christopher_plan.pdf" },
      { name: "jamil_notes.txt", path: "path/to/jamil_notes.txt" }
  ]},
  { id: 4, name: "김지민", start: "2024-05-13", finish: "-", status: "진행중", files: [
      { name: "nirav_code.pdf", path: "path/to/nirav_code.pdf" },
      { name: "frontend_design.docx", path: "path/to/frontend_design.docx" }
  ]}
];

let filteredPosts = posts;  // 검색 및 페이지네이션에 사용되는 배열
const postsPerPage = 5;  // 페이지당 게시글 수
let currentPage = 1;

// 페이지네이션 및 게시글 표시 함수
function displayPosts() {
  const start = (currentPage - 1) * postsPerPage;
  const end = start + postsPerPage;
  const paginatedPosts = filteredPosts.slice(start, end); // `filteredPosts` 사용

  const postResults = document.getElementById("post-results");
  postResults.innerHTML = '';

  paginatedPosts.forEach(post => {
      // 게시글 행
      const row = document.createElement("tr");
      row.classList.add("post-row");
      row.onclick = () => toggleFileList(post.id);
      row.style.cursor = "pointer";
      row.innerHTML = `
          <td class="border-bottom-0"><h6 class="fw-semibold mb-0">${post.id}</h6></td>
          <td class="border-bottom-0">
            <h6 class="fw-semibold mb-1">${post.name}</h6>
          </td>
          <td class="border-bottom-0">
            <p class="mb-0 fw-normal">${post.start}</p>
          </td>
          <td class="border-bottom-0">
            <p class="mb-0 fw-normal">${post.finish}</p>
          </td>
          <td class="border-bottom-0">
            <div class="d-flex align-items-center gap-2">
              <span class="badge bg-primary rounded-3 fw-semibold">${post.status}</span>
            </div>
          </td>
      `;
      postResults.appendChild(row);

      // 파일 리스트 행 (초기에 숨김)
      const fileRow = document.createElement("tr");
      fileRow.classList.add("file-list");
      fileRow.id = `file-list-${post.id}`;
      fileRow.style.display = "none"; // 초기 숨김 설정
      fileRow.innerHTML = `
          <td colspan="5">
              <ul>
                  ${post.files.map(file => `<li class="file-item" onclick="openFile('${file.path}', '${file.name}')">${file.name}</li>`).join('')}
              </ul>
          </td>
      `;
      postResults.appendChild(fileRow);
  });

  setupPagination();
}

// 파일 리스트 표시/숨김 함수
function toggleFileList(postId) {
  const fileRow = document.getElementById(`file-list-${postId}`);
  fileRow.style.display = fileRow.style.display === "none" ? "table-row" : "none";
}

// 파일 열기 함수
function openFile(filePath, fileName) {
  window.open(filePath, "_blank"); // 파일 새 창 열기
}

// 검색 함수
function searchPosts() {
  const query = document.getElementById("search-input").value;
  const filter = document.getElementById("filter-select").value;
  const postResults = document.getElementById("post-results");
  postResults.innerHTML = ''; // 기존 결과 초기화

  // 필터에 따라 게시글 필터링
  filteredPosts = posts.filter(post => {
    if (filter === "name") {
        return post.name.includes(query);
    } else if (filter === "id") {
        return post.id.toString().includes(query);
    }
    return false;
});

  // 검색 결과 표시
  filteredPosts.forEach(post => {
      const postDiv = document.createElement("tr");
      postDiv.classList.add("post-row");
      postDiv.onclick = () => toggleFileList(post.id);
      postDiv.style.cursor = "pointer";
      postDiv.innerHTML = `
        <td class="border-bottom-0"><h6 class="fw-semibold mb-0">${post.id}</h6></td>
        <td class="border-bottom-0">
          <h6 class="fw-semibold mb-1">${post.name}</h6>
        </td>
        <td class="border-bottom-0">
          <p class="mb-0 fw-normal">${post.start}</p>
        </td>
        <td class="border-bottom-0">
          <p class="mb-0 fw-normal">${post.finish}</p>
        </td>
        <td class="border-bottom-0">
          <div class="d-flex align-items-center gap-2">
            <span class="badge bg-primary rounded-3 fw-semibold">${post.status}</span>
          </div>
        </td>
      `;
      postResults.appendChild(postDiv);
      
      const fileRow = document.createElement("tr");
      fileRow.classList.add("file-list");
      fileRow.id = `file-list-${post.id}`;
      fileRow.style.display = "none"; // 초기 숨김 설정
      fileRow.innerHTML = `
          <td colspan="5">
              <ul>
                  ${post.files.map(file => `<li class="file-item" onclick="openFile('${file.path}', '${file.name}')">${file.name}</li>`).join('')}
              </ul>
          </td>
      `;
      postResults.appendChild(fileRow);
  });

  // 결과가 없을 경우
  if (filteredPosts.length === 0) {
      postResults.innerHTML = '<p>검색 결과가 없습니다.</p>';
  }

  // 검색 결과에 맞게 페이지네이션 재설정
  setupPagination();
}

document.getElementById("search-input").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
    searchPosts();  // 엔터를 눌렀을 때 검색 함수 호출
  }
});

// 페이지네이션 버튼 생성 함수
function setupPagination() {
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = '';

  for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement("span");
      pageButton.classList.add("page-item");
      pageButton.innerText = i;
      pageButton.onclick = () => {
          currentPage = i;
          displayPosts();
      };
      if (i === currentPage) pageButton.classList.add("active");
      paginationContainer.appendChild(pageButton);
  }
}

// 초기 게시글 표시
displayPosts();
