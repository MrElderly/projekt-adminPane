import React from 'react'
import {GridComponent, ColumnsDirective, ColumnDirective, Page,
Inject, Resize, Sort, ContextMenu, Filter,
 ExcelExport, PdfExport, Edit} from '@syncfusion/ej2-react-grids';

 import {ordersData, contextMenuItems, ordersGrid} from '../data/dummy'
 import {Header} from '../components'

const Orders = () => {
  return (
    <div className="m-2 md:m-10 p-2 md:p-10
     bg-white rounded-3xl">
      <Header category="Page" title="Order" />
      <GridComponent id='gridcomp' dataSource={ordersData} allowPaging allowSorting>
        <ColumnsDirective>
        {ordersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item} />
        ))}
        </ColumnsDirective>
        <Inject services={[Page, Resize, Sort, ContextMenu,
           Filter, ExcelExport, PdfExport, Edit]} />
      </GridComponent>
    </div>
  )
}

export default Orders