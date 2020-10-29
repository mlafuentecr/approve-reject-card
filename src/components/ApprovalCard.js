import React, { Component } from 'react'

const ApprovalCard =( props )=>{
  
    return (
      <div className="approvalCard">

      <div className="approvalCard__content">
        {props.children}
      </div>

      <div className='approvalCard__btns'>
          <button class='ui primary button'>Approve</button>
          <button class='ui button'>Discard</button>
        </div>

  </div>
    )

}


export default ApprovalCard;