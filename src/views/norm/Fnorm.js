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
    api.getFnorm().then((res) => {
      setData(res.data);
    });
  });

  const renderData = () => {
    if (!data) {
      return (
        <tr>
          <td colspan="7">Уншиж байна...</td>
        </tr>
      );
    }
    if (data.lenght === 0) {
      return (
        <tr>
          <td colspan="7">Бүртгэлтэй бичлэг байхгүй байна</td>
        </tr>
      );
    }
    return data.map((row) => (
      <tr>
        <td>{row.MOVETYPE}</td>
        <td>{row.PARTCODE}</td>
        <td>{row.MINLIMIT}</td>
        <td>{row.MAXLIMIT}</td>
        <td>{row.SERICODE}</td>
        <td>{row.EVENNORM}</td>
        <td>{row.ODDNORM}</td>
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
                  Ачааны норм
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <table className="table table-hover table-responsive table-outline mb-0  d-sm-table">
                <thead>
                  <tr>
                    <th>Хөдөлгөөн</th>
                    <th>Мөрийн код</th>
                    <th>Доод хязгаар</th>
                    <th>Дээд хязгаар</th>
                    <th>Сери</th>
                    <th>Тэгш норм</th>
                    <th>Сондгой норм</th>
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
