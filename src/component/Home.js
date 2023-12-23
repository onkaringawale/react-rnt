import React, { useEffect, useState } from 'react'
import Header from './header/Header'
import Card from './blurbContainer/Card'
import axios from 'axios'
import AddBlurbPopup from './blurbContainer/add blurb card/AddBlurbPopup'
import EditPopup from './edit modale/EditPopup'

const Home = () => {
  let apiUrl = "https://endorsementfunctionapp.azurewebsites.net/api/getPluginData?clientId=default"
  let cards;

const [apiData, setApiData] = useState([]);
const [editcard, setEditcard] = useState();
  // Function to fetch data using Axios
  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setApiData(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  

  useEffect(()=>{
    fetchData()
  },[])

  const removeBlurbCardNo = (index) => {debugger
    const newApiData = apiData.filter((_, i) => i !== index);
    setApiData(newApiData);
    
  };

  const AddNewBlurbForm=(blurCard)=>{
    
    const newFormAdded = [...apiData,blurCard];
    setApiData(newFormAdded);
    
  }

const AddFormToEdit=(index)=>{debugger
  const cardToEdit = apiData.filter((_, i) => i === index);
  setEditcard(cardToEdit)
}

  return (
<>
<Header></Header>
<div className="container mt-2 text-end">  
  <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#blurbContentPopup">
  <i className="fa fa-plus"></i> Open modal
  </button>
</div>

<div className="row">
  
  {
    apiData.map((obj,index)=>(
        cards={
                        urlId:obj.rule_id,
                        title:obj.title,
                        URL:obj.page_url,
                        PageName :obj.page_name,
                        label :obj.rules,
                        BlurbContent:obj.blurb_content
                      },
      <Card indexNo={index} id={`card${index+1}`} cardDetails={cards}  remove={removeBlurbCardNo} editForm={AddFormToEdit}></Card>
      

      
    ))
  }

</div>
<>
<AddBlurbPopup AddNewForm={AddNewBlurbForm} ></AddBlurbPopup>
<EditPopup ></EditPopup> 
</>



</>
  )
}

export default Home
