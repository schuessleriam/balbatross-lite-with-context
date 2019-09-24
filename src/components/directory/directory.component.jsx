import React, { useContext } from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';
import DirectoryContext from './../../contexts/directory/directory.context.js';

const Directory = () => { 

const sections = useContext(DirectoryContext);

  return (
    <div className="directory-menu">
        {
          sections.map(({ id, ...otherSectionProps}) => (
              <MenuItem key={id} {...otherSectionProps}/>
          ))
        }
    </div>

  );
}


export default Directory;
