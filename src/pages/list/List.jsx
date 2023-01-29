import "./list.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Datatable from "../../components/datatable/Datatable";

const List = ({ dataTable,coloms }) => {
  // console.log(table);
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable dataName={dataTable} columns={coloms}/>
      </div>
    </div>
  );
};

export default List;
