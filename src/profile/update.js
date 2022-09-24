import React from "react";


function Update(){
    function update(){
        return <h1>updated</h1>
    }
    return(
        <form>
        <h3>Update</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
            
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            
          />
        </div>
        <div className="d-grid">
          <button onClick={update} type="submit"  className="btn btn-primary">
            Update
          </button>
        </div>
      </form>
    )
}
export default Update;