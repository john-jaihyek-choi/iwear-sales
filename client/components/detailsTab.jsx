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
        </div>
      </Tab>
      <Tab eventKey="profile" title="Dimensions">
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
