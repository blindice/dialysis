import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  QueryClientProvider,
  QueryClient,
  QueryCache,
} from '@tanstack/react-query'
import { Provider } from 'jotai'
import { BrowserRouter } from 'react-router-dom'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { ProSidebarProvider } from 'react-pro-sidebar'

import App from './App'
import './index.css'

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error, query) => console.log(error),
  }),
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <QueryClientProvider client={queryClient}>
          <ProSidebarProvider>
            <App />
          </ProSidebarProvider>
        </QueryClientProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
