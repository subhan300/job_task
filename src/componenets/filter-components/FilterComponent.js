import React from 'react'

import "./FilterComponent.css"
import Select from 'react-select'
function FilterComponent({filterByName,filterByScore,text,value,orderAscending,clearFunc}) {
  const options = [
    { value: '', label: '' },
    { value: 'date', label: 'Release Date' },
    { value: 'score', label: 'Score' },
    { value: 'name', label: 'Name' }
  ]

  
  return (
    <div className='filter_card bd_red'>
        <h1  className='filter_title_game'>Filter Results</h1>
        <h1 className='filter_title'>Name (contains) </h1>
        <input className='input_field' value={text} type="text" onChange={(e)=>{filterByName(e.target.value)}} placeholder='Text String'></input>
        <h1 className='filter_title'>Minimum Score </h1>
        <input className='input_field' value={value} min="1" max="10" onChange={(e)=>{filterByScore(e.target.value)}} type="number" placeholder="1-10"></input>

      
      
      
      
      
      
      
      
      
      
      
      <h1 className='filter_title'>Order By</h1>
     <div className='select'>
     {/* <div className='select_start' >sasjjdkl</div> */}
     <Select className='select_end' style={{borderRadius:0}} options={options} onChange={(e)=>{orderAscending(e)}} >
    
     </Select>
     </div>




   
  
  <button className='btn' onClick={()=>{clearFunc()}}>Clear</button>

    </div>
  )
}

export default FilterComponent