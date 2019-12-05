import React from "react";
import MaterialTable from "material-table";

export const PlaceSchedule = () => {
  const [state, setState] = React.useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Surname", field: "surname" },
      { title: "Birth Year", field: "birthYear", type: "numeric" }
    ],
    data: [
      { name: "Mehmet", surname: "Baran", birthYear: 1987 },
      {
        name: "Zerya Betül",
        surname: "Baran",
        birthYear: 2017
      }
    ]
  });

  return (
    <MaterialTable
      pagination="false"
      title="Horaires"
      options={{
        paging: false,
        search: false
      }}
      columns={state.columns}
      data={state.data}
    />
  );
};
