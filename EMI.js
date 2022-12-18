
const HLA_INP = document.querySelector('#HLA-inp');
const IR_INP = document.querySelector('#IR-inp');
const T_INP = document.querySelector('#T-inp');


const SWW_INP = document.querySelectorAll('.SWW-range');

const HLA_RANGE = document.querySelector('#HLA-range');
const IR_RANGE = document.querySelector('#IR-range');
const T_RANGE = document.querySelector('#T-range');

var hla_RangeValue = 0;
var ir_RangeValue = 0;
var t_RangeValue = 0;

var YR_ClickCount = 0 ; 

const HL_BTN = document.querySelector(".HL-btn");
const PL_BTN = document.querySelector(".PL-btn");
const CL_BTN = document.querySelector(".CL-btn");

var topBtn_choice = 1 ;
var Yr_Mo_Choice = 1 ;



function pageOnload(){
     HL_BTN.click();

     SWW_INP.forEach(function(args){
        args.oninput = function(){
            var value = (args.value-args.min)/(args.max-args.min)*100;
        args.style.background = `linear-gradient(to right, #FC7E00 0%, #FC7E00 ${value}% ,#fff 0% ,#fff 100% )`
    
        }

        

    
    
    });
}


SWW_INP.forEach(function(args){
    args.oninput = function(){
        var value = (args.value-args.min)/(args.max-args.min)*100;
    args.style.background = `linear-gradient(to right, #FC7E00 0%, #FC7E00 ${value}% ,#fff 0% ,#fff 100% )`

    }

});


var changeFunc = function(args){

    var value = (args.value-args.min)/(args.max-args.min)*100;
    args.style.background = `linear-gradient(to right, #FC7E00 0%, #FC7E00 ${value}% ,#fff 0% ,#fff 100% )`;

}

function onchangeRange(ele){

    

    if(ele.value<0){
        alert("Enter Passitive Value.");
        ele.value = 0;

    }else{

        if(ele.id == "HLA-range"){
           
            hla_RangeValue = ele.value;
            HLA_INP.value =Math.round(Number(hla_RangeValue))*100000;
            
    
        }else if(ele.id == "IR-range"){
            ir_RangeValue = ele.value/10;
            IR_INP.value = ir_RangeValue;
    
            
    
        }else if(ele.id == "T-range"){
            t_RangeValue = ele.value;
            T_INP.value = t_RangeValue;

            

            
    
            
    
        }else if(ele.id == "HLA-inp"){
    
            hla_RangeValue = ele.value/100000;
            
            HLA_RANGE.value = hla_RangeValue;
            changeFunc(HLA_RANGE);
            
        }else if(ele.id == "IR-inp"){
            ir_RangeValue = ele.value*10;
            IR_RANGE.value = ir_RangeValue;
            changeFunc(IR_RANGE);

    
        }else if(ele.id == "T-inp"){
            t_RangeValue = ele.value;
            T_RANGE.value = t_RangeValue;
           
    
            changeFunc(T_RANGE);
    
        }

    }

    EMI_calculation();
    

}


// Home Loan Divs Adding.........................

const HLA_INNER = document.querySelector("#HLA-inner-measure-div");
let store_HLA_Inner;

let Hla_Inner_Divs = (function(value){
    return `<div><div><span>|</span> <span class="rangeValue-span">${value}L</span></div></div>`;

});



// Intrest Rate Divs Adding.............................

const IR_INNER = document.querySelector("#IR-inner-measure-div");
let store_IR_Inner;

let Ir_Inner_Divs = function(value){
    return `<div><div><span>|</span> <span class="rangeValue-span">${value}</span> </div></div>`
}




// Loan Tenure Divs Adding...................

// Yr Mon

const T_MON = document.querySelector("#t-MON");
const T_YR = document.querySelector("#t-YR");

const T_INNER = document.querySelector("#T-inner-measure-div");
let store_T_Inner;


var T_Inner_Divs = function(value){
    return `<div><div><span>|</span> <span class="rangeValue-span">${value}</span> </div></div>`
}




T_MON.addEventListener("click",()=>{
    Yr_Mo_Choice = 2;

    T_MON.classList.add("mon-OR-yr");
    T_YR.classList.remove("mon-OR-yr");


    if(topBtn_choice==1){

        store_T_Inner = "";
        
     for(i=1; i<=6 ; i++){
        store_T_Inner += T_Inner_Divs(60*i);
    }
    T_RANGE.max = 360 ; 
    // T_RANGE.value=120;

    }else if(topBtn_choice==2){

        store_T_Inner = "";
        
     for(i=1; i<=5 ; i++){
        store_T_Inner += T_Inner_Divs(12*i);
    }
    T_RANGE.max = 60 ; 
    // T_RANGE.value=12;

    }else if(topBtn_choice==3){

        store_T_Inner = "";
        
     for(i=1; i<=7 ; i++){
        store_T_Inner += T_Inner_Divs(12*i);
    }
    T_RANGE.max = 84 ; 
    // T_RANGE.value=12;

    }
    

   
    T_RANGE.value = T_INP.value*12;
    onchangeRange(T_RANGE);
    changeFunc(T_RANGE);

    T_INNER.innerHTML = store_T_Inner;
   
    
        
})




T_YR.addEventListener("click",()=>{

    
    if(YR_ClickCount==0){
        T_INP.value = 24
    }
    YR_ClickCount = 1;

    
    Yr_Mo_Choice = 1;

    T_YR.classList.add("mon-OR-yr");
    T_MON.classList.remove("mon-OR-yr");

    
    
    if(topBtn_choice==1){

        store_T_Inner = "";
        
     for(i=1; i<=6 ; i++){
        store_T_Inner += T_Inner_Divs(5*i);
    }
    T_RANGE.max = 30 ; 
    // T_RANGE.value=3;
    
    

    }else if(topBtn_choice==2){

        store_T_Inner = "";
        
     for(i=1; i<=5 ; i++){
        store_T_Inner += T_Inner_Divs(i);
    }
    T_RANGE.max = 5 ; 
    // T_RANGE.value=3;

    }else if(topBtn_choice==3){

        store_T_Inner = "";
        
     for(i=1; i<=7 ; i++){
        store_T_Inner += T_Inner_Divs(i);
    }
    T_RANGE.max = 7 ; 
    // T_RANGE.value=3;

    }


    T_RANGE.value = T_INP.value/12;

    onchangeRange(T_RANGE)
    changeFunc(T_RANGE);

    T_INNER.innerHTML = store_T_Inner;

   
})






// Top Button Changes.......................




HL_BTN.addEventListener("click",()=>{
   
    topBtn_choice = 1;
    YR_ClickCount = 0;
    T_YR.click();
    

     HL_BTN.classList.add("currentClass");
    HL_BTN.classList.remove("otherClass");

    PL_BTN.classList.add("otherClass");
    CL_BTN.classList.add("otherClass");


    store_HLA_Inner = "";

    for(i=1 ; i<=8 ; i++){
        store_HLA_Inner += Hla_Inner_Divs(i*25);
    }
    HLA_RANGE.max = 200;
    HLA_INNER.innerHTML = store_HLA_Inner;


    store_IR_Inner = "";

    for(i=0; i<6 ; i++){
        store_IR_Inner += Ir_Inner_Divs(7.5 + (i*2.5) );
    }
    IR_RANGE.max = 200;
    IR_INNER.innerHTML = store_IR_Inner;

    HLA_RANGE.value=25;
    onchangeRange(HLA_RANGE);
    changeFunc(HLA_RANGE);

    IR_RANGE.value=100;
    onchangeRange(IR_RANGE);
    changeFunc(IR_RANGE);

})

PL_BTN.addEventListener("click",()=>{
    

    topBtn_choice = 2;
    YR_ClickCount = 0;
    T_YR.click();

    PL_BTN.classList.add("currentClass");
    PL_BTN.classList.remove("otherClass");

    HL_BTN.classList.add("otherClass");
    CL_BTN.classList.add("otherClass");

    

    
    store_HLA_Inner = "";
    
        for(i=1 ; i<=6 ; i++){
            store_HLA_Inner += Hla_Inner_Divs(i*5);
        }
        HLA_RANGE.max = 30;
        HLA_INNER.innerHTML = store_HLA_Inner;


    store_IR_Inner = "";

        for(i=0; i<8 ; i++){
            store_IR_Inner += Ir_Inner_Divs(7.5 + (i*2.5) );
        }
        IR_RANGE.max = 250;
        IR_INNER.innerHTML = store_IR_Inner;


        HLA_RANGE.value=10;
        onchangeRange(HLA_RANGE);
        changeFunc(HLA_RANGE);

        IR_RANGE.value=100;
        onchangeRange(IR_RANGE);
        changeFunc(IR_RANGE);


})

CL_BTN.addEventListener("click",()=>{
    

    topBtn_choice = 3;
    YR_ClickCount = 0;
    T_YR.click();

    CL_BTN.classList.add("currentClass");
    CL_BTN.classList.remove("otherClass");

    HL_BTN.classList.add("otherClass");
    PL_BTN.classList.add("otherClass");


    store_HLA_Inner = "";
    
        for(i=1 ; i<=4 ; i++){
            store_HLA_Inner += Hla_Inner_Divs(i*5);
        }
        HLA_RANGE.max = 20;
        HLA_INNER.innerHTML = store_HLA_Inner;


    store_IR_Inner = "";

        for(i=0; i<6 ; i++){
            store_IR_Inner += Ir_Inner_Divs(7.5 + (i*2.5) );
        }
        IR_RANGE.max = 200;
        IR_INNER.innerHTML = store_IR_Inner;


        HLA_RANGE.value=10;
        onchangeRange(HLA_RANGE);
        changeFunc(HLA_RANGE);

    IR_RANGE.value=100;
    onchangeRange(IR_RANGE);
    changeFunc(IR_RANGE);
    
})


// EMI calculations................................

const LOAN_EMI = document.querySelector("#loan_EMI");
const TOTAL_IP = document.querySelector("#total_IP");
const P_I = document.querySelector("#P-I");

var EMI_value = 0;

var totalPayment = 0;

var emiCalling = 0;


    

let EMI_calculation = function(){

    var principal = HLA_INP.value;
    var interestRate = IR_INP.value/(100*12);
 
    if(Yr_Mo_Choice==1){
        var monthlyTenure = T_INP.value*12;
    }else if(Yr_Mo_Choice==2){
        var monthlyTenure = T_INP.value;
    }
    

    
    
    EMI_value = principal * interestRate * Math.pow(1+interestRate,monthlyTenure) / ( Math.pow(1+interestRate,monthlyTenure)-1 ) ;

    
    if(Math.round(EMI_value) ){
        totalPayment = Math.round(EMI_value);

    }
    // console.log(totalPayment)
    LOAN_EMI.innerText = totalPayment;
    
    TOTAL_IP.innerText = Math.round((EMI_value*monthlyTenure)-principal)
    P_I.innerText = Math.round(EMI_value*monthlyTenure);

   

    const PrincipalPer =((HLA_INP.value/Number(P_I.innerText) )*100 ).toFixed(2) ;
    const TotalInterestPer = ((Number(TOTAL_IP.innerText) / Number(P_I.innerText) )*100).toFixed(2);





    if(Math.round((EMI_value*monthlyTenure)-principal)){

        if(myChart){
        
            updateChart(PrincipalPer,TotalInterestPer);

        }else{
            pieChart(PrincipalPer,TotalInterestPer);

        }
        
    }






    emiCalling++;

    if(emiCalling > 1){
        simple_InterestCalculation(HLA_INP.value);
        year_Month_Func();
    }

       
}






let myChart;

var pieChart = function(PrincipalPer,TotalInterestPer){

    

    const ctx = document.getElementById('myChart');
    const details = [Number(PrincipalPer),Number(TotalInterestPer)]

    // console.log(details);

    myChart =  new Chart(ctx, {
    
    
      type: 'pie',
      data: {
        labels: ['Principal Amount','Total Interest'],
        datasets: [{
          label: '# of Percentage',
          data: details,
          borderWidth: 1,
          backgroundColor:['#ED8C2B','#88A825']
        }]
      },

      options: {
        
        plugins:{
            legend:{
               display:true,
                position:'bottom',
            },
        },

        
    },
    });

  

}

const updateChart = (PrincipalPer,TotalInterestPer)=>{
  myChart.data.datasets[0].data[0] = PrincipalPer;
  myChart.data.datasets[0].data[1] = TotalInterestPer;
  myChart.update();
}


let my_BigChart ;
let my_barChart_Princ;


var getValues_InArray =  function(){

// console.log(lineData.datasets[0].data);

    if(my_BigChart){

    //     for(i=0; i < yr_Data_Array.length ; i++){
    //     data.labels.shift();

    //     data.datasets[0][0].data.shift();   
    //     data.datasets[1][0].data.shift();
    //     data.datasets[1][1].data.shift();
        
       
    // }

    // console.log(data.datasets[0][0].data);
        
    update_Big_Chart();

    }else{



     for(i=0; i < yr_Data_Array.length ; i++){
    data.labels[i] = yr_Data_Array[i][0];


    data.datasets[0][0].data[i] = yr_Data_Array[i][4];
    data.datasets[1][0].data[i] = yr_Data_Array[i][1];
    data.datasets[1][1].data[i] = yr_Data_Array[i][2];

//    console.log(data.datasets[0][0].data[i]);
//    console.log(data.datasets[1][0].data[i]);
//    console.log(data.datasets[1][1].data[i]);

}

        big_ChartCall();
    

}

}


// setup 
const data = {
    labels: [],

    datasets: [
        [{
            label: 'Balance',
            data: ['hi'],
            fill: false,
            borderColor: 'red',
            backgroundColor:'red',
            tension: 0.1,
            type:'line',
            order:1,
        }],
        
    [{
      label: 'Principal',
      data: [],
      backgroundColor: '#88A825',
      borderColor:'#88A825',
      borderWidth: 1,
      type:'bar',
      order:2,
    },

    {
        label: 'Interest',
        data: [],
        backgroundColor: '#FC7E00',
        borderColor: '#FC7E00',
        borderWidth: 1,
        type:'bar',
        order:3,
      }],

    ]
  };


  // config 
  const Config = {
    data,
    options: {
        plugins:{
            tooltip:{
                enabled:true,
            }

        },
      scales: {
        x:{
         stacked:true,
        },
        y: {
          beginAtZero: true,
          stacked:true,
        },
        
      }
    }
  };

  


  // render init block

  var big_ChartCall = function(){

    my_BigChart = new Chart(
        document.getElementById('my-Big-Chart'),
        Config,
        );

      

  }







var tempYR_Count=0;

function update_Big_Chart(){
    for(i=0; i < yr_Data_Array.length ; i++){
        data.labels[i] = yr_Data_Array[i][0];

        data.datasets[0][0].data[i] = yr_Data_Array[i][4];
        data.datasets[1][0].data[i] = yr_Data_Array[i][1];
        data.datasets[1][1].data[i] = yr_Data_Array[i][2];
       
        }
    
       my_BigChart.update();
}




const monthControl = document.querySelector('#date-inp');
    const date= new Date()
    const month=("0" + (date.getMonth() + 1)).slice(-2)
    const year=date.getFullYear()
    monthControl.value = `${year}-${month}`;

var start_Yr =Number( String(monthControl.value).slice(0,4) );
var start_Mo = Number( String(monthControl.value).slice(5,7) );

var temp_start_Yr = start_Yr;
var temp_start_Mo = start_Mo;

var store_Yr_Col;
var store_Mon_Col;
const TABLE_CLASS = document.querySelector('.table-class');
var total_Yr;



function year_Month_Func(){
    // console.log(monthControl.value);

    start_Yr =Number( String(monthControl.value).slice(0,4) );
    start_Mo = Number( String(monthControl.value).slice(5,7) );

    temp_start_Yr = start_Yr;
    temp_start_Mo = start_Mo;

    year_Func();
    

}



var yr_Col_Create = function(year){
            return `<tr class="yr-rows"  >

            <td class="fi-yr-col yr-${year}" onclick="fi_yr_col_click(this)">
                <img class="fi-yr-col-img" id="${year}" src = "plus-square.svg">
                <p> ${year} </p>
            </td>
            <td>&#8377;</td>
            <td>&#8377; </td>
            <td>&#8377; </td>
            <td>&#8377; </td>
            <td>&nbsp;%</td>

        </tr>`

        
}
var mon_Col_Create = function(Mon,Yr,princ,int,tot,bal,paidPer){
    return `<tr class="mon-rows yr-${Yr}">
                                
            <td class="fi-mo-col"> 
                <p> ${Mon} </p>
            </td>
            <td>&#8377; ${princ}</td>
            <td>&#8377; ${int}</td>
            <td>&#8377; ${tot}</td>
            <td>&#8377; ${bal}</td>
            <td>${paidPer} %</td>

            </tr>`
}

var totalInterest ;
var totalMons ;

var monthlyPrincipal_A ;
var monthlyInterst_B ;
var total_A_B;
var principalAmount ;

var paidPercent = 0;



let simple_InterestCalculation = function(principalAmt){

    totalInterest = IR_INP.value;

    principalAmount = principalAmt;

    if(Yr_Mo_Choice==1){
        var totalMons = T_INP.value*12;
    }else if(Yr_Mo_Choice==2){
        var totalMons = T_INP.value;
    }

    // console.log(totalInterest);
    // console.log(principalAmount);
    // console.log(totalMons);

    monthlyInterst_B = (principalAmount*totalInterest)/1200;
    monthlyPrincipal_A = EMI_value - monthlyInterst_B;
    total_A_B = monthlyPrincipal_A + monthlyInterst_B;

    
    
  
    
    // console.log(monthlyPrincipal_A);
    // console.log(monthlyInterst_B);
    // console.log(total_A_B);



}

var tempPercent = 0;

var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];


var yr_Data_Array = [];

function year_Func(){
    

    store_Yr_Col = `<tr class="h-row">
    <th>Year</th>
    <th class="principal">Principal<br>(A)</th>
    <th class="interest">Interest<br>(B)</th>
    <th>Total Payment<br>(A + B)</th>
    <th class="balance">Balance</th>
    <th>Loan Paid<br>To </th>
</tr>`;

    store_Mon_Col="";
    var total_Mon;
    if(Yr_Mo_Choice==1){
        total_Mon  = T_INP.value*12 ;
        // console.log(total_Yr);
    }else if(Yr_Mo_Choice==2){
        total_Mon = T_INP.value ;
    }

    // for(i = 0 ; i < total_Yr ; i++){
    //     store_Yr_Col += yr_Col_Create(temp_start_Yr++) 


    // }

    var monFlag = true;
    var monCount = 0 ;

    var yr_monthlyPrincipal_A = 0 ;
    var yr_monthlyInterst_B = 0 ;
    var yr_total_A_B = 0;

   
    var k = 0;
    

    while(monFlag){

        

        store_Yr_Col += yr_Col_Create(temp_start_Yr);
    
        
        

        for( j = start_Mo-1 ; j < months.length ; j++){

            

        
           principalAmount -= monthlyPrincipal_A;
           paidPercent = 100 - ( principalAmount / HLA_INP.value)*100;

           
        //    paidPercent += paidPercent
        
        // console.log(tempPercent)
        store_Yr_Col += mon_Col_Create(months[j],temp_start_Yr,Math.round(monthlyPrincipal_A),Math.round(monthlyInterst_B),Math.round(total_A_B),Math.round(principalAmount),paidPercent.toFixed(2));

        
            
        yr_monthlyPrincipal_A += monthlyPrincipal_A  ;
        yr_monthlyInterst_B +=  monthlyInterst_B ;
        yr_total_A_B += total_A_B;
        
        

        
           

        simple_InterestCalculation(principalAmount);

            if(j == 11 ){
               
               
                start_Mo = 1;
            }

            monCount++;
            if(total_Mon==0){
                monFlag = false;
                break;

            }
            if(monCount == total_Mon ){
                monFlag = false;
                break;
            }
        }
        

        yr_Data_Array[k] = [temp_start_Yr,Math.round(yr_monthlyPrincipal_A),Math.round(yr_monthlyInterst_B),Math.round(yr_total_A_B),Math.round(principalAmount),Number(paidPercent.toFixed(2))];
        k++;

        temp_start_Yr++;

            yr_monthlyPrincipal_A = 0 ;
            yr_monthlyInterst_B = 0 ;
            yr_total_A_B = 0 ;
            yr_principalAmount = 0 ;
        


            // console.log(yr_Data_Array);


        
    }

    temp_start_Yr = start_Yr;
    TABLE_CLASS.innerHTML = store_Yr_Col; 

    yrColumn_Data();


}

const YR_ROWS = document.getElementsByClassName("yr-rows");
var yrColumn_Data = function(){

    // console.log(YR_ROWS[0].children[1]) ;

    for(i=0 ; i < YR_ROWS.length ;i++){
       
        for(j=1; j<=4 ; j++){
            YR_ROWS[i].children[j].innerText += yr_Data_Array[i][j];
        }

        YR_ROWS[i].children[5].innerText = yr_Data_Array[i][5] + YR_ROWS[i].children[5].innerText;


    }
   
    if(emiCalling > 2){
        getValues_InArray();
    }
    
    

}


const MON_ROWS = document.getElementsByClassName("mon-rows");

var inpTemp = '';
function fi_yr_col_click(ele){
    // console.log(ele);

    if(ele.innerText!=inpTemp  && ele.children[0].src == "http://127.0.0.1:5500/plus-square.svg" ){
        innerClick(ele, false);
        inpTemp = ele.innerText;
    

    }else{
        innerClick(ele, true);
        inpTemp = '';
        
    }
}
 

function innerClick(ele,flag){

    if( flag==false ){
        ele.children[0].src = "dash-square.svg"
        for(i=0 ; i < MON_ROWS.length ;i++ ){
            if( (MON_ROWS[i].classList[1]== ele.classList[1])){
                        MON_ROWS[i].classList.add("monsRow_View");
            }
        }
            
        flag = true;

    }else if ( flag==true ){
        ele.children[0].src = "plus-square.svg"
        for(i=0 ; i < MON_ROWS.length ;i++ ){
            if( (MON_ROWS[i].classList[1]== ele.classList[1])){
                MON_ROWS[i].classList.remove("monsRow_View")
            }
        }
        flag = false;
        

    }
}




// TABLE_CLASS.addEventListener("click",(ele)=>{
//     // console.log(ele.target.parentNode.classList[0]);

//     if(ele.target.parentNode.classList.contains("fi-yr-col")==true || ele.target.classList.contains("fi-yr-col")==true){
//         //  console.log(ele.target.parentNode.classList[1])
//         // fi_yr_col_click()

//         for(i=0 ; i < MON_ROWS.length ;i++ ){
//             if( (MON_ROWS[i].classList[1]==ele.target.parentNode.classList[1]) || (MON_ROWS[i].classList[1]==ele.target.parentNode.parentNode.classList[1])){
//                 MON_ROWS[i].style.display="none";
//             }
//         }

       
//     }
    
// });


