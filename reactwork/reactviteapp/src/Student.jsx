import React from 'react'
import './student.css'

function Student({college,pic,name,branch,roll,section}) {
  return (
    <div className='icard'>
        <table>
            <tbody>
                <tr><td colSpan={2}>{college}</td></tr>
                <tr><td colSpan={2}>{pic}</td></tr>
                <tr><td>Name</td><td>{name}</td></tr>
                <tr><td>Branch:</td><td>{branch}</td></tr>
                <tr><td>Roll Number:</td><td>{roll}</td></tr>
                <tr><td>Section:</td><td>{section}</td></tr>
                
            </tbody>
        </table>
        </div>
  )
}
// Student.defaultProps={
//   college:"AKG Engineering College"
// }

export default Student