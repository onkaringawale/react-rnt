import React, { useState } from 'react'

const EditPopup = ( {id,detailsToedit,edit,indexNo} ) => {
const [editForm, setEditForm] = useState({
  title:'',
  page_url:'',
  page_name :'',
  rules :'',
  blurb_content:''
});

const handleEditInputs= (e)=>{
  const { name, value } = e.target;
  setEditForm((prevFormData) => ({ ...prevFormData , [name]:value }));
}

const resetEditForm= ()=>{
  setEditForm({ title:detailsToedit.title,
  page_url:detailsToedit.URL,
  page_name :detailsToedit.PageName,
  rules :detailsToedit.label,
  blurb_content:detailsToedit.BlurbContent})
}

// const handleEditForm =(e)=>{
//   e.preventDefault()
//   edit(editForm,indexNo)
// }

  return (
    <div className="modal" id='editModel'  data-bs-backdrop="static" data-bs-keyboard="false">
    <div className="modal-dialog">
    <div className="modal-content">  
      <div className="modal-header">
        <h4 className="modal-title">Edit Blurb detail</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" 
        // onClick={resetEditForm}
        ></button>
      </div>

      <form action="" 
      // onSubmit={handleEditForm}
      >
      <div className="modal-body">
      <table className="table table-borderless" id='setBlurbData'>
                <tbody>
                   <tr>
                    <th ><label>Title ::</label></th>
                    <td><input type="text"  name='title' value={editForm.title}   onChange={handleEditInputs}/></td>
                    </tr>
                    <tr>
                    <th ><label>URL:: </label></th>
                    <td><input type="text" name='page_url' value={editForm.page_url}  onChange={handleEditInputs}/></td>
                    </tr>
                     <tr>
                    <th > <label>Page Name :: </label></th>
                    <td ><input type="text" name='page_name' value={editForm.page_name}  onChange={handleEditInputs}/>{} </td>
                    </tr>
                    <tr>
                    <th ><label>Label ::</label></th>
                    <td><input type="text" name='rules' value={editForm.rules}  onChange={handleEditInputs}/>{} </td>
                    </tr>
                    <tr>
                    <th > <label>Blurb Content :: </label></th>
                    <td ><textarea name ='blurb_content' value={editForm.blurb_content} onChange={handleEditInputs}>{}</textarea></td>
                    </tr>
                </tbody>
            </table>
      </div>


      <div className="modal-footer">
        <button type="reset" className="btn btn-danger" data-bs-dismiss="modal" onClick={resetEditForm}>Close</button>
        <button type="submit" className="btn btn-success">submit</button>
      </div>
      </form>

    </div>
  </div>
</div>
  )
}

export default EditPopup
