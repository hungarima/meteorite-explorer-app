import React from 'react'




function Pagination(props) {

    function handleClick(to, allowed){
        if(!allowed){
            return
        }
        props.handlePageClick(to)
    }

    return(
    <div>
        <button className={props.enablePrevButton ? "enabled" : "disabled"} onClick={() => handleClick("prev", props.enablePrevButton)}>
            Previous
        </button>
        <button className={props.enableNextButton ? "enabled" : "disabled"} onClick={() => handleClick("next", props.enableNextButton)}>
            Next
        </button>
    </div>
    )
}

export default Pagination