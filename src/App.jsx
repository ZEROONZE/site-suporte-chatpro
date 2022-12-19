import logo from "./logo.svg";
import "./App.css";
import "./index.css";

import BarraPesquisa from "./components/SearchBar";
import Slider from "./components/Slide";
import { SliderData } from "./components/SliderData";
import Menu from "./components/Menu";

// - React Router
import { Routes, BrowserRouter, Router, Route } from "react-router-dom";
// - Pages

import Home from "./pages/Home";
import { Content } from "./components/Content";
import Navbar from "./components/Navbar";
import { Whatssap } from "./components/WhatsApp";
import { Footer } from "./components/Footer";
import { ImportContact } from "./pages/ImportContact";
import { CreateMenssage } from "./pages/CreateMenssage";
import { CreateVariableMessage } from "./pages/CreateVariableMessage";
import { CreateMenssageImage } from "./pages/CreateMenssageImage";
import { MakeShots } from "./pages/MakeShots";
import { ScheduleShots } from "./pages/ScheduleShots";
import { PresentationAPI } from "./pages/API/PresentationAPI";
import { SendMenssage } from "./pages/API/SendMenssageAPI";
import { SendMenssageUrl } from "./pages/API/SendMenssageUrlAPI";
import { TestPostman } from "./pages/API/TestPostman";
import { AccessPanel } from "./pages/API/AccessPanel";
import { CreditsAPI } from "./pages/API/CreditsAPI";
import { PresentationCHAT } from "./pages/CHAT/PresentationCHAT";
import { ConnectInstanceCHAT } from "./pages/CHAT/ConnectInstanceAPI";
import { ChatBot } from "./pages/CHAT/ChatBot";
import { ConfigureChatbot } from "./pages/CHAT/ConfigureChatbot";
//- componentes

function App() {
  return (
    <body>
      <BrowserRouter>
        <Navbar />
        <Whatssap />

        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/disparos" element={<Content />} />
          <Route path="/import-contacts" element={<ImportContact />} />
          <Route path="/create-menssage" element={<CreateMenssage />} />
          <Route path="/message-variable" element={<CreateVariableMessage />} />
          <Route path="/message-image" element={<CreateMenssageImage />} />
          <Route path="/makes-shots" element={<MakeShots />} />
          <Route path="/schedule-shots" element={<ScheduleShots />} />
          <Route path="/presentation-api" element={<PresentationAPI />} />
          <Route path="/send-menssage" element={<SendMenssage />} />
          <Route path="/send-menssage-url" element={<SendMenssageUrl />} />
          <Route path="/test-postman" element={<TestPostman />} />
          <Route path="/access-panel" element={<AccessPanel />} />
          <Route path="/presentation-chat" element={<PresentationCHAT />} />
          <Route path="/connect-chat" element={<ConnectInstanceCHAT />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/configure-chatbot" element={<ConfigureChatbot />} />
          <Route path="/credits" element={<CreditsAPI />} />
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
