import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { MdAccountCircle } from "react-icons/md";
import Login from '../../molecules/login';

export default function NestedList({ categories }) {

  const [open, setOpen] = React.useState({});

  const handleClick = (categoryName) => {
    setOpen((prevOpen) => ({
      ...prevOpen,
      [categoryName]: !prevOpen[categoryName]
    }));
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
    >
      <ListItemButton>
        <Login />
      </ListItemButton>
      {categories.map((category) => (
        <div key={category.title}>
          <ListItemButton onClick={() => handleClick(category.title)}>
            <ListItemText primary={category.title} />
            {open[category.title] ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open[category.title]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {category.subcategories.map((item, index) => (
                <ListItemButton key={item.id} sx={{ pl: 4 }}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.title}
                  </a>
                </ListItemButton>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
  );
}
