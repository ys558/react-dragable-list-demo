import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './task';


export default class Column extends React.Component {
  render() {
    return <div style={{ margin: '8px', border: '1px solid lightgrey', borderRadius:' 2px'}}>
        <span style={{ padding: '8px' }}>{this.props.column.title}</span>
        <Droppable droppableId={this.props.column.id}>
          {(provided, snapshot) => (
            <div ref={provided.innerRef} {...provided.droppableProps} controlStyle={this.controlStyle} style={{ padding: '8px', backgroundColor: }}
              isDraggingOver={snapshot.isDraggingOver}
            >

              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
  }
}