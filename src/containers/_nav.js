import React from 'react'
import CIcon from '@coreui/icons-react'

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Нүүр хуудас',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>
   
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Үндсэн ажиллагаа']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Үндсэн бааз',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Депо',
        to: '/base/forms',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Хэрэглэгч',
        to: '/base/navs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Зүтгүүр',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Өртөө',
        to: '/buttons/button-dropdowns',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Ажлын төрөл',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Зүтгүүрийн сери',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Зүтгүүрийн салгалт',
        to: '/buttons/button-dropdowns',
      }
    ],
  },
  
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Ажлын бааз',
    route: '/buttons',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Үйлчлэх мөр',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Ачааны норм',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Суудлын норм',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Сэлгээний норм',
        to: '/buttons/button-dropdowns',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Ачааны ход',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Суудлын ход',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Машинч',
        to: '/buttons/button-dropdowns',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Оруулалт',
    route: '/buttons',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Маршрут',
        to: '/marshrut',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Хоногийн шаардах',
        to: '/shaardah',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Засварын бүртгэл',
        to: '/notifications/modals',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Шалтгаантай цаг',
        to: '/reason',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Хийснээрх сэлгээ',
        to: '/selgee',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Шагналт цалин',
        to: '/buttons/button-groups',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Бодолт',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Маршрутын бодолт',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Машинчийн бодолт',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Зэхэлтийн бодолт',
        to: '/base/carousels',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Засварын бодол',
        to: '/base/collapses',
      },
    
    ],
  },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Тайлан']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Үндсэн бааз',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Депо',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Хэрэглэгч',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Зүтгүүр',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Өртөө',
        to: '/buttons/button-dropdowns',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Ажлын төрөл',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Зүтгүүрийн сери',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Зүтгүүрийн салгалт',
        to: '/buttons/button-dropdowns',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Ажлын бааз',
    route: '/buttons',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Үйлчлэх мөр',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Ачааны норм',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Суудлын норм',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Сэлгээний норм',
        to: '/buttons/button-dropdowns',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Ачааны ход',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Суудлын ход',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Машинч',
        to: '/buttons/button-dropdowns',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Оруулалтын бааз',
    route: '/buttons',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Маршрут',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Хоногийн шаардах',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Засварын бүртгэл',
        to: '/buttons/button-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Шалтгаантай цаг',
        to: '/buttons/button-dropdowns',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Хийснээрх сэлгээ',
        to: '/buttons/brand-buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Шагналт цалин',
        to: '/buttons/button-groups',
      }
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Бодолтын бааз',
    route: '/base',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Маршрутын бодолт',
        to: '/base/breadcrumbs',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Машинчийн бодолт',
        to: '/base/cards',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Зэхэлтийн бодолт',
        to: '/base/carousels',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Засварын бодол',
        to: '/base/collapses',
      },
    
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Түлшний техникч',
    route: '/buttons',
    icon: 'cil-cursor',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Ачааны түлшний зарцуулалт',
        to: '/buttons/buttons',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Ачааны түлшний зарцуулалт',
        to: '/buttons/brand-buttons',
      }
     
    ],
  },
  
 
  
  
]

