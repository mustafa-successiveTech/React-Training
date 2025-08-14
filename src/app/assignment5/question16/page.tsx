import withDataFetching from '@/app/hoc/withDataFetching';
import DataDisplay from '@/app/components/DataDisplay';

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1', {
    cache: 'no-store' 
  });
  const data = await res.json();
  return data;
}

const DataDisplayWithData = withDataFetching(DataDisplay);

export default async function Page() {
  const data = await fetchData();

  return (
    <div style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <h1>Question 16 - Data Fetching HOC</h1>
      <DataDisplayWithData data={data} />
    </div>
  );
}
