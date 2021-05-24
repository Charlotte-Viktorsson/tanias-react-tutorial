import React, { Component } from "react";

//example of simple component, function component without the class name
//could write something like function TableHeader() {} instead
const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

//example of simple component, function component without the class name
const TableBody = (props) => {
  //row, index are inparameters to the anonymous function in map
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>Delete</button>
        </td>
      </tr>
    );
  });

  return <tbody> {rows} </tbody>;
};

const Table = (props) => {
  //class Table extends Component {
  // render() {
  //   const { characterData } = this.props;
  //   //now we can write characterData instead of this.props.characterData

  const { characterData, removeCharacter } = props;
  //instead of props.characterData, write only characterData
  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  );
};

export default Table;
