import React from 'react';
import './index.css'
import ExItems from './comp/ExItems';

function App(props) {
  // let expenseDate=new Date(2022,2,17);
  // let expenseTitle="School Fees";
  // let expenseAmount=300;
  let expenses=[{
    id:'S1',
    title:"School Fees",
    amount:200,
    date:new Date(2022,2,17)
  },{
    id:'S2',
    title:"Tuition-Fees",
    amount:150,
    date:new Date(2022,3,17)
  },{
    id:'S3',
    title:"Coaching-Fees",
    amount:144,
    date:new Date(2022,3,12)
  },{
    id:'S4',
    title:"Madarsa-Fees",
    amount:125,
    date:new Date(2022,5,11)
  },
];

  return (
    <div>
    <h2>Let's Go</h2>
   <ExItems date={expenses[0].date} title={expenses[0].title} amount={expenses[0].amount} />
   <ExItems date={expenses[1].date} title={expenses[1].title} amount={expenses[1].amount} />
   <ExItems date={expenses[2].date} title={expenses[2].title} amount={expenses[2].amount} />
   <ExItems date={expenses[3].date} title={expenses[3].title} amount={expenses[3].amount} />
    </div>
  );
}

export default App;
