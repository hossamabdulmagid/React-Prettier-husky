import styled from "styled-components";
export const RapperdTable = styled.div`
  table {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }

  table td,
  table th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  table tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  table tr:hover {
    background-color: #f23a3a;
  }

  table th,
  tfoot td {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #4caf50;
    color: white;
  }
`;
