import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>404: Not Found</h1>
      <p>ไม่พบหน้าที่คุณต้องการ</p>
    </div>
  </Layout>
)

export default NotFoundPage
