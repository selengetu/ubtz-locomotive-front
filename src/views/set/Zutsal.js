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
    api.getLocsal().then((res) => {
      setData(res.data);
    });
  });

  const renderData = () => {
    if (!data) {
      return (
        <tr>
          <td colspan="6">Уншиж байна...</td>
        </tr>
      );
    }
    if (data.lenght === 0) {
      return (
        <tr>
          <td colspan="6">Бүртгэлтэй маршрут байхгүй байна</td>
        </tr>
      );
    }
    return data.map((row) => (
      <tr>
        <td>{row.SPLITSERI}</td>
        <td>{row.SPLITZUT}</td>
        <td>{row.MAINSERI}</td>
        <td>{row.MAINZUT}</td>
        <td>{row.SPLITSECTS}</td>
        <td>{row.ORIGSECTS}</td>
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
                  Зүтгүүрийн салгалт бүртгэл
                </CCol>
                <CCol col="6" sm="4" md="2" className="mb-3 mb-xl-0">
                  <CButton
                    color="primary"
                    onClick={() => setLarge(!large)}
                    className="mr-1"
                  >
                    Зүтгүүрийн салгалт үүсгэх
                  </CButton>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <table className="table table-hover table-responsive table-outline mb-0  d-sm-table">
                <thead>
                  <tr>
                    <th>Хосолсон ИТ сери</th>
                    <th>Хосолсон ИТ дугаар</th>
                    <th>Үндсэн ИТ сери</th>
                    <th>Үндсэн ИТ дугаар</th>
                    <th>Секцийн дугаар</th>
                    <th>Секцийн тоо</th>
                  </tr>
                </thead>
                <tbody>{renderData()}</tbody>
              </table>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <CModal show={large} onClose={() => setLarge(!large)} size="lg">
        <CModalHeader closeButton>
          <CModalTitle> Зүтгүүрийн салгалт оруулах</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="cvv">Хосолсон ИТ сери</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>
            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="cvv">Хосолсон ИТ дугаар</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>
            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="cvv">Үндсэн ИТ сери</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>

            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="cvv">Үндсэн ИТ дугаар</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>
          </CRow>
        </CModalBody>
        <CModalFooter>
          <CButton color="primary" onClick={() => setLarge(!large)}>
            Хадгалах
          </CButton>{" "}
          <CButton color="secondary" onClick={() => setLarge(!large)}>
            Хаах
          </CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};

export default Dashboard;
