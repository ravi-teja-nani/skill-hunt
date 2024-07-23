import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function AddSkills() {

    const handleSkillsChange = (event, options) => {
        console.log(event)
    }
    
  return (
    <Autocomplete
      freeSolo
      multiple
      options={skills}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      renderOption={(props, option, { selected }) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.name}
          </li>
        );
      }}
      style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Add skills" placeholder="Add skills" />
      )}
      onChange={handleSkillsChange}
    />
  );
}
const skills = [
    { name: 'React.js', id: 1, strength: 4 },
    { name: 'Angular', id: 2, strength: 3 },
    { name: 'Vue.js', id: 3, strength: 4 },
    { name: 'Node.js', id: 4, strength: 5 },
    { name: 'Express.js', id: 5, strength: 4 },
    { name: 'JavaScript', id: 6, strength: 5 },
    { name: 'TypeScript', id: 7, strength: 4 },
    { name: 'HTML5', id: 8, strength: 5 },
    { name: 'CSS3', id: 9, strength: 5 },
    { name: 'Sass', id: 10, strength: 4 },
    { name: 'Less', id: 11, strength: 3 },
    { name: 'Bootstrap', id: 12, strength: 4 },
    { name: 'Tailwind CSS', id: 13, strength: 4 },
    { name: 'jQuery', id: 14, strength: 3 },
    { name: 'Redux', id: 15, strength: 4 },
    { name: 'MobX', id: 16, strength: 3 },
    { name: 'GraphQL', id: 17, strength: 4 },
    { name: 'REST APIs', id: 18, strength: 5 },
    { name: 'Webpack', id: 19, strength: 4 },
    { name: 'Gulp', id: 20, strength: 3 },
    { name: 'Parcel', id: 21, strength: 3 },
    { name: 'Python', id: 22, strength: 5 },
    { name: 'Django', id: 23, strength: 4 },
    { name: 'Flask', id: 24, strength: 4 },
    { name: 'Java', id: 25, strength: 5 },
    { name: 'Spring Boot', id: 26, strength: 4 },
    { name: 'Kotlin', id: 27, strength: 3 },
   
]  