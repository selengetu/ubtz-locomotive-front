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
<Tabs>
    <TabList>
      <Tab>
      Замнал
      </Tab>
      <Tab>Зүтгүүр</Tab>
      <Tab>Техник аялал</Tab>
      <Tab>Зэхэлт</Tab>
      <Tab>Хос зүтгүүр</Tab>
      <Tab>Явсан өртөө</Tab>
      <Tab>ГТ-ийн бүрэлдэхүүн</Tab>
      <Tab>Бэлтгэлээр явсан</Tab>
    </TabList>

    <TabPanel>
      <h2>Замнал</h2>
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
    </TabPanel>
    <TabPanel>
      <h2>Зүтгүүр</h2>
      <CCard>
            <CCardHeader>
           
            
            </CCardHeader>
            <CCardBody>
            

              <table className="table table-hover table-responsive table-outline mb-0  d-sm-table">
                <thead>
                  <tr>
                    <th>Маршрут</th>
                    <th>Сери</th>
                    <th>Серийн нэр</th>
                    <th>ИТ-ний дугаар</th>
                    <th>Секц</th>
                    <th>Зүтгүүр авсан цаг</th>
                    <th>Депогоос гарсан цаг</th>
                    <th>Депод орсон цаг</th>
                    <th>Зүтгүүр өгсөн цаг</th>
                    <th>Нөхөлт</th>
                    <th>Депо код</th>
                    <th>Маршрут</th>
                    <th>Авсан түлш А</th>
                    <th>Авсан түлш Б</th>
                    <th>Өгсөн түлш А</th>
                    <th>Өгсөн түлш Б</th>
                    <th>Депо</th>
                    <th>Маршрут</th>
                    <th>Анхаарамж</th>
               
                  </tr>
                </thead>
                <tbody>
               
                </tbody>
              </table>

            </CCardBody>
          </CCard>
    </TabPanel>
    <TabPanel>
      <h2>Техник аялал</h2>
      <CCard>
            <CCardHeader>
           
            
            </CCardHeader>
            <CCardBody>
            

              <table className="table table-hover table-responsive table-outline mb-0  d-sm-table">
                <thead>
                  <tr>
                    <th>Маршрут</th>
                    <th>То-1</th>
                    <th>Цикл цэвэрлэгээ</th>
                    <th>Лац, ломбо</th>
                    <th>Рессивер тос</th>
                    <th>Сэлгээ</th>
                    <th>Маршрут зөрчил</th>
                    <th>Түлш тооцох</th>
                    <th>Шагналын хувь</th>
                   
               
                  </tr>
                </thead>
                <tbody>
               
                </tbody>
              </table>

            </CCardBody>
          </CCard>
    </TabPanel>
    <TabPanel>
      <h2>Зэхэлт</h2>
      <CCard>
            <CCardHeader>
           
            
            </CCardHeader>
            <CCardBody>
            

              <table className="table table-hover table-responsive table-outline mb-0  d-sm-table">
                <thead>
                  <tr>
                    <th>Маршрут</th>
                    <th>Төрөл</th>
                    <th>Зэхсэн түлш А</th>
                    <th>Зэхсэн түлш Б</th>
                    <th>Складын №</th>
                    <th>Агуулахын нэр</th>
                    <th>Түгээгч</th>
                    <th>Шаардах хуудас</th>
                    <th>Зэхэж эхэлсэн цаг</th>
                    <th>Зэхэж дууссан цаг</th>
                    <th>Дизелийн тос</th>
                    <th>РЧо-ын тос</th>
                    <th>Шахуургын тос</th>
                    <th>Дизелийн тос</th>
                  </tr>
                </thead>
                <tbody>
               
                </tbody>
              </table>

            </CCardBody>
          </CCard>
    </TabPanel>
    <TabPanel>
      <h2>Хос зүтгүүрийн мэдээлэл</h2>
      <CCard>
            <CCardHeader>
           
            
            </CCardHeader>
            <CCardBody>
            

              <table className="table table-hover table-responsive table-outline mb-0  d-sm-table">
                <thead>
                  <tr>
                    <th>Маршрут</th>
                    <th>Хосын дугаар</th>
                    <th>Хос явалт</th>
                    <th>Сери</th>
                    <th>Серийн нэр</th>
                    <th>Ит-ний дугаар</th>
                    <th>Секц</th>
                    <th>Явсан өртөө</th>
                    <th>Явсан өртөөний нэр</th>
                    <th>Очсон өртөө</th>
                    <th>Очсон өртөөний нэр</th>
                    <th>Депо</th>
                    <th>Маршрут</th>

                  </tr>
                </thead>
                <tbody>
               
                </tbody>
              </table>

            </CCardBody>
          </CCard>
    </TabPanel>
    <TabPanel>
      <h2>Явсан, очсон өртөөний мэдээлэл</h2>
      <CCard>
            <CCardHeader>
           
            
            </CCardHeader>
            <CCardBody>
            

              <table className="table table-hover table-responsive table-outline mb-0  d-sm-table">
                <thead>
                  <tr>
                    <th>Маршрут</th>
                    <th>Ажлын төрөл</th>
                    <th>Салгалтын дугаар</th>
                    <th>Салгалт дахь дугаар</th>
                    <th>Өртөөний код</th>
                    <th>Өртөөний нэр</th>
                    <th>Явсан цаг</th>
                    <th>Очсон цаг өртөө</th>
                    <th>ГТ-ын сэлгээ</th>
                    <th>Төлөв</th>
        
                  </tr>
                </thead>
                <tbody>
               
                </tbody>
              </table>

            </CCardBody>
          </CCard>
    </TabPanel>
    <TabPanel>
      <h2>ГТ-ний бүрэлдэхүүний мэдээлэл</h2>
      <CCard>
            <CCardHeader>
           
            
            </CCardHeader>
            <CCardBody>
            

              <table className="table table-hover table-responsive table-outline mb-0  d-sm-table">
                <thead>
                  <tr>
                    <th>Маршрут</th>
                    <th>Ажлын төрөл</th>
                    <th>Салгалтын дугаар</th>
                    <th>Салгалт дахь дугаар</th>
                    <th>Өртөөний код</th>
                    <th>Өртөөний нэр</th>
                    <th>Явсан цаг</th>
                    <th>Очсон цаг өртөө</th>
                    <th>ГТ-ын сэлгээ</th>
                    <th>Төлөв</th>
        
                  </tr>
                </thead>
                <tbody>
               
                </tbody>
              </table>

            </CCardBody>
          </CCard>
    </TabPanel>
  </Tabs>
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
