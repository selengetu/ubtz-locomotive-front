import React, { lazy, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { CCard, CCardBody, CCardHeader, CCol, CRow } from "@coreui/react";

import "react-tabs/style/react-tabs.css";
import api from "../../api";
const Dashboard = () => {
  const [large, setLarge] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    api.Waypart().then((res) => {
      setData(res.data);
    });
  });

  const renderData = () => {
    if (!data) {
      return (
        <tr>
          <td colspan="10">Уншиж байна...</td>
        </tr>
      );
    }
    if (data.lenght === 0) {
      return (
        <tr>
          <td colspan="10">Бүртгэлтэй бичлэг байхгүй байна</td>
        </tr>
      );
    }
    return data.map((row) => (
      <tr>
        <td>{row.MOVETYPE}</td>
        <td>{row.PARTCODE}</td>
        <td>{row.PARTBEGCODE}</td>
        <td>{row.PARTBEGNAME}</td>
        <td>{row.PARTBEGKM}</td>
        <td>{row.PARTBEGCHILDKM}</td>
        <td>{row.PARTENDCODE}</td>
        <td>{row.PARTENDNAME}</td>
        <td>{row.PARTENDKM}</td>
        <td>{row.PARTENDCHILDKM}</td>
      </tr>
    ));
  };

  return (
    <>
      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardHeader>
              <CRow className="align-items-center">
                <CCol col="6" sm="4" md="10" className="mb-3 mb-xl-0">
                  Үйлчлэх мөрийн бааз
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <table className="table table-hover table-responsive table-outline mb-0  d-sm-table">
                <thead>
                  <tr>
                    <th>Хөдөлгөөн</th>
                    <th>Мөрийн дугаар </th>
                    <th>Эхлэх өртөө</th>
                    <th>Дифф жин</th>
                    <th>Гол замын км</th>
                    <th>Өөрийн км</th>
                    <th>Төгсөх өртөө</th>
                    <th>Гол замын км</th>
                    <th>Өөрийн км</th>
                  </tr>
                </thead>
                <tbody>{renderData()}</tbody>
              </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Dashboard;
