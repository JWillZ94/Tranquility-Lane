import React, { Component } from 'react';
import data from './indoorTrackData.json';

class Indoor extends Component {
  render() {
    return (
      <div className="body">
        <ul className="dataList">
          {
            data.map(track => {
              return (
                <li className="listItem" key={track.id}>
                  <img className="pic" src={track.pic} alt="track pic" height="300" width="400" />
                  <h3 className="name">{track.name}</h3>
                  <h4 className="location">{track.location}</h4>
                  <p className="description">{track.description}</p>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default Indoor;
