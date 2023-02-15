import React from "react";
import Entry from "./Entry";
import emojipedia from "../emojipedia";

function createEntry(entr) {
  return <Entry key={entr.id}
                emoji={entr.emoji}
                name={entr.name}
                meaning={entr.meaning} />
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map(createEntry)} 
      </dl>
    </div>
  );
}

export default App;
