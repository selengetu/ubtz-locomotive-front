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
    api.getUser().then((res) => {
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
          <td colspan="5">Бүртгэлтэй Хэрэглэгч байхгүй байна</td>
        </tr>
      );
    }
    return data.map((row) => (
      <tr>
        <td>{row.EMPID}</td>
        <td>{row.FNAME}</td>
        <td>{row.DEPOCODE}</td>
        <td>{row.LOGID}</td>
        <td>{row.LOGPRIV}</td>
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
                  Хэрэглэгч бүртгэл
                </CCol>
                <CCol col="6" sm="4" md="2" className="mb-3 mb-xl-0">
                  <CButton
                    color="primary"
                    onClick={() => setLarge(!large)}
                    className="mr-1"
                  >
                    Хэрэглэгч үүсгэх
                  </CButton>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <table className="table table-hover table-responsive table-outline mb-0  d-sm-table">
                <thead>
                  <tr>
                    <th>Хэрэглэгчийн дугаар</th>
                    <th>Хэрэглэгчийн нэр</th>
                    <th>Депо</th>
                    <th>Нэвтрэх нэр</th>
                    <th>Эрх</th>
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
          <CModalTitle>Хэрэглэгч оруулах</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="cvv">Хэрэглэгчийн нэр</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="cvv">Албан тушаал</CLabel>
                <CSelect custom name="ccmonth" id="ccmonth">
                  <option value="1">0-Нарьдчик</option>
                  <option value="2">1-Засварчин</option>
                </CSelect>
              </CFormGroup>
            </CCol>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="cvv">Нэвтрэх нэр</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>

            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="cvv">Хэрэглэгчийн эрх</CLabel>
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
