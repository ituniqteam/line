import { feedbackList } from "./feedback-list.js";

const commentsWrapper = document.querySelector('.comments-wrapper');

for (let i = 0; i < feedbackList.length; i++){
    if (feedbackList[i].feedbackComment.length < 400){
        const swiperSlide = document.createElement('div');
        swiperSlide.className = "swiper-slide feedback-box"
    
        const feedbackText = document.createElement('div');
        feedbackText.className = "feedback-text";
        
        const comment = document.createElement('p');
        comment.innerHTML = feedbackList[i].feedbackComment;
    
        const author = document.createElement('h5');
        author.innerHTML = feedbackList[i].feedbackAuthor;
        author.className = "feedback-author"
    
        commentsWrapper.appendChild(swiperSlide);
        swiperSlide.appendChild(feedbackText);
        feedbackText.appendChild(comment);
        feedbackText.appendChild(author);
    }
}