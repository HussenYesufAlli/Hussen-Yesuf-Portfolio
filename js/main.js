const menuButton = document.querySelector(".btn-humburger");
const mobileMenu = document.querySelector(".main-nav-mobile");
const closeButton = document.querySelector(".close-btn-menu");
const menuItems = document.querySelectorAll("#menu-list li a");

const openMenu = () => {
  mobileMenu.classList.add("open-nav-links");
};

menuButton.addEventListener("click", () => openMenu());
closeButton.addEventListener("click", () => {
  mobileMenu.classList.remove("open-nav-links");
});

menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    mobileMenu.classList.remove("open-nav-links");
  });
});

const projectDatas = [
  {
    proj_name: "Tonix",
    proj_title: "CANOPY",
    proj_portfolio: "img/work-img/Snapshoot-Portfolio.png",
    proj_desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    proj_technology: ["html", "css", "javaScript", "Ruby", "Boostrap"],
    proj_list: ["Back End Dev", "2015"],
    live_demo: "https://hussenyesufalli.github.io/Hussen-Yesuf-Portfolio/",
    source_code:
      "https://github.com/HussenYesufAlli/Hussen-Yesuf-Portfolio.git",
  },
  {
    proj_name: "Multi-Post Stories",
    proj_title: "CANOPY",
    proj_portfolio: "img/work-img/Snapshoot-Portfolio-2.png",
    proj_desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    proj_technology: ["html", "css", "javaScript", "Ruby", "Boostrap"],
    proj_list: ["Back End Dev", "2015"],
    live_demo: "https://hussenyesufalli.github.io/Hussen-Yesuf-Portfolio/",
    source_code:
      "https://github.com/HussenYesufAlli/Hussen-Yesuf-Portfolio.git",
  },
  {
    proj_name: "Tonix",
    proj_title: "CANOPY",
    proj_portfolio: "img/work-img/Snapshoot-Portfolio-3.png",
    proj_desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    proj_technology: ["html", "css", "javaScript", "Ruby", "Boostrap"],
    proj_list: ["Back End Dev", "2015"],
    live_demo: "https://hussenyesufalli.github.io/Hussen-Yesuf-Portfolio/",
    source_code:
      "https://github.com/HussenYesufAlli/Hussen-Yesuf-Portfolio.git",
  },
  {
    proj_name: "Multi-Post Stories",
    proj_title: "CANOPY",
    proj_portfolio: "img/work-img/Snapshoot-Portfolio-4.png",
    proj_desc:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    proj_technology: ["html", "css", "javaScript", "Ruby", "Boostrap"],
    proj_list: ["Back End Dev", "2015"],
    live_demo: "https://hussenyesufalli.github.io/Hussen-Yesuf-Portfolio/",
    source_code:
      "https://github.com/HussenYesufAlli/Hussen-Yesuf-Portfolio.git",
  },
];

const workContent = document.getElementById("work");
const div = document.createElement("div");
div.className = "work-section";
workContent.appendChild(div);
div.innerHTML = projectDatas.reduce(
  (output, proj) => `${output}
            <div class="work-container">
            <div class="cards">
            <div class="snapshot-portofolio">
              <img src=${proj.proj_portfolio} alt="SP" />
            </div>
            <div class="blocks">
              <h2 class="project-title txtWrapper">${proj.proj_name}</h2>
              <div class="tframes">
                <h3>${proj.proj_title}</h3>
                <ol class="frames-list">
                  <li>
                    <img src="img/work-img/Counter.png" />
                  </li>
                  <li> ${proj.proj_list[0]}</li>
                  <li>
                    <img src="img/work-img/Counter.png" />
                  </li>
                  <li>${proj.proj_list[1]}</li>
                </ol>
              </div>
              <p class="project-text txtWrapper">
                ${proj.proj_desc}
              </p>
              <ul class="tag-list">
                <li>${proj.proj_technology[0]}</li>
                <li>${proj.proj_technology[1]}</li>
                <li>${proj.proj_technology[2]}</li>
              </ul>
              <div class="blocks-buttonWrapper">
                <button class="blocks-button">See Project</button>
              </div>
            </div>
          </div>
          </div>
          `,
  ""
);

const reverseCard = document.querySelectorAll(".cards");
reverseCard.forEach((rev, index) => {
  if (index % 2 !== 0) {
    rev.classList.toggle("reverse-block");
  }
});

const modalContent = document.getElementById("modal");
const modalDiv = document.createElement("div");
modalDiv.className = "modal-section";
modalContent.appendChild(modalDiv);
const modal = document.querySelector(".modal-section");
const viewProjectDetailButton = document.querySelectorAll(".blocks-button");
viewProjectDetailButton.forEach((buttons, index) => {
  buttons.addEventListener("click", () => {
    modalDiv.innerHTML = `
              
    <div class="modalContainer">
        <div class="close-modal-button">
            <h3 class="projecTitle">${projectDatas[index].proj_name}</h3>
              <img src="img/close.svg" alt=""> 
        </div>
        <div class="tframes">
          <h3>${projectDatas[index].proj_title}</h3>
          <ol class="frames-list">
            <li>
              <img src="img/work-img/Counter.png" />
            </li>
            <li> ${projectDatas[index].proj_list[0]}</li> 
            <li>
              <img src="img/work-img/Counter.png" />
            </li>
            <li>${projectDatas[index].proj_list[1]}</li>
          </ol>
        </div>
        <div class="modal-snapshot-portofolio">
          <img src=${projectDatas[index].proj_portfolio} alt="">
        </div>
    <div class="modalProjectdetail">
          <p class="project-text parag-width">
              ${projectDatas[index].proj_desc}
          </p>
        <div>
          <ul class="tag-list">
            <li>${projectDatas[index].proj_technology[0]}</li>
            <li>${projectDatas[index].proj_technology[1]}</li>
            <li>${projectDatas[index].proj_technology[2]}</li>
           </ul>
          <ul class="tag-list2">
            <li>${projectDatas[index].proj_technology[3]}</li>
            <li>${projectDatas[index].proj_technology[4]}</li>
           </ul>
        <div class="project-detail-button">
          <div class="blocks-buttonWrapper modal-link-button">
            <button class="blocks-button"><a class="live project-detail-link" href="${projectDatas[index].live_demo}">See live</a><img src="img/live.svg" alt="live"></button>
            <button class="blocks-button"><a class="source project-detail-link" href="${projectDatas[index].source_code}">See source</a><img src="img/source.svg" alt="source"></button>
          </div>
        </div>
    </div>
    </div>
   </div>


    `;

    modal.classList.add("openModal");
    const modalCloseButton = document.querySelector(".close-modal-button img");
    modalCloseButton.addEventListener("click", () => {
      modal.classList.remove("openModal");
    });
  });
});

// Client side validation /Contact form  section

const cForm = document.getElementById("contactForm");
const eMail = document.getElementById("email");
const errorMessage = document.getElementById("errormessage");

cForm.addEventListener("submit", (event) => {
  errorMessage.textContent = "";
  if (eMail.value.toLowerCase() !== eMail.value) {
    event.preventDefault();
    const mesg = document.createTextNode(
      "Please type your email in lowercase. Form not submitted"
    );
    errorMessage.appendChild(mesg);
    errorMessage.style.color = "red";
  }
});

// preserve data in the browser / use local storage to save user input
const formName = document.getElementById('name');
const formMessage = document.getElementById('msg');
const contactEmail = document.getElementById('email');

contactForm.addEventListener('input', () => {
  const formData = {
    name: formName.value,
    email: contactEmail.value,
    message: formMessage.value,
  };
  localStorage.setItem('contactForm', JSON.stringify(formData));
});
function showData() {
  const userData = JSON.parse(localStorage.getItem('contactForm'));
  if (userData) {
    formName.value = userData.name;
    contactEmail.value = userData.email;
    formMessage.value = userData.message;
  }
}
showData();