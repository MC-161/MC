import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraBaseProvider } from '@chakra-ui/react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import firebaseConfig from '../firebaseConfig'
import 'atropos/css'


firebase.initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraBaseProvider>
      <App />
    </ChakraBaseProvider>
  </React.StrictMode>,
)
