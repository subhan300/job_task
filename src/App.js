import React,{useState,useEffect} from "react"
import './App.css';
import FilterComponent from './componenets/filter-components/FilterComponent';
import GameCards from './componenets/video-cards/GameCards';
import Header from './componenets/Header/Header';
import { StepContext } from "@mui/material";

function App() {
let [cardsData,setCardsData]=useState([])
let [cardsDataChange,setCardsDataChange]=useState([])

// console.log("cards data >>",cardsData)
useEffect(() => {
  async function fetchData() {
    // You can await here
    // const response = await ;
    const dataFetch=await fetch("https://public.connectnow.org.uk/applicant-test/");
    let resData=await dataFetch.json();

    setCardsData(resData)
    setCardsDataChange(resData)
    // ...
  }
  fetchData();
}, []); // Or [] if effect doesn't need props or state
let [name,setName]=useState("")
let [score,setScore]=useState("")

const clearFunc=()=>{
  setName("");
  setScore("")
  setCardsDataChange(cardsData)
}
const filterByName=(text)=>{
  // debugger;

  let nameFilter=[];
  let tempData=[...cardsData]
  
 setName(text)
 
 
 if(score != ""){
  
   if(tempData.length != 0){
   
    let filterScore=tempData.filter(val=>val.rating<=score)
    tempData=[...filterScore]
   }
 }
 if(text != ""){
  nameFilter=tempData.filter(val=>{
    console.log(">check",val?.name.toLowerCase().includes(name.toLocaleLowerCase()))
    if(val?.name.toLowerCase().includes(name.toLocaleLowerCase())){
       console.log("here sho t ")
        return val
    }
  })
  tempData=[...nameFilter]
   }
  setCardsDataChange(tempData)
} 

const filterByScore=(rate)=>{
  // debugger;
  
  let nameFilter=[];
  let tempData=[...cardsData]
  if( rate=="" || (rate>=1 )){
 setScore(rate)
 
 if(name != ""){
nameFilter=tempData.filter(val=>{
  console.log(">check",val?.name.toLowerCase().includes(name.toLocaleLowerCase()))
  if(val?.name.toLowerCase().includes(name.toLocaleLowerCase())){
     console.log("here sho t ")
      return val
  }
})
tempData=[...nameFilter]
 }
 if(rate != ""){
  
   if(tempData.length != 0){
   
    let filterScore=tempData.filter(val=>val.rating<=rate)
    tempData=[...filterScore]
   }
 }
  }else{
    alert("enter valid value")
    setScore("")

  }
  setCardsDataChange(tempData)
}


const orderAscending=(x)=>{
  debugger;
    // if(x===){}
    console.log("oder by",x)
    if(x.value=="date"){}else if(x.value=="score"){
      let ascScore=[...cardsDataChange]
      let ascendingScore=ascScore.sort((a,b)=>a.rating-b.rating)
      setCardsDataChange(ascendingScore);
    }else if(x.value=="name"){
      let ascName=[...cardsDataChange]
     let ascendingName= ascName.sort((a,b) => (a.name.toLocaleLowerCase()[0] > b.name.toLocaleLowerCase()[0]) ? 1 : ((b.name.toLocaleLowerCase()[0] > a.name.toLocaleLowerCase()[0]) ? -1 : 0));
     setCardsDataChange(ascendingName);

    }else{
      setCardsDataChange(cardsData)
    }
}
  return (
   <div className='layout'>
   
   <Header />
  <div className="section">
     <FilterComponent clearFunc={clearFunc} orderAscending={orderAscending} filterByName={filterByName} filterByScore={filterByScore}  value={score} text={name} />
      <GameCards  data={cardsDataChange} />
  </div>

   </div >
  );
}

export default App;
