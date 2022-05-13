import React from 'react';

export default class CharacterDetailPage extends React.Component {
  render() {
   
  
  return (
    <>
      <h1>CHARACTER DETAIL PAGE</h1>
      <button onClick={this.props.onClickVoltar}>Voltar Lista</button>
    </>
  );
};
}

