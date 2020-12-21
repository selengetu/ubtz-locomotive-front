import React, { lazy, useState } from 'react'
import {
    Tab, 
    Tabs,
TabList,
  TabPanel,
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

<CCol xs="6">
  <CCard>
    <CCardHeader>
      Navs
      <small> tabs with dropdowns</small>
    </CCardHeader>
    <CCardBody>
      <CNav variant="tabs">
        <CNavItem>
          <CNavLink active>Link</CNavLink>
        </CNavItem>
        <CDropdown inNav>
          <CDropdownToggle caret>
            Dropdown
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here</CDropdownItem>
            <CDropdownItem divider />
            <CDropdownItem>Separated link</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <CNavItem>
          <CNavLink>Link</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink disabled>Disabled</CNavLink>
        </CNavItem>
      </CNav>
    </CCardBody>
  </CCard>
</CCol>

<CCol xs="6">
  <CCard>
    <CCardHeader>
      Navs
      <small> pills with dropdowns</small>
    </CCardHeader>
    <CCardBody>
      <CNav variant="pills">
        <CNavItem>
          <CNavLink active>Link</CNavLink>
        </CNavItem>
        <CDropdown inNav>
          <CDropdownToggle caret>
            Dropdown
          </CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem>Action</CDropdownItem>
            <CDropdownItem>Another action</CDropdownItem>
            <CDropdownItem>Something else here</CDropdownItem>
            <CDropdownItem divider />
            <CDropdownItem>Separated link</CDropdownItem>
          </CDropdownMenu>
        </CDropdown>
        <CNavItem>
          <CNavLink>Link</CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink disabled>Disabled</CNavLink>
        </CNavItem>
      </CNav>
    </CCardBody>
  </CCard>
</CCol>
</CRow>
      

      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
            <CRow className="align-items-center">
            <CCol  col="6" sm="4" md="10" className="mb-3 mb-xl-0">
            2020 оны 12 сарын замналын хуудасны бааз
            </CCol>
            <CCol  col="6" sm="4" md="2" className="mb-3 mb-xl-0">
            <CButton color="primary" onClick={() => setLarge(!large)} className="mr-1">
              Замнал үүсгэх
            </CButton>
            </CCol>
          </CRow>
            
            </CCardHeader>
            <CCardBody>
            

              <table className="table table-hover table-responsive table-outline mb-0  d-sm-table">
                <thead>
                  <tr>
                    <th>Маршрут</th>
                    <th>Бригад</th>
                    <th>Нээсэн огноо</th>
                    <th>Машинч</th>
                    <th>Машинч нэр</th>
                    <th>Туслах</th>
                    <th>Туслахын нэр</th>
                    <th>Дубляр</th>
                    <th>Дублярын нэр</th>
                    <th>Ажилд ирсэн цаг</th>
                    <th>Ажил дууссан цаг</th>
                    <th>Бүртгэсэн хүн</th>
                    <th>Шивэлт хийсэн цаг</th>
                    <th>Зассан хүн</th>
                    <th>Зассан цаг</th>
                    <th>Бодсон эсэх</th>
                    <th>Илүү цагийн тушаал</th>
                    <th>Цалин бодох</th>
                    <th>Цалин төрөл</th>
                    <th>Татсан эсэх</th>
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
                <CModalTitle>Замналын хуудас</CModalTitle>
              </CModalHeader>
              <CModalBody>
              <CRow>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="ccmonth">Маршрут</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="ccyear">Бригад</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Зүтгүүр</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Дугаар</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="2">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Шинж</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Огноо</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Машинч</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Туслах</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Дубляр</CLabel>
                    <CSelect custom name="ccmonth" id="ccmonth">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </CSelect>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Ажилд ирсэн цаг</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Зүтгүүр авсан цаг</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Депогоос гарсан цаг</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Депод орсон цаг</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Зүтгүүр өгсөн цаг</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Ажил дууссан цаг</CLabel>
                    <CInput type="date" id="date-input" name="date-input" placeholder="date" />
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Нөхөлт</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
              </CRow>
              <CRow>
             
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Авсан А</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Авсан Б</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Өгсөн A</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Өгсөн Б</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Өмнөх маршрут</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Дараах маршрут</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Анхаарамж</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">ХЗ</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Цалин бодох</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Тушаал №</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Тушаал өгсөн хүн</CLabel>
                    <CInput id="cvv" placeholder="123" required/>
                  </CFormGroup>
                </CCol>
                <CCol xs="3">
                  <CFormGroup>
                    <CLabel htmlFor="cvv">Халуун нөөцийн тушаал</CLabel>
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
