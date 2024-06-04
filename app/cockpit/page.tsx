'use client';
import SupplierGroupList from './component/grpSupplierComps/groupBySupplier';
import Search from "./component/search";

function Dashboard()
{
  return (<>
  <Search user={'Anandakrishnan M'}/>
  
<SupplierGroupList />
</>);
}
export default Dashboard;