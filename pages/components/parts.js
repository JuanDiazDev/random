import React from "react";
import {Tabs, Tab } from '@mui/material';
import Looks4Icon from '@mui/icons-material/Looks4';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { FormControl, TextField, Button, Card, ListItem, ListItemText, ListItemAvatar, Avatar} from '@mui/material';
import Box from '@mui/material/Box';
import Winners from "./winners";


const FUNCIONES = {'normal': 'Normal', 'equipos': 'Equipos', 'numeros': 'Numeros'};

export default function Parts() {
    const [winnersNames, setWinnersNames] = React.useState([]);
    const [names, setNames] = React.useState('');
    const [number, setNumber] = React.useState(0);
    const [numeroSorteo, setNumeroSorteo] = React.useState(1);
    const [activeTab, setActiveTab] = React.useState(0)

    function createArray(n){
        const foo = [];
        for (var i = 1; i <= n; i++) {
            foo.push(i);
        }
        return foo;
    }

    function handleSubmit(event){
        event.preventDefault();
        const new_parts = activeTab === 2 ? createArray(numeroSorteo) : names.split("\n");
        setWinnersNames(pick(activeTab === 1 ? names.length : number, new_parts.map(e => e.toString())));
    };

    function handleChange(event){
        event.preventDefault();
        setNames(event.target.value)
    };

    function handleChangeNumber(event){
        event.preventDefault();
        setNumber(event.target.value);
    };

    function handleChangeNumeroSorteo(event){
        event.preventDefault();
        setNumeroSorteo(event.target.value);
    };

    function handleChangeTab(event, newActiveTab){
        setWinnersNames([])
        setActiveTab(newActiveTab);
    }

    function pick(n, parts){

        const shuffled = parts.sort(() => 0.5 - Math.random());

        let selected = shuffled.slice(0, n);

        return selected;
    };

    return (
        <div>
            <Box>
            <Tabs value={activeTab} onChange={handleChangeTab} sx={{paddingBottom: '9px'}} textColor="primary.dark" centered>
  <Tab icon = {<PersonIcon/>} label={FUNCIONES.normal}/>
  <Tab icon = {<GroupIcon/>} label={FUNCIONES.equipos} />
  <Tab icon = {<Looks4Icon/>} label={FUNCIONES.numeros}/>
</Tabs>
</Box>
<FormControl fullWidth onSubmit = {handleSubmit}
>
{activeTab !== 2 ? <TextField 
          id="outlined-textarea"
          label="Participantes"
          variant="outlined"
          onChange = {handleChange}
          color = "primary"
          multiline
        /> : <TextField onChange = {handleChangeNumeroSorteo} type="number" size="small" placeholder = '100'/>}
        <TextField onChange = {handleChangeNumber} type="number" size="small" placeholder = '0'/>
        <Button variant="contained" onClick = {handleSubmit} color = "primary" endIcon={<RocketLaunchIcon />}>
  sortear
</Button>

</FormControl>
           <Winners winners={winnersNames} equipos={activeTab === 1 ? number : 0}/>
        </div>
    );
}
