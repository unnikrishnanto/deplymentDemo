import React from 'react'

export default function Classes(props) {
  return (
    <div >
        <h3>Session: {props.name}</h3>
        <h3>Tutor: {props.tutor}</h3>
    </div>
  )
}


// import React, { Component } from 'react'

// export default class Classes extends Component {
//   render() {
//     return (
//       <div>Classes</div>
//     )
//   }
// }