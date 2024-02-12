// 视频播放
let videoList = document.querySelectorAll('.list');

videoList.forEach(vid =>{
   vid.onclick = () =>{
      videoList.forEach(remove =>{remove.classList.remove('active')});
      vid.classList.add('active');
      let src = vid.querySelector('.lv').src;
      let title = vid.querySelector('.listtt').innerHTML;
      console.log(title);
      document.querySelector('.mv').src = src;
      document.querySelector('.mv').play();
      document.querySelector('.maintt').innerHTML = title;
   };
});