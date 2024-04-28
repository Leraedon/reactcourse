import { useState } from 'react';

import Header from './components/Header/Header.jsx'
import { CORE_CONCEPTS } from './data.js';
import { CoreConcept } from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';

function App() {
  const [ selectedTopic, setSelectedTopic ] = useState('');

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton)
  }

  let tabContent = <p>Please select a topic.</p>;

  if(selectedTopic) {
    tabContent = (
      <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
    )
  }

  return (
    <div>
      <Header />  
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept key={conceptItem.title} {...conceptItem}/>
        ))}
        </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} label="Components" onSelect={() => handleSelect('components')}/>
            <TabButton isSelected={selectedTopic === 'jsx'} label="JSX" onSelect={() => handleSelect('jsx')}/>
            <TabButton isSelected={selectedTopic === 'props'} label="Props" onSelect={() => handleSelect('props')}/>
            <TabButton isSelected={selectedTopic === 'state'} label="State" onSelect={() => handleSelect('state')}/>
          </menu>
            {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
