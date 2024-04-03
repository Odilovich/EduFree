import { Header, Sections } from "@components";
import { MainComponent } from "@containers";

const App = () => {
  return (
    <>
      <Header />
      <MainComponent>
        <Sections/>
      </MainComponent>
    </>
  );
};

export default App;