import logo from "./logo.svg";
import "./App.css";
import { Auth0Provider } from "@auth0/auth0-react";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

function App() {
  return (
    <Auth0Provider
      domain="dynamics-of-development.us.auth0.com"
      clientId="x3v9kwN7gfxvTKdDtKB2901L14Y9SVWe"
      redirectUri={window.location.origin}
    >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <LoginButton />
            <LogoutButton />
          </div>
        </header>
      </div>
    </Auth0Provider>
  );
}

export default App;
