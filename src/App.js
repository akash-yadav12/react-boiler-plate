import logo from './logo.svg';
import './App.css';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import ClickCounter2 from './components/ClickCounter2';
// import HoverCounter2 from './components/HoverCounter2';
// import User from './components/User';
// import Counters from './components/Counters';
// import { Greet } from './components/Greet';
// import Hello from './components/hello';
// import Welcome  from './components/welcome';
// import Message from './components/message';
// import Counter from './components/counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import StyleSheets from './components/Stylesheets';
// import Inline from './components/Inline'
// import './appStyle.css';
// import styles from './appStyles.module.css';
// import Form from './components/Form'
// import LifeCycleA from './components/LifeCycleA';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
// import Purecomponent from './components/PureComponent';
// import RegularComp from './components/RegularComp';
// import Parent from './components/Parent';
// import RefsDemo from './components/RefsDemo';
// import FocusInput from './components/FocusInput'
// import FRParentInput from './components/FRParentInput';

// const { default: PortalRoot } = require("./components/PortalRoot");
import ComponentA from './components/ComponentA';
import { UserProvider } from './components/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  return (
    <div className="App">

      <PostForm/>
      {/* <PostList/> */}

      {/* <UserProvider value="Akash">
        <ComponentA/>
      </UserProvider> */}


      {/* <Counters>
        {
        (count,incrementCount) => <ClickCounter2 count = {count} incrementCount = {incrementCount}/>
        }
      </Counters>
      <Counters>
        {
          (count,incrementCount) =><HoverCounter2 count = {count} incrementCount = {incrementCount}/>
        }
      </Counters> */}

    {/* <ClickCounter2/>
    <HoverCounter2/>
    <User render ={(isLoggedIn) => isLoggedIn ? 'Akash':'Guest'}/> */}

    {/* <ClickCounter name="akash"/>
    <HoverCounter/> */}
    {/* <ErrorBoundary><Hero heroName="Batman"/></ErrorBoundary>
    <ErrorBoundary><Hero heroName="Superman"/></ErrorBoundary>
    <ErrorBoundary><Hero heroName="Joker"/></ErrorBoundary> */}

    {/* <PortalRoot/> */}

    {/* <FRParentInput/> */}
    {/* <FocusInput/> */}
    {/* <RefsDemo/> */}
    {/* <Parent/> */}
    {/* <Purecomponent/> */}
   
    {/* <Table/>
    <FragmentDemo/> */}

    {/* <LifeCycleA /> */}
    
    {/* <Form/> */}

      {/* <h1 className="error">Error</h1>
      <h1 className={styles.success}>Sucess</h1> */}

      {/* <Inline/>
      <StyleSheets primary ={true}/> */}
      {/* <NameList/> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <Counter/> */}
      {/* <Greet name="akash" heroName="comeback-man"/> */}
      {/* <Welcome name="akash" heroName="comeback-man"/> */}
      {/* <FunctionClick/> */}
      {/* <ClassClick /> */}
        {/* <Greet name="akash" heroName="comeback-man"> 
          <p>Akash come on man we expect out of you</p>
        </Greet>
        <Greet name="arsh" heroName="show off man"> 
          <button>niggle</button>
        </Greet>
        <Greet name="shraddha" heroName="super-woman"/>
        <Welcome name="akash" heroName="comeback-man"/>
        <Welcome name="arsh" heroName="comeback-man"/>
        <Welcome name="shraddha" heroName="comeback-woman"/> */}
        {/* <Message/> */}
      {/* <Hello/> */}
    </div>
  );
}

export default App;
