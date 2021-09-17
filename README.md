## 踩坑记

### 原属性 `innerRef` 已弃用，改为 react 原生 ref 属性：
https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/guides/using-inner-ref.md

### 作用于顶层的 `<DragDropContext onDragEnd={result => {}}></DragDropContext>`

### 可放置组件 `<Droppable droppableId='string' ></Droppable>`  和 可拖拽组件 `<Draggable draggableId='string'></Draggable>`

以上两种组件均为双标签，其包裹的 children 为回调函数，须加上特有属性，如 `provided.draggableProps`、`provided.dragHandleProps`、`ref={provided.innerRef}` 等， 如：

```jsx
<Draggable draggableId={this.props.task.id} index={this.props.index}>
  {provided => (
    <Container style={{ border: '1px solid lightgrey', borderRadius: '2px', padding: '8px', marginBottom: '8px', background: 'white'}}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
    >
      {this.props.task.content}
    </Container>
  )}
</Draggable>
```

### Persist List Reordering with react-beautiful-dnd using the onDragEnd Callback

利用 `onDragEnd` 和 `setState` 使得拖动后的数据在前端保存下来

### snapshot 属性 作用于拖拽时的样式

包裹于 `<Droppable></Droppable>` 和 `<DragDropContext></DragDropContext>` 的回调函数，返回的第二个参数 `snapshot` 可控制拖拽时的样式变化
