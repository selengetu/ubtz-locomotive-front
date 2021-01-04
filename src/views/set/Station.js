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
           Өртөө бүртгэл
            </CCol>
            <CCol  col="6" sm="4" md="2" className="mb-3 mb-xl-0">
            <CButton color="primary" onClick={() => setLarge(!large)} className="mr-1">
            Өртөө үүсгэх
            </CButton>
            </CCol>
          </CRow>
            
            </CCardHeader>
            <CCardBody>
            

              <table className="table table-hover table-responsive table-outline mb-0  d-sm-table">
                <thead>
                  <tr>
                    <th>Зам</th>
                    <th>Код</th>
                    <th>Өртөөний нэр</th>
                    <th>Товч нэр</th>
                    <th>Гол замын км</th>
                    <th>Төрөл</th>
                    <th>Эцгийн код</th>
                    <th>Өөрийн код</th>
                    <th>Өөрийн км</th>
                    <th>Халуун зогсолт</th>
                    <th>Ачааны норм</th>
                    <th>Суудлын норм</th>
                    <th>Ачааны ход</th>
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
                <CModalTitle>Өртөө оруулах</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CRow>
              <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Зам</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="1">0-Нарьдчик</option>
                      <option value="2">1-Засварчин</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
               
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Өртөөний нэр</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="1">0-Нарьдчик</option>
                      <option value="2">1-Засварчин</option>
                     
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Товч нэр</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Гол замын км</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Төрөл</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Эцгийн код</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Өөрийн код</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Өөрийн км</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Халуун зогсолт</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Ачааны норм</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Суудлын норм</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Ачааны км</CLabel>
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
