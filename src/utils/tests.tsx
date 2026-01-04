import { render, RenderOptions } from '@testing-library/react'
import { PreloadedState } from '@reduxjs/toolkit'
import { PropsWithChildren } from 'react'
import { AppStore, RootState, configDaStore } from '../store'
import { Provider } from 'react-redux'

interface ExtendenRenderOptions extends Omit<RenderOptions, 'queries'> {
  preloadedState?: PreloadedState<RootState>
  store?: AppStore
}

export function renderizaComProvider(
  //argumento
  elemento: React.ReactElement,
  {
    preloadedState = {},
    store = configDaStore(preloadedState),
    ...opcoesAdicionais
  }: ExtendenRenderOptions = {}
) {
  //wrapper//
  function Encapsulador({ children }: PropsWithChildren): JSX.Element {
    return <Provider store={store}>{children}</Provider>
  }
  return {
    store,
    ...render(elemento, {
      wrapper: Encapsulador,
      ...opcoesAdicionais
    })
  }
}
