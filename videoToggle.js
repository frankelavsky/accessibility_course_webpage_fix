const toggle = document.getElementById('audioDescriptions');

toggle.addEventListener('change', (e) => {  
    setVideoIframeSettings(e.target)
});

const setVideoIframeSettings = (e) => {
    const video = document.getElementById('employmentVideo')
    const background = document.getElementById('iFrameBackground')
    if (e.checked) {
        console.log("checked!", video)
        video.setAttribute('src','https://youdescribe.org/embed/3dPe7-346N8?ad=6149e6fb3b2e2707ed89cd91#')
        video.setAttribute('width','640')
        video.setAttribute('height','500')
        video.setAttribute('title','YouDescribe video player')
        background.setAttribute('class','')
    } else {
        console.log("NOT checked!", video)
        video.setAttribute('src','https://www.youtube.com/embed/3dPe7-346N8')
        video.setAttribute('width','560')
        video.setAttribute('height','315')
        video.setAttribute('title','YouTube video player')
        background.setAttribute('class','hidden')
    }
}

setVideoIframeSettings(toggle)