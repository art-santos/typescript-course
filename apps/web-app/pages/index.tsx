import type { NextPage } from 'next';
import { Button } from 'ui';
import { Sum, Subtraction } from 'functions';

const Home: NextPage = () => {
  const n1:number = Sum(12,3);
  const n2:number = Sum(2,8);
  const title_math:number = Subtraction(n1, n2);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <Button title={title_math}/>
      </main>
    </div>
  );
};

export default Home;