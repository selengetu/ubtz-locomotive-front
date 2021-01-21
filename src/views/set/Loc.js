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
    api.getLoc().then((res) => {
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
          <td colspan="7">Бүртгэлтэй зүтгүүр байхгүй байна</td>
        </tr>
      );
    }
    return data.map((row) => (
      <tr>
        <td>{row.DEPOCODE}</td>
        <td>{row.SERICODE}</td>
        <td>{row.SERINAME}</td>
        <td>{row.ZUTNUMBER}</td>
        <td>{row.ASHIGDATE}</td>
        <td>{row.MOVETYPE}</td>
        <td>{row.ULDTULSH}</td>
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
                  Зүтгүүрийн бүртгэл
                </CCol>
                <CCol col="6" sm="4" md="2" className="mb-3 mb-xl-0">
                  <CButton
                    color="primary"
                    onClick={() => setLarge(!large)}
                    className="mr-1"
                  >
                    Зүтгүүр үүсгэх
                  </CButton>
                </CCol>
              </CRow>
            </CCardHeader>
            <CCardBody>
              <table className="table table-hover table-responsive table-outline mb-0  d-sm-table">
                <thead>
                  <tr>
                    <th>Депо</th>
                    <th>Серийн код</th>
                    <th>Серийн нэр</th>
                    <th>ИТ-ны дугаар</th>
                    <th>Ашиглалтанд орсон огноо </th>
                    <th>Бэхлэгдсэн хөдөлгөөн</th>
                    <th>Үлдэгдэл түлш</th>
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
          <CModalTitle>Зүтгүүр оруулах</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CRow>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="cvv">Депо нэр</CLabel>
                <CSelect custom name="ccmonth" id="ccmonth">
                  <option value="1">0-Нарьдчик</option>
                  <option value="2">1-Засварчин</option>
                </CSelect>
              </CFormGroup>
            </CCol>

            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="cvv">Серийн код</CLabel>
                <CSelect custom name="ccmonth" id="ccmonth">
                  <option value="1">0-Нарьдчик</option>
                  <option value="2">1-Засварчин</option>
                </CSelect>
              </CFormGroup>
            </CCol>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="cvv">Ит-ны дугаар</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="cvv">Ашиглалтанд орсон огноо</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="cvv">Бэхлэгдсэн хөдөлгөөн</CLabel>
                <CInput id="cvv" placeholder="123" required />
              </CFormGroup>
            </CCol>
            <CCol xs="4">
              <CFormGroup>
                <CLabel htmlFor="cvv">Үлдэгдэл түлш</CLabel>
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
