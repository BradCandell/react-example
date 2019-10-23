import React from 'react';
import './App.css';
import { FancyButton } from './components/FancyButton';

const App: React.FC = () => {
  return (
    <div className="App">
   
      <h1>(Simple) React Example</h1>
      <p>
        This project provides a simple example of a React application built using <code>npx create-react-app --typescript</code> to demonstrate
        a component that accepts properties and inner state with React Hooks.
      </p>
      
      {/* Simple Example */}
      <FancyButton label="Toggle">
        <div>
          <h1>Simple Example</h1>
          <p>
            This example uses only the <code>label</code> property of the <code>FancyButton</code> component. This means the value of the label will 
            not change with the collapsed state.
          </p>
          <p>
            <h2>Code</h2>
            <code>
              &lt;FancyButton label=&quot;Toggle&quot;&gt;<br />
                ...Content HTML Here...<br />
              &lt;/FancyButton&gt;
            </code>
          </p>
        </div>
      </FancyButton>

      {/* Collapsed State Impacts Label */}
      <FancyButton label="Hide" collapsedLabel="Show">
        <div>
          <h1>Collapsed State Impacts Label</h1>
          <p>
            This example uses both the <code>label</code> (<em>Required</em>) and <code>collapsedLabel</code> properties to define what text will display
            in the button, depending on the collapsed state.
          </p>
          <p>
            <h2>Code</h2>
            <code>
              &lt;FancyButton label=&quot;Hide&quot; collapsedLabel=&quot;Show&quot;&gt;<br />
              ...Content HTML Here...<br />
              &lt;/FancyButton&gt;
            </code>
          </p>
        </div>
      </FancyButton>


      
    </div>
  );
}

export default App;
