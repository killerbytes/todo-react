import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { addTask, toggleTask } from './actions/todoActions'
import styled from 'styled-components'
import { List, Form } from './components/List'

const Header = styled.header`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #eee;
  h1 {
    font-size: 20px;
    margin: 0;
  }
  h2 {
    font-size: 14px;
    color: #888;
    margin: 0;
  }
  .count {
    color: #888;
    font-size: 16px;
  }
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`

const Button = styled.button`
  margin: 0.5rem;
  padding: 0.8rem 1rem;
  border: none;
  background: ${props => (!props.active ? 'none' : '#EEE')};
  border-radius: ${props => (props.active ? '30px' : '')};
  display: flex;
  align-items: center;
  width: 80%;
  font-weight: bold;
  font-size: 18px;
  color: #666;
  font-family: 'Roboto';
  outline: none;
  span.icon {
    margin-right: 1.2rem;
    color: #0f88c3;
    line-height: 0;
    font-size: 30px;
    font-weight: normal;
  }
`

function getInitialState() {
  return {
    name: '',
    completed: false,
  }
}
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      formEnabled: false,
      form: getInitialState(),
    }
  }
  handleSubmit = e => {
    e.preventDefault()
    this.props.addTask(this.state.form)
    this.setState({
      form: getInitialState(),
    })
  }
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    })
  }
  handleDelete = item => {
    this.props.toggleTask(item)
  }
  handleFormToggle = () => {
    this.setState({
      formEnabled: !this.state.formEnabled,
    })
  }
  render() {
    const { form, formEnabled } = this.state
    const { todo } = this.props
    return (
      <React.Fragment>
        <Header>
          <h2>TASKS</h2>
          <h1>
            Nico Smit's list <span className="count">({todo.items.length})</span>
          </h1>
        </Header>
        <Button onClick={this.handleFormToggle} active={formEnabled}>
          <span className="icon">+</span> Add a task
        </Button>
        {formEnabled && (
          <Form onSubmit={this.handleSubmit}>
            <input
              name="name"
              value={form.name}
              onKeyDown={e => {
                if (e.keyCode === 27) this.setState({ formEnabled: false })
              }}
              onChange={this.handleChange}
            />
          </Form>
        )}

        <div className="container">
          <List items={todo.items} onCheck={this.handleDelete} />
        </div>
      </React.Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      addTask,
      toggleTask,
    },
    dispatch
  )
}

const mapStateToProps = ({ todo }) => ({
  todo,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
