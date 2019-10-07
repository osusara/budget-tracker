import React from 'react'
import loading from'../../assets/loading.svg'

const Loading = () => (
  <div style={loadingScreen} className="container mx-auto">
    <div className="row">
      <div className="col-md-4 mx-auto">
        <div className="text-center">
          <img src={loading} alt="Loading..." />
        </div>
        <h2 className="text-center">Please wait</h2>
      </div>
    </div>
  </div>
);

const loadingScreen = {
    margin: "5%"
}

export default Loading
