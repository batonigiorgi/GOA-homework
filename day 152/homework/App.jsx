const staticList = ['Apple', 'Banana', 'Cherry'];

{staticList.map((item, index) => (
  <h1 key={index}>{item}</h1>
))}