import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const DetailsTab = props => {

  return (
    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Description">
        <div className='tab'>
          <p>
            {props.details.description}
          </p>
          <p>
            <strong>Gender: </strong>
            {props.details.gender}
          </p>
          <p>
            <strong>Lens: </strong>
            {props.details.lensType}
          </p>
          <p>
            <strong>Material: </strong>
            {props.details.material}
          </p>
          <p>
            <strong>Style: </strong>
            {props.details.frameStyle}
          </p>
          <p>
            <strong>Measurements: </strong> <br/>
            Frame Width: {props.details.dimensions.FW}mm <br/>
            Lens Height: {props.details.dimensions.LH}mm <br/>
            Lens Width: {props.details.dimensions.LW}mm <br/>
            Temple: {props.details.dimensions.T}mm
          </p>
        </div>
      </Tab>
      <Tab eventKey="profile" title="Product Dimension">
        <div className='tab'>
          <p>
            Frame Width:{props.details.dimensions.FW},
            Lens Height:{props.details.dimensions.LH},
            Lens Width:{props.details.dimensions.LW},
            Temple:{props.details.dimensions.T}
          </p>
        </div>
      </Tab>
    </Tabs>
  );
};

export default DetailsTab;
