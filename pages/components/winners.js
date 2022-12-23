import React from "react";
import {Card, ListItem, ListItemText, ListItemAvatar, Avatar} from '@mui/material';
import Angel from '../public/angel.png'
import Juan from '../public/juan.jpeg'
import Blue from '../public/blue.jpg'
import Dodo from '../public/dodo.jpeg'
import Elian from '../public/elian.png'

const NOMBRES = {angel: Angel, 
                elian: Elian, 
                juan: Juan, 
                leo: Dodo,
                empty: Blue};

const COLORES = ['#33F0FF', '#FF3333', '#33FF4F', '#EC33FF', '#FCFF33', '#AC33FF', '#FF9933', '#335BFF']

const esAngel = (name) => {
                    return name.startsWith('angel') ||
                           name.endsWith('lotti') ||
                           name.endsWith('angel');
                 }
                 
                 const esJuan = (name) => {
                     return name.endsWith('uan') ||
                            name.startsWith('juan');
                 }
                 
                 const esElian = (name) => {
                     return name.startsWith('negr') || 
                            name.startsWith('priet') ||
                            name.startsWith('petro') ||
                            name.endsWith('egro') ||
                            name.endsWith('elian')
                 }
                 
                 const esLeo = (name) => {
                     return name.startsWith('leo') ||
                            name.endsWith('nard', name.length - 1) ||
                            name.startsWith('leit')
                 }

                 const handleAvatars = (winner) => {
                    if (esAngel(winner)){
                        return NOMBRES.angel
                    }
                    if (esJuan(winner)){
                        return NOMBRES.juan
                    }
                    if (esElian(winner)){
                        return NOMBRES.elian
                    }
                    if (esLeo(winner)){
                        return NOMBRES.leo
                    }
                    return NOMBRES.empty
                };

export function Winners({winners, equipos}) {
    const coloresAleatorio = COLORES.sort(() => 0.5 - Math.random())
   return (<Card>
                {Array.isArray(winners) && winners.length > 0 ? winners.map((name, index) => {
                    const color = equipos === 0 ? '#FFFFFF' : coloresAleatorio[(index / (winners.length / equipos)) | 0];
                    return (
                      <ListItem key = "win" alignItems="center" sx={{backgroundColor: color}}>
                      <ListItemAvatar> 
                        <Avatar alt={name} src={handleAvatars(name.toLowerCase()).src} />
                      </ListItemAvatar>
                      <ListItemText
                        primary={name}
                      />
                    </ListItem>
                );})  : null}
            </Card>);
}

