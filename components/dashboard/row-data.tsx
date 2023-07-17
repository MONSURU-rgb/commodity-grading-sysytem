const rowDataList = [
  {
    action: "Rejected after scanning",
    commodity: "Paddy Rice",
    grades: "Grade 1",
    date: "Jan 4, 2022",
    by: "Abdulrasheed Basit",
  },

  {
    action: "Created a commodity",
    commodity: "Cocoa Beans",
    grades: "Grade 2",
    date: "Jan 4, 2022",
    by: "Ayodele Davies",
  },

  {
    action: "Scanned a commodity",
    commodity: "Paddy Rice",
    grades: "Grade 1",
    date: "Jan 4, 2022",
    by: "Ekene Smart",
  },

  {
    action: "Error while scanning",
    commodity: "Cocoa Beans",
    grades: "Grade 2",
    date: "Jan 4, 2022",
    by: "Ayodele Davies",
  },

  {
    action: "Scanned a commodity",
    commodity: "Paddy Rice",
    grades: "Grade 1",
    date: "Jan 4, 2022",
    by: "Ekene Smart",
  },

  {
    action: "Error while scanning",
    commodity: "Cocoa Beans",
    grades: "Grade 2",
    date: "Jan 4, 2022",
    by: "Ayodele Davies",
  },

  {
    action: "Scanned a commodity",
    commodity: "Paddy Rice",
    grades: "Grade 1",
    date: "Jan 4, 2022",
    by: "Ekene Smart",
  },
];

export const rowData = rowDataList.map(
  ({ action, commodity, grades, date, by }) => (
    <tr key={by}>
      <td>{action}</td>
      <td>{commodity}</td>
      <td>{grades}</td>
      <td>{date}</td>
      <td>{by}</td>
    </tr>
  )
);
