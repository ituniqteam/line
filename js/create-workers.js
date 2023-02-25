import { workerList } from "./workers-list.js";

const ourTeamWrapper = document.querySelector('.our-team-wrapper')

for (let i = 0; i < workerList.length; i++){
    const swiperSlide = document.createElement('div');
    swiperSlide.className = "swiper-slide our-team-box"
    
    const ourTeamPic = document.createElement('img');
    ourTeamPic.src = workerList[i].image;

    const ourTeamText = document.createElement('div');
    ourTeamText.className = "our-team-text";
    
    const ourTeamName = document.createElement('p');
    ourTeamName.innerHTML = workerList[i].workersFullname;

    ourTeamWrapper.appendChild(swiperSlide);
    swiperSlide.appendChild(ourTeamPic);
    swiperSlide.appendChild(ourTeamText);
    ourTeamText.appendChild(ourTeamName);
}