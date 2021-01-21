import React, { lazy, useEffect, useState } from "react";

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
  CSelect,
} from "@coreui/react";
import "react-tabs/style/react-tabs.css";
import api from "../../api";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [large, setLarge] = useState(false);

  useEffect(() => {
    api.getWorkType().then((res) => {
      setData(res.data);
    });
  });

  const renderData = () => {
    if (!data) {
      return (
        <tr>
          <td colspan="12">Уншиж байна...</td>
        </tr>
      );
    }
    if (data.lenght === 0) {
      return (
        <tr>
          <td colspan="12">Бүртгэлтэй ажлын төрөл байхгүй байна</td>
        </tr>
      );
    }
    return data.map((row) => (
      <tr>
        <td>{row.WORKMOVE}</td>
        <td>{row.WORKID}</td>
        <td>{row.WORKNAME}</td>
        <td>{row.INPUTCODE}</td>
        <td>{row.WORKMASH}</td>
        <td>{row.WORKTUSL}</td>
        <td>{row.NORMTYPE}</td>
        <td>{row.TULSHCODE}</td>
        <td>{row.WORKSUUD}</td>
        <td>{row.WORKACH}</td>
        <td>{row.WORKNORM}</td>
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
                  Ажлын төрөл бүртгэл
                </CCol>
                <CCol col="6" sm="4" md="2" className="mb-3 mb-xl-0">
                  <CButton
                    color="primary"
                    onClick={() => setLarge(!large)}
                    className="mr-1"
                  >
                    Ажлын төрөл үүсгэх
                  </CButton>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <table className="table table-hover table-responsive table-outline mb-0  d-sm-table">
                <thead>
                  <tr>
                    <th>Хөдөлгөөн</th>
                    <th>Код</th>
                    <th>Ажлын нэр</th>
                    <th>Зардлын код</th>
                    <th>Машинч цалин</th>
                    <th>Туслахын цалин</th>
                    <th>Нормын төрөл</th>
                    <th>Түлшний код</th>
                    <th>Суудлын вагон</th>
                    <th>Ачааны вагон</th>
                    <th>Нормтой эсэх</th>
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
          <CModalTitle> Ажлын төрөл оруулах</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="cvv">Хөдөлгөөн</CLabel>
                <CSelect custom name="ccmonth" id="ccmonth">
                  <option value="1">0-Үндсэн депо</option>
                  <option value="2">1-Эргэлтийн депо</option>
                </CSelect>
              </CFormGroup>
            </CCol>
            <CCol xs="2">
              <CFormGroup>
                <CLabel htmlFor="cvv">Код</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>
            <CCol xs="6">
              <CFormGroup>
                <CLabel htmlFor="cvv">Нэр</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>

            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="cvv">Зардал</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>
            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="cvv">Төрөл</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>

            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="cvv">Түлш</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>
            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="cvv">Машинч</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>
            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="cvv">Туслах</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>

            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="cvv">Оролт</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>
            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="cvv">Суудал</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>
            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="cvv">Ачаа</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>
            <CCol xs="3">
              <CFormGroup>
                <CLabel htmlFor="cvv">Норм</CLabel>
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
