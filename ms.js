
let m,n,nr;
let a=[];
let k=0;

let gover;
function steag (i,j){





let cell=a[i][j];
if (cell.classList.contains("cover")&&!cell.classList.contains("steag"))
cell.classList.add("steag");
else if (cell.classList.contains("steag"))
cell.classList.remove("steag");
}

function zerouri ()  
{
  k=0;
  for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
        pattr=a[i][j];
        if(pattr.classList.contains("zero")) k++; }
 } return k;
}



function ka ()  
{
  k=0;
  for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
        pattr=a[i][j];
        if(pattr.classList.contains("cover")) k++; }
 } return k;
}
function go ( ){

if (ka()==nr&&n*m>nr) { gover=document.createElement("div");
gover.classList.add("endgameWin")
gover.innerText = "🎉 You Win!";
document.body.appendChild(gover);

 for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
        pattr=a[i][j];
        if(pattr.classList.contains("cover")){
          pattr.classList.remove("cover");
        }  }}
 } 

}

function lose(){

gover=document.createElement("div");
gover.classList.add("endgameWin")
gover.innerText = "🎉 You lose ! (penibil)";
document.body.appendChild(gover);
  for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
        pattr=a[i][j];
        if(pattr.classList.contains("cover")){
          pattr.classList.remove("cover");
           pattr.classList.add("boom");
        }  }
 } 
}

function clk(i,j) {

  let cell=a[i][j];

if(ka()==m*n&&n*m>nr){
if(zerouri()>0){
while(!cell.classList.contains("zero")){
patrate ();
cell=a[i][j];}
}
else if (zerouri()==0) {while(cell.classList.contains("special")){
patrate ();
cell=a[i][j];}

}
else gover.innerText = "așa nu merge ";}

if (cell.classList.contains("special")) {
  lose();
}

if (!cell.classList.contains("cover")) return;

  let c=[[i,j]];
  while(c.length>0){

let [ci,cj]=c.shift();
let ce=a[ci][cj];
 if (!ce.classList.contains("cover")) continue;
ce.classList.remove("cover");
ce.classList.remove("steag");
if(ce.classList.contains("special")) {
  ce.classList.remove("special");
  ce.classList.add("boom");
}

  else if (ce.classList.contains("zero")) {
      let vecini = [
        [-1, 0], [-1, -1], [-1, 1],
        [0, -1], [0, 1],
        [1, 0],  [1, -1], [1, 1]
      ];

        vecini.forEach(([dx,dy])=>{
let ni=i+dx;
let nj=j+dy;
if(ni>=0&&nj>=0&&ni<n&&nj<m) {
  let vecin=a[ni][nj]; 
  if(vecin.classList.contains("cover")){
       c.push([ni, nj]);
      }
     
       else if (!ce.classList.contains("zero")&&!ce.classList.contains("special"))
        ce.classList.remove("cover");
  if(ce.classList.contains("zero")){
        clk(ni, nj);
      }

      }
}
        ) 
      }}

      go();
    }


function patrate(){
if (gover) gover.remove();
  a = [];
k=0;
let box = document.getElementById('box');
 n=20;
 m=20;
nr=25;

let N = document.getElementById("n").value;
let M = document.getElementById("m").value;
let NR = document.getElementById("nr").value;
if (N) n=parseInt(N);
if (M) m=parseInt(M);
if (NR) nr=parseInt(NR);
box.innerHTML="";


for (let i = 0; i < n; i++) {
  let row = document.createElement("div");
  row.className = "mar";
  a[i] = [];
  for (let j = 0; j < m; j++) {
    let patrat = document.createElement("div");
        
  patrat.onclick= () => clk(i, j);
  patrat.oncontextmenu = (e) => {
  e.preventDefault(); 
  steag(i, j);  
};
    patrat.className = "pat";
    patrat.classList.add("cover");
    
    row.appendChild(patrat);
  a[i][j] = patrat;
  }

  box.appendChild(row);
}
let flat = a.flat();
for (let b=0; b<nr&&flat.length>0; b++){
    let randIndex = Math.floor(Math.random() * flat.length);
    flat[randIndex].classList.add("special");
    flat.splice(randIndex, 1);
}

for (let i=0; i<n; i++){
    for(let j=0; j<m; j++){
      let k=0;
       let vecini = [
        [-1, 0], [-1, -1], [-1, 1],
        [0, -1],          [0, 1],
        [1, 0],  [1, -1], [1, 1]
      ];

      vecini.forEach(([dx,dy])=>{
let ni=i+dx;
let nj=j+dy;
if(ni>=0&&nj>=0&&ni<n&&nj<m) {
  if(a[ni][nj].classList.contains("special")) k++;}}
)
      let clas=["zero", "unu", "doi", "trei", "patru", "cinci", "sase", "sapte", "opt"];
     if (!a[i][j].classList.contains("special"))
        a[i][j].classList.add(clas[k]);
    
    
    }
    }
  
  }

