import type { NextPage } from 'next';
import { Button } from 'ui';
import { Sum } from 'functions';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Button title={Sum(2,3)}/>
      </main>
    </div>
  );
};

export default Home;