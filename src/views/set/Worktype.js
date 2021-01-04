import React, { lazy, useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
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
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CSwitc,
  CNav,
  CNavItem,
  CNavLink
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import 'react-tabs/style/react-tabs.css'

import MainChartExample from '../charts/MainChartExample.js'

const WidgetsDropdown = lazy(() => import('../widgets/WidgetsDropdown.js'))
const WidgetsBrand = lazy(() => import('../widgets/WidgetsBrand.js'))

const Dashboard = () => {
    const [modal, setModal] = useState(true)
  const [large, setLarge] = useState(false)
  const [small, setSmall] = useState(false)
  const [primary, setPrimary] = useState(false)
  const [success, setSuccess] = useState(false)
  const [warning, setWarning] = useState(false)
  const [danger, setDanger] = useState(false)
  const [info, setInfo] = useState(false)
  return (
    <>
      <CRow>


<CCol xs="12">

      <CCard>
            <CCardHeader>
            <CRow className="align-items-center">
            <CCol  col="6" sm="4" md="10" className="mb-3 mb-xl-0">
           Ажлын төрөл бүртгэл
            </CCol>
            <CCol  col="6" sm="4" md="2" className="mb-3 mb-xl-0">
            <CButton color="primary" onClick={() => setLarge(!large)} className="mr-1">
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
                    <th>Оролтын код</th>
                    <th>Суудлын вагон</th>
                    <th>Ачааны вагон</th>
                    <th>Нормтой эсэх</th>
                  </tr>
                </thead>
                <tbody>
               
                </tbody>
              </table>

            </CCardBody>
          </CCard>
  
</CCol>
</CRow>
      
      <CModal 
              show={large} 
              onClose={() => setLarge(!large)}
              size="lg"
            >
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
                    <CInput id="cvv" placeholder="123" required/>
                 
                  </CFormGroup>
                </CCol>
                <CCol xs="6">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Нэр</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
              
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Зардал</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Төрөл</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
              
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Түлш</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Машинч</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Туслах</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
              
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Оролт</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Суудал</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Ачаа</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Норм</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
              </CRow>
              </CModalBody>
              <CModalFooter>
                <CButton color="primary" onClick={() => setLarge(!large)}>Хадгалах</CButton>{' '}
                <CButton color="secondary" onClick={() => setLarge(!large)}>Хаах</CButton>
              </CModalFooter>
            </CModal>

      
    </>
  )
}

export default Dashboard
