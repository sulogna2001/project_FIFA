import { useState } from "react";
import './App.css'

 import Profile from "./components/profile/Profile";
 import Search from "./components/search/Search";

import {dataList} from "./data";

function App() {

  // const [profile,setProfile]=useState(data)
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState(dataList);

  const excludeColumns = ["id", "radar","age", "overall"	,	'value'	,"wage",	"preferred", "foot",	"work" ,"rate",	"position"	 
  	,"joined"	,"contact",	"height",	"weight",	"crossing",	"finishing"	,"accuracy",	"shortPassing",	"volleys"];

  const handleChange = value => {
    setSearchText(value);
    filterData(value);
  };
 
  // filter records by search text
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") setData(dataList);
    else {
      const filteredData = dataList.filter(item => {
        return Object.keys(item).some(key =>
          excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
        );
      });
      setData(filteredData);
    }
  }

   
    return (
      <div className="App">
        <h1 className='title'>FIFA 19</h1><br /><br />
        
         <p className='search'>Search:</p><input className='input'
          
          type="text"
          placeholder="Search by name, club ,country ,jersey....."
          value={searchText}
          onChange={e => handleChange(e.target.value)}
        />
       

        <div className="box-container">
          {data.map((d, i) => {
             return <div key={i} className="box"style={{ backgroundColor: '#999' }} >
               <Search value={d} ></Search>
               </div>
          })}
          <div className="clearboth"></div>
          {data.length === 0 && <span>No records found to display!</span>}
        </div>
        <img src=""alt='' className='imgmain'></img>
      </div>

      
    );
  
}

export default App;
