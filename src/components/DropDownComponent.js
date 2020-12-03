import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const DropdownComponent = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  const items = props.map((item) => {
    return (
        <div className="col-12 col-md-5 m-1"  key={item.id}>
            <DropdownItem text>{item.name}</DropdownItem>
        </div>
    );
  });
  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>
        {props.name}
      </DropdownToggle>
      <DropdownMenu>
            {items}
      </DropdownMenu>
    </Dropdown>
  );
}

export default DropdownComponent;
