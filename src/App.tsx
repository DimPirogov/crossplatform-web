import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CreateUser } from "./components/CreateUser";
import { UserList } from "./components/UserList";

function App() {
  const [showUserList, setShowUserList] = useState(false);

	return (
		<div className="App">
			<header className="App-header">
        <div>
          <button
            style={{ backgroundColor: showUserList ? '#3c425c' : 'white' }}
            className="TabButton"
            onClick={() => setShowUserList(false)}
          >
            Skapa Användare
          </button>
          <button
            style={{ backgroundColor: showUserList ? 'white' : '#3c425c' }}
            className="TabButton"
            onClick={() => setShowUserList(true)}
          >
            Visa Användare
          </button>
          { showUserList ? <UserList /> : <CreateUser />}
        </div>
			</header>
		</div>
	);
}

export default App;
