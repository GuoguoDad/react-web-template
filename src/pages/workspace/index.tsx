import React, { PropsWithChildren } from 'react'
import { Layout } from 'antd'
const { Content } = Layout

import LeftMenu from './components/menu'
import Header from './components/header'
import styles from './index.module.less'

const WorkSpace = (props: WorkSpaceProps) => {
  return (
    <Layout className={styles.container}>
      <LeftMenu />
      <Layout>
        <Header />
        <Content className={styles.content}>
          {props.children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default WorkSpace

type WorkSpaceProps = PropsWithChildren<{}>
