import { dates } from "./data.js";

const timeline = document.querySelector(".timeline");
const heading = document.createElement("h1");
heading.className = "timeline-heading";
heading.textContent = "Mayme's Bakery";
timeline.appendChild(heading);

const timelineIntro = document.createElement("h3");
timelineIntro.className = "timeline-intro";
timelineIntro.textContent = "Welcome to Mayme's Bakery! Find out more about the history of baking and cakes below.";
timeline.appendChild(timelineIntro);


const timelineContainer = document.createElement("div");
timelineContainer.className = "timeline-container"
timeline.appendChild(timelineContainer);

dates.map((item) => {
   const timelineItem = document.createElement("div");
   timelineItem.className = "timeline-item";
   timelineContainer.appendChild(timelineItem);
   
   const timelineItemTitle = document.createElement("h2");
   timelineItemTitle.className = "timeline-item-title";
   timelineItemTitle.textContent = item.title;
   timelineItem.appendChild(timelineItemTitle);

   const timelineSpan = document.createElement("span");
   timelineSpan.className = "timeline-item-date";
   timelineSpan.textContent = item.date;
   timelineItem.appendChild(timelineSpan);

   const timelineSummary = document.createElement("p");
   timelineSummary.className = "timeline-item-summary";
   timelineSummary.textContent = item.summary;
   timelineItem.appendChild(timelineSummary);

   const timelineButton = document.createElement("button");
   timelineButton.className = "timeline-item-more-info";
   timelineButton.textContent = "more info";
   timelineItem.appendChild(timelineButton);

   const moreInfo = timelineItem.querySelector(".timeline-item-more-info");
   moreInfo.onclick = function() {
        openModal(item);
   }
});

function openModal(item) {
    const modalContainer = document.createElement("div");
    modalContainer.id = "modal-container";
    document.body.appendChild(modalContainer);

    const modalDate = document.createElement("h2");
    modalDate.id = "modal-date";
    modalDate.textContent = item.date;
    modalContainer.appendChild(modalDate);

    const modalTitle = document.createElement("p");
    modalTitle.id = "modal-title";
    modalTitle.textContent = item.title;
    modalContainer.appendChild(modalTitle);

    const modalImage = document.createElement("img");
    modalImage.id = "modal-image";
    modalImage.setAttribute("src", item.image);
    modalContainer.appendChild(modalImage);

    const modalDescription = document.createElement("p");
    modalDescription.id = "modal-full-description";
    modalDescription.textContent = item.fullDescription;
    modalContainer.appendChild(modalDescription);

    const modalCloseButton = document.createElement("button");
    modalCloseButton.id = "modal-close-button";
    modalCloseButton.textContent = "X";
    modalContainer.appendChild(modalCloseButton);
    modalCloseButton.onclick = function() {
        modalContainer.remove()
    }

}
