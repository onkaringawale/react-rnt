import React, { useState } from 'react'

const AddBlurbPopup = ({AddNewForm}) => {
    const [addForm, setAddForm] = useState({
        title:'',
        page_url:'',
        page_name :'',
        rules :'',
        blurb_content:''
    });

const handleInputForAdd = (e)=>{
    const { name, value } = e.target;
    setAddForm((prevFormData) => ({ ...prevFormData, [name]: value }));
}
const resetForm=()=>{
    setAddForm({
        title:'',
        page_url:'',
        page_name :'',
        rules :'',
        blurb_content:''
    });

}

const submitAddblurbForm=(e)=>{
    e.preventDefault()
    AddNewForm(addForm)
}

  return (
    <div className="modal" id="blurbContentPopup"  data-bs-backdrop="static" data-bs-keyboard="false">
    <div className="modal-dialog">
      <div className="modal-content">
  
    
        <div className="modal-header">
          <h4 className="modal-title">Enter Blurb detail</h4>
          <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={resetForm}></button>
        </div>
  
    <form action="" onSubmit={submitAddblurbForm}>
        <div className="modal-body">
        
        <table className="table table-borderless" id='setBlurbData'>
                  <tbody>
                      <tr>
                      <th ><label>Title ::</label></th>
                      <td><input type="text" name='title' onChange={handleInputForAdd} value={addForm.title} /></td>
                      </tr>
                      <tr>
                      <th ><label>URL:: </label></th>
                      <td><input type="text" name='page_url'  onChange={handleInputForAdd} value={addForm.page_url} /></td>
                      </tr>
                      <tr>
                      <th > <label>Page Name :: </label></th>
                      <td ><input type="text" name='page_name' onChange={handleInputForAdd} value={addForm.page_name} /></td>
                      </tr>
                      <tr>
                      <th ><label>Label ::</label></th>
                      <td><input type="text"  name='rules' onChange={handleInputForAdd} value={addForm.rules} /></td>
                      </tr>
                      <tr>
                      <th > <label>Blurb Content :: </label></th>
                      <td ><textarea name ='blurb_content' onChange={handleInputForAdd} value={addForm.blurb_content} ></textarea></td>
                      </tr>
                  </tbody>
              </table>
      
        </div>
  
  
        <div className="modal-footer">
          <button type="reset" className="btn btn-danger" data-bs-dismiss="modal" onClick={resetForm}>Close</button>
          <button type="submit" className="btn btn-success" >Submit</button>
        </div>
    </form>
      </div>
    </div>
  </div>
  )
}

export default AddBlurbPopup
