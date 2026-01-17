const countdownEl=document.getElementById("countdown");
const targetDate=new Date("January 18, 2026 00:00:00").getTime();

const timer=setInterval(()=>{
  const now=new Date().getTime();
  const diff=targetDate-now;

  if(diff<=0){
    clearInterval(timer);
    showSection("letter-section");
    return;
  }

  const d=Math.floor(diff/(1000*60*60*24));
  const h=Math.floor((diff/(1000*60*60))%24);
  const m=Math.floor((diff/(1000*60))%60);
  const s=Math.floor((diff/1000)%60);

  countdownEl.innerHTML=`${d}d ${h}h ${m}m ${s}s`;
},1000);

function showSection(id){
  document.querySelectorAll(".section").forEach(sec=>sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function showGallery(){showSection("gallery-section")}
function showCake(){
  showSection("cake-section");
  document.getElementById("music").play();
    }
