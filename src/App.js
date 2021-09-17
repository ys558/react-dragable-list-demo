// import { fabric } from "fabric";

import React, { Component } from 'react';
// import { render } from 'react-dom';
// import { Stage, Layer, Rect, Text, Circle } from 'react-konva';
// import Konva from 'konva';

import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import '@atlaskit/css-reset'
import styled from 'styled-components'

const ColumnContainer = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`
const ColumnTitle = styled.h3`
  padding: 8px;
`
const ColumnTaskList = styled.div`
  padding: 8px;
`
class Column extends Component {
  render(){
    return <DragDropContext
        onDragEnd={result => {}}
      >
      <ColumnContainer>
        <ColumnTitle>{this.props.column.title}</ColumnTitle>
          <Droppable droppableId={this.props.column.id}>
            { provided =>  <ColumnTaskList
                innerRef={provided.innerRef}
                {...provided.droppableProps}
              >
                {this.props.task.map((task, index) => <Task key={task.id} task={task} index={index}/> )}
                {provided.placeholder}
              </ColumnTaskList>
            }
          </Droppable>
      </ColumnContainer>
    </DragDropContext>
  }
}


const TaskContainer = styled.div`
  padding: 8px;
  border: 1px solid lightgrey;
  margin-bottom: 8px;
`
class Task extends Component {
  render(){
    return <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {provided => <TaskContainer {...provided.draggableProps}>
            {this.props.task.content}
          </TaskContainer>}
    </Draggable> 
  }
}

const initialData = {
  tasks: {
    'task-1': {id: 'task-1', content: 'jjjjjpppp'},
    'task-2': {id: 'task-2', content: 'xxxcc'},
    'task-3': {id: 'task-3', content: 'yyyff'},
    'task-4': {id: 'task-4', content: 'zzzeee'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    }
  },
  columnOrder: ['column-1'],
}

export default class App extends Component {
  state = initialData
  render() {
    return this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId]
      const tasks = column.taskIds.map(taskIds => this.state.tasks[taskIds])
      return <Column key={column.id} column={column} task={tasks}></Column>
    })
  }
}


