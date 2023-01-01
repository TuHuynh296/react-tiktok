import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  TwoWayBinding,
  TodoList,
  UseEffectWithDependencies,
  UseLayoutEffect,
  UseRef,
  Memo,
  UseCallBack,
  UseMemoHook,
  UseReducer,
  ToDoAppWithUseReducer,
  ReactContextAndUseContext,
  GlobalStateWithContextAndUseReducer,
  UseImperativeHandle,
  ClsxAndClassnames,
  ReactRouterV6,
  ReactRouterTutorial,
  ReduxTutorial
} from './Lessions';

function App() {
  const [isShowListItem, setIsShowListItem] = useState(true);
  return (
      <div>
        <button onClick={() => setIsShowListItem(!isShowListItem)}>Toggle</button>
        {isShowListItem && <ReduxTutorial />}
      </div>
  );
}

export default App;
