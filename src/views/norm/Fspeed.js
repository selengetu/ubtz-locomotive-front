import React, { lazy, useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CFormGroup,
  CInput,
  CLabel,
} from "@coreui/react";

import "react-tabs/style/react-tabs.css";
import api from "../../api";
const Dashboard = () => {
  const [large, setLarge] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    api.getFspeed().then((res) => {
      setData(res.data);
    });
  });

  const renderData = () => {
    if (!data) {
      return (
        <tr>
          <td colspan="15">Уншиж байна...</td>
        </tr>
      );
    }
    if (data.lenght === 0) {
      return (
        <tr>
          <td colspan="15">Бүртгэлтэй бичлэг байхгүй байна</td>
        </tr>
      );
    }
    return data.map((row) => (
      <tr>
        <td>{row.MOVETYPE}</td>
        <td>{row.SERICODE}</td>
        <td>{row.PARTCODE}</td>

        <td>{row.ODDLIMIT}</td>
        <td>{row.ODDDIFFER}</td>
        <td>{row.ODDSPEED60}</td>
        <td>{row.ODDSPEEDNORM}</td>
        <td>{row.PARTLEGTH}</td>
        <td>{row.PARTBEGNAME}</td>
        <td>{row.PARTENDNAME}</td>
        <td>{row.EVENLIMIT}</td>
        <td>{row.EVENDIFFER}</td>
        <td>{row.EVENSPEED60}</td>
        <td>{row.EVENSPEEDNORM}</td>
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
                  Ачааны ход
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <table className="table table-hover table-responsive table-outline mb-0  d-sm-table">
                <thead>
                  <tr>
                    <th>Хөдөлгөөн</th>
                    <th>Сери</th>
                    <th>Мөрийн код </th>
                    <th>Хязгаарын жин</th>
                    <th>Дифф жин</th>
                    <th>60 км/цаг</th>
                    <th>6000тн</th>
                    <th>Тогтоосон норм</th>
                    <th>Эхлэх</th>
                    <th>Төгсөх</th>
                    <th>Нормт хугацаа</th>
                    <th>Хязгаарын жин</th>
                    <th>Дифф жин</th>
                    <th>60 км/цаг</th>
                    <th>6000тн</th>
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
