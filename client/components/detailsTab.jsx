import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

const DetailsTab = props => {

  return (
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
