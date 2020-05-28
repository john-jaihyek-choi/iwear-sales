import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const DetailsTab = props => {

  return (
  // <div>
  //     <ul class="nav nav-tabs">
  //     <li>
  //         <a class="nav-link active">Description</a>
  //     </li>
  //     <li>
  //         <a class="nav-link">Dimensions</a>
  //     </li>
  //     </ul>
  //     <div class="tab-content">
  //     <div class="tab-pane active" id="description">
  //         <p>{props.details.description}</p>
  //     </div>
  //     <div class="tab-pane" id="profile">
  //         <p>Frame Width:{props.details.dimensions.FW}, Lens Height:{props.details.dimensions.LH}, Lens Width:{props.details.dimensions.LW}, Temple:{props.details.dimensions.T}</p>
  //     </div>
  //     <div class="tab-pane" id="messages">
  //         dont know yet
  //     </div>
  //     </div>
  // </div>
    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Description">
        <p>
          {props.details.description}
        </p>
      </Tab>
      <Tab eventKey="profile" title="Dimensions">
        <p>Frame Width:{props.details.dimensions.FW}, Lens Height:{props.details.dimensions.LH}, Lens Width:{props.details.dimensions.LW}, Temple:{props.details.dimensions.T}</p>
      </Tab>
    </Tabs>
  );
};

export default DetailsTab;
