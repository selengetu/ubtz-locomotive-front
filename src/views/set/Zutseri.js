import React, { lazy, useState, useEffect } from "react";

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
    api.getLocseri().then((res) => {
      setData(res.data);
    });
  });

  const renderData = () => {
    if (!data) {
      return (
        <tr>
          <td colspan="5">Уншиж байна...</td>
        </tr>
      );
    }
    if (data.lenght === 0) {
      return (
        <tr>
          <td colspan="5">Бүртгэлтэй зүтгүүрийн сери байхгүй байна</td>
        </tr>
      );
    }
    return data.map((row) => (
      <tr>
        <td>{row.SERICODE}</td>
        <td>{row.SERINAME}</td>
        <td>{row.SECTSNUM}</td>
        <td>{row.POWER}</td>
        <td>{row.SERICOM}</td>
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
                  Зүтгүүрийн сери бүртгэл
                </CCol>
                <CCol col="6" sm="4" md="2" className="mb-3 mb-xl-0">
                  <CButton
                    color="primary"
                    onClick={() => setLarge(!large)}
                    className="mr-1"
                  >
                    Зүтгүүрийн сери үүсгэх
                  </CButton>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <table className="table table-hover table-responsive table-outline mb-0  d-sm-table">
                <thead>
                  <tr>
                    <th>Серийн код</th>
                    <th> Зүтгүүрийн серийн нэр</th>
                    <th>Секцийн тоо</th>
                    <th>Зүтгүүрийн чадал</th>
                    <th>Тайлбар</th>
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
          <CModalTitle> Зүтгүүрийн сери оруулах</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="cvv">Зүтгүүрийн серийн нэр</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>
            <CCol xs="2">
              <CFormGroup>
                <CLabel htmlFor="cvv">Секцийн тоо</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>
            <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="cvv">Зүтгүүрийн чадал</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>

            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="cvv">Тайлбар</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>
            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="cvv">Ачааны нормын хувь</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>

            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="cvv">Суудлын нормын хувь</CLabel>
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
