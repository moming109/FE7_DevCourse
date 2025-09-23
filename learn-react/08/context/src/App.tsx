import Page from "./components/Page";
import ConfigureProvider from "./contexts/configure/ConfigureProvider";
import CounterProvider from "./contexts/counter/CounterProvider";

export default function App() {
  return (
    <>
      <ConfigureProvider>
        <CounterProvider>
          <Page />
        </CounterProvider>
      </ConfigureProvider>
    </>
  );
}
