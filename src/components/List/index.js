import React from 'react'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

const ButtonIcon = styled.button.attrs({
  type: 'button',
})`
  background: none;
  border: none;
  padding: 1rem;
  border-radius: 100%;
  line-height: 0;
  color: #888;
  span.fa {
    font-size: 24px;
  }
  span.fa-pencil {
    font-size: 20px;
  }
`

const ListWrapper = styled.ul`
  padding: 0;
  margin: 0;
  li {
    list-style-type: none;
    display: flex;
    align-items: center;
    .list-text {
      flex: 1;
      border-bottom: 1px solid #ddd;
      padding: 1rem;
      padding-left: 0;
    }
  }
`

const FormWrapper = styled.form`
  background: #f8f8f8;
  display: flex;
  align-items: center;
  border-top: 1px solid #ddd;
  border-bottom: 2px solid #0f88c3;
  .container {
    display: flex;
    flex: 1;
  }
  input {
    font-size: 16px;
    border: none;
    outline: none;
    flex: 1;
    background: transparent;
  }
`

export class List extends React.Component {
  render() {
    const { items, onCheck } = this.props
    const mappedTodos = items.map((item, key) => (
      <li key={key}>
        <ButtonIcon onClick={e => onCheck(item)}>
          {item.completed ? <FontAwesome name="check" /> : <FontAwesome name="circle-o" />}
        </ButtonIcon>
        <span className="list-text">{item.name}</span>
      </li>
    ))

    return <ListWrapper>{mappedTodos}</ListWrapper>
  }
}

export class Form extends React.Component {
  render() {
    return (
      <FormWrapper onSubmit={this.props.onSubmit}>
        <div className="container">
          <ButtonIcon>
            <FontAwesome name="circle-o" />
          </ButtonIcon>

          {this.props.children}
          <ButtonIcon>
            <FontAwesome name="pencil" />
          </ButtonIcon>
        </div>
      </FormWrapper>
    )
  }
}
