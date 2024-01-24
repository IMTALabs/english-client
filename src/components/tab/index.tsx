import TabButton from "./tab-button";

export interface TabProps {
  setMode: (mode: string) => void;
  mode: string;
  title: string[];
}

const Tab = ({setMode, mode, title}: TabProps) => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 gap-4">
        <TabButton tabTitle={title[0]} onClick={() => setMode('gen_topic')} isActive={mode === 'gen_topic'} />
        <TabButton tabTitle={title[1]} onClick={() => setMode('no_gen_topic')} isActive={mode !== 'gen_topic'} />
      </div>
    </div>
  );
};

export default Tab;
