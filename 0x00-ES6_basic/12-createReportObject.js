export default function createReportObject(employeesList) {
  const reportObject = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments(employees) {
      return Object.keys(employees).length;
    },
  };

  return reportObject;
}
