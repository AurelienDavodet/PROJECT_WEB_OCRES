import React, { Component } from 'react'

import './dashboard.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import dataLast from '../Data/dataLast'

//dernières ventes

class Cardtrois extends Component {
  
  render () {
    
    return (
      <div className='Cardtrois'>
        <h3 className='TitreCardetrois'>Dernières ventes</h3>
        <br></br>
        <ul>
          <li>
            {dataLast[0].name} - {dataLast[0].date}
          </li>
          <li>
            {dataLast[1].name} - {dataLast[1].date}
          </li>
          <li>
            {dataLast[2].name} - {dataLast[2].date}
          </li>
          <li>
            {dataLast[3].name} - {dataLast[3].date}
          </li>
          <li>
            {dataLast[4].name} - {dataLast[4].date}
          </li>
          <li>
            {dataLast[5].name} - {dataLast[5].date}
          </li>
          <li>
            {dataLast[6].name} - {dataLast[6].date}
          </li>
          <li>
            {dataLast[7].name} - {dataLast[7].date}
          </li>
          <li>
            {dataLast[8].name} - {dataLast[8].date}
          </li>
          <li>
            {dataLast[9].name} - {dataLast[9].date}
          </li>
        </ul>
      </div>
    )
  }
}

export default Cardtrois