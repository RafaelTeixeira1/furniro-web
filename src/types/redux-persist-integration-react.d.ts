declare module 'redux-persist/integration/react' {
  import { ComponentType } from 'react';
  import { Persistor } from 'redux-persist';

  interface PersistGateProps {
    persistor: Persistor;
    loading?: React.ReactNode | null;
    children?: React.ReactNode;
    onBeforeLift?: () => Promise<void> | void;
  }

  export const PersistGate: ComponentType<PersistGateProps>;
}
