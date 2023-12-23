import React from 'react'
// import EditPopup from '../edit modale/EditPopup'

const Card = ({indexNo,id,cardDetails,remove,editForm}) => {
   
  return (
    
   <>
        <div className="col-sm-6 p-2" id={`blurbContainer${id}`}>
            <div className="card">
                <div className='d-flex justify-content-between p-2'>
                    <input type="hidden" value={cardDetails.urlId} />
                <h4>{cardDetails.title}</h4>
                    <div className=' col-2 d-flex justify-content-around pt-2'>
                    <i className="fa-solid fa-pencil cursorPointer" data-bs-toggle="modal" data-bs-target='#editModel' onClick={() => editForm(indexNo)} ></i>
                    <i className="fa-solid fa-trash cursorPointer" onClick={() => remove(indexNo)}></i>
                    </div>
                </div>
            <div className="card-body">
            <table className="table table-borderless">
                <tbody>
                    <tr>
                    <th><label>URL:: </label></th>
                    <td><h6>{ cardDetails.URL}</h6></td>
                    </tr>
                    <tr>
                    <th> <label>Page Name :: </label></th>
                    <td > <h6>{ cardDetails.PageName} </h6></td>
                    </tr>
                    <tr>
                    <th ><label>Label ::</label></th>
                    <td><h6>{ cardDetails.label} </h6></td>
                    </tr>
                    <tr>
                    <th > <label>Blurb Content :: </label></th>
                    <td><h6 className='blurbDataContainer'>{ cardDetails.BlurbContent} </h6></td>
                    </tr>
                </tbody>
            </table>
            </div>
            </div>
        </div>
    </>
    
  )
}

export default Card
