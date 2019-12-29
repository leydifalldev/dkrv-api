import React from "react";
import MaterialTable from "material-table";
import { useQuery } from "@apollo/react-hooks";
import { GET_PROFILE_LIST } from "../../../network";
import { TableToolbar } from "./TableToolbar";

export const ProfileListLayout = () => {
  const { data } = useQuery(GET_PROFILE_LIST);
  const [state, setState] = React.useState({
    columns: [
      {
        Title: "Avatar",
        field: "url",
        render: rowData => (
          <img
            src={rowData.pictures.gallery[0].small}
            style={{ width: 50, height: 50, borderRadius: "50%" }}
          />
        )
      },
      { title: "Prénom", field: "firstname" },
      { title: "Nom", field: "lastname" },
      { title: "Nom d'artiste", field: "artistname" },
      {
        title: "Téléphone",
        field: "phone",
        render: rowData => <span>{rowData.contact.phone}</span>
      },
      {
        title: "Email",
        field: "email",
        render: rowData => <span>{rowData.contact.email}</span>
      },
      { title: "Type de compte", field: "roles" },
      { title: "Pays", field: "country" }
    ]
  });

  const add = async data => {
    console.log(data);
  };

  console.log(data);

  return (
    <MaterialTable
      components={{
        Toolbar: props => TableToolbar(props)
      }}
      title="Profil"
      columns={state.columns}
      data={data && data.profiles}
      editable={{
        onRowAdd: newData => add(newData),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
};

const ToolBar = () => {};
