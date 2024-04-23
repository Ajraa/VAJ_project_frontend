
export async function emailListLoader({params}) {
  console.log(params);

  if (params.mode === 'r') 
  return null;
}

export default function EmailList() {
  return <h1>Email list</h1>;
}